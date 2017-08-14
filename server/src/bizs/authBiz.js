const axios = require('axios').default;
const User = require('./../models/User');
const BusError = require('./../models/BusError');

const config = require('../config');
const util = require('./../common/util');

const EXPIRE_TIME_SPAN = 1000 * 60 * 60 * 24 * 7; // 7天的毫秒数

const doSsoLogin = async (req, res, next) => {
  let code = req.body.code;

  if (!code) {
    throw 'Must provide code property.';
  }
  let ssoApp = config.ssoApp;
  // 获取sso user info
  let res2 = await axios.post(ssoApp.authAddress, {
    appKey: ssoApp.appKey,
    appSecret: ssoApp.appSecret,
    code
  });
  let userData = res2.data;
  // 判断用户是否登录过
  let user = await User.findOne({ unionId: userData.UnionId });
  let token = util.buildHash(userData.UnionId, 30);
  if (!user) { // 首次sso登录
    user = new User({
      unionId: userData.UnionId, // 用户ID
      username: userData.UserName, // 用户名
      displayName: userData.DisplayName, // 显示名称
      avatarUrl: userData.AvatarUrl,
      password: '', // 密码
      registerDate: new Date(userData.CreateDate),
      token,
      expireTime: Date.now() + EXPIRE_TIME_SPAN
    });
    await new Promise((resolve, reject) => {
      user.save(err => {
        if (err) { return reject(err); }
        resolve();
      });
    });

  } else { // 非首次登录
    await User.findOneAndUpdate({ unionId: user.unionId }, { $set: { displayName: userData.DisplayName, token: token, expireTime: Date.now() + EXPIRE_TIME_SPAN } });
  }
  return res.send({
    token,
    user: {
      username: user.username,
      displayName: user.displayName
    }
  });
};

module.exports = {
  doSsoLogin,
  doLogin(req, res, next) {
    let data = req.body;
    User.findOne({ username: data.username, password: data.password })
      .then(user => {
        if (!user) {
          return res.send(new BusError('user not found.'));
        }
        let token = util.buildHash(user._id, 30);
        return User.findOneAndUpdate({ _id: user._id }, { $set: { token: token, expireTime: Date.now() + EXPIRE_TIME_SPAN } })
          .then(data => {
            res.send({
              token: token,
              user: {
                username: user.username
              }
            });
          });
      })
      .catch(reason => next(reason));
  },

  doAutoLogin(req, res, next) {
    let token = req.body.token;
    User.findOne({ token: token, expireTime: { $gt: Date.now() } })
      .then(user => {
        if (!user) {
          return res.send(new BusError('auto login failed.'));
        }
        res.send({
          token: token,
          user: {
            username: user.username
          }
        });
      })
      .catch(reason => next(reason));
  },

  validateUser(req, res, next) {
    let token = req.headers['x-token'];
    if (!token) {
      return res.send(new BusError('Headers must include x-token.'));
    }
    User.findByToken(token, (err, user) => {
      if (err) return next(err);
      if (!user) {
        res.status(401);
        return res.end();
      }
      req.reqObj = req.reqObj || {};
      req.reqObj.userId = user.unionId;
      next();
    });
  }
};

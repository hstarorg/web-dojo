let User = require('./../models/User');
let BusError = require('./../models/BusError');

let util = require('./../common/util');

const EXPIRE_TIME_SPAN = 1000 * 60 * 60 * 24 * 7; // 7天的毫秒数

module.exports = {
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

  doRegister(req, res, next) {
    let user = new User({
      username: req.body.username,
      password: req.body.password
    });
    User.findOne({ username: user.username }, (err, findUser) => {
      if (err) return next(err);
      if (findUser) return res.send(new BusError('Username exists.'));
      user.save(err => {
        if (err) return next(err);
        res.status(201);
        res.end();
      });
    });
  },

  validateUser(req, res, next) {
    let token = req.headers['x-token'];
    if (!token) {
      return res.send(new BusError('Headers must include x-token.'));
    }
    console.log('go');
    User.findByToken(token, (err, user) => {
      if (err) return next(err);
      if (!user) {
        res.status(401);
        return res.end();
      }
      req.reqObj = req.reqObj || {};
      req.reqObj.userId = user._id;
      next();
    });
  }
};
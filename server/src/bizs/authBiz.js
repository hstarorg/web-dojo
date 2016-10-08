let User = require('./../models/User');
let BusError = require('./../models/BusError');

const EXPIRE_TIME_SPAN = 1000 * 60 * 60 * 24 * 7; // 7天的毫秒数

module.exports = {
  doLogin(req, res, next) {
    let data = req.body;
    User.findOne({ username: data.username, password: data.password })
      .then(user => {
        if (!user) {
          return res.send(new BusError('user not found.'));
        }
        let token = Math.random().toString(16).replace('.', '');
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
  }
};
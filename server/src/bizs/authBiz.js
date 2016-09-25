let User = require('./../models/User');
let BusError = require('./../models/BusError');

module.exports = {
  doLogin(req, res, next) {
    let data = req.body;
    User.findOne({ username: data.username, password: data.password })
      .then(user => {
        if (!user) {
          res.send(new BusError('user not found.'));
        }
        res.send({
          token: '',
          user: {
            username: user.username
          }
        });
      })
      .catch(reason => next(reason));
  }
};
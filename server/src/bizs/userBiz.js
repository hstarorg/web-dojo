let User = require('./../models/User');

module.exports = {
  userExists(req, res, next) {

  },

  doRegister(req, res, next) {
    User.create({ username: 'admin', password: 'admin' })
      .then(users => {
        res.json(users);
      })
      .catch(reason => next(reason));
  }
};
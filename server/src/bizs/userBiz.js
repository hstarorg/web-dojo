let User = require('./../models/User');
let Code = require('./../models/Code');

module.exports = {
  getMyCodes(req, res, next) {
    let userId = req.reqObj.userId;
    console.log(userId);
    Code.find({ userId: userId }).sort({ lastUpdated: -1 }).exec((err, codes) => {
      if (err) return next(err);
      res.send(codes);
    });
  }
};
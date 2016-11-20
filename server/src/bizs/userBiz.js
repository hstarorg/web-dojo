const User = require('./../models/User');
const Code = require('./../models/Code');

const getMyCodes = (req, res, next) => {
  let userId = req.reqObj.userId;
  console.log(userId);
  Code.find({ userId: userId }).sort({ lastUpdated: -1 }).exec((err, codes) => {
    if (err) return next(err);
    res.send(codes);
  });
};

module.exports = {
  getMyCodes
};
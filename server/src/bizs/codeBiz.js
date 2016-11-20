const Code = require('./../models/Code');
const BusError = require('./../models/BusError');
const util = require('./../common/util');

const createCode = (req, res, next) => {
  let body = req.body;
  let code = new Code({
    userId: req.reqObj.userId, //所有者，
    codeId: util.buildHash(req.reqObj.userId, 12), //项目ID
    versionNo: 1, //项目版本
    codeName: body.codeName, //项目名称
    codeDescription: body.codeDescription || '', //项目描述信息
    codeTags: body.codeTags || [], //标签
    javascript: body.javascript, // JS内容
    html: body.html, // HTML内容
    css: body.css, // CSS内容
    isPrivate: body.isPrivate || false
  });
  code.save((err, code) => {
    if (err) return next(err);
    res.status(201);
    res.send(code);
  });
};

const updateCode = (req, res, next) => {
  let body = req.body;
  let updatedData = {
    $set: {
      javascript: body.javascript,
      html: body.html,
      css: body.css
    }
  };
  Code.update({ codeId: req.params.codeId }, updatedData, (err, code) => {
    if (err) return next(err);
    res.status(202);
    res.send(code);
  });
};

const getCode = (req, res, next) => {
  let codeId = req.params.codeId;
  Code.findOne({ codeId: codeId }, (err, code) => {
    if (err) return next(err);
    if (!code) {
      return res.send(new BusError('Code not exists.'));
    }
    res.send(code);
  });
};

module.exports = {
  createCode,
  updateCode,
  getCode
};
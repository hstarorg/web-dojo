import { Code } from '../models/Code';
import { BizError } from '../models/BizError';
import { queryPaginationData, util } from '../common';

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
    isPrivate: body.isPrivate || false,
  });
  code.save((err, code) => {
    if (err) return next(err);
    res.status(201);
    res.send(code);
  });
};

const updateCode = async (req, res, next) => {
  let userId = req.reqObj.userId;
  let codeId = req.params.codeId;
  let data = req.body;
  let updatedData = {
    $set: {
      javascript: data.javascript,
      html: data.html,
      css: data.css,
    },
  };
  let c = await Code.count({ codeId, userId });
  if (c === 0) {
    return res.sendStatus(403);
  }
  Code.update({ codeId, userId }, updatedData, (err, code) => {
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
      return res.send(new BizError('Code not exists.'));
    }
    res.send(code);
  });
};

const getMyCodes = (req, res, next) => {
  const userId = req.reqObj.userId;
  const pageIndex = +req.query.pageIndex || 1;
  const pageSize = +req.query.pageSize || 20;
  const search = req.query.search;
  const filter: Record<string, any> = { userId };
  if (search) {
    let searchReg = new RegExp(search, 'ig');
    filter.$or = [{ codeName: searchReg }, { codeDescription: searchReg }, { codeTags: search }];
  }
  queryPaginationData(Code, filter, { pageIndex, pageSize }, { lastUpdated: -1 })
    .then((data) => {
      res.send(data);
    })
    .catch((reason) => next(reason));
};

export const codeBiz = {
  createCode,
  updateCode,
  getCode,
  getMyCodes,
};

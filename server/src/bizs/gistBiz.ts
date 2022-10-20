import { Gist } from '../models/Gist';
import { util, queryPaginationData } from '../common';
import { BizError } from '../models/BizError';

const createGist = (req, res, next) => {
  let body = req.body;
  let gist = new Gist({
    userId: req.reqObj.userId, //所有者，
    gistId: util.buildHash(req.reqObj.userId, 12), //项目ID
    gistName: body.gistName,
    gistDescription: body.gistDescription,
    codeFiles: body.codeFiles,
    isPrivate: body.isPrivate || false,
  });
  gist.save((err, gist) => {
    if (err) return next(err);
    res.status(201);
    res.send(gist);
  });
};

const getGist = (req, res, next) => {
  let gistId = req.params.gistId;
  Gist.findOne({ gistId }, (err, gist) => {
    if (err) return next(err);
    if (!gist) {
      return res.send(new BizError('gist not exists.'));
    }
    res.send(gist);
  });
};

const getGists = (req, res, next) => {
  let userId = req.reqObj.userId;
  let pageIndex = +req.query.pageIndex || 1;
  let pageSize = +req.query.pageSize || 20;
  let search = req.query.search;
  let filter: Record<string, any> = { userId };
  if (search) {
    let searchReg = new RegExp(search, 'ig');
    filter.$or = [
      // { $text: { $search: search } }, 文本检索，会按照空格分词
      { gistName: searchReg },
      { gistDescription: searchReg },
    ];
  }
  queryPaginationData(Gist, filter, { pageIndex, pageSize })
    .then((data) => {
      res.send(data);
    })
    .catch((reason) => next(reason));
};

export const gistBiz = {
  createGist,
  getGists,
  getGist,
};

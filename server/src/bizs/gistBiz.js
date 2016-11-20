const Gist = require('./../models/Gist');
const BusError = require('./../models/BusError');
const util = require('./../common/util');
const db = require('./../common/db');

const createGist = (req, res, next) => {
  let body = req.body;
  let gist = new Gist({
    userId: req.reqObj.userId, //所有者，
    gistId: util.buildHash(req.reqObj.userId, 12), //项目ID
    gistName: body.gistName,
    gistDescription: body.gistDescription,
    codeFiles: body.codeFiles,
    isPrivate: body.isPrivate || false
  });
  gist.save((err, gist) => {
    if (err) return next(err);
    res.status(201);
    res.send(gist);
  })
};

const getGist = (req, res, next) => {
  let gistId = req.params.gistId;
  Gist.findOne({ gistId }, (err, gist) => {
    if (err) return next(err);
    if (!gist) {
      return res.send(new BusError('gist not exists.'));
    }
    res.send(gist);
  });
};

const getGists = (req, res, next) => {
  let userId = req.reqObj.userId;
  db.queryPaginationData(Gist, { userId }, { pageIndex: 1, pageSize: 20 })
    .then(data => {
      res.send(data);
    }).catch(reason => next(reason));
};

module.exports = {
  createGist,
  getGists,
  getGist
};
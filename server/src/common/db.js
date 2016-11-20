const mongoose = require('mongoose');
const config = require('./../config');

mongoose.connect(config.mongoAddress, {
  db: { native_parser: true },
  server: { poolSize: 5 }
});

// Debug mode
mongoose.set('debug', true);

mongoose.Promise = global.Promise;

mongoose.queryPaginationData = (Model, filter = {}, {pageIndex = 1, pageSize = 20}) => {
  let skip = (pageIndex - 1) * pageSize;
  let dataPromise = Model.find(filter).skip(skip).limit(pageSize).exec();
  let countPromise = Model.count(filter);
  return Promise.all([dataPromise, countPromise])
    .then(results => {
      return {
        totalCount: results[1],
        data: results[0]
      };
    });
};

module.exports = mongoose;
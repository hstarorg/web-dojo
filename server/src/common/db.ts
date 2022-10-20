import * as mongoose from 'mongoose';
import { config } from '../config';

mongoose.connect(config.mongoAddress, {
  maxPoolSize: 5,
  dbName: 'dojo',
});

// Debug mode
mongoose.set('debug', true);

Object.assign(mongoose, { Promise: global.Promise });

/**
 * 分页查询数据
 * @param Model
 * @param filter
 * @param param2
 * @param sortOpt
 * @returns
 */
function queryPaginationData(
  Model: mongoose.Model<any>,
  filter: Record<string, any> = {},
  pagingOpt: { pageIndex: number; pageSize: number } = { pageIndex: 1, pageSize: 20 },
  sortOpt?: Record<string, mongoose.SortOrder | { $meta: 'textScore' }>
) {
  let skip = (pagingOpt.pageIndex - 1) * pagingOpt.pageSize;
  let dataQuery = Model.find(filter);
  if (sortOpt) {
    dataQuery = dataQuery.sort(sortOpt);
  }
  let dataPromise = dataQuery.skip(skip).limit(pagingOpt.pageSize).exec();
  let countPromise = Model.count(filter);
  return Promise.all([dataPromise, countPromise]).then((results) => {
    return {
      totalCount: results[1],
      data: results[0],
    };
  });
}

export { mongoose, queryPaginationData };

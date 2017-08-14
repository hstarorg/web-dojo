const db = require('./../common/db');
const Schema = db.Schema;

const codeSchema = new Schema({
  userId: [Number, String], //所有者，
  codeId: String, //项目ID
  versionNo: Number, //项目版本
  codeName: String, //项目名称
  codeDescription: String, //项目描述信息
  codeTags: Array, //标签
  javascript: String, // JS内容
  html: String, // HTML内容
  css: String, // CSS内容
  created: { type: Date, default: Date.now }, // 注册时间
  lastUpdated: { type: Date, default: Date.now }, // 最后更新时间
  isPrivate: Boolean, //是否私有
});

codeSchema.index({ codeName: 'text', codeDescription: 'text' });

const Code = db.model('Code', codeSchema);

module.exports = Code;

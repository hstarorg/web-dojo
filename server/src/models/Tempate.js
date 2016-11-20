const db = require('./../common/db');
const Schema = db.Schema;

const templateSchema = new Schema({
  templateName: String, //模板名称
  javascript: String, // JS代码
  html: String, // HTML代码
  css: String // CSS代码
});

const Template = db.model('Template', templateSchema);

module.exports = Template;
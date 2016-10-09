let db = require('./../common/db');

let Schema = db.Schema;

let templateSchema = new Schema({
  templateName: String, //模板名称
  javascript: String, // JS代码
  html: String, // HTML代码
  css: String // CSS代码
});

let Template = db.model('Template', templateSchema);

module.exports = Template;
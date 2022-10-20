import { mongoose as db } from '../common';
const Schema = db.Schema;

const templateSchema = new Schema({
  templateName: String, //模板名称
  javascript: String, // JS代码
  html: String, // HTML代码
  css: String, // CSS代码
});

export const Template = db.model('Template', templateSchema);

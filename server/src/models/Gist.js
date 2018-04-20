const db = require('./../common/db');
const Schema = db.Schema;

const gistSchema = new Schema({
  userId: [Number, String], //所有者，
  gistId: String, //片段ID
  gistName: String, //片段名称
  gistDescription: String, //片段描述信息
  codeFiles: [
    {
      editorTheme: { type: String },
      mode: { type: String },
      code: { type: String },
      description: { type: String, default: '' }
    }
  ],
  created: { type: Date, default: Date.now }, // 注册时间
  lastUpdated: { type: Date, default: Date.now }, // 最后更新时间
  isPrivate: Boolean //是否私有
});

gistSchema.index({ gistName: 'text', gistDescription: 'text' });

const Gist = db.model('Gist', gistSchema);

module.exports = Gist;

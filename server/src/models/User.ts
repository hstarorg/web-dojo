import { mongoose as db } from '../common';
const Schema = db.Schema;

const userSchema = new Schema(
  {
    unionId: Number, // 用户ID
    username: String, // 用户名
    displayName: String, // 显示名称
    password: String, // 密码
    avatarUrl: String, // 头像
    registerDate: { type: Date, default: Date.now }, // 注册时间
    token: { type: String, default: '' }, // 授权token
    expireTime: { type: Date, default: Date.now }, // token有效期
  },
  {
    statics: {
      findByToken: function (token, callback) {
        return this.findOne({ token: token, expireTime: { $gt: Date.now() } }, callback);
      },
    },
    methods: {},
  }
);

// 设定索引
userSchema.index({ unionId: 1 });

export const User = db.model('User', userSchema);

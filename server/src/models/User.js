const db = require('./../common/db');
const Schema = db.Schema;

const userSchema = new Schema({
  unionId: Number, // 用户ID
  username: String, // 用户名
  password: String, // 密码
  avatarUrl: String, // 头像
  registerDate: { type: Date, default: Date.now }, // 注册时间
  token: { type: String, default: '' }, // 授权token
  expireTime: { type: Date, default: Date.now } // token有效期
});

// 扩展原型方法: (new User()).xxx();
userSchema.methods.xxx = () => {

};

// 扩展静态方法： User.xxx();
userSchema.statics.findByToken = function (token, callback) {
  return this.findOne({ token: token, expireTime: { $gt: Date.now() } }, callback);
};

// 扩展query方法: User.find().xxx();
userSchema.query.xxx = () => {

};

// 设定索引
userSchema.index({ xx: 1, xxx: -1 });

// 配置虚拟属性：(new User()).name.full;
userSchema.virtual('name.full').get(function () {
  return this.name.first + ' ' + this.name.last;
});

const User = db.model('User', userSchema);

module.exports = User;

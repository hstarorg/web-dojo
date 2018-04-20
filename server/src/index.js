const path = require('path');
const restExpress = require('rest-express');

const config = require('./config');

const options = {
  port: config.port, //必须提供，服务端口
  enableResponseTime: true, //是否启用响应时间记录（会在header中，设置X-Response-Time的值，单位毫秒）
  responseTimeOptions: {
    //responseTime的参数配置，请参考：https://github.com/expressjs/response-time
    digits: 4, //default 3
    header: 'use-time',
    suffix: false
  },
  enableLog: true, //是否启用日志
  logFormat: 'combined', //设置日志格式
  logOptions: {
    //日志插件相关参数，请参考：https://github.com/expressjs/morgan
  },
  enableCors: true, //是否启用Cors支持
  corsOptions: {
    //Cors参数，请参考：https://github.com/expressjs/cors
  },
  urlParserOptions: {}, //转换url参数配置，请参考：https://github.com/expressjs/body-parser
  jsonParserOptions: {}, //转换json参数配置，请参考：https://github.com/expressjs/body-parser
  enableGzip: true, //是否启用Gzip支持
  gzipOptions: {}, //gzip配置，请参考：https://github.com/expressjs/compression
  enableHttps: false, //是否启用Https
  onRoutesLoading: app => {
    //加载路由之前要执行的操作，参数app = express();
    console.log('before load routes');
  },
  onRoutesLoaded: app => {
    //加载路由之后要执行的操作，参数app = express();
    console.log('after load routes');
  },
  routesPath: path.join(__dirname, 'routes'), //路由目录，所有要加载的路由都放置在此处。
  apiPrefix: config.apiPrefix //全局Api前缀， 如： /api/v1
};

restExpress.startServer(options).then(
  server => {
    let address = server.address();
    console.log('Server started', address);
  },
  err => {
    console.error(err);
  }
);

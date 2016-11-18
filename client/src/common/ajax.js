import { layer } from './';
import store from './../store';

const request = (method, url, data, config = {}) => {
  let options = Object.assign({}, config, {
    url,
    method,
    data,
    baseURL: AppConf.apiHost
  });
  options.headers = options.headers || {};
  options.headers['x-sw-admin-token'] = store.state.token;
  return new Promise((resolve, reject) => {
    axios.request(options)
      .then(res => {
        let data = res.data;
        if (data.hasError) {
          if (!res.config.notNotifyError) {
            layer.error(data.message);
            return reject(data);
          }
        }
        resolve(data);
      }).catch(res => {
        if (!res.config.notNotifyError) {
          layer.error(res.message);
        }
        reject(res);
      });
  });
};

export const ajax = {
  /**
   * GET data
   * @param url api地址
   * @param options 配置项
   */
  get(url, config) {
    return request('get', url, null, config);
  },
  /**
   * DELETE data
   * @param url api地址
   * @param options 配置项
   */
  delete(url, config) {
    return request('delete', url, null, config);
  },
  /**
   * HEAD
   * @param url api地址
   * @param options 配置项
   */
  head(url, config) {
    return request('head', url, null, config);
  },
  /**
   * POST data
   * @param url api地址
   * @param data 要提交的数据
   * @param options 配置项
   */
  post(url, data, config) {
    return request('post', url, data, config);
  },
  /**
   * PUT data
   * @param url api地址
   * @param data 要提交的数据
   * @param options 配置项
   */
  put(url, data, config) {
    return request('put', url, data, config);
  },
  /**
   * Patch data
   * @param url api地址
   * @param data 要提交的数据
   * @param options 配置项
   */
  patch(url, data, config) {
    return request('path', url, data, config);
  },
  /**
   * Set Common Header
   * @param key Header key
   * @param value Header value
   */
  setCommonHeader(key, value) {
    window.axios.defaults.headers.common[key] = value;
  }
};
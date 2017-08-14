export const util = {
  copyProperties(source, target) {
    Object.keys(target)
      .forEach(key => {
        target[key] = source[key];
      });
  },

  clearObject(obj) {
    Object.keys(obj).forEach(k => {
      obj[k] = this._default(obj[k]);
    });
  },

  getQuery(key) {
    let str = location.search.slice(1); // 去掉第一个问好，如果有
    let queryArr = str.split('&').filter(x => !!x);
    let queryObj = {};
    queryArr.forEach(item => {
      let kvArr = item.split('=');
      queryObj[kvArr[0]] = (kvArr[1] || null); // 设置为null，和undefined区分开
    });
    return key ? queryObj[key] : queryObj;
  },

  _default(v) {
    if (!v) {
      return v;
    }
    if (Array.isArray(v)) {
      return [];
    }
    let vType = typeof v;
    switch (vType) {
      case 'string':
        return '';
      case 'object':
        return {};
    }
  }
};

import Vue from 'vue';
import VueI18n from 'vue-i18n';

const locals = {};

class I18nHelper {
  constructor() {
    Vue.use(VueI18n);
    this.i18n = new VueI18n({
      locale: 'en',
      fallbackLocale: 'en'
    });
  }

  getInstance() {
    return this.i18n;
  }

  setLang(lang) {
    if (['en', 'zh-cn'].indexOf(lang) === -1) {
      lang = en;
    }
    this.i18n.locale = lang;
  }

  addLocale(lang, langObj) {
    _.merge(locals, { [lang]: langObj });
  }

  loadLocal() {
    Object.keys(locals).forEach(lang => {
      this.i18n.setLocaleMessage(lang, locals[lang]);
    });
  }

  getValue(keypath, lang, args) {
    return this.i18n.t(keypath, lang, args);
  }
}

export const i18nHelper = new I18nHelper();

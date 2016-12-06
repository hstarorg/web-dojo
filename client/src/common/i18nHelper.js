import Vue from 'vue';
import VueI18n from 'vue-i18n';

const locals = {};

export const I18nHelper = {
  init() {
    Vue.use(VueI18n);
    Vue.config.fallbackLang = 'en';
  },

  setLang(lang) {
    if (['en', 'zh-cn'].indexOf(lang) === -1) {
      lang = en;
    }
    Vue.config.lang = lang;
  },

  addLocale(lang, langObj) {
    _.merge(locals, { [lang]: langObj });
  },

  loadLocal() {
    Object.keys(locals).forEach(lang => {
      Vue.locale(lang, locals[lang]);
    });
  },

  getValue(keypath, lang, args) {
    return Vue.t(keypath, lang, args);
  }
};
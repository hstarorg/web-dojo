import Vue from 'vue';
import VueI18n from 'vue-i18n';

const locals = {};

export const I18nHelper = {
  init() {
    Vue.use(VueI18n);
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
    console.log(locals);
    Object.keys(locals).forEach(lang => {
      Vue.locale(lang, locals[lang]);
    });
  }
};
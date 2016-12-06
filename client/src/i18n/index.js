import { I18nHelper } from './../common';

import { langEn } from './lang_en';
import { langCn } from './lang_zh-cn';

// Init Vue-i18n
I18nHelper.init();
I18nHelper.setLang('zh-cn');

I18nHelper.addLocale('en', langEn);

I18nHelper.addLocale('zh-cn', langCn);

I18nHelper.loadLocal();
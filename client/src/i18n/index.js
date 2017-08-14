import { i18nHelper } from './../common';

import { langEn } from './lang_en';
import { langCn } from './lang_zh-cn';

i18nHelper.setLang('zh-cn');

i18nHelper.addLocale('en', langEn);

i18nHelper.addLocale('zh-cn', langCn);

i18nHelper.loadLocal();

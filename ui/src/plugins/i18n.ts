import Vue from 'vue';
import VueI18n, { TranslateResult } from 'vue-i18n';
import text from '@/locales/text';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: ['en'],
  messages: text,
});

const translate = (key: string): TranslateResult => {
  if (!key) {
    return '';
  }
  return i18n.t(key);
};

export { i18n, translate };

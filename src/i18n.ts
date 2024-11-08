// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en.json';
import es from './translations/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: window.navigator.languages[0].includes('en') ? 'en' : 'es',
    fallbackLng: 'en',
  });

export default i18n;
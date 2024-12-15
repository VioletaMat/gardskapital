// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation';
import translationSV from './locales/sv/translation';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    sv: { translation: translationSV },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

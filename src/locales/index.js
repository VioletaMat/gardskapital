// locales/index.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en/translation.json';
import translationSV from './sv/translation.json';

// The default language
const resources = {
  en: {
    translation: translationEN,
  },
  sv: {
    translation: translationSV,
  },
};

// Configuration for i18next
i18n
  .use(initReactI18next) // Connects react-i18next to i18next
  .init({
    resources,
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;

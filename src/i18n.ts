import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

const savedLng = localStorage.getItem('i18nextLng') || 'es'; // si no hay nada, español

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: translationES },
      en: { translation: translationEN },
      fr: { translation: translationFR }
    },
    lng: savedLng,        // ← aquí usamos el idioma guardado
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
  });
export default i18n;
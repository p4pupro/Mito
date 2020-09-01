import i18nPro from "i18next";
import en from '../assets/lang/en.json';
import es from '../assets/lang/es.json';
import fr from '../assets/lang/fr.json';
import { initReactI18next } from "react-i18next";
import * as Localization from 'expo-localization';

i18nPro
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en 
      },
      es: {
        translation: es 
      },
      fr: {
        translation: fr
      },

    },
    lng: Localization.locale,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
  export default i18nPro;
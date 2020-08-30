import * as React from 'react';
import en from '../assets/lang/en.json';
import es from '../assets/lang/es.json';
import fr from '../assets/lang/fr.json';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

// Set the key-value pairs for the different languages you want to support.
i18n.translations = {en, es, fr};
// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;
// When a value is missing from a language it'll fallback to another language with the key present.
i18n.fallbacks = true;

// Funtions that translate the string
export const translate = (param: string): string => {
  return i18n.t(param);
};
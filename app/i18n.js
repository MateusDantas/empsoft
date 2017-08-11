/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import ptLocaleData from 'react-intl/locale-data/pt';

import { DEFAULT_LOCALE } from '../app/containers/App/constants';
import enTranslationMessages from './translations/en.json';
import ptTranslationMessages from './translations/pt.json';

addLocaleData(enLocaleData);
addLocaleData(ptLocaleData);

export const appLocales = [
  'en',
  'pt',
];

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages) : {};
  const formattedMessages = {};
  const messageKeys = Object.keys(messages);

  messageKeys.forEach((messageKey) => {
    if (locale === DEFAULT_LOCALE) {
      formattedMessages[messageKey] = messages[messageKey];
    } else {
      formattedMessages[messageKey] = messages[messageKey] || defaultFormattedMessages[messageKey];
    }
  });

  return formattedMessages;
};

export const translationMessages = {
  pt: formatTranslationMessages('pt', ptTranslationMessages),
  en: formatTranslationMessages('en', enTranslationMessages),
};

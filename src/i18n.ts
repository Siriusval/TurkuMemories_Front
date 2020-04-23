/**
 * i18n Provider
 * Provide available translations and namespaces to pages and components
 */
import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
    defaultLanguage: 'en',
    otherLanguages: ['fi', 'sv'],
});

export default NextI18NextInstance;

/* Optionally, export class methods as named exports */
export const {
    i18n,
    appWithTranslation,
    withTranslation,
} = NextI18NextInstance;

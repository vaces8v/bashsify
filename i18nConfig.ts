import { Config } from "next-i18n-router/dist/types";

const i18nConfig = {
  locales: ['ru', 'en'],
  defaultLocale: 'ru'
} as const;

export default i18nConfig;
import { createInstance } from "i18next";
import type { i18n as I18nInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import fi from "./locales/fi/translation.json";
import sv from "./locales/sv/translation.json";

const resources = {
  en: { translation: en },
  fi: { translation: fi },
  sv: { translation: sv },
} as const;

let instance: I18nInstance | null = null;

export type SupportedLocale = keyof typeof resources;

export function getI18nInstance() {
  if (instance) {
    return instance;
  }

  const i18n = createInstance();
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    react: {
      useSuspense: true,
    },
    initImmediate: false,
  });

  instance = i18n;
  return i18n;
}

export function changeLanguage(language: SupportedLocale) {
  const i18n = getI18nInstance();
  if (i18n.language === language) return;
  i18n.changeLanguage(language);
}

export { resources };

// Default export for Storybook compatibility
export default getI18nInstance();

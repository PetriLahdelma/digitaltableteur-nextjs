import React, { useEffect } from "react";
import type { Preview } from "@storybook/nextjs-vite";
import { ThemeProvider } from "../app/components/ThemeProvider/ThemeProvider";
import { I18nextProvider } from "react-i18next";
import i18n from "../app/i18n";
import en from "../app/locales/en/translation.json";
import fi from "../app/locales/fi/translation.json";
import sv from "../app/locales/sv/translation.json";
import "../app/globals.css";

const THEME_KEY = "storybook-theme";

// Initialize i18n synchronously for Storybook
if (!i18n.isInitialized) {
  i18n.init({
    resources: {
      en: { translation: en },
      fi: { translation: fi },
      sv: { translation: sv },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", title: "English" },
        { value: "fi", title: "Suomi" },
        { value: "sv", title: "Svenska" },
      ],
      showName: true,
    },
  },
};

const withProviders: Preview["decorators"] = [
  (Story, context) => {
    const { theme, locale } = context.globals as {
      theme: "light" | "dark";
      locale: string;
    };

    // Apply theme to the Storybook canvas body and sync background
    useEffect(() => {
      if (typeof document !== "undefined") {
        document.body.dataset.theme = theme;
        document.body.classList.toggle("theme-dark", theme === "dark");
        document.body.classList.toggle("themeDark", theme === "dark");
        localStorage.setItem(THEME_KEY, theme);
        
        // Set the background color based on theme
        const backgroundColor = theme === "dark" ? "#000000" : "#ffffff";
        document.body.style.backgroundColor = backgroundColor;
      }
    }, [theme]);

    useEffect(() => {
      if (i18n.language !== locale) {
        i18n.changeLanguage(locale);
      }
    }, [locale]);

    return (
      <I18nextProvider i18n={i18n}>
        <ThemeProvider forcedTheme={theme}>
          <Story />
        </ThemeProvider>
      </I18nextProvider>
    );
  },
];

export const parameters: Preview["parameters"] = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  a11y: {
    // Configure your a11y addon settings here
    element: "#root",
  },
};

export const decorators = withProviders;

const preview: Preview = {
  globalTypes,
  decorators,
  parameters,
};

export default preview;

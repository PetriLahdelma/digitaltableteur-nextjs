"use client";

import React from "react";
import { I18nextProvider } from "react-i18next";
import { getI18nInstance } from "./i18n";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
import { CookieConsentProvider } from "./components/CookieConsent/CookieConsentContext";

const i18n = getI18nInstance();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <CookieConsentProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </CookieConsentProvider>
    </I18nextProvider>
  );
}

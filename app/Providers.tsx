"use client";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n, { initI18n } from "./i18n";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";

if (!i18n.isInitialized) {
  initI18n();
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>{children}</ThemeProvider>
    </I18nextProvider>
  );
}

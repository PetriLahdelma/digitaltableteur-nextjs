"use client";

import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "dt_cookie_consent";
const COOKIE_NAME = "dt_cookie_consent";

type ConsentPreference = "unknown" | "accepted" | "essential";

interface CookieConsentContextValue {
  status: ConsentPreference;
  acceptAll: () => void;
  acceptEssential: () => void;
  reset: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextValue | null>(
  null
);

const readCookie = (name: string) => {
  if (typeof document === "undefined") return null;
  const value = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return value ? decodeURIComponent(value.split("=")[1]) : null;
};

const writeCookie = (name: string, value: string, days = 365) => {
  if (typeof document === "undefined") return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/; SameSite=Lax`;
};

const clearCookie = (name: string) => {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=; Max-Age=-1; path=/; SameSite=Lax`;
};

export const CookieConsentProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [status, setStatus] = useState<ConsentPreference>("unknown");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as
      | ConsentPreference
      | null;
    const cookie = readCookie(COOKIE_NAME) as ConsentPreference | null;

    const initial = stored ?? cookie;
    if (initial === "accepted" || initial === "essential") {
      setStatus(initial);
    }
  }, []);

  const persist = useCallback((preference: ConsentPreference) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, preference);
    writeCookie(COOKIE_NAME, preference);
  }, []);

  const acceptAll = useCallback(() => {
    setStatus("accepted");
    persist("accepted");
  }, [persist]);

  const acceptEssential = useCallback(() => {
    setStatus("essential");
    persist("essential");
  }, [persist]);

  const reset = useCallback(() => {
    setStatus("unknown");
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    clearCookie(COOKIE_NAME);
  }, []);

  const value = useMemo(
    () => ({
      status,
      acceptAll,
      acceptEssential,
      reset,
    }),
    [status, acceptAll, acceptEssential, reset]
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider"
    );
  }
  return context;
};

export type { ConsentPreference };

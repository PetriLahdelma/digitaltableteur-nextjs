import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  mounted: boolean;
}

const STORAGE_KEY = "dt_theme";

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => undefined,
  toggleTheme: () => undefined,
  mounted: false,
});

function resolveInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)"
  ).matches;
  return prefersDark ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;

  document.body.dataset.theme = theme;
  document.body.classList.toggle("theme-dark", theme === "dark");
  document.body.classList.toggle("themeDark", theme === "dark");
}

export const useTheme = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: React.ReactNode;
  forcedTheme?: Theme;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  forcedTheme,
}) => {
  const [theme, setThemeState] = useState<Theme>("light"); // Always start with light for SSR
  const [mounted, setMounted] = useState(false);

  // Set mounted state and resolve actual theme after hydration
  useEffect(() => {
    setMounted(true);
    if (!forcedTheme) {
      const resolvedTheme = resolveInitialTheme();
      setThemeState(resolvedTheme);
    }
  }, [forcedTheme]);

  const effectiveTheme = forcedTheme ?? theme;

  useEffect(() => {
    // Only apply theme after component has mounted to prevent hydration issues
    if (mounted) {
      applyTheme(effectiveTheme);
      if (!forcedTheme && typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, effectiveTheme);
      }
    }
  }, [effectiveTheme, forcedTheme, mounted]);

  const setTheme = useCallback(
    (next: Theme) => {
      if (forcedTheme) return;
      setThemeState(next);
    },
    [forcedTheme]
  );

  const toggleTheme = useCallback(() => {
    setTheme(effectiveTheme === "light" ? "dark" : "light");
  }, [effectiveTheme, setTheme]);

  const value = useMemo(
    () => ({
      theme: effectiveTheme,
      setTheme,
      toggleTheme,
      mounted,
    }),
    [effectiveTheme, setTheme, toggleTheme, mounted]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

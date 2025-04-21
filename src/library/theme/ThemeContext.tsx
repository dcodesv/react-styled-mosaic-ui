
import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemeVariant = "light" | "dark";
export type ComponentVariant = "minimalist" | "outline" | "shadow" | "filled";

export interface ThemeContextType {
  theme: ThemeVariant;
  variant: ComponentVariant;
  setTheme: (theme: ThemeVariant) => void;
  setVariant: (variant: ComponentVariant) => void;
}

const defaultContext: ThemeContextType = {
  theme: "light",
  variant: "minimalist",
  setTheme: () => null,
  setVariant: () => null,
};

export const ThemeContext = createContext<ThemeContextType>(defaultContext);

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeVariant;
  defaultVariant?: ComponentVariant;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "light",
  defaultVariant = "minimalist",
}) => {
  const [theme, setTheme] = useState<ThemeVariant>(defaultTheme);
  const [variant, setVariant] = useState<ComponentVariant>(defaultVariant);

  useEffect(() => {
    const rootElement = document.documentElement;
    const currentTheme = rootElement.classList.contains("dark") ? "dark" : "light";

    if (currentTheme !== theme) {
      rootElement.classList.remove(currentTheme);
      rootElement.classList.add(theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, variant, setTheme, setVariant }}>
      {children}
    </ThemeContext.Provider>
  );
};

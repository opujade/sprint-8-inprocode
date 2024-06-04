import { createContext, useEffect, useState } from "react";
import { ProviderProps } from "../types/types";

const ThemeContext = createContext<void | undefined>(undefined);

export const ThemeProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={toggleTheme()}>
      {children}
    </ThemeContext.Provider>
  );
};

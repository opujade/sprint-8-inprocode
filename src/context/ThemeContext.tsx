import { createContext, useState } from "react";
import { ProviderProps } from "../types/types";
import { ThemeContextInterface } from "../types/types";

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: "light",
  toggleTheme: undefined,
});

export const ThemeProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.querySelector("html")?.setAttribute("data-theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

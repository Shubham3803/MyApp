import React, { createContext, useContext } from "react";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "./colors";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const [isManualDark, setIsManualDark] = React.useState(null);

  // If a manual override is set, use it. Otherwise, fallback to the system scheme.
  const darkMode = isManualDark !== null ? isManualDark : (colorScheme === "dark");
  const theme = darkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsManualDark(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
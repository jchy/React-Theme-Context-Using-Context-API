import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

const themes = {
  dark: {
    color: "white",
    background: "black"
  },
  light: {
    color: "black",
    background: "white"
  }
};

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const themeData = themes;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const value = [{ theme, themeData }, toggleTheme];

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

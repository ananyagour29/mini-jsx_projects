import { useState, useContext, createContext } from "react";
import "./DarkLight.css";
// Step 1: Create Context
const ThemeContext = createContext();

// Step 2: Create Provider
 export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Step 3: Create Component using context
 export const DarkLight = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <div className={`container ${theme}`}>
      <h1>{theme === "dark" ? "Dark" : "Light"} Mode Website</h1>
      <p>Hello !! My React v19 Fans</p>
      <button className="toggle-btn" onClick={handleToggleTheme}>
        Switch to {theme === "dark" ? "light" : "dark"} mode
      </button>
    </div>
  );
};

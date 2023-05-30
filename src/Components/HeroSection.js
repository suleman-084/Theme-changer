import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
        height: "100vh",
      }}
    >
      <h1>ContextAPI theme toggler</h1>
      <p>This is nice API handling </p>
      <button
        onClick={() => {
          setThemeMode(themeMode === "light" ? "dark" : "light");
        }}
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          color: "#fff",
          fontSize: "20px",
          border: `${currentTheme.border}`,
        }}
      >
        {themeMode === "light" ? "Turn off" : "Turn On"}
      </button>
    </div>
  );
};

export default HeroSection;

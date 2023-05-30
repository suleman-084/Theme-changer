import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <button style={{ backgroundColor: "#26ae60" }}>
        {themeMode === "light" ? "Turn off" : "Turn On"}
      </button>
    </div>
  );
};

export default ThemeToggler;


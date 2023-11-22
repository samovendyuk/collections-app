import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

function ThemeMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const main = document.getElementById("root");

  if (isDarkMode === true) {
    main.classList.add("dark-mode");
  } else {
    main.classList.add("light-mode");
    main.classList.remove("dark-mode");
  }

  return (
    <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={60} />
  );
}

export default ThemeMode;

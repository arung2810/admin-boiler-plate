import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import { FiMoon, FiSun } from "react-icons/fi";


function ThemeChanger() {
  const getInitialMode = () => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return false; 
  };
  const [isDarkMode, setIsDarkMode] = useState(getInitialMode);

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      <Box className="theme-changer">
        <IconButton aria-label="Moon Theme" style={{ display: isDarkMode ? "none" : "flex" }} onClick={toggleTheme}>
          <FiMoon />
        </IconButton>
        <IconButton aria-label="Sun Theme" style={{ display: isDarkMode ? "flex" : "none" }} onClick={toggleTheme}>
          <FiSun />
        </IconButton>
      </Box>
    </>
  );
}

export default ThemeChanger;

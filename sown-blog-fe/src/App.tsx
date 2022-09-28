import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Header from "./components/header/Header";

const themeLight = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#FFFFFF",
    },
    text: { primary: "#363E54", secondary: "#2F374E" },
  },
});

const themeDark = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#272935",
    },
    text: { primary: "#F9F9FA", secondary: "#AAAAB0" },
  },
});

function App() {
  const [isthemeDark, setIsthemeDark] = useState(true);
  return (
    <div className="App">
      <ThemeProvider theme={isthemeDark ? themeDark : themeLight}>
        <CssBaseline />
        <Header />
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => setIsthemeDark(!isthemeDark)}
          color="inherit"
        >
          {isthemeDark ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </ThemeProvider>
    </div>
  );
}

export default App;

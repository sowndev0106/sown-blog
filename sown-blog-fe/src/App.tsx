import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import IconButton from "@mui/material/IconButton";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Header from "./components/header/Header";
import { useAppSelector } from "./redux/hooks";
import { selectTheme } from "./components/theme/themeSlice";

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
  const theme = useAppSelector(selectTheme);
  const [isthemeDark, setIsthemeDark] = useState(false);
  console.log(theme);
  return (
    <div className="App">
      <ThemeProvider theme={theme == "dark" ? themeDark : themeLight}>
        <CssBaseline />
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;

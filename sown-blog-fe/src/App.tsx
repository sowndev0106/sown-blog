import { useState } from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/header/Header";
import { useAppSelector } from "./redux/hooks";
import { selectTheme } from "./components/theme/themeSlice";
import Intro from "./components/home/Intro";

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
        <Intro />
      </ThemeProvider>
    </div>
  );
}

export default App;

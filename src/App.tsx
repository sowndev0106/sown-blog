import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./sections/header/Header";
import { useAppSelector } from "./redux/hooks";
import { selectTheme } from "./components/theme/themeSlice";
import Intro from "./sections/home/Intro";
import Posts from "./sections/home/Posts";
import { themeDark, themeLight } from "./theme"
import HomePage from "./page/HomePage";
import Router from "./Router";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./fontawesome"


function App() {
  const theme = useAppSelector(selectTheme);
  return (
    <div className="App">
      <ThemeProvider theme={theme === "dark" ? themeDark : themeLight}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;

import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/header/Header";
import { useAppSelector } from "./redux/hooks";
import { selectTheme } from "./components/theme/themeSlice";
import Intro from "./components/home/Intro";
import { themeDark, themeLight} from "./theme"


function App() {
  const theme = useAppSelector(selectTheme);
  return (
    <div className="App">
      <ThemeProvider theme={theme === "dark" ? themeDark : themeLight}>
        <CssBaseline />
        <Header />
        <Intro />
      </ThemeProvider>
    </div>
  );
}

export default App;

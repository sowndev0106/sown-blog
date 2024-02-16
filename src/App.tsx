import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./sections/layout/Header";
import { useAppSelector } from "./redux/hooks";
import { selectTheme } from "./components/theme/themeSlice";
import Intro from "./sections/home/Intro";
import { themeDark, themeLight } from "./theme"
import HomePage from "./page/HomePage";
import Router from "./Router";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./fontawesome"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://strapi.sowndev.com/graphql/",
  cache: new InMemoryCache()
});

function App() {
  const theme = useAppSelector(selectTheme);
  return (
    <div className="App">
      <ThemeProvider theme={theme === "dark" ? themeDark : themeLight}>
        <CssBaseline />
        <ApolloProvider client={client}>
          <Router />
        </ApolloProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

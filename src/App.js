import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Question from "./components/Question";
import AppProvider from "./contexts/AppContext";

const THEME = createMuiTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary: {
      main: "#fd665c",
      contrastText: "#fff",
    },
    secondary: {
      main: "#aad1d9",
    },
  },
});

function App() {
  return (
    <div className="App">
      <AppProvider>
        <ThemeProvider theme={THEME}>
          <Router>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/question" component={Question} />
          </Router>
        </ThemeProvider>
      </AppProvider>
    </div>
  );
}

export default App;

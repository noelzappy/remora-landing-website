import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import logo from "./logo.svg";
import MainRouter from "./routes/MainRouter";

function App() {
  return (
    <Router>
      <Header />
      <MainRouter />
    </Router>
  );
}

export default App;

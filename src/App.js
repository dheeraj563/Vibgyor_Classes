import { Navbar, Body } from "./component";
import {
  BrowserRouter as Router,
  // Routes,
  // Route,
  // useRoutes,
} from "react-router-dom";
import "./App.css";
import Footer from "./component/pages/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="fixedNavbar">
          <Navbar />
        </div>
        <Body />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Page/Home";
import Topbar from "./components/Topbar/Topbar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./Page/About";
import Service from "./Page/Service";
import Price from "./Page/Price";
import Washing from "./Page/Washing";
import Contact from "./Page/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Navbar />
        <AnimatePresence>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/service" exact component={Service} />
            <Route path="/price" exact component={Price} />
            <Route path="/washing" exact component={Washing} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
        </AnimatePresence>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

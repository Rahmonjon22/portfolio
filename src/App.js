// internet based modules
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// scss // Navbar
import Navbar from "./components/navbar/Navbar";
import "./app.scss";
// pages
import Home from "./components/Pages/home/Home";
import About from "./components/Pages/about/About";
import Portfolio from "./components/Pages/portfolio/Portfolio";
import Contact from "./components/Pages/contact/Contact";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <Router basename="/portfolio">
        <div className="nav-part">
        <Navbar />
        </div>
        <div className="pages-part">
        <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/about" component={About} />
        <Route  path="/portfolio" component={Portfolio} />
        <Route  path="/contact" component={Contact} />
        </Switch>
        </div>
        <div className="footer-part">
          <Footer/>
        </div>
      </Router>

    </>
  );
}

export default App;

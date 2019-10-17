import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Link, Route } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <div className="AppNav">
        <Link className="AppA" to="/Home">Home</Link>
        <Link className="AppA" to="/About">About</Link>
        <Link className="AppA" to="/Contact">Contact</Link>
      </div>

      <div className="App">
        {/* <Route path="/Home">
        <Home />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route> */}

        <Route path="/Home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      </div>
    </div>
  );
}

export default App;

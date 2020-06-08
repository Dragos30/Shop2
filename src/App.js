import React from 'react';
import { Router } from "@reach/router";
import Home from "./components/Home";
import MenuContainer from "./components/MenuContainer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ShopContainer from './components/ShopContainer';

function App() {
  return (
    <div className="App">
      <ShopContainer />
      <MenuContainer />
      <Router>
        <Home path="/" exact component={Home} />
        <About path="/about" exact component={About} />
        <Portfolio path="/portfolio" exact component={Portfolio} />
        <Contact path="/contact" exact component={Contact} />
      </Router>
    </div>
  );
}

export default App;

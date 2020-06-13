import React from 'react';
import { Router } from "@reach/router";
import Home from "./components/pages-container/Home";
import MenuContainer from "./components/menu-container/MenuContainer";
import About from "./components/pages-container/About";
import Portfolio from "./components/pages-container/Portfolio";
import Contact from "./components/pages-container/Contact";
import ShopContainer from './components/shop-container/ShopContainer';
import Categories from "./components/categories-container/Categories";
import Nature from "./components/categories-container/Nature";
import Abstract from "./components/categories-container/Abstract";
import Portraits from "./components/categories-container/Potraits";
import Footer from './components/pages-container/Footer';

function App() {
  return (
    <div className="App">
      <ShopContainer />
      <MenuContainer />
      <Categories/>
      <Router>
        <Home path="/" exact component={Home} />
        <About path="/about" exact component={About} />
        <Portfolio path="/portfolio" exact component={Portfolio} />
        <Contact path="/contact" exact component={Contact} />
        <Nature path="/nature" exact component={Nature} />
        <Abstract path="/abstract" exact component={Abstract} />
        <Portraits path="/portraits" exact component={Portraits}/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

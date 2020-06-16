import React from 'react';
import { Router } from "@reach/router";
import Home from "./components/pages-container/Home";
import MenuContainer from "./components/menu-container/MenuContainer";
import About from "./components/pages-container/About";
import Portfolio from "./components/pages-container/Portfolio";
import Contact from "./components/pages-container/Contact";
import Categories from "./components/categories-container/Categories";
import Nature from "./components/categories-container/Nature";
import Abstract from "./components/categories-container/Abstract";
import Portraits from "./components/categories-container/Potraits";
import Footer from "./components/pages-container/Footer";
import Shop from "./components/shop-container/Shop";

function App() {
  return (
    <div className="App">
      <MenuContainer />
      <Categories />
      <Router>
        <Home path="/" exact component={Home} />
        <About path="/about" exact component={About}/>
        <Portfolio path="/portfolio" exact component={Portfolio}/>
        <Contact path="/contact" exact component={Contact} />
        <Nature path="/nature" exact component={Nature} />
        <Abstract path="/abstract" exact component={Abstract} />
        <Portraits path="/portraits" exact component={Portraits} />
        <Shop path="/shop" exact component={Shop}/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

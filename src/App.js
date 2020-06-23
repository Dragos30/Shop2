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
import Footer from "./components/pages-container/Footer";
import unsplash from './components/api/unsplash';
import SearchBar from './components/SearchBar/SearchBar';
import ImageList from './components/SearchBar/ImageList';
import ShowProduct from './components/data/ShowProduct';
import Header from './components/BaseLayout/Header';
import Shop from './components/shop-container/Shop';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
  }
  render() {
    return (
      <div className="App">
        <MenuContainer />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Header/>
        <Categories />
        <ImageList images={this.state.images} />
        <Router>
          <Home path="/" exact component={Home} />
          <About path="/about" exact component={About} />
          <Portfolio path="/portfolio" exact component={Portfolio} />
          <Contact path="/contact" exact component={Contact} />
          <Nature path="/nature" exact component={Nature} />
          <Abstract path="/abstract" exact component={Abstract} />
          <ShowProduct path="/products/:id" component={ShowProduct} /> 
          <Shop path="/shop" exact component={Shop} />
        </Router>
        <Footer />
      </div>
    );
  }
}
export default App;

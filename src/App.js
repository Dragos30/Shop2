import React from 'react';
import { Router } from "@reach/router";
import Categories from "./components/categories-container/Categories";
import unsplash from './components/api/unsplash';
import SearchBar from './components/SearchBar/SearchBar';
import ImageList from './components/SearchBar/ImageList';
import ShowProduct from './components/data/ShowProduct';
import Shop from './components/shop-container/Shop';
import BaseLayout from './components/BaseLayout';
import Footer from './components/BaseLayout/components/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/pages-container/Login';
import Home from './components/pages-container/Home';
import ReviewModal from './components/Review/ReviewModal';


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
      <div key={App.Container} className="App">
        <BaseLayout />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Categories />
        <ImageList images={this.state.images} />
        <Router>
          <Login path="/login" exact component={Login} />
          <Home path="/" exact component={Home} />
          <ReviewModal path="/reviewModal" exact component={ReviewModal}/>
          <Dashboard path="/dashboard" exact component={Dashboard}/>
          <ShowProduct path="/products" component={ShowProduct}/> 
          <Shop path="/shop" exact component={Shop} />
        </Router>
 <Footer/>
      </div>            
    );
  }
}

export default App;

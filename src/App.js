import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Router } from "@reach/router";
import Categories from "./components/categories-container/Categories";
// import unsplash from './components/api/unsplash';
// import SearchBar from './components/SearchBar/SearchBar';
// import ImageList from './components/SearchBar/ImageList';
import ShowProduct from './components/data/ShowProduct';
import Shop from './components/shop-container/Shop';
import BaseLayout from './components/BaseLayout';
import Footer from './components/BaseLayout/components/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/pages-container/Login';
import Home from './components/pages-container/Home';
import ReviewModal from './components/Review/ReviewModal';
import ControlledCarousel from './components/Carousel/ControlledCarousel';
import PrivateRoute from './components/Utils/PrivateRoute';
import PublicRoute from './components/Utils/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './components/Utils/Common';




function  App( ) {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }  
    return (
      <div key={App.Container} className="App">
        <BaseLayout />
        <ReviewModal />
        <ControlledCarousel/>
        <Categories />
        <Router>         
          <Home path="/" exact component={Home} />
          <ReviewModal path="/reviewModal" exact component={ReviewModal} />
          <Login path="/login" exact component={Login} />
          <Dashboard path="/dashboard" exact component={Dashboard} />
          <ShowProduct path="/products" exact component={ShowProduct}/> 
          <Shop path="/shop" exact component={Shop} />
        </Router>
 <Footer/>
      </div>            
    );
  }

export default App;

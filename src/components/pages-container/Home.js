import React from 'react';
import ImageList from '../SearchBar/ImageList';
import productsList from '../data/ShowProduct';

const Home =() => {
            return (
            < div id="home" >
                <div className="container">
                    <h1 className="center">Canvas Paintings</h1>                              
                    {/* <ImageList images={this.state.images} /> */}
                </div>
            </ div>
        )
    }   

export default Home;
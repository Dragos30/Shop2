import React, { Component } from 'react';
import ShowProduct from '../data/ShowProduct';
import Slide from 'react-reveal';

class Home extends Component {
    render() {
        return ( 
            <Slide left cascade>
                <ShowProduct/>
            </Slide>
        )
    }
}
    
export default Home;
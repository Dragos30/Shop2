import React from 'react';
import ShowProduct from '../data/ShowProduct';
import Slide from 'react-reveal';

function Home() {
    return (       
        <Slide left cascade>
            <ShowProduct />
        </Slide>
    )
}
    
export default Home;
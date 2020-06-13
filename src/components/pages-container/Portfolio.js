import React from 'react';
import CardContainer from '../card-container/CardContainer';

const Portfolio = () => {
  return <div id="portfolio" className="transbox"> 
    <CardContainer imageUrl="/Assets/The Shine.jpg" title="Beach" subtitle="Dimensions:21 cm x 29,7 cm" price="100£">
    </CardContainer>
    <CardContainer imageUrl="/Assets/Worlds End.jpg" title="Beach" subtitle="Dimensions:21 cm x 29,7 cm" price="100£">
    </CardContainer>
    </div>
        
}
export default Portfolio;

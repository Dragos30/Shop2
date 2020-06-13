import React from 'react';
import Fade from 'react-reveal/Fade';
import CardContainer from '../card-container/CardContainer';

const Portraits = () => {
    return <div id="portraits">
        <Fade left cascade>
            <CardContainer imageUrl="/Assets/The Spartan.jpg" title="Beach" subtitle="Dimensions:21 cm x 29,7 cm" price="100£">
            </CardContainer>
        </Fade>
        </div>

}

export default Portraits;


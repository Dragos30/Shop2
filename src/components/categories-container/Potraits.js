import React from 'react';
import Fade from 'react-reveal/Fade';

const Portraits = () => {
    return <div id="portraits">
        <h1>Portraits Paintings</h1>
        <Fade left cascade>
        <div className="ui cards">
            <div className="card">
                <i className="star outline icon"></i>
                <div className="content">
                    <div className="header"><img src="/Assets/The Spartan.jpg" alt="portraits" width="100px"></img></div>
                    {/* <div className="description">
                         Elliot Fu is a film-maker from New York. 
      </div> */}
                </div>
                <div className="i-frame">
                    <i className="plus icon"></i>
                </div>
            </div>
            </div>
        </Fade>
        </div>

}

export default Portraits;


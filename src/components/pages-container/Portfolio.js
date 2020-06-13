import React from 'react';

const Portfolio = () => {
    return  <div id="portfolio" className="transbox"> 
      <h1>Mixed Paintings</h1>
      <div className="ui cards">
        <div className="card">
          <i className="star outline icon"></i>
        <div className="content">
          <div className="header"><img src="/Assets/The Shine.jpg" alt="abstract" width="100px"></img></div>
          {/* <div className="description">
                         Elliot Fu is a film-maker from New York. 
      </div> */}
        </div>
        <div className="i-frame">
          <i className="plus icon"></i>
        </div>
      </div>
        <div className="card">
          <i className="star outline icon"></i>
        <div className="content">
          <div className="header"><img src="/Assets/Worlds End.jpg" alt="abstract" width="100px"></img></div>
          {/* <div className="description">
                         Elliot Fu is a film-maker from New York. 
      </div> */}
        </div>
        <div className="i-frame">
          <i className="plus icon"></i>
        </div>
      </div>
      </div>
    </div>
        
}
export default Portfolio;

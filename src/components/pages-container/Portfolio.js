import React, { Component } from 'react';

class Portfolio extends Component{
  constructor(props) {
    super(props);
    this.state = {
      complete: false
    }
    this.toggleComplete = this.toggleComplete.bind(this);
  }

  toggleComplete() {
    this.setState(prevState => ({
      complete: !prevState.complete
    }));
  }

  render() {
    const incompleteIcon = <span><i className="minus icon"></i></span>;
    const completeIcon = <span><i id="icon" className="plus icon" ></i></span>;

    return (
      <div id="portfolio" className="transbox">
      <span className="i-frame" onClick={this.toggleComplete}>
        {this.state.complete ? completeIcon : incompleteIcon}
      </span>
      </div>
    );
  }
}
export default Portfolio;

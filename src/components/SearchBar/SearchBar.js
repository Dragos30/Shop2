import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    state = { term: '' };

    onFormSubmit = event => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.term);
    };
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui-form">
                    <div className="field">
                        <input
                            placeholder="Search here for inspiration..."
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })} />
                        <i className="fa fa-search" aria-hidden="true">
                        </i>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
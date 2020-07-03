import './ImageList.css';
import ImageCard from './ImageCard';
import React, { Component } from 'react';

class ImageList extends Component {
    state = {
        show: true,
    }

    toggle = () => this.setState((currentState) => ({ show: !currentState.show }));
    render() {
        const images = this.props.images.map((image) => {
            return (
                <div>
                    <ImageCard key={image.id} image={image} />
                </div>
            )
        });
        return (
            <div className="imageList">   
                    <span className="close" onClick={this.toggle}>{this.state.show ? '+' : '+'}</span>
                    {this.state.show && <div key={ImageList} className="imageContainer">{images}</div>}                             
            </div>
        )
    }
}
export default ImageList;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import shopReducer from './components/reducers/shopReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(shopReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Main from './components/Main/Main'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';
import App from './App';

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render( 
	<Provider store={ store }><Main /></Provider>,
	document.getElementById('root')
);
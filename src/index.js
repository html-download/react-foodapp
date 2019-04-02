import React from 'react';
import ReactDOM from 'react-dom';
import AppUniversal from  './appuniversal';
import reducer from './store/reducer';
import { createStore } from 'redux';


const store = createStore(reducer);


ReactDOM.render(<AppUniversal store={store}/>, document.getElementById('app')); 

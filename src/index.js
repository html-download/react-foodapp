import ReactDOM from 'react-dom';
import AppUniversal from  './appuniversal';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore();


ReactDOM.render(<AppUniversal store={store}/>, document.getElementById('app')); 

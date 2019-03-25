import ReactDOM from 'react-dom';
import AppUniversal from  './appuniversal';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './store/reducer';
const store = createStore(reducer);

ReactDOM.render(<Provider store={store}> AppUniversal</Provider>, document.getElementById('app'));
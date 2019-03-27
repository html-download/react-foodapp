import ReactDOM from 'react-dom';
import AppUniversal from  './appuniversal';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

ReactDOM.render(AppUniversal, document.getElementById('app')); 
import reducer from './store/reducer';


ReactDOM.render(<Provider store={store}> AppUniversal</Provider>, document.getElementById('app')); 
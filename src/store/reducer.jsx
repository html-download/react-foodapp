import {createStore} from 'redux';


const initialState ={
	loading: false,
	restaurants:[]
}

const reducer = (state = initialState, action) => {

	if(action.type === 'REQUEST')
	{
		 //return {restaurants: action.payload};
			return  Object.assign({
		 			restaurants: action.payload
		 		}, state);
	}

   return state;

};


const store = createStore(reducer);


store.subscribe(() => console.log(store.getState()))

export default reducer; 
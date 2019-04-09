//import {createStore} from 'redux';


const initialState ={
	isLoaded: false,
	loading: false,
	restaurants:[]
}

const reducer = (state = initialState, action) => {


	if(action.type === 'REQUEST')
	{
		//console.log(action.restaurants)
		 return {...state, restaurants: action.restaurants, isLoaded: true};
	
	}

   return state;

};




//console.log(store.getState());

//const store = createStore(reducer);
export default reducer; 
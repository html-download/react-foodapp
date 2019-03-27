import {createStore} from 'redux';


const initialState ={

	restaurants:[]
}

const  reducer = (state = initialState, action) => {

const newstate = {...state}

	if(action.type === 'REQUEST')
	{
		 return [...state, action.payload];
	}

return newState;

};


const store = createStore(reducer);

export default reducer; 
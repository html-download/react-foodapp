import {createStore} from 'redux';


const initialState ={

	restaurants:[]
}

const  reducer = (state = initialState, action) => {



	if(action.type === 'REQUEST')
	{
		 return {restaurants: action.payload};
	}

   return state;

};


const store = createStore(reducer);

export default reducer; 
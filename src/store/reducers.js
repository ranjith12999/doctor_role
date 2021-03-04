import formReducer from './reducers/currentFormReducer.types';
import {combineReducers} from 'redux';
//import reduceReducers from "reduce-reducers";
const reducer = combineReducers({
   formData: formReducer
})

export default reducer;
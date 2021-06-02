import formReducer from './reducers/currentFormReducer.types';
import chiefReducer from './reducers/patientFormReducer.types';
import medicationReducer from './reducers/medicationReducer.types';
import patientOtherReducer from './reducers/patientOtherFormReducer.types';
import {combineReducers} from 'redux';
//import reduceReducers from "reduce-reducers";
const reducer = combineReducers({
   formData:formReducer,chiefData:chiefReducer,otherData:patientOtherReducer,fullMedication:medicationReducer
})

export default reducer;
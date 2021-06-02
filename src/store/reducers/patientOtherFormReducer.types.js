import * as ActionTypes from '../actions/constants';

const initialState = {
  OtherPatient:[]
}

const patientOtherReducer = (state=initialState,action) => {
    switch(action.type){
        case ActionTypes.PATIENT_OTHER_FORM:
            return{
                OtherPatient : action.payload,
            }     
    }
    return state;
}


export default patientOtherReducer;
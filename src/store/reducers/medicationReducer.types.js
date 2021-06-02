import * as ActionTypes from '../actions/constants';

const initialState = {
  medication:[]
}

const medicationReducer = (state=initialState,action) => {
    switch(action.type){
        case ActionTypes.MEDICATION_FORM:
            return{
                medication : action.payload,
            }     
    }
    return state;
}


export default medicationReducer;
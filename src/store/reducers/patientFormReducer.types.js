import * as ActionTypes from '../actions/constants';

const initialState = {
  ChiefFormData: [],
}

const chiefReducer = (state=initialState,action) => {
    switch(action.type){
        case ActionTypes.CHIEF_FORM:
            return{
                ChiefFormData : action.payload,
            }     
    }
    return state;
}


export default chiefReducer;
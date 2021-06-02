import * as ActionTypes from '../actions/constants';

const initialState = {
  formData: [],
}

const formReducer = (state=initialState,action) => {
    switch(action.type){
        case ActionTypes.CURRENT_FORM_DATA:
            return{
                formData : action.payload,
            } 
    }
    return state;
}


export default formReducer;
import * as ActionTypes from './constants';

export function currentFormData(data){
    const action = {
        type: ActionTypes.CURRENT_FORM_DATA,
        payload: data,
    }

    return dispatchData(action)
}

export function dispatchData(action){
    return(dispatch)=> {
        setTimeout(()=>{
            dispatch(action)
        },1000)
    }
}
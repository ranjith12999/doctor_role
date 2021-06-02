import * as ActionTypes from './constants';

function chiefFormData(data){
    const action = {
        type: ActionTypes.CHIEF_FORM,
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

export default (chiefFormData)
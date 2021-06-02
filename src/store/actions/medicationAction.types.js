import * as ActionTypes from './constants';

function medicationData(data){
    const action = {
        type: ActionTypes.MEDICATION_FORM,
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

export default medicationData

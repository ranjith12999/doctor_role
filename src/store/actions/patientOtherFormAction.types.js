import * as ActionTypes from './constants';

function patientOtherData(data){
    const action = {
        type: ActionTypes.PATIENT_OTHER_FORM,
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

export default patientOtherData;

import * as ActionTypes from './constants';

export default function currentFormData(data){
    const action = {
        type: ActionTypes.CURRENT_FORM_DATA,
        payload: data,
    }

    return dispatchData(action)
}

// export default function chiefFormData(data){
//     const action = {
//         type: ActionTypes.CHIEF_FORM,
//         payload: data,
//     }

//     return dispatchData(action)
// }

export function dispatchData(action){
    return(dispatch)=> {
        setTimeout(()=>{
            dispatch(action)
        },1000)
    }
}
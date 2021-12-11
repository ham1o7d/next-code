import { 
    ADD_LIST_ITEM, 
    GET_ITEMS_START,
    GET_ITEMS_SUCCESS,
    GET_ITEMS_FAIL
} from "./Constants.Data";

import APIInstance from '../../Api/APIInstance';

export const getItems= (dispatch)=> {
    dispatch({
        type: GET_ITEMS_START
    })
    APIInstance.get('/todos')
    .then(res=> {
        dispatch({
            type: GET_ITEMS_SUCCESS,
            payload: res.data
        })
        console.log(res, 'responce')
    })
    .catch(error=> dispatch({
        type: GET_ITEMS_FAIL,
        payload: error
    }))
}


export const addListItem= (payload, dispatch)=> {
    console.log(payload, 'payload add')

    // APIInstance.post('/todos', payload );
    // dispatch(getItems(dispatch))
    return{
        type: ADD_LIST_ITEM,
        payload
    }
}




// export const removeListItem= (payload)=> {
//     console.log(payload, 'payload')
//     return{
//         type: REMOVE_LIST_ITEM,
//         id: payload.id
//     }
// }
// export const deleteAllItem= ()=> {
//     return{
//         type: DELETE_ALL_ITEMES
//     }
// }
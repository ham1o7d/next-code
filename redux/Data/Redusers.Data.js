import {
    ADD_LIST_ITEM,
    GET_ITEMS,
    GET_ITEMS_FAIL,
    GET_ITEMS_START,
    GET_ITEMS_SUCCESS,
} from "./Constants.Data";

const initialState={
    listItems: [],
    isLoading: false,
    errorMessage: 'no error'
}
export const TodoListReduser= (state= initialState, action)=> {

    switch (action.type) {
        case GET_ITEMS_START: return {
            ...state,
            isLoading: true
        }
        case GET_ITEMS_SUCCESS:{ 
            console.log(action.payload, 'payload')

            return {
            ...state,
            listItems:action.payload,
            isLoading: false
        }}
        case GET_ITEMS_FAIL: return {
            ...state,
            isLoading: false,
            errorMessage: action.payload
        }
        case ADD_LIST_ITEM:  return {
            ...state,
            listItems: [action.payload, ...state.listItems]
        }
        // case REMOVE_LIST_ITEM: 
        //     const arr= initialState.filter(item=> item.id !== action.id)
        //     return [ 
        //         ...arr
        //     ]
        // case DELETE_ALL_ITEMES: return []
    
        default: return initialState;
    }
}

// initialState= [
//     {value: 'Do home work', id: uuidV4()},
//     {value: 'Go to Gym', id: uuidV4()},
// ]
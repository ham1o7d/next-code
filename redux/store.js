import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { TodoListReduser } from "./Data/Redusers.Data";

const redusers= combineReducers({
    ListRED: TodoListReduser,
})

const store= createStore(
    redusers,
    // window.devToolsExtension && window.devToolsExtension(),
    applyMiddleware(thunk),
)

export default store;
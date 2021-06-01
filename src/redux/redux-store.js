import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import findUsersReducer from "./findUsersReducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import thunkMiddleWare from 'redux-thunk';


let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage : messagesReducer,
    findUsersPage : findUsersReducer,
    sidebar : sidebarReducer,
    auth : authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
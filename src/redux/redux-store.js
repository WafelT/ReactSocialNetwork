import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import findUsersReducer from "./findUsersReducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage : messagesReducer,
    findUsersPage : findUsersReducer,
    sidebar : sidebarReducer,
    auth : authReducer,
    form : formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
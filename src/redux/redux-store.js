import { combineReducers, createStore } from "redux";
import authReducer from "./authReducer";
import findUsersReducer from "./findUsersReducer";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";


let reducers = combineReducers({
    profilePage : profileReducer,
    messagesPage : messagesReducer,
    findUsersPage : findUsersReducer,
    sidebar : sidebarReducer,
    auth : authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
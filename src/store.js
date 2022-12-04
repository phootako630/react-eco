import {combineReducers, createStore} from "redux";
import { todos } from "./reducer";

const reducers = {
    todos,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);

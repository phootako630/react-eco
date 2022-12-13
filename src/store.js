import {combineReducers, createStore} from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { todos } from "./reducer";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const reducers = {
    todos,
};

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
};


const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(
                                                persistedReducer,
                                                window.__REDUX_DEVTOOLS_EXTENSION__&&
                                                window.__REDUX_DEVTOOLS_EXTENSION__(),
                                                );
import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from "redux-persist";
import App from './App.js'
import { configureStore } from "./store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";


const store = configureStore();
const persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store} >
        <PersistGate
            loading = {<div>Loading......</div>}
            persistor={persistor} >
            <App />
        </PersistGate>

    </Provider>
    , document.getElementById('root'));


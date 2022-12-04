import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import { configureStore } from "./store";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={configureStore()} >
        <App />
    </Provider>
    , document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'fontsource-roboto';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from "redux";
import NextFormReducer from "./store/reducers/NextForm";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";


const env = process.env.NODE_ENV === 'development'

let store;
if (env) {
    store = createStore(NextFormReducer, composeWithDevTools(applyMiddleware(thunk)));
} else {
    store = createStore(NextFormReducer, applyMiddleware(thunk));
}



ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();

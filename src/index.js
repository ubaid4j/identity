import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'fontsource-roboto';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, combineReducers, createStore} from "redux";
import NextFormReducer from "./store/reducers/NextFormReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import PersonalInfoReducer from "./store/reducers/PersonalInfoReducer";


const env = process.env.NODE_ENV === 'development'

const rootReducer = combineReducers(
    {
        personalInfoReducer: PersonalInfoReducer,
        form: NextFormReducer
    }
)

let store;
if (env) {
    store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
} else {
    store = createStore(rootReducer, applyMiddleware(thunk));
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

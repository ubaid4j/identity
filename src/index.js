import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import 'fontsource-roboto';
import App from 'App';
import * as serviceWorker from 'serviceWorker';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import FormReducer from 'store/reducers/FormReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import SignupReducer from 'store/reducers/SignupReducer';
import LoginReducer from 'store/reducers/LoginReducer';
import ErrorReducer from 'store/reducers/ErrorReducer';


const env = process.env.NODE_ENV === 'development'

const rootReducer = combineReducers(
    {
        form: FormReducer,
        auth: SignupReducer,
        login: LoginReducer,
        error: ErrorReducer
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
        <BrowserRouter>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();

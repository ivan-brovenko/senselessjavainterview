import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {rootReducer} from "./redux/rootReducer";
import configureStore from "./redux/store";
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {spamWords} from "./redux/middleware";
import createSagaMiddleware from "redux-saga";
import {sagaWatcher} from "./redux/sagas";

const saga = createSagaMiddleware();

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(rootReducer, compose(
        applyMiddleware(
            thunk,
            spamWords,
            saga),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

saga.run(sagaWatcher)

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
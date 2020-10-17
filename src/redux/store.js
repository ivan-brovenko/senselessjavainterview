import {applyMiddleware, createStore} from "redux";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import watcherSaga from "./sagas/sagas";


const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(watcherSaga);
    return store;
};

export default configureStore;
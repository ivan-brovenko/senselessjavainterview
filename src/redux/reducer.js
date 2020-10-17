import {combineReducers} from 'redux';
import linkToggleReducer from "./reducers/linkToggleReducer";
import translateReducer from './reducers/translateReducer';

const reducersCombination = combineReducers({
    linkToggleReducer,
    translateReducer
});

export default reducersCombination;
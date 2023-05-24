import {PUT_DATA} from "../actionsOld";

const initialState = {
    data: ""
};

export default (state = initialState, action) =>{
    if (action.type === PUT_DATA) {
        console.log("666");
        console.log(action);
        return {
            ...state,
            data: action.payload.result
        };
    }
    return state;
};
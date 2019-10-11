import * as actionTypes from "./actionTypes";

const initialValue = 0;

export const randomReducer = (state = initialValue, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            
            return state + 1;
    
        default:
            return state
    }
}
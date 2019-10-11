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

const initialPlayerList = {}
export const playersReducer = (state = initialPlayerList, action) => {
    switch (action.type) {
        case actionTypes.ADD_PLAYERS:
            return {
                players: action.payload
            }
    
        default:
            return state;
    }
}
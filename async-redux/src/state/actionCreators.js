import * as actionTypes from "./actionTypes";
import axios from "axios";

const proPlayersApi = 'https://api.opendota.com/api/proPlayers/'

export const addCount = () => {
    return{
        type: actionTypes.INCREMENT
    }
}

export const addPlayers = players => {
    return {
        type: actionTypes.ADD_PLAYERS,
        payload: players
    }
}

export const getProPlayers = () => dispactch => {
    axios.get(proPlayersApi).then( response => {
        dispactch(addPlayers(response.data))
    })
    .catch( error => {
        console.log(error);
    });
}
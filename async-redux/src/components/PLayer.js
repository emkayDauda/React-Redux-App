import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";


export const Player = ({ player }) => {
    return (
        <div>
            <h3>Name: {player.personaname}</h3>
            <h3>Player Name: {player.name}</h3>
        </div>
    )
}
export default connect( state => state, actionCreators )(Player)
import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import Player from "./PLayer";


export const PlayerList = props => {
    const { players, getProPlayers } = props
    
    useEffect( () => {
        getProPlayers()
    }, [] )
    
    return (
        <div>
            {
                players.map(player => <Player player = {player} />)
            }
        </div>
    )
}
export default connect( state => state, actionCreators )(PlayerList)
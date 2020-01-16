import React from "react";
import { connect } from "react-redux";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Card, Image, Media, Content, Heading } from 'react-bulma-components';
import * as actionCreators from "../state/actionCreators";


export const Player = ({ player }) => {
    return (
        <Card style={{'width': '10.5rem', 'margin': '3rem 2.5rem'}} >
            <Card.Image style={{'margin': '0 auto'}} rounded src={player.avatar} size={96} />
            <h3>Name: {player.personaname}</h3>
            <h3>Player Name: {player.name}</h3>
        </Card>
    )
}
export default connect( state => state, actionCreators )(Player)
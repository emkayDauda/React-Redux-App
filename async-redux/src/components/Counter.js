import React from "react";
import { connect } from "react-redux";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';
import * as actionCreators from "../state/actionCreators";

export const Counter = (props) => {
    const {count, addCount} = props
    console.log(props);
    return(
        <div>
            <h3>Count is {count} </h3>
            <Button color="primary" onClick={ () => addCount()} >Add</Button>
        </div>
    )
}

export default connect(
    state => state,
    actionCreators,
)(Counter)
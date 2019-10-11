import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export const Counter = (props) => {
    const {count, addCount} = props
    console.log(props);
    return(
        <div>
            <h3>Count is {count} </h3>
            <button onClick={ () => addCount()} >Add</button>
        </div>
    )
}

export default connect(
    state => state,
    actionCreators,
)(Counter)
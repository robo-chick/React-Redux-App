import React from 'react';
import {getIpsum} from '../actions';
import { connect } from 'react-redux';

const Ipsum = props => {
    const data = e => {
        e.preventDefault();
        props.getIpsum();
    };

    return (
        <>
        {props.isFetching ? (
            <h4>Frying bacon...</h4>
        ): (
            <button onClick={data}>Generate Bacon Ipsum</button>
        )}
        <p>{props.ipsum}</p>
        </>
    )
}

const mapStateToProps = state => {
    return {
        ipsum: state.ipsum,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getIpsum})(Ipsum);
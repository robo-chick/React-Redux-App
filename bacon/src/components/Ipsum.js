import React, {useEffect} from 'react';
import {getIpsum} from '../actions';
import { connect } from 'react-redux';

const Ipsum = props => {
    useEffect(() => {
        props.getIpsum();
    }, [props.getIpusm]);

    if (props.isFetching) {
        return <h2>Frying bacon...</h2>;
    }

    return (
        <>
            <h2>Bacon Ipsum: {props.ipsum}</h2>
            <button onClick={() => props.getIpsum()}>Generate Bacon Ipsum</button>
        </>
    );
};

const mapStateToProps = state => {
    return {
        ipsum: state.ipsum,
        isFetching: state.isFetching,
        error: state.error
    };
};

const mapDispatchToProps = {getIpsum};

export default connect(mapStateToProps, mapDispatchToProps)(Ipsum);
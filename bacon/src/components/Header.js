import React from 'react';
import {connect} from 'react-redux';

const Header = props => {
console.log(props.image);
    return (
        <div className="bacon-container">
            <h1>Bacon Ipsum Generator</h1>
            <img src={require("../assets/bacon.jpg")} alt="frying bacon" />
        </div>
    );
};

const mapStateToProps =state => {
    console.log(state.image);
    return {
        image: state.image
    }  
}

export default connect(mapStateToProps)(Header);

import "./App.css"
import React, { Component } from "react";
import PropTypes from "prop-types";
import NavBar from "../fragments/NavBar";

export default class BattlePage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let dislpayProfile = `Player: ${this.props.value.userName} | Coins: ${this.props.value.coins}`;
        return (
            <>
                <NavBar pageName={'Battle !'} displayText={dislpayProfile} />
                <button onClick={this.props.onClickBehavior}>Add Coin</button>

            </>
        );
    }
}

BattlePage.propTypes = {
    value: PropTypes.object.isRequired,
    onClickBehavior: PropTypes.func.isRequired,
}
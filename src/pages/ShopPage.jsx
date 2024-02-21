import "./App.css";
import PropTypes from "prop-types";
import React, { Component } from "react";
import UserItems from '../fragments/UserItems.jsx'
import ShopItems from '../fragments/ShopItems.jsx'
import NavBar from "../fragments/NavBar";

export default class ShopPage extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        let dislpayProfile = `Player: ${this.props.value.userName} | Coins: ${this.props.value.coins}`;

        return (
            <>
                <NavBar pageName={'ShopPage'} displayText={dislpayProfile} />

                <section>
                    <div className="row">
                        <div className="col-md-8 col-12">
                            <ShopItems buyBehavior={this.props.buyBehavior} />

                        </div>
                        <div className="col-md-4 col-12">
                            <UserItems items={this.props.value.items} />

                        </div>
                    </div>
                </section>
            </>
        );
    }
}

ShopPage.propTypes = {
    value: PropTypes.object.isRequired,
    buyBehavior: PropTypes.func.isRequired,
}
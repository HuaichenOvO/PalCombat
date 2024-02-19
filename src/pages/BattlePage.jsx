import "./App.css"
import ReactDOM from 'react-dom';
import React, { Component } from "react";
import BaseTemplate from "../templates/BaseTemplate";

export default class BattlePage extends Component {
    state = {}
    render() {
        return (
            <>
                <BaseTemplate>
                    <h1>Battle Page!</h1>
                </BaseTemplate>
            </>
        );
    }
}
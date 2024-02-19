import "./App.css"
import ReactDOM from 'react-dom'
import React, { Component } from "react";
import BaseTemplate from '../templates/BaseTemplate'

export default class ShopPage extends Component {
    state = {}
    render() {
        return (
            <>
                <BaseTemplate>
                    <h1>Shop Page!</h1>
                    <section>
                        <div className="row">
                            <div className="col-md-4 col-12">
                                {/* <CreatePromptForm
                                    onCreateInteraction={this.onCreateInteraction}
                                /> */}
                                <h2>Available Items</h2>

                            </div>
                            <div className="col-md-8 col-12">
                                <h2>Coins</h2>

                            </div>
                        </div>
                    </section>
                </BaseTemplate>
            </>
        );
    }
}

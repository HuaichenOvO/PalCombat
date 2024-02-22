import "./App.css"
import React, { Component } from "react";
import PropTypes from "prop-types";
import NavBar from "../fragments/NavBar";
import HitoryHolder from "../fragments/HitoryHolder";


export default class BattlePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            battleHolder: (<></>),
            historyHolder: this.props.value.history,
        }
    }

    BattleHistory(result) {
        // Array of possible actions
        const actions = [
            "attacks",
            "releases the skill",
            "counterattacks with a swift strike",
            "dodges the incoming attack skillfully",
            "summons elemental power for a devastating blow",
            "retaliates with a barrage of magical spells",
            "defends against the onslaught with a shield",
            "unleashes a flurry of punches, overwhelming the opponent",
            "retreats momentarily to strategize the next move",
            "executes a perfectly timed combo, leaving the opponent stunned",
            "summons reinforcements to aid in the battle",
            "charges up for a powerful ultimate attack",
            "employs evasive maneuvers to avoid the opponent's assault",
            "engages in a fierce exchange of blows",
            "employs a cunning strategy, catching the opponent off guard"
        ];

        // Generate a random number of lines (between 3 and 10)
        const numLines = Math.floor(Math.random() * 8) + 3;

        // Generate random lines
        const battleLines = [];
        for (let i = 0; i < numLines; i++) {
            const attacker = (Math.random() > 0.5 ? "Ally " : "Enemy ") + "Pal " + (Math.random() > 0.5 ? "Krute" : "Abby");
            const action = actions[Math.floor(Math.random() * actions.length)];
            battleLines.push(
                <p key={i}>{attacker} {action}</p>
            );
        }

        return (
            <div>
                {battleLines}
                {result}
            </div>
        );
    }


    clickBehavior = () => {
        let result = "";
        const winAction = () => {
            this.props.addCoin();
            result = "You won";
        }
        const loseAction = () => {
            result = "You lost";
        }
        Math.random() > 0.3 ? winAction() : loseAction();

        const battleLines = this.BattleHistory(result);

        this.props.addBattleHistory(result);
        this.setState({ battleHolder: battleLines, historyHolder: [result, ...this.state.historyHolder] });
        // console.log(this.state.historyHolder);
    }

    // // GPT
    // componentDidUpdate(prevProps) {
    //     // Check if onUpdate prop has changed
    //     if (this.props.onUpdate !== prevProps.onUpdate) {
    //         // Update history state with new line
    //         this.setState(prevState => ({
    //             historyholder: prevState.value.history,
    //         }));
    //     }
    // }


    render() {
        let dislpayProfile = `Player: ${this.props.value.userName} | Coins: ${this.props.value.coins}`;
        return (
            <>
                <NavBar pageName={'Battle !'} displayText={dislpayProfile} />
                <button onClick={this.clickBehavior}>Battle!</button>
                <div className='row'>
                    <div className="col-md-8">
                        <h2>Current Battle</h2>
                        {this.state.battleHolder}
                    </div>
                    <div className="col-md-4">
                        <h2>Battle History</h2>
                        {/* {this.state.historyHolder.map(
                            (h) => {
                                <p>
                                    {h}
                                </p>
                            }
                        )} */}
                        <div>
                            {this.state.historyHolder.map((str, index) => (
                                <p key={index}>{str}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

BattlePage.propTypes = {
    value: PropTypes.object.isRequired,
    addCoin: PropTypes.func.isRequired,
    addBattleHistory: PropTypes.func.isRequired,
}
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DropDown extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        }
    }

    toggleDropdown = (e) => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render = () => {
        // How to rerender if it is not in the state?
        // How to not use setState in render? 
        // console.log(`DropRend | Global status: ${this.props.PalClicked}. My ID: ${this.props.PalIndex}. Am I Open? ${(this.props.PalIndex == this.props.PalClicked)}`);
        return (
            <div>
                <button onClick={this.toggleDropdown} pal-id='1'>Pal's Detail</button>
                {this.state.isOpen ? (
                    <div style={{ marginTop: 10 }}>
                        <ul>
                            <li>HP: {this.props.HP}</li>
                            <li>MP: {this.props.MP}</li>
                            <li>ATK: {this.props.ATK}</li>
                            <li>Skill: {this.props.Skill}</li>
                        </ul>
                    </div>
                ) : (<></>)}
            </div>
        );
    }
}

DropDown.propTypes = {
    // PalClicked: PropTypes.number.isRequired,
    // PalIndex: PropTypes.number.isRequired,
    setClickBehavior: PropTypes.func.isRequired,
    HP: PropTypes.number.isRequired,
    MP: PropTypes.number.isRequired,
    ATK: PropTypes.number.isRequired,
    Skill: PropTypes.string.isRequired,
};
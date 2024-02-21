import "./App.css";
import React, { Component } from "react";
import PropTypes from "prop-types";

import UserItems from '../fragments/UserItems.jsx'
import UserPals from "../fragments/UserPals.jsx";
import NavBar from "../fragments/NavBar";



class IndexPage extends Component {
  constructor(props) {
    super(props);

  }

  render = () => {
    let dislpayProfile = `Player: ${this.props.value.userName} | Coins: ${this.props.value.coins}`;
    return (


      <div className="App">
        <NavBar pageName={'ProfilePage'} displayText={dislpayProfile} />

        <div className="container">
          <div className='row'>
            <UserPals Pals={this.props.value.Pals} />
            <UserItems items={this.props.value.items} />
          </div>
        </div>

      </div>
    );
  }
}

export default IndexPage;

IndexPage.propTypes = {
  value: PropTypes.object.isRequired,
  // onClickBehavior: PropTypes.func.isRequired,
}

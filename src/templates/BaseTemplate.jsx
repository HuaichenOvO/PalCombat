import React, { Component } from "react";
import PropTypes from "prop-types";

import NavBar from "../fragments/NavBar";
import Footer from "../fragments/Footer";

class BaseTemplate extends Component {
  render() {
    return (
      <div className="PromptManager">
        <NavBar />
        {/* <NavBar userName=this.state.profile.name /> */}
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

BaseTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  // userName: PropTypes.string.isRequired,
};

export default BaseTemplate;

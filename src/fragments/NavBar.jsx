import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            PalCombat - {this.props.pageName} | {this.props.displayText}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/">
                  Profile
                </a> */}
                <Link
                  className="nav-link active"
                  to={{
                    pathname: "/",
                  }}
                >Profile</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/shop">
                  Shop
                </a> */}
                <Link
                  className="nav-link active"
                  to={{
                    pathname: "/shop",
                  }}
                >Shop</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/battle">
                  Battle
                </a> */}
                <Link
                  className="nav-link active"
                  to={{
                    pathname: "/battle",
                  }}
                >Battle</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}

export default NavBar;

NavBar.propTypes = {
  pageName: PropTypes.string.isRequired,
  displayText: PropTypes.string.isRequired,
};

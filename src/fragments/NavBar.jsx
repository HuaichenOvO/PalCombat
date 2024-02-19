import React from "react";
import PropTypes from "prop-types";

class NavBar extends React.Component {
  render() {
    return (
      // <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      //   <div class="container-fluid">
      //     <a class="navbar-brand" href="#">PalCombat - {/*this.props.userName */}</a>
      //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      //       <span class="navbar-toggler-icon"></span>
      //     </button>
      //     <div class="collapse navbar-collapse" id="navbarText">
      //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      //         <li class="nav-item">
      //           <a class="nav-link active" aria-current="page" href="/">Profile</a>
      //         </li>
      //         <li class="nav-item">
      //           <a class="nav-link active" aria-current="page" href="/shop">Shop</a>
      //         </li>
      //         <li class="nav-item">
      //           <a class="nav-link active" aria-current="page" href="/battle">Battle</a>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            PalCombat - {/*this.props.userName */}
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
                <a className="nav-link active" aria-current="page" href="/">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/shop">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/battle">
                  Battle
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}

export default NavBar;

// BaseTemplate.propTypes = {
//   userName: PropTypes.string.isRequired,
// };

import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Footer-Container">
        <nav className="Footer">
          <div className="FooterLeft">
            <Link to="/" className="header-link">
              <h1 className="FooterLogo">Eatsy</h1>
            </Link>
            <p>We make it easy to find your food</p>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;

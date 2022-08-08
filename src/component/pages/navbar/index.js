import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="NavbarWrapper">
      <span>
        <img
          className="navbarImage"
          src="https://static.wixstatic.com/media/e464e0_51770cd721724394936d956405a5a7ff~mv2.png/v1/fill/w_1017,h_1026,al_c/e464e0_51770cd721724394936d956405a5a7ff~mv2.png"
          alt="logo..."
        />
      </span>
      <div className="NavbarRight">
        <li>
          <Link className="navbarlink" to="/">Solution</Link>
        </li>
        <li>
          <Link className="navbarlink" to="/cats">Help</Link>
        </li>
        <li>
          <Link className="navbarlink" to="/sheeps">Notes</Link>
        </li>
        <li>
          <Link className="navbarlink" to="/goats">About us</Link>
        </li>
      </div>
    </div>
  );
};
export default Navbar;

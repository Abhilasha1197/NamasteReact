import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={LOGO_URL} />
      </Link>

      <div className="nav-items">
        <ul>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <li>About</li>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>login</button>
      )}
    </div>
  );
};
export default Header;

import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/customHooks/useOnline";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
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
          <Link to="/instamart" style={{ textDecoration: "none" }}>
            <li>Instamart</li>
          </Link>
        </ul>
      </div>
      {isOnline ? "🟢" : "🛑"}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>login</button>
      )}
    </div>
  );
};
export default Header;

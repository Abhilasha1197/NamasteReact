import { useState, useContext } from "react";
//import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnline from "../utils/customHooks/useOnline";
import userContext from "../utils/userContext";
import logo from "../utils/assets/logo.jpg"
import { useSelector } from "react-redux";



const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(userContext);

  const offerItem = useSelector(store => store.offers.offerItems);
  const cartItem = useSelector(store=>store.cart.items)
  console.log(cartItem);
  console.log(offerItem);
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} />
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
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <li>Cart {cartItem.length}</li>
          </Link>

          <Link to="/offers" style={{ textDecoration: "none" }}>
            <li>Offers {offerItem.length}</li>
          </Link>
         

        </ul>
        <span>{user.name}</span> - <span>{user.email}</span>
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

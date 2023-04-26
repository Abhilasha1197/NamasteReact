import React from "react";
import { useContext } from "react";
import userContext from "../utils/userContext";

const Footer = () => {
  const { user } = useContext(userContext);
  return (
    <div>
      <h1>This is footer!</h1>
      <p>
        This website is created by {user.name} - {user.email}
      </p>
    </div>
  );
};

export default Footer;

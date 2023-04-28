import React from "react";
import { useContext } from "react";
import userContext from "../utils/userContext";

const Footer = () => {
  const { user } = useContext(userContext);
  return (
    <div>
     
      <p>
        This website is created by {user.name} - {user.email}
      </p>
    </div>
  );
};

export default Footer;

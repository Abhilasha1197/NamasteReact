import React from "react";
import { useRouteError } from "react-router-dom";

const NotFoundPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1 style= {{textAlign:"center"}}>Oops!!</h1>
      <h2 style={{textAlign:"center"}}>
        {error.status} : Page {error.statusText}
      </h2>
    </div>
  );
};

export default NotFoundPage;

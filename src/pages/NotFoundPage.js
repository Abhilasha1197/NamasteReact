import React from "react";
import { useRouteError } from "react-router-dom";

const NotFoundPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>
        {error.status} : {error.statusText}
      </h2>
    </div>
  );
};

export default NotFoundPage;

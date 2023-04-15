import React from "react";

const Loader = () => {
  return (
    <div className="res-container">
      {Array(10)
        .fill("")
        .map((e) => (
          <div className="simmer-box"></div>
        ))}
    </div>
  );
};

export default Loader;

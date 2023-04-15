import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);
  // console.log("render");
  useEffect(() => {
    console.log("useEffect");
    // "timer" will keep printing even if we leave the page thats why we need to return this timer. returning is a unmounting phase in fun. comp.");

    const timer = setInterval(() => {
      console.log("timer");
    }, 1000);

    return () => {
      console.log("unmounting");
      clearInterval(timer);
    };
  }, []);
  console.log("render");
  return (
    <div>
      <h1>This is profile component!</h1>
      <h2>{props.name}</h2>
      {count}
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
};

export default Profile;

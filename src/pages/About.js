import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "../components/ProfileClassBased";
import ProfileFunctionalComp from "../components/Profile.jsx";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    // console.log("parent-constructor");
  }
  componentDidMount() {
    //  console.log("parent ComponentDidMount");
  }
  render() {
    //  console.log("parent-render");
    return (
      <div>
        <h1>This is about page!</h1>
        <ProfileFunctionalComp name="First child" />
        //
      </div>
    );
  }
}

export default About;

/********
 *
 * Parent constructure
 * Parent render
 * child constructure -first child
 * child render -first ch
 * child constructur -2nd child
 * child render -2nd
 * child componentdidmount - first child
 * child componentdidmount -2nd
 * parent comdidmount
 *
 *
 *
 */

/*****
 * React Mount Method occurs in two phases
 * 1st. Render phase
 *      a) constructor
 *      b) render
 *
 * render method will be called for both child...once both child html is inserted inside dom, the updated will occure.
 * 2nd. Commit phase (updates the dom)
 *    a) ComponentDidMount
 *
 * this takes time so after 1st child render,insted of waiting for the 1st child componentdidmount phase, 2nd child constructor and render methods are called.
 *
 *
 */

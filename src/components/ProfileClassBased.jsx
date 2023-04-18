import React from "react";

class Profile extends React.Component {
  //constructor is for initialising the variable
  constructor(props) {
    super(props);
    //state is an object
    this.state = {
      userInfo: {
        name: "abhilasha",
        location: "india",
        avatar_url: "",
      },
    };
    console.log("child-constructor" + this.props.name);
  }

  async componentDidMount() {
    /*
    const data = await fetch("https://api.github.com/users/Abhilasha1197")
    const json =await data.json()
    console.log(json);
    this.setState({
          userInfo:json  
        }
    )
    console.log("child-ComponentDidMount" + this.props.name);
    }*/
    this.timer = setInterval(() => {
      console.log("timer");
    }, 1000);
  }

  componentDidUpdate(prevProps, PrevStates) {
    if (
      this.state.count !== PrevStates.count ||
      this.state.count2 !== PrevStates.count2
    ) {
      //my code
    }
    //now each tym count,count2 is updated componentDidpdated method is called nd re-render happens ///in functional comp [] dependency in useEffect used to handle this
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timer);
  }

  //only mendetory methood is render method
  render() {
    console.log("child-render" + this.props.name);

    return (
      <div>
        <h1>This is class based component.</h1>
        <h2>{this.state.userInfo.name}</h2>

        <h3>{this.state.userInfo.location}</h3>
        <img src={this.state.userInfo.avatar_url} />
      </div>
    );
  }
}
export default Profile;

/***
 *
 * COMPONENT MOUNT :-
 *
 *  child-constructorFirst child
 *   child-renderFirst child
 *  //API=> {login: 'Abhilasha1197', id: 108613361, node_id: 'U_kgDOBnlO8Q', avatar_url: 'https://avatars.githubusercontent.com/u/108613361?v=4', gravatar_id: '', …}
 *  child-ComponentDidMountFirst child
 *
 *  COMPONENT UPDATE:-
 *
 *  child-renderFirst child
 *  componentDidUpdate
 *
 *  COMPONENT UNMOUNT :-
 *  componentWillUnmount (when we change the component to which shows the ui then this component lifecycle method is completed and it is destroyed)
 */

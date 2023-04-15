
#parcel ===>
dev build ,
local server,
hmr = hot module replacement //automatically refreshing on saving,
image optimisation,
bundling,
minification,
caching,
compress,
code splitting,
differential bundling -support older browser,
diagnostic,
error handling,
https,
tree shaking- remove unused code,
different dev and production bundles




<!------------Rough----------------

 * <div id='parent'
 *     <div id = "child">
 *        <h1>I'm h1 tag</h1>
 *        <h2>I'm h2 tag</h2>
 *     </div>
 *   <div id = "child2">
 *        <h1>I'm h1 tag</h1>
 *        <h2>I'm h2 tag</h2>
 *     </div>
 * </div>
 * 
 * 
 *  reactElement is {Object}  => HTML(browser understands)
 * 


  const parent = React.createElement("div", {id:"parent"},
  [React.createElement("div" ,{id:"child",key:"one"},
   [React.createElement("h1",{key:"1"},"I'm a h1 tag"),React.createElement("h2",{key:"2"},"I'm a h2 tag")])],
  [React.createElement("div" ,{id:"child2",key:"two"},
   [React.createElement("h1",{key:"3"},"I'm a h1 tag"),React.createElement("h2",{key:"4"},"I'm a h2 tag")])]);

;

const root = ReactDOM.createRoot(document.getElementById("root"));


console.log(parent); //object
root.render(parent)


const heading = React.createElement("h1",{id:"heading"},"hello world from react!");

console.log(heading); // object
root.render(heading); // converting the object into h1 tag by putting the object into dom tree

//React.createElement take 3 argument element, {attribute} and children element or content of elemnt


<div class="container">
   <h1>logo</h1>
   <ul>
        <li>home</li>
        <li>support</li>
        <li>about</li>
   </ul>
</div>


const nav = React.createElement('div',{className:"container"},
[React.createElement('h1',{},"logo"),React.createElement("ul",{},
[React.createElement('li',{},"home"),React.createElement('li',{},"support"),React.createElement('li',{},"about")])])

root.render(nav);




// React.createElement => object => html element on rendering

const heading = React.createElement("h1",{id:"heading"},"this is class 3rd of namasteReact")

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)


//jsx is transpiled into React.createElement(js object) by babel before it reaches to js engine.

const jsxheading = <h1 id="heading">Namaste React class 3rd using jsx</h1>

root.render(jsxheading);

// React Element //jsx is a react element

const headingElement1 =<span>Normal js element inside React element</span>;

const headingElement2 = (
   <p className="head">
      NamasteReact element or a piece of JSX<br/>
      {headingElement1}
      
   </p>
);



//React component :- creating components helps us in 
1. making code reusable, moduler,maintainable,testable,readable
//class based
//function based


function based component is normal js function 
which return a piece of jsx or react elemnt 


const Headingcomp2 = ()=> (
   <p className="head">
      NamasteReact functional component
   </p>
);

const Headingcomp3 = function(){
   return (
   <p className="head">
      NamasteReact functional component using fuction keyword;
      
   </p>
)};

const Headingcomponent = ()=>{
   return (
      <div>
      <h1>NamasteReact function based component</h1>
         {headingElement2}
       <Headingcomp2/>
       <Headingcomp3/>
       <Headingcomp3></Headingcomp3>
       {Headingcomp3()}
      </div>
    )
}


root.render(<Headingcomponent />)

/*
//////////////----------------------------------REACT FOOD ORDERING APP-------------------------------- ------////////////////

/**
 * HEADER
 * -logo
 * -Nav links
 * 
 * BODY
 * -search food
 * -restaurantCardContainer ->cards
 * 
 * FOOTER
 * -copyrights
 * -important links
 * -contacts
 * -address
 */



Two types of Export/Import

-Default Export/Import

export default Components;
import Component from "path";


-Named  Export/Import

export const componnent;
import {omponent} from "path";


#React Hooks - Normal js function

useState() - local State variable in functional component=> whenever a statevariable updated,react re-renders the component



/*--------------useEffect-----------------*/
//useEffect hooks takes a callback fuction as parameter and this callback function is called when useEffect want it.
 useEffect(()=>{
       console.log("useEffect");
  },[restaurantList])

 //array here is called empty dependency. i.e means printing the "useEffect" depends on nothig so it will be printed only once at initial render.
 //if dependency was not given then "useEffect" will be printed at initial render + at every re-render
 // if [restaurantList] means "useEffect will be printed at initial render + if restauranList changes."

  console.log("render");

  //first "render" will be printed then "useEffect"



  /*------------SPA(Single page application)-----------*/

  SPA : Page does not reload, does not make network call if we do cliet side routing

 Two types of routing : -
1. client side routing ---changing the route on web page
2. server side routing ---changing the route by changing the url 

Anchor tag-reloads
Link tags-does not reload

---->





To start=> npm start or parcel index.html
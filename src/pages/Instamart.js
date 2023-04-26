import React from "react";
import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div>
      <h3>{title}</h3>

      {isVisible && <p>{description}</p> ? (
        <button onClick={() => setIsVisible(!isVisible)}>hide</button>  
      ) : (
        <button onClick={() => setIsVisible()}>show</button>
      )}
     {isVisible && <p>{description}</p>}
    </div>
  );
};
const Instamart = () => {
  const [VisibleSection, setVisibleSection] = useState("");
  return (
    <div>
      <h2 style={{textAlign:"center"}}>Instamart</h2>
      <hr />
      <Section
        title={"About Instamart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like"
        }
        isVisible={VisibleSection === "about"}
        setIsVisible={() => setVisibleSection("about")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
        isVisible={VisibleSection === "team"}
        setIsVisible={() => setVisibleSection("team")}
      />
      <Section
        title={"Career Instamart"}
        description={
          "It is a long established fact that a reader will be distracted by the readable content of page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like"
        }
        isVisible={VisibleSection === "career"}
        setIsVisible={() => setVisibleSection("career")}
      />
    </div>
  );
};

export default Instamart;

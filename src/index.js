import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Chris on Code",
  location: "Las Vegas",
  foodType: "Everything",
  age: 28,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "chrisoncode",
  avatar:
    "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  return (
    <div className="App">
      {}
      <div className="user-deets">
        <img src={user.avatar} alt="some"></img>
        <h3 className="imagecolor">{user.name}</h3>
        <div>location</div>
        <div>{user.location}</div>
        <div>Eats</div>
        <div>{user.foodType}</div>
        <div>Likes</div>
        <div>{user.likes}</div>
        <div>Twitter</div>
        <div className="imagecolor">@{user.twitterUsername}</div>
      </div>

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

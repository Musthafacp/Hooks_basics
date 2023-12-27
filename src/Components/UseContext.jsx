import React, { useContext, useState } from "react";
import { ToggleTheme } from "../Components/UseState";
import "../App.css";

function UseContext() {
  const [currLike, setCurrLike] = useState(0);
  const [currContent, setContent] = useState(true);

  const handleContent = () => {
    setContent((prevState) => !prevState);
  };

  const handleLike = () => {
    setCurrLike((prevLike) => prevLike + 1);
  };

  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
    padding: "2rem",
    margin: "2rem",
    border: "2px solid black",
  };

  return (
    <div className="Bigdiv" style={themeStyle}>
      {currContent ? <h1>This is made by Kalvium</h1> : null}
      <button onClick={handleContent}>Content</button>
      <h1>{currLike}</h1>
      <button onClick={handleLike}>Like</button>
      <button>Dislike</button>
    </div>
  );
}

export default UseContext;

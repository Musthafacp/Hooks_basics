import React, { useState } from "react";
import UseContext from "./UseContext";
import "../App.css";

export const ToggleTheme = React.createContext();

function UseState() {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState((prevState) => !prevState);
  };

  return (
    <>
      <ToggleTheme.Provider value={state}>
        <div className="buttonDiv">
          <button onClick={handleToggle}>Toggle</button>
        </div>
        <UseContext />
      </ToggleTheme.Provider>
    </>
  );
}

export default UseState;

import React from "react";
import Tooltip from "./Tooltip";
import "../styles/App.css";

const App = () => {
  return (
    <div className="app-container">
    
      <Tooltip text="This is a tooltip">
        <p className="tooltip-p">Hover over me</p>
      </Tooltip>
  
      <Tooltip text="This is another Tooltip">
        <p className="tooltip-text">Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
};

export default App;


import React from "react";
import './../styles/App.css';
import Tooltip from "./ToolTip";

const App = () => {
  return (
    <div>
        <Tooltip text='This is tooltip'>
        <button >Hover over me</button>
        </Tooltip>
        <Tooltip text='This is another tooltip'>
          <button>Another Tooltip</button>
          </Tooltip>
    </div>
  )
}

export default App

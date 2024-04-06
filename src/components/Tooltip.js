import React, { useState } from "react";

const Tooltip = (props) => {
    const [showTooltip, setShowTooltip] = useState(false);
  const {text, children}=props
    return (
      <div onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
        {children}
        {
         showTooltip && <div className="tooltiptext">{text}</div>
        }
      </div>
    );
  };
  
  export default Tooltip;

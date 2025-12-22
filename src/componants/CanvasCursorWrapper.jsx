// src/componants/CanvasCursorWrapper.jsx
import React from "react";
import TextFlagCursor from "./TextFlagCursor";

const CanvasCursorWrapper = () => {
  return (
    <TextFlagCursor
      text="Let's Code!"          
      color="#00ff88"             
      font="monospace"           
      textSize={12}  
    />
  );
};

export default CanvasCursorWrapper;

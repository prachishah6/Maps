import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactTooltip from "react-tooltip";

import "./styles.css";

import  MapChart from "./MapChart"; 
import { Typography } from "@material-ui/core";

export default function WorldMap() {
  const [content, setContent] = useState("");
  return (
    <div styles={{margin: 0,
        padding: 0}}>
      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
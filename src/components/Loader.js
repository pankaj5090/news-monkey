import React from "react";
import loadImage from "../loader.gif";

export default function Loader() {
  return (
    <div className="text-center">
      <img className="my-3" src={loadImage} alt="loading.."></img>
    </div>
  );
}

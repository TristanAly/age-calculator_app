import React from "react";
import arrowDown from "../../assets/icon-arrow.svg";

const Separator = () => {
  return (
    <div className="separatorButton">
      <div className="line"></div>
      <button type="submit">
        <img src={arrowDown} alt="icon arrow down" />
      </button>
    </div>
  );
};

export default Separator;

import React from "react";

import closeIcon from "../../Icons/close.svg";
import onlineIcon from "../../Icons/online.svg";

import "./InfoBar.css";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img className="onlineIcon" src={onlineIcon} alt="online" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img className="closeIcon" src={closeIcon} alt="close" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;

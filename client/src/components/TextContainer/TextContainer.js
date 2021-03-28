import React from "react";

import onlineIcon from "../../Icons/onlineIcon.png";

import "./TextContainer.css";

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>
        Realtime Chat App
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
    </div>
    {users ? (
      <div>
        <h1>Şu an online kişiler: </h1>
        <div className="activeContainer">
          <h2>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h2>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;

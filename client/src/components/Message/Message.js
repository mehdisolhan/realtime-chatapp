import React from "react";
import ReactEmoji from "react-emoji";

import "./Message.css";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        <span className="messageText colorWhite">
          {ReactEmoji.emojify(text)}
        </span>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <span className="messageText colorDark">
          {ReactEmoji.emojify(text)}
        </span>
      </div>
      <span className="sentText pl-10">{user}</span>
    </div>
  );
};

export default Message;

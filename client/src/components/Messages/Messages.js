import React from "react";
import ScrollToBttom from "react-scroll-to-bottom";

import Message from "../Message/Message";

import "./Messages.css";

const Messages = ({ messages, name }) => {
  return (
    <ScrollToBttom>
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} name={name} />
        </div>
      ))}
    </ScrollToBttom>
  );
};

export default Messages;

import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <InputGroup className="input-field">
    <Form.Control
      as="textarea"
      rows={3}
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <InputGroup.Append>
      <Button className="input-btn" onClick={(e) => sendMessage(e)}>
        Send
      </Button>
    </InputGroup.Append>
  </InputGroup>
);

export default Input;

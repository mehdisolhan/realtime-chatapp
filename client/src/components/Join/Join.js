import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join a Room!</h1>
        <Form>
          <Form.Group>
            <Form.Label className="joinLabel">Name</Form.Label>
            <Form.Control
              type="text"
              className="joinInput"
              size="lg"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <Form.Label className="joinLabel">Room</Form.Label>
            <Form.Control
              type="text"
              className="joinInput"
              size="lg"
              onChange={(e) => setRoom(e.target.value)}
            />
            <Link
              onClick={(event) =>
                !name || !room ? event.preventDefault() : null
              }
              to={`/chat?name=${name}&room=${room}`}
            >
              <Button variant="success" className="joinButton" type="submit">
                Sign In
              </Button>
            </Link>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Join;

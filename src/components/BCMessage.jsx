import React from "react";

function BCMessage({ type, message }) {
  switch (type) {
    case "text":
      return (
        <h1
          className="bcmessage"
          style={{
            fontSize: "2rem",
          }}
        >
            {message}
        </h1>
      );
    case "image":
      return <img className="bcmessage" src={message} height="300px" alt="Img failed to load" />;
    default:
      return <></>
  }
}

export default BCMessage;

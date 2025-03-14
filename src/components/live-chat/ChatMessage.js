import React from "react";

function ChatMessage({ name, photo, message }) {
  return (
    <div className="flex p-2">
      <img src={photo} alt={name} />
      <p className="p-2">
        <span className="font-bold">{name}</span>
        <span className="m-2">{message}</span>
      </p>
    </div>
  );
}

export default ChatMessage;

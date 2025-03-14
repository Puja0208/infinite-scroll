import React from "react";
import Videostream from "./Videostream";
import ChatWindow from "./ChatWindow";

function LiveChat() {
  return (
    <div className="flex">
      <Videostream />
      <ChatWindow />
    </div>
  );
}

export default LiveChat;

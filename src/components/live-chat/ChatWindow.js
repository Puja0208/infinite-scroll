import React, { useState } from "react";
import ChatMessage from "./ChatMessage";

const data = [
  {
    id: 1,
    name: "John",
    photo:
      "https://yt4.ggpht.com/ytc/AIdro_lwv5BAHnRD7qxSikzd-9neg4T9mlMig-uYqlvCnGM=s32-c-k-c0x00ffffff-no-rj",
    message: "This is a chat video live",
  },
  {
    id: 2,
    name: "Sam",
    photo:
      "https://yt4.ggpht.com/FCRRKJvBS6eZZoi-1lr7W81zXtP2kYgUrB-GfKz46JbQjADlccqcGdk3NRBuom4lD4egbjmVTA=s32-c-k-c0x00ffffff-no-rj",
    message: "This is a chat video live",
  },
];
function ChatWindow() {
  const [message, setMessage] = useState(data);
  return (
    <div className="h-400 w-full border border-black">
      {message.map((mes) => {
        return (
          <ChatMessage
            key={mes.id}
            name={mes.name}
            photo={mes.photo}
            message={mes.message}
          />
        );
      })}
    </div>
  );
}

export default ChatWindow;

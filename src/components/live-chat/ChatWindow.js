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
  {
    id: 3,
    name: "Sam",
    photo:
      "https://yt4.ggpht.com/FCRRKJvBS6eZZoi-1lr7W81zXtP2kYgUrB-GfKz46JbQjADlccqcGdk3NRBuom4lD4egbjmVTA=s32-c-k-c0x00ffffff-no-rj",
    message: "This is a chat video live",
  },
  {
    id: 4,
    name: "Sam",
    photo:
      "https://yt4.ggpht.com/FCRRKJvBS6eZZoi-1lr7W81zXtP2kYgUrB-GfKz46JbQjADlccqcGdk3NRBuom4lD4egbjmVTA=s32-c-k-c0x00ffffff-no-rj",
    message: "This is a chat video live",
  },
  {
    id: 5,
    name: "Sam",
    photo:
      "https://yt4.ggpht.com/FCRRKJvBS6eZZoi-1lr7W81zXtP2kYgUrB-GfKz46JbQjADlccqcGdk3NRBuom4lD4egbjmVTA=s32-c-k-c0x00ffffff-no-rj",
    message: "This is a chat video live",
  },
  {
    id: 6,
    name: "Sam",
    photo:
      "https://yt4.ggpht.com/FCRRKJvBS6eZZoi-1lr7W81zXtP2kYgUrB-GfKz46JbQjADlccqcGdk3NRBuom4lD4egbjmVTA=s32-c-k-c0x00ffffff-no-rj",
    message: "This is a chat video live",
  },
  {
    id: 7,
    name: "Sam",
    photo:
      "https://yt4.ggpht.com/FCRRKJvBS6eZZoi-1lr7W81zXtP2kYgUrB-GfKz46JbQjADlccqcGdk3NRBuom4lD4egbjmVTA=s32-c-k-c0x00ffffff-no-rj",
    message: "This is a chat video live",
  },
  {
    id: 8,
    name: "Sam",
    photo:
      "https://yt4.ggpht.com/FCRRKJvBS6eZZoi-1lr7W81zXtP2kYgUrB-GfKz46JbQjADlccqcGdk3NRBuom4lD4egbjmVTA=s32-c-k-c0x00ffffff-no-rj",
    message: "This is a chat video live",
  },
  {
    id: 9,
    name: "Sam",
    photo:
      "https://yt4.ggpht.com/FCRRKJvBS6eZZoi-1lr7W81zXtP2kYgUrB-GfKz46JbQjADlccqcGdk3NRBuom4lD4egbjmVTA=s32-c-k-c0x00ffffff-no-rj",
    message: "This is a chat video live",
  },
];
function ChatWindow() {
  const [message, setMessage] = useState(data);
  return (
    <div className="flex flex-wrap h-[400px] w-full border border-black overflow-y-scroll">
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

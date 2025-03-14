import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";

function ChatWindow() {
  const [message, setMessage] = useState([]);

  var nameList = [
    "Time",
    "Past",
    "Future",
    "Dev",
    "Fly",
    "Flying",
    "Soar",
    "Soaring",
    "Power",
    "Falling",
    "Fall",
    "Jump",
    "Cliff",
    "Mountain",
    "Rend",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Gold",
    "Demon",
    "Demonic",
    "Panda",
    "Cat",
    "Kitty",
    "Kitten",
    "Zero",
    "Memory",
    "Trooper",
    "XX",
    "Bandit",
    "Fear",
    "Light",
    "Glow",
    "Tread",
    "Deep",
    "Deeper",
    "Deepest",
    "Mine",
    "Your",
    "Worst",
    "Enemy",
    "Hostile",
    "Force",
    "Video",
    "Game",
    "Donkey",
    "Mule",
    "Colt",
    "Cult",
    "Cultist",
    "Magnum",
    "Gun",
    "Assault",
    "Recon",
    "Trap",
    "Trapper",
    "Redeem",
    "Code",
    "Script",
    "Writer",
    "Near",
    "Close",
    "Open",
    "Cube",
    "Circle",
    "Geo",
    "Genome",
    "Germ",
    "Spaz",
    "Shot",
    "Echo",
    "Beta",
    "Alpha",
    "Gamma",
    "Omega",
    "Seal",
    "Squid",
    "Money",
    "Cash",
    "Lord",
    "King",
    "Duke",
    "Rest",
    "Fire",
    "Flame",
    "Morrow",
    "Break",
    "Breaker",
    "Numb",
    "Ice",
    "Cold",
    "Rotten",
    "Sick",
    "Sickly",
    "Janitor",
    "Camel",
    "Rooster",
    "Sand",
    "Desert",
    "Dessert",
    "Hurdle",
    "Racer",
    "Eraser",
    "Erase",
    "Big",
    "Small",
    "Short",
    "Tall",
    "Sith",
    "Bounty",
    "Hunter",
    "Cracked",
    "Broken",
    "Sad",
    "Happy",
    "Joy",
    "Joyful",
    "Crimson",
    "Destiny",
    "Deceit",
    "Lies",
    "Lie",
    "Honest",
    "Destined",
    "Bloxxer",
    "Hawk",
    "Eagle",
    "Hawker",
    "Walker",
    "Zombie",
    "Sarge",
    "Capt",
    "Captain",
    "Punch",
    "One",
    "Two",
    "Uno",
    "Slice",
    "Slash",
    "Melt",
    "Melted",
    "Melting",
    "Fell",
    "Wolf",
    "Hound",
    "Legacy",
    "Sharp",
    "Dead",
    "Mew",
    "Chuckle",
    "Bubba",
    "Bubble",
    "Sandwich",
    "Smasher",
    "Extreme",
    "Multi",
    "Universe",
    "Ultimate",
    "Death",
    "Ready",
    "Monkey",
    "Elevator",
    "Wrench",
    "Grease",
    "Head",
    "Theme",
    "Grand",
    "Cool",
    "Kid",
    "Boy",
    "Girl",
    "Vortex",
    "Paradox",
  ];

  var finalName = "";

  const CHAT_MSG_LIMIT = 100;

  function generateRandomNames() {
    var finalName = nameList[Math.floor(Math.random() * nameList.length)];
    return finalName;
  }

  const fetchData = () => {
    const data = [
      {
        id: 1,
        name: generateRandomNames(),
        photo:
          "https://yt4.ggpht.com/ytc/AIdro_lwv5BAHnRD7qxSikzd-9neg4T9mlMig-uYqlvCnGM=s32-c-k-c0x00ffffff-no-rj",
        message: "This is a chat video live",
      },
    ];
    setMessage((mess) => {
      let newList = [...data, ...mess];
      newList = newList.slice(0, CHAT_MSG_LIMIT);
      return newList;
    });
  };
  useEffect(() => {
    const s = setInterval(fetchData, 2000);
    return () => {
      clearInterval(s);
    };
  }, []);
  return (
    <div className="flex w-full h-[400px] border border-black m-5 overflow-y-scroll  flex-col-reverse">
      {message.map((mes, i) => {
        return (
          <ChatMessage
            key={i}
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

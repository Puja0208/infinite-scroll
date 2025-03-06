import React from "react";
import AccordianItem from "./AccordianItem";
const data = [
  {
    title: "Accordian item #1",
    body: "This is item 1 of accordian",
  },
  {
    title: "Accordian item #2",
    body: "This is item 2 of accordian",
  },
  {
    title: "Accordian item #3",
    body: "This is item 3 of accordian",
  },
];
function Accordian() {
  return (
    <div className="w-[50%] m-auto mt-5">
      {data.map((item, i) => (
        <AccordianItem key={i} title={item.title} body={item.body} />
      ))}
    </div>
  );
}

export default Accordian;

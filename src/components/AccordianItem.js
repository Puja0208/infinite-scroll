import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function AccordianItem({ title, body }) {
  return (
    <div className="border border-black">
      <div className="font-bold p-2 bg-slate-200 flex justify-between">
        <span>{title}</span>
        <span>
          <ArrowDownwardIcon />
        </span>
      </div>
      <div className="p-2">{body}</div>
    </div>
  );
}

export default AccordianItem;

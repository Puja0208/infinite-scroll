import React from "react";

function Videostream() {
  return (
    <div className="m-5">
      <iframe
        width="1000"
        height="400"
        src="https://www.youtube.com/embed/oONkjFKPS7E?si=Rp4T-5NMGCWTh2mV"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Videostream;

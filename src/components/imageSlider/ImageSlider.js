import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ImageSlider() {
  const images = [
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://piktochart.com/wp-content/uploads/2023/04/large-29.jpg",
    "https://i.pinimg.com/originals/2b/66/01/2b66016d5a1e2d230ecce59f8e673382.png",
    "https://i.pinimg.com/736x/5f/09/47/5f0947219a7f446e804e7e0055089fad.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKMpEfmuwzKmwyl4reX0NW7-Ixgn1DCz6IvxSYpq_CQ&s",
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      handleForwardClick();
    }, 3000);

    return () => {
      clearInterval(i);
    };
  }, []);

  const handleBackClick = () => {
    setActive((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };

  const handleForwardClick = () => {
    setActive((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="m-2 flex justify-center items-center">
      <ArrowBackIosIcon className="cursor-pointer" onClick={handleBackClick} />
      <img
        width={500}
        height={500}
        src={images[active]}
        alt={`image-${active}`}
      />
      <ArrowForwardIosIcon
        className="cursor-pointer"
        onClick={handleForwardClick}
      />
    </div>
  );
}

export default ImageSlider;

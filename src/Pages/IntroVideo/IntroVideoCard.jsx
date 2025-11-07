import React from "react";
import videoObj from "../../assets/Clouds_5MB.mp4"

const IntroVideoCard = () => {
  return (
    <>
      <video src={videoObj} controls loop autoPlay className="rounded-lg"></video>
    </>
  );
};

export default IntroVideoCard;

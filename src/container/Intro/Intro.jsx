import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prePlayVideo) => !prePlayVideo);

    playVideo ? videoRef.current.pause() : videoRef.current.play();
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={videoRef}
        typeof="video/mp4"
        loop
        controls={false}
        muted
      />

      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#DACC87" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#DACC87" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;

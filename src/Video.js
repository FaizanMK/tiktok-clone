import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";

function Video() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        className="video__player"
        loop
        // controls
        onClick={onVideoPress}
        ref={videoRef}
        src="https://v16-webapp.tiktok.com/ce2c3e2ab80cab5fe70291f473201637/63421c9e/video/tos/useast2a/tos-useast2a-pve-0037-aiso/dfae91ae6f3f4389823082ffd17b577f/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3312&bt=1656&cs=0&ds=3&ft=eXd.6HKVMyq8ZvMvWhe2N0Kfml7Gb&mime_type=video_mp4&qs=0&rc=aTw6NjhpZTg2ODc5OGY4NkBpM25wZzk6ZmU4ZjMzZjgzM0BhM2JjNGEzXjIxMy0tMzQ1YSNkNmZmcjQwMW5gLS1kL2Nzcw%3D%3D&l=202210081856390102452472031D499327&btag=80000"
      ></video>
      <VideoFooter />
      {/* VideoFooter */}
      {/* vidoeSidebar */}
    </div>
  );
}

export default Video;

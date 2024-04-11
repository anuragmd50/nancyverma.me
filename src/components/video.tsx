"use client";

import React, { useRef, useState } from "react";

export const Video = ({ src, poster }: { src: string; poster?: string }) => {
  const [isPlaying, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const ref = useRef<HTMLVideoElement>(null);

  const play = () => {
    ref.current?.play();
    setPlaying(true);
  };

  const pause = () => {
    ref.current?.pause();
    setPlaying(false);
  };

  return (
    <div
      className="relative bg-gray-200 h-full w-full"
      onMouseEnter={play}
      onMouseOver={play}
      onMouseOut={pause}
      onMouseLeave={pause}
      onClick={() => setMuted(!muted)}
    >
      <video controls={false} ref={ref} muted={muted} poster={poster}>
        <source src={src} type="video/mp4" />
      </video>

      <button
        className={`absolute top-2 right-2 bg-[rgba(0,0,0,0.7)] rounded-full p-3 transition-all duration-200  ${
          isPlaying ? "opacity-[0.6]" : "opacity-0"
        } hover:bg-[rgba(0,0,0,0.9)]`}
        onClick={() => {
          if (isPlaying) setMuted(!muted);
        }}
      >
        {muted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fff"
            className="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fff"
            className="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

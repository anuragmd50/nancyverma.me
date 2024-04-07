"use client";

import Image from "next/image";
import React, { useRef } from "react";

const ImageHoverComponent = () => {
  const hoverImageRef = useRef<HTMLImageElement | null>(null);
  const imageContainerRef = React.useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (hoverImageRef.current) {
      hoverImageRef.current.style.display = "block";
    }
  };

  const handleMouseMove = (e: any) => {
    if (!imageContainerRef?.current || !hoverImageRef.current) return;

    const boundingRect = imageContainerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - boundingRect.left;
    const offsetY = e.clientY - boundingRect.top;

    const x = offsetX - hoverImageRef.current.width / 2;
    const y = offsetY - hoverImageRef.current.height / 2;

    hoverImageRef.current.style.top = `${y}px`;
    hoverImageRef.current.style.left = `${x}px`;
  };

  const handleMouseLeave = () => {
    if (hoverImageRef.current) {
      hoverImageRef.current.style.display = "none";
    }
  };

  return (
    <div
      className="lg:ml-auto relative overflow-hidden"
      ref={imageContainerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src="/images/nancy-image.jpeg"
        alt="Short Image"
        width={350}
        height={400}
        className="w-full lg:w-[350px] lg:h-full object-contain z-10 ml-auto"
      />

      <Image
        src="/images/crown.png"
        alt="Crown Image"
        width={100}
        height={100}
        className="absolute w-[70px] h-[70px] z-20"
        ref={hoverImageRef}
        style={{ display: "none", top: 0, left: 0 }}
      />
    </div>
  );
};

export default ImageHoverComponent;

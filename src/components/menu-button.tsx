import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";

interface Props {
  isOpen?: boolean;
  color?: string;
  strokeWidth?: string | number;
  onClick?: () => void;
  className?: string;
}

const MenuButton1 = ({
  isOpen = false,
  strokeWidth = 1.2,
  onClick,
  className,
  ...props
}: Props) => {
  const width = 24;
  const height = 24;

  const variant = isOpen ? "opened" : "closed";

  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
      stroke: "#000",
      transition: {
        duration: 0.7,
      },
    },
    opened: {
      rotate: 45,
      translateY: 0.1,
      stroke: "#fff",
      transition: {
        duration: 0.7,
      },
    },
  };

  const center = {
    closed: {
      opacity: 1,
      stroke: "#000",
      transition: {
        duration: 0.7,
      },
    },
    opened: {
      opacity: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
      stroke: "#000",
      transition: {
        duration: 0.7,
      },
    },
    opened: {
      rotate: -45,
      translateY: -2.5,
      stroke: "#fff",
      transition: {
        duration: 0.7,
      },
    },
  };

  const lineProps = {
    strokeWidth: strokeWidth as number,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
  };

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full ${
    isOpen ? "bg-white" : "bg-black"
  } transition ease transform duration-300`;

  const unitHeight = 4;
  const unitWidth = (unitHeight * (width as number)) / (height as number);

  return (
    <button
      className={
        (cn("flex flex-col h-12 w-12 justify-center items-center group"),
        className)
      }
      onClick={onClick}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </button>
  );

  return (
    // <button className={className} onClick={onClick}>
    {
      /* <motion.svg
        viewBox={`0 0 ${unitWidth} ${unitHeight}`}
        overflow="visible"
        preserveAspectRatio="none"
        width={width}
        height={height}
        {...props}
      >
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="0"
          y2="0"
          variants={top}
          {...lineProps}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="1.3"
          y2="1.3"
          variants={center}
          {...lineProps}
        />
        <motion.line
          x1="0"
          x2={unitWidth}
          y1="2.6"
          y2="2.6"
          variants={bottom}
          {...lineProps}
        />
      </motion.svg>
    </button> */
    }
  );
};

const MenuButton = ({
  isOpen = false,
  strokeWidth = 1.2,
  onClick,
  className,
  ...props
}: Props) => {
  const genericHamburgerLine = `h-[2px] w-6 my-[3px] rounded-full ${
    isOpen ? "bg-white" : "bg-black"
  } transition ease transform duration-500 ${
    !isOpen ? "delay-300" : "delay-0"
  }`;

  return (
    <button
      className={cn(
        "z-50 lg:hidden flex flex-col justify-center items-center group",
        className
      )}
      onClick={onClick}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "rotate-45 translate-y-[8px]" : ""
        }`}
      />
      <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""}`} />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "-rotate-45 -translate-y-[8px]" : ""
        }`}
      />
    </button>
  );
};

export { MenuButton };

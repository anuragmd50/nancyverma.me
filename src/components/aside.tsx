"use client";

import * as React from "react";
import StickyBox from "react-sticky-box";
import { useAnimate } from "framer-motion";
import { Section } from "@/types";

function scrollTo(id: string, offset?: number) {
  const element = document.getElementById(id);

  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - (offset || 0);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

const AsideElement = ({
  section,
  isSelected = false,
  onClick,
}: {
  section: Section;
  isSelected?: boolean;
  onClick?: () => void;
}) => {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    if (!scope.current) return;

    if (isSelected) {
      animate(
        scope.current,
        { backgroundColor: "#000", width: 40 },
        { duration: 0.5 }
      );
    } else {
      animate(
        scope.current,
        { backgroundColor: "rgb(156 163 175)", width: 2 },
        { duration: 0.5 }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSelected]);

  return (
    <div
      // href={"#" + section.id}
      key={section?.name}
      className="flex items-center my-1 text-xl cursor-pointer py-1 px-2 gap-2"
    >
      <div className={`h-[2px] rounded-full`} ref={scope} />
      <div
        onClick={() => {
          scrollTo(section?.id, 120);
          if (onClick) onClick();
        }}
        className={`${
          isSelected ? "text-black" : "text-gray-400"
        } transition hover:text-black`}
      >
        {section?.name}
      </div>
    </div>
  );
};

export const Aside = (props: { sections: Section[]; inView: string }) => {
  const [selected, setSelectedSection] = React.useState("");
  const { sections = [], inView } = props;

  React.useEffect(() => {
    if (inView) {
      setSelectedSection(inView);
    }
  }, [inView]);

  return (
    <StickyBox offsetTop={100} className="hidden md:block min-w-[250px]">
      {sections.map((section) => (
        <AsideElement
          key={section.name}
          section={section}
          isSelected={selected === section?.id}
          // onClick={() => setSelectedSection(section.id)}
        />
      ))}
    </StickyBox>
  );
};

"use client";

import { useState, useEffect } from "react";

export function Accordion({
  label,
  content,
}: {
  label: string;
  content: string;
}) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    setAccordionOpen(false);
  }, []);

  return (
    <div className="py-3 border-b">
      <h2>
        <button
          className="flex items-center justify-between w-full text-left font-medium"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={label}
        >
          <span>{label}</span>
          <svg
            className="fill-slate-700 shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
        </button>
      </h2>
      <div
        id={label}
        role="region"
        aria-labelledby={label}
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden pt-2">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

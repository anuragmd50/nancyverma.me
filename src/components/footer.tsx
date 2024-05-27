"use client";

import { useEffect, useRef } from "react";
import { useScroll, motion, useTransform, useInView } from "framer-motion";
import UnderLineLink from "./underline-link";

function Footer({
  onViewChange,
}: {
  onViewChange?: (inView: boolean) => void;
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  const inView = useInView(container);

  useEffect(() => {
    if (onViewChange) onViewChange(inView);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <footer id="contact">
      <motion.div
        style={{ y, minHeight: 500 }}
        ref={container}
        className="bg-primary p-8 md:p-16 lg:p-20 xl:p-28 relative text-[#fff]"
      >
        <div className="flex justify-between flex-col md:flex-row gap-14 md:gap-0">
          <div className="flex-[2]">
            <p className="text-lg md:text-xl lg:text-2xl font-normal w-full lg:w-[70%]">
              Bad design is everywhere, but fortunately, it isn’t difficult to
              design things that are understandable, usable, and enjoyable.
            </p>

            <p className="md:mb-3 mt-8 font-georgia font-bold text-3xl md:text-4xl lg:text-5xl xl:text-8xl">
              Let’s Work!
            </p>
          </div>
        </div>

        <div className="flex lg:justify-between lg:items-center mt-8 md:mt-12 border-b border-white pb-4 flex-col lg:flex-row">
          <div className="flex-1">
            <a href="mailto:nancyverma396@gmail.com" className="text-xl">
              nancyverma396@gmail.com
            </a>
          </div>

          <div className="flex-1 flex items-center lg:justify-between gap-4 mt-4 lg:mt-0">
            <a
              href="https://www.behance.net/nancyverma5"
              className="lg:ml-auto w-12 h-12 border rounded-xl border-white p-2 flex items-center justify-center"
            >
              <svg
                width="30"
                height="20"
                viewBox="0 0 30 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0216 8.68084C12.628 8.36011 13.0864 8.00289 13.4006 7.61686C13.9595 6.92163 14.2353 5.99977 14.2353 4.85705C14.2353 3.74505 13.9595 2.79439 13.4079 1.99736C12.4874 0.699077 10.9294 0.0345697 8.72673 0H0V18.731H8.13679C9.05366 18.731 9.90295 18.6484 10.6883 18.4794C11.4737 18.3085 12.1531 17.9955 12.7285 17.5384C13.2399 17.1408 13.6672 16.6472 14.007 16.0653C14.5439 15.1857 14.8124 14.189 14.8124 13.0789C14.8124 12.0034 14.5768 11.0873 14.1092 10.3344C13.6362 9.58157 12.9421 9.03038 12.0216 8.68084ZM3.59991 3.2534H7.53041C8.39431 3.2534 9.10662 3.35134 9.66551 3.54532C10.3121 3.82764 10.6354 4.40188 10.6354 5.27764C10.6354 6.06315 10.3888 6.61242 9.90113 6.92163C9.40981 7.23083 8.77239 7.3864 7.99067 7.3864H3.59991V3.2534ZM9.81528 15.1511C9.38059 15.372 8.76873 15.4815 7.98519 15.4815H3.59991V10.4861H8.04546C8.81987 10.4919 9.4226 10.5995 9.85364 10.8011C10.6207 11.166 11.0025 11.8344 11.0025 12.8119C11.0025 13.9642 10.608 14.7401 9.81528 15.1511ZM18.6735 0.873846H26.4121V3.20538H18.6735V0.873846ZM29.1007 10.0752C28.9399 8.99005 28.5856 8.03554 28.034 7.21163C27.4295 6.27825 26.6624 5.59453 25.729 5.16241C24.7994 4.72837 23.7528 4.51135 22.5876 4.51327C20.6315 4.51327 19.0425 5.15665 17.8133 6.43381C16.5877 7.71481 15.974 9.55661 15.974 11.9573C15.974 14.5174 16.6516 16.3668 18.0142 17.5019C19.3712 18.6388 20.9383 19.2054 22.7172 19.2054C24.8706 19.2054 26.5455 18.5313 27.7418 17.1869C28.5071 16.338 28.9399 15.5026 29.0349 14.6825H25.4697C25.2633 15.0878 25.024 15.4047 24.7501 15.6351C24.2533 16.0576 23.6067 16.2689 22.8141 16.2689C22.0597 16.2689 21.4205 16.0941 20.8872 15.7465C20.0068 15.1896 19.5466 14.2139 19.4881 12.8254H29.2175C29.2322 11.6289 29.1956 10.7089 29.1007 10.0752ZM19.5758 10.4343C19.7036 9.53356 20.0141 8.81912 20.5073 8.29097C21.0004 7.76474 21.6981 7.49971 22.5912 7.49779C23.4149 7.49779 24.1035 7.74554 24.6642 8.24296C25.2176 8.74422 25.53 9.4721 25.5939 10.4343H19.5758Z"
                  fill="white"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/nancy-verma"
              className="w-12 h-12 border rounded-xl border-white p-2 flex items-center justify-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_70_1649)">
                  <path
                    d="M23.6042 23.377L23.61 23.376V14.8027C23.61 10.6086 22.7071 7.37773 17.8039 7.37773C15.4468 7.37773 13.865 8.67123 13.2192 9.89752H13.151V7.76929H8.50199V23.376H13.3429V15.6482C13.3429 13.6134 13.7286 11.6459 16.2484 11.6459C18.7312 11.6459 18.7682 13.968 18.7682 15.7787V23.377H23.6042ZM0.619233 7.77026H5.46597V23.377H0.619233V7.77026ZM3.04065 0.000488281C1.49098 0.000488281 0.233521 1.25795 0.233521 2.80762C0.233521 4.35729 1.49098 5.64105 3.04065 5.64105C4.59032 5.64105 5.84778 4.35729 5.84778 2.80762C5.84727 2.06328 5.55135 1.34958 5.02502 0.823248C4.4987 0.29692 3.78499 0.00100429 3.04065 0.000488281Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_70_1649">
                    <rect
                      width="23.3765"
                      height="23.3765"
                      fill="white"
                      transform="translate(0.233521 0.000488281)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>

            {/* <button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="block"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
                fill="none"
              >
                <circle cx={25} cy={25} r={25} fill="#fff" />
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M25.5 16.667a.5.5 0 0 1 .353.146l6.667 6.667a.5.5 0 1 1-.707.707L26 18.374v15.46a.5.5 0 1 1-1 0v-15.46l-5.813 5.813a.5.5 0 0 1-.707-.707l6.666-6.667a.5.5 0 0 1 .354-.146Z"
                  clipRule="evenodd"
                />
              </svg>
            </button> */}
          </div>
        </div>

        {/* <div className="flex justify-between mt-8 md:mt-16 flex-col md:flex-row gap-8 md:gap-0">
          <p className="text-[#858e97] text-sm md:text-base">
            Copyright @ {new Date().getFullYear()} Nancy Verma
          </p>

          <p className="text-[#858e97] text-sm md:text-base">
            Developed by{" "}
            <a
              href="https://kumarbrijesh.com"
              rel="noreferrer"
              target="blank"
              className="hover:text-white transition-all duration-300 inline-block"
            >
              Brijesh Kumar
            </a>
          </p>
        </div> */}
      </motion.div>
    </footer>
  );
}

export default Footer;

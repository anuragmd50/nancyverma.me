import Image from "next/image";
import * as React from "react";
import Link from "next/link";

export const MoreCaseStudyCard = ({
  image,
  name,
  shortDescription,
  link,
}: {
  image: string;
  name: string;
  shortDescription: string;
  link: string;
}) => {
  return (
    <Link className="bg-white rounded-lg shadow-lg" href={link}>
      <div className="w-full h-[200px] overflow-hidden rounded-t-lg">
        <Image
          src={image}
          width={500}
          height={400}
          alt={name}
          className="w-full h-full object-cover rounded-t-lg hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>

      <div className="p-8">
        <h3 className="font-medium text-2xl font-poppins">{name}</h3>
        <p className="text-lg mt-2">{shortDescription}</p>

        <button className="group/btn font-medium text-lg gap-2 text-black flex items-center mt-6">
          Read Case Study{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            className="mt-[3px] group-hover/btn:translate-x-1 transition-all duration-300"
          >
            <path
              d="M4.50152 0.690992L5.02615 0.166368C5.24829 -0.0557709 5.60749 -0.0557709 5.82727 0.166368L10.4213 4.75802C10.6434 4.98016 10.6434 5.33936 10.4213 5.55914L5.82727 10.1532C5.60513 10.3753 5.24592 10.3753 5.02615 10.1532L4.50152 9.62853C4.27702 9.40403 4.28175 9.03774 4.51098 8.81796L7.35861 6.10503L0.56683 6.10503C0.252526 6.10503 -0.000333786 5.85217 -0.000333786 5.53787V4.78165C-0.000333786 4.46735 0.252526 4.21449 0.56683 4.21449L7.35861 4.21449L4.51098 1.50156C4.27938 1.28179 4.27466 0.915495 4.50152 0.690992Z"
              fill="#000"
            />
          </svg>
        </button>
      </div>
    </Link>
  );
};

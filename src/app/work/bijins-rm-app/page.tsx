"use client";

import Image from "next/image";
import * as React from "react";
import { InView } from "react-intersection-observer";

import { Aside } from "@/components/aside";
import { MoreCaseStudyCard } from "@/components/more-casestudy-card";
import { cn } from "@/utils";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Reveal } from "@/components/reveal-animation";

// SHARED COMPONENTS ->

const SectionHeader = ({ children }: { children: any }) => {
  return (
    <h2 className="text-2xl font-medium xl:text-3xl text-gray-800 my-6">
      {children}
    </h2>
  );
};

const ImageContainer = ({
  children,
  caption,
  className,
  link,
}: {
  children: React.ReactNode;
  caption?: string;
  className?: string;
  link: string;
}) => {
  return (
    <div className={cn("flex flex-col items-center my-6", className)}>
      <Link href={link} target="_blank" rel="noreferrer">
        <div className="w-full border rounded-md p-6 xl:p-14  flex items-center justify-center hover:cursor-zoom-in">
          {children}
        </div>
      </Link>
      <span className="text-sm italic mt-2 text-[#5B659A]">{caption}</span>
    </div>
  );
};

const ProgressBar = ({
  text,
  color,
  progress,
}: {
  text: string;
  color?: "green" | "orange";
  progress: number;
}) => {
  return (
    <div className="text-sm">
      <div className="flex items-center justify-between mb-1">
        <div>{text}</div>
        <div
          className={color === "orange" ? "text-orange-500" : "text-green-500"}
        >
          {progress} %
        </div>
      </div>
      <div className="relative">
        <div className="w-full h-2 rounded-full bg-[#E0E0EC]" />
        <div
          className={cn(
            "absolute top-0 left-0 w-full h-2 rounded-full bg-[#E0E0EC]",
            color === "orange" ? "bg-orange-500" : "bg-green-500"
          )}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
};

const UserResearchCard = ({
  backgroundColor = "#FEF4EE",
  image,
  name,
  description,
}: {
  backgroundColor: string;
  image: string;
  name: string;
  description: string;
}) => {
  const bgColor = `bg-[${backgroundColor}]`;
  return (
    <div
      className={cn(
        "px-6 py-6 rounded-lg flex items-center gap-4 relative",
        bgColor
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="54"
        height="53"
        viewBox="0 0 54 53"
        fill="none"
        className="absolute top-0 -left-[15px]"
      >
        <path
          d="M0.370593 1.12584C14.954 9.21493 27.7152 37.4888 32.9007 52.4416C33.0552 52.8871 33.6852 52.8925 33.8497 52.4505L53.1176 0.674386C53.2392 0.347704 52.9976 0 52.649 0H0.632292C0.0803373 0 -0.112082 0.858111 0.370593 1.12584Z"
          fill={backgroundColor}
        />
      </svg>

      <Image
        src={image}
        width={100}
        height={100}
        className="w-[70px] h-[70px] rounded-full object-cover"
        alt="praminder-singh"
      />

      <div>
        <span className="font-medium text-gray-900 block -mb-[4px]">
          {name}
        </span>
        <div className="text-lg mt-2" style={{ lineHeight: 1.4 }}>
          {description}
        </div>
      </div>
    </div>
  );
};

// SECTION COMPONENTS ->

const Summary = () => {
  return (
    <div className="pt-1 mb-10 text-xl font-normal text-gray-500">
      <span className="text-xl font-light mb-2">Product case study</span>
      <h1 className="text-3xl font-medium lg:text-4xl xl:text-5xl text-black">
        Bijins RM App
      </h1>

      <p className="my-3">
        Bijinis is B2B app for retailers and factories. Bijnis is
        revolutionising the way manufacturers operate and scale their factories
        by digitising their Demand/Supply/Capital/Operations. It has a motto to
        &quot;Take Factories to the World&quot;. Bijnis has multiple platforms
        for Demand/Supply/Capital/Operations.
      </p>
      <p className="my-3">
        In this case study, I will be focusing on the Operation Side RM App to
        make sure, RM collects the maximum Gross Merchandise Value (GMV).
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 my-3 gap-12 xl:gap-16">
        <div>
          <h3 className="font-medium text-gray-900 mb-3">Role</h3>
          <ul className="list-disc ml-6">
            <li>Product Designer & Researcher</li>
            <li>October 2023 - January 2024</li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-gray-900 mb-3">Methods</h3>
          <p>
            User Research / User Interview / User Persona / User Flow / Product
            Design / Usability Testing
          </p>
        </div>

        <div>
          <h3 className="font-medium text-gray-900 mb-3">Tools</h3>
          <div className="flex gap-6 flex-wrap">
            <Image
              alt="figma"
              src="/images/figma.png"
              width={40}
              height={40}
              className="w-[35px] h-[35px] object-contain"
            />
            <Image
              alt="figma"
              src="/images/jaba.png"
              width={40}
              height={40}
              className="w-[35px] h-[35px] object-contain"
            />
            <Image
              alt="figma"
              src="/images/slack.png"
              width={40}
              height={40}
              className="w-[35px] h-[35px] object-contain"
            />
            <Image
              alt="figma"
              src="/images/google-meet.png"
              width={40}
              height={40}
              className="w-[35px] h-[35px] object-contain"
            />
            <Image
              alt="figma"
              src="/images/excel.png"
              width={40}
              height={40}
              className="w-[35px] h-[35px] object-contain"
            />
            <Image
              alt="figma"
              src="/images/diagram.png"
              width={40}
              height={40}
              className="w-[35px] h-[35px] object-contain"
            />
            <Image
              alt="figma"
              src="/images/notion.png"
              width={40}
              height={40}
              className="w-[35px] h-[35px] object-contain"
            />
          </div>
        </div>
      </div>

      <SectionHeader>About RM App</SectionHeader>
      <p className="my-3">
        The RM application functions as a dedicated CRM tool tailored for
        Relationship Managers (RMs) to efficiently handle leads (both existing
        Bijnis app users and potential users) and track orders. Beyond
        traditional CRM features, the RM app serves as a comprehensive guide for
        RMs, offering complete information on their daily tasks, targets, and
        providing insights into their performance and progress. This
        multifaceted tool empowers RMs to excel in their roles by offering
        guidance. Additionally, it assists Bijins Company in gaining deeper
        insights into RM activities, facilitating thorough work analysis, and
        providing valuable insights for enhanced sales product strategies.
      </p>

      <SectionHeader>Who are RMs</SectionHeader>
      <p className="my-3">
        Relationship Managers play a crucial role in the success of the Bijnis
        Sourcing B2B app by acting as liaisons between the app and shop
        retailers. Their primary responsibility is to introduce the Bijnis app
        to retailers, encouraging them to place orders through the platform.
        Remarkably, RMs contribute significantly to the Net Gross Merchandise
        Value (GMV), responsible for 75% of its collection.
      </p>
      <strong className="font-medium text-orange-500">
        Roles and Responsibilities of Relationship Managers (RMs):
      </strong>
      <ul className="flex flex-col gap-2 my-3 list-disc ml-6">
        <li>
          <strong className="font-medium text-gray-700">
            Introduction and Onboarding:
          </strong>{" "}
          Introduce Bijnis app to retailers, emphasizing benefits.Guide
          retailers through onboarding procedures.
        </li>
        <li>
          <strong className="font-medium text-gray-700">Driving Orders:</strong>{" "}
          Encourage and assist retailers in placing orders.Stay updated on
          market trends to advise on purchasing decisions.
        </li>
        <li>
          <strong className="font-medium text-gray-700">
            Repeat Buyer Engagement:
          </strong>{" "}
          Conduct regular meetings with repeat buyers.Address feedback to
          enhance their app experience.
        </li>
        <li>
          <strong className="font-medium text-gray-700">
            Order Delivery Monitoring:
          </strong>{" "}
          Ensure prompt and issue-free order deliveries.Collaborate with
          logistics to resolve delivery challenges.
        </li>
        <li>
          <strong className="font-medium text-gray-700">
            Problem Resolution:
          </strong>{" "}
          Act as a point of contact for issue resolution.Provide timely
          solutions for a seamless experience.
        </li>
      </ul>
    </div>
  );
};

const Discovery = () => {
  return (
    <div className="pt-1 mb-10 text-xl font-normal text-gray-600">
      <SectionHeader>Problem Analysis</SectionHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-12 my-3">
        <div className="bg-[#FFF8E5] rounded-lg p-6">
          <h3 className="font-medium text-gray-900 mb-3">Business Problems</h3>
          <ul className="list-disc ml-4 text-lg flex flex-col gap-3">
            <li>
              Lack of transparency in tracking & understanding the work
              performed by Relationship Managers (RMs).
            </li>
            <li>
              The Gross Merchandise Value (GMV) has not demonstrated
              satisfactory growth, reflecting a crucial concern regarding the
              company&apos;s overall market competitiveness and revenue
              generation.
            </li>
            <li>Increasing NDR and RTO&apos;s.</li>
            <li>
              Unsatisfied customers experiencing lack of assistance from RM.
            </li>
          </ul>
        </div>

        <div className="bg-[#FEF4EE] rounded-lg p-6">
          <h3 className="font-medium text-gray-900 mb-3">RM&apos;s Problems</h3>
          <ul className="list-disc ml-4 text-lg flex flex-col gap-3">
            <li>
              The application flow is identified as non-smooth, hindering
              RMs&apos; efficiency.
            </li>
            <li>
              For Checking orders they need to navigate individual retailer
              profiles and use the retailer&apos;s app for order tracking, which
              isn&apos;t practical for regular use.
            </li>
            <li>
              Need to call Sales and Operations Team Leads for insights on
              trending products in a specific category.
            </li>
            <li>No information about logistics.</li>
          </ul>
        </div>
      </div>

      <SectionHeader>StakeHolder Interview</SectionHeader>
      <p className="my-3">
        Stakeholder interviews are your UX compass. They help you navigate
        business goals, user needs, and technical constraints.Conducting them
        successfully ensures your design decisions align with both user
        expectations and business objectives. Some Stakeholder que and ans are
        listed below.
      </p>

      <div className="my-3 flex-col gap-3 flex">
        <div>
          <strong className="font-medium text-gray-900 block mb-1">
            Que. What are the features you want?
          </strong>
          Ans - Enable the capability to check and view RM activities
          effortlessly. Implement a robust verification system to ensure the
          accuracy of RM-reported meetings and data. Incorporate GPS or location
          tracking to validate the authenticity of meeting locations.
        </div>

        <div>
          <strong className="font-medium text-gray-900 block mb-1">
            Que. What benefits the product should bring?
          </strong>
          Ans - Develop tools and resources within the app to guide RMs in
          taking actions that lead to increased Gross Merchandise Value (GMV)
          and order volume.
        </div>

        <div>
          <strong className="font-medium text-gray-900 block mb-1">
            Que. What particular problem do you think new features should solve?
          </strong>
          Ans - New product should Provide a user-friendly interface for RMs to
          monitor their work progress and review their undertaken steps.
          Implement a transparent system that allows quick and easy access to RM
          activity logs. Enhance the user experience by ensuring that the
          platform allows RMs to track their tasks and steps with clarity.
        </div>
      </div>
    </div>
  );
};

const UserResearch = () => {
  return (
    <div className="pt-1 mb-10 text-xl font-normal text-gray-600">
      <SectionHeader>User Research</SectionHeader>

      <p className="my-3">
        I interviewed around 12 to 16 RMs and TLs in different locations. I
        visited more than four cities, including Agra, Delhi, Amritsar, and
        Ludhiana. My intent was to conduct one-on-one interviews with each of
        them to understand their journey and how they are currently using the
        application, with the goal of identifying pain points.
      </p>

      <p className="my-3">
        I spent an entire day with them, even in the market, to observe how they
        approach retailers and how frequently they use the app. My main
        objective is to gain insights into the use of the app as perceived by
        RMs and TLs. To gather better insights and feedback, I prepared a list
        of questions to ask the RMs.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 my-8">
        <Image
          src="/images/work/rm-app/rm-app-user-research-1.png"
          width={300}
          height={300}
          alt="rm-app-user-research-1"
          className="h-[280px] object-cover rounded-xl"
        />
        <Image
          src="/images/work/rm-app/rm-app-user-research-2.png"
          width={300}
          height={300}
          alt="rm-app-user-research-1"
          className="h-[280px] object-cover rounded-xl"
        />
        <Image
          src="/images/work/rm-app/rm-app-user-research-3.png"
          width={300}
          height={300}
          alt="rm-app-user-research-1"
          className="h-[280px] object-cover rounded-xl"
        />
      </div>

      <SectionHeader>Quantitive Research</SectionHeader>
      <p className="my-3">
        With the assistance of the Operations team, I successfully conducted a
        survey during the nationwide daily meeting for all RMs via Google Meet.
      </p>
      <p className="my-3">
        In this quantitative research, multiple questions were presented, and
        participants were asked to provide their responses by filling out forms.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 text-xl">
        <div className="border p-6 rounded-lg">
          <div className="border-b-2 border-dashed pb-3 mb-3">
            <strong className="font-medium text-gray-900 block mb-1">
              Que. What is the most helpful feature of app?
            </strong>
            Ans. Order Detail , GMV Information, & Buyer detail.
          </div>
          <ProgressBar text="Vote Result" progress={85} color="green" />
        </div>

        <div className="border p-6 rounded-lg">
          <div className="border-b-2 border-dashed pb-3 mb-3">
            <strong className="font-medium text-gray-900 block mb-1">
              Que. Which app do you use everyday ?
            </strong>
            Ans. WhatsApp, Youtube, Facebook and Bijnis app.
          </div>
          <ProgressBar text="Vote Result" progress={71} color="orange" />
        </div>

        <div className="border p-6 rounded-lg">
          <div className="border-b-2 border-dashed pb-3 mb-3">
            <strong className="font-medium text-gray-900 block mb-1">
              Que. Is it easy for you to understand/ find the data in the app?{" "}
            </strong>
            Ans. No app flow is bit complicated with over data.{" "}
          </div>
          <ProgressBar text="Vote Result" progress={68} color="orange" />
        </div>

        <div className="border p-6 rounded-lg">
          <div className="border-b-2 border-dashed pb-3 mb-3">
            <strong className="font-medium text-gray-900 block mb-1">
              Que. Which feature or module you use the most in app?{" "}
            </strong>
            Ans. Order detail and Create lead{" "}
          </div>
          <ProgressBar text="Vote Result" progress={80} color="green" />
        </div>
      </div>

      <SectionHeader>Qualitative Research</SectionHeader>
      <p className="my-3">
        During my field visits to multiple cities, I conducted one-on-one
        interviews with RMs to gain insights into their pain points, work
        behavior, psychological considerations, and expectations from the app.
        This approach aimed to provide a comprehensive understanding of the
        challenges they face and their requirements for an improved user
        experience.
      </p>

      <ul className="my-3 list-disc ml-4 font-medium text-gray-900 flex flex-col gap-1">
        <li>Which information you want to see on top? </li>
        <li>Is app is helping you to track your meetings and work?</li>
        <li>How do you decide which Retailer to visit today?</li>
        <li>What are your pain points you are facing due to app?</li>
        <li>How you keep yourself updated with Trendy products?</li>
        <li>How do you track your progress and incentives?</li>
        <li>What initiative you take to control cancellation of orders?</li>
        <li>What features/data you want in app which can help you?</li>
        <li>What are error or bugs you find in the current app?</li>
        <li>
          What according to you is the biggest reason for cancellation of
          orders?
        </li>
        <li>What keeps you motivated to collect more GMV?</li>
      </ul>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 my-8">
        <UserResearchCard
          backgroundColor="#FEF4EE"
          image="/images/praminder-singh.png"
          name="Praminder Singh"
          description="Its always hard to go inside each buyer’s detail to check the information about their orders."
        />
        <UserResearchCard
          backgroundColor="#FFF8E5"
          image="/images/imran-khan.png"
          name="Imran Khan"
          description="No idea about our progress by end of month it become hard to calculate incentives"
        />
        <UserResearchCard
          backgroundColor="#FFF8E5"
          image="/images/dheeraj-rai.png"
          name="Dheeraj Rai"
          description="To monitor orders, we have to visit the retailer's shop each time, hindering our ability to promptly address delays."
        />
        <UserResearchCard
          backgroundColor="#FEF4EE"
          image="/images/abhishek-gulkarni.png"
          name="Abhishek Gulkarni"
          description="We have to call bijnis team or our leads to get information about current trending products of particular category."
        />
      </div>

      <div className="text-gray-900 border rounded-md my-6 lg:my-12 p-6">
        <div className="flex items-center gap-4 mb-6">
          <span className="block p-2 shadow bg-orange-100 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <g clip-path="url(#clip0_2206_2061)">
                <path
                  d="M14.625 25.9993H11.375C10.6167 25.9993 9.75002 25.3493 9.75002 24.0493V21.7743C9.75002 20.691 9.20835 19.716 8.34169 18.9577C6.39169 17.441 5.41669 15.2743 5.41669 12.891C5.52502 8.77435 8.88335 5.52435 12.8917 5.41602C14.95 5.41602 16.9 6.17435 18.3084 7.58268C19.7167 8.99102 20.5834 10.941 20.5834 12.9993C20.5834 15.2743 19.6084 17.441 17.7667 18.8493C16.7917 19.6077 16.25 20.7993 16.25 21.8827V24.3743C16.25 25.241 15.4917 25.9993 14.625 25.9993ZM13 6.49935C9.53336 6.49935 6.60835 9.42435 6.50002 12.891C6.50002 14.9493 7.36669 16.8993 8.99169 18.091C10.1834 19.066 10.8334 20.366 10.8334 21.7743V24.0493C10.8334 24.266 10.8334 24.916 11.375 24.916H14.625C14.95 24.916 15.1667 24.6993 15.1667 24.3743V21.8827C15.1667 20.4743 15.925 18.9577 17.1167 17.9827C18.6334 16.791 19.5 14.9493 19.5 12.9993C19.5 11.266 18.85 9.64102 17.55 8.34102C16.3584 7.14935 14.7334 6.49935 13 6.49935Z"
                  fill="#F47929"
                />
                <path
                  d="M15.7083 22.7493H10.2917C9.96667 22.7493 9.75 22.5327 9.75 22.2077C9.75 21.8827 9.96667 21.666 10.2917 21.666H15.7083C16.0333 21.666 16.25 21.8827 16.25 22.2077C16.25 22.5327 16.0333 22.7493 15.7083 22.7493Z"
                  fill="#F47929"
                />
                <path
                  d="M13 3.25C12.675 3.25 12.4583 3.03333 12.4583 2.70833V0.541667C12.4583 0.216667 12.675 0 13 0C13.325 0 13.5416 0.216667 13.5416 0.541667V2.70833C13.5416 3.03333 13.325 3.25 13 3.25Z"
                  fill="#F47929"
                />
                <path
                  d="M20.2583 6.28411C20.15 6.28411 19.9333 6.28411 19.825 6.17578C19.6083 5.95911 19.6083 5.63411 19.825 5.41745L21.3416 3.90078C21.5583 3.68411 21.8833 3.68411 22.1 3.90078C22.3166 4.11745 22.3166 4.44245 22.1 4.65911L20.5833 6.17578C20.5833 6.17578 20.3666 6.28411 20.2583 6.28411Z"
                  fill="#F47929"
                />
                <path
                  d="M25.4583 13.5423H23.2917C22.9667 13.5423 22.75 13.3257 22.75 13.0007C22.75 12.6757 22.9667 12.459 23.2917 12.459H25.4583C25.7833 12.459 26 12.6757 26 13.0007C26 13.3257 25.7833 13.5423 25.4583 13.5423Z"
                  fill="#F47929"
                />
                <path
                  d="M21.775 22.3173C21.6666 22.3173 21.45 22.3173 21.3416 22.209L19.825 20.6923C19.6083 20.4757 19.6083 20.1507 19.825 19.934C20.0416 19.7173 20.3666 19.7173 20.5833 19.934L22.1 21.4507C22.3166 21.6673 22.3166 21.9923 22.1 22.209C22.1 22.3173 21.9916 22.3173 21.775 22.3173Z"
                  fill="#F47929"
                />
                <path
                  d="M4.22498 22.3173C4.11665 22.3173 3.89998 22.3173 3.79165 22.209C3.57498 21.9923 3.57498 21.6673 3.79165 21.4507L5.30832 19.934C5.52498 19.7173 5.84998 19.7173 6.06665 19.934C6.28332 20.1507 6.28332 20.4757 6.06665 20.6923L4.54998 22.209C4.44165 22.3173 4.33332 22.3173 4.22498 22.3173Z"
                  fill="#F47929"
                />
                <path
                  d="M2.70833 13.5423H0.541667C0.216667 13.5423 0 13.3257 0 13.0007C0 12.6757 0.216667 12.459 0.541667 12.459H2.70833C3.03333 12.459 3.25 12.6757 3.25 13.0007C3.25 13.3257 3.03333 13.5423 2.70833 13.5423Z"
                  fill="#F47929"
                />
                <path
                  d="M5.74165 6.28307C5.63332 6.28307 5.41665 6.28307 5.30832 6.17474L3.79165 4.54974C3.57498 4.33307 3.57498 4.00807 3.79165 3.79141C4.00832 3.57474 4.33332 3.57474 4.54998 3.79141L6.06665 5.30807C6.28332 5.52474 6.28332 5.84974 6.06665 6.06641C5.95832 6.17474 5.84998 6.28307 5.74165 6.28307Z"
                  fill="#F47929"
                />
                <path
                  d="M17.3333 13.5417C17.0083 13.5417 16.7916 13.325 16.7916 13C16.7916 10.9417 15.0583 9.20833 13 9.20833C12.675 9.20833 12.4583 8.99167 12.4583 8.66667C12.4583 8.34167 12.675 8.125 13 8.125C15.7083 8.125 17.875 10.2917 17.875 13C17.875 13.325 17.6583 13.5417 17.3333 13.5417Z"
                  fill="#F47929"
                />
              </g>
              <defs>
                <clipPath id="clip0_2206_2061">
                  <rect width="26" height="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <h3 className="font-semibold">Key Insights</h3>
        </div>
        <ul className="my-3 list-disc ml-4 flex flex-col gap-2 marker:text-orange-500">
          <li>
            RM is using only 30% of app. They are using mostly the data on the
            first view, not scrolling to see the complete data.
          </li>
          <li>
            RM gets no help regarding daily meetings and which Retailer to
            choose.
          </li>
          <li>App should have buyer’s app action data</li>
          <li>
            Logistic are the biggest issue for order cancelation and order delay
          </li>
          <li>Low motivation to work more, as RM can’t see progress.</li>
        </ul>
      </div>
    </div>
  );
};

const Define = () => {
  return (
    <div className="pt-1 mb-10 text-xl font-normal text-gray-600">
      <SectionHeader>Empathy Mapping</SectionHeader>
      <ImageContainer link="/images/work/rm-app/empathy-mapping.webp">
        <Image
          src="/images/work/rm-app/empathy-mapping.webp"
          width={1200}
          height={600}
          alt="empathy-mapping"
          className="object-contain rounded-md"
        />
      </ImageContainer>

      <SectionHeader>User Persona</SectionHeader>
      <ImageContainer link="/images/work/rm-app/user-persona.webp">
        <Image
          src="/images/work/rm-app/user-persona.webp"
          width={1200}
          height={600}
          alt="empathy-mapping"
          className="object-contain rounded-md"
        />
      </ImageContainer>
    </div>
  );
};

const Ideate = () => {
  return (
    <div className="pt-1 mb-10 text-xl font-normal text-gray-600">
      <SectionHeader>HMW Format & Prioritised Solution</SectionHeader>
      <ImageContainer link="/images/work/rm-app/hmw-format-prioritized-solution.webp">
        <Image
          src="/images/work/rm-app/hmw-format-prioritized-solution.webp"
          width={1200}
          height={600}
          alt="empathy-mapping"
          className="object-contain rounded-md"
        />
      </ImageContainer>

      <SectionHeader>Information Architecture</SectionHeader>
      <ImageContainer
        caption="Information Architechture - User Dashboard"
        link="/images/work/rm-app/info-architechture-dashboard.webp"
      >
        <Image
          src="/images/work/rm-app/info-architechture-dashboard.webp"
          width={1200}
          height={600}
          alt="empathy-mapping"
          className="object-contain rounded-md"
        />
      </ImageContainer>

      <ImageContainer
        caption="Information Architechture - All Orders"
        link="/images/work/rm-app/info-architechture-all-orders.webp"
      >
        <Image
          src="/images/work/rm-app/info-architechture-all-orders.webp"
          width={1200}
          height={600}
          alt="empathy-mapping"
          className="object-contain rounded-md"
        />
      </ImageContainer>

      {/* <ImageContainer>
        <Image
          src="/images/work/rm-app/info-architechture-daily-meetings.webp"
          width={1200}
          height={600}
          alt="empathy-mapping"
          className="object-contain rounded-md"
        />
      </ImageContainer> */}

      <ImageContainer
        caption="Information Architechture - Buyer's Action"
        link="/images/work/rm-app/info-architechture-buyers-action.webp"
      >
        <Image
          src="/images/work/rm-app/info-architechture-buyers-action.webp"
          width={1200}
          height={600}
          alt="empathy-mapping"
          className="object-contain rounded-md"
        />
      </ImageContainer>

      <ImageContainer
        caption="Information Architechture - Product Insight"
        link="/images/work/rm-app/info-architechture-product-insights.webp"
      >
        <Image
          src="/images/work/rm-app/info-architechture-product-insights.webp"
          width={1200}
          height={600}
          alt="empathy-mapping"
          className="object-contain rounded-md"
        />
      </ImageContainer>
    </div>
  );
};

const VisualDesigns = () => {
  return (
    <div className="pt-1 mb-10 text-xl font-normal text-gray-600">
      <div>
        <SectionHeader>Dashboard</SectionHeader>
        <p className="my-3">
          <strong className="block font-medium text-gray-900">
            Problem - The data was cluttered, creating RMs to track progress and
            generate increased GMV.
          </strong>
          Solution - The new dashboard employs gamification to highlight RMs
          progress, encouraging better performance for enhanced incentives. It
          prioritizes key data at the top, ensures a clear section division for
          easy comprehension, and presents essential actions prominently,
          enabling RMs to achieve desired outcomes with a single click. To
          monitor progress, RMs can conveniently review data on a daily basis,
          facilitating a more informed and actionable approach.
        </p>
        <ImageContainer
          caption="Design - Dashboard"
          link="/images/work/rm-app/design-dashboard.webp"
        >
          <Image
            src="/images/work/rm-app/design-dashboard.webp"
            width={1200}
            height={600}
            alt="Dashboard"
            className="object-contain rounded-md"
          />
        </ImageContainer>
      </div>

      <div>
        <SectionHeader>All Orders</SectionHeader>
        <p className="my-3">
          <strong className="block font-medium text-gray-900">
            Problem - Monitoring orders through different stages poses a
            challenge for RMs, particularly in preventing cancellations, which
            demands meticulous attention.
          </strong>
          Solution - The order page consolidates crucial data, facilitating easy
          tracking for RMs with essential information on order placement and
          delivery. Addressing a major pain point, a logistics tracking and call
          feature has been incorporated, enabling RMs to ensure timely
          deliveries by coordinating directly with logistics partners. RMs have
          the ability to filter orders by status and placement time. Within the
          detailed view of a specific order, RMs can take various significant
          actions, including providing ratings, initiating a repeat delivery for
          Non-Delivery Report (NDR), and managing dispositions for orders on
          hold.
        </p>
        <ImageContainer
          caption="Design - All Orders"
          link="/images/work/rm-app/design-all-orders.webp"
        >
          <Image
            src="/images/work/rm-app/design-all-orders.webp"
            width={1200}
            height={600}
            alt="All Orders"
            className="object-contain rounded-md"
          />
        </ImageContainer>
      </div>

      <div>
        <SectionHeader>Daily Meeting</SectionHeader>
        <p className="my-3">
          <strong className="block font-medium text-gray-900">
            Problem - Effectively tracking RMs work requires them to meet 10 to
            20 retailers daily. However, the absence of proper guidance hinders
            the meaningful completion of the meeting task, highlighting the need
            for clearer instructions or support mechanisms.
          </strong>
          Solution - The daily meeting serves as a comprehensive solution for
          RMs to identify low-hanging fruit—retailers who are likely to place
          orders easily. This page provides insights for a specific day,
          including retailers who added products, regular retailers yet to
          order, and follow-ups due. Such information aids RMs in prioritising
          meetings with retailers more inclined to place orders on that
          particular day.
        </p>
        <ImageContainer
          caption="Design - Daily Meeting"
          link="/images/work/rm-app/design-daily-meetings.webp"
        >
          <Image
            src="/images/work/rm-app/design-daily-meetings.webp"
            width={1200}
            height={600}
            alt="Daily Meeting"
            className="object-contain rounded-md"
          />
        </ImageContainer>
      </div>

      <div>
        <SectionHeader>Buyer&apos;s Action</SectionHeader>
        <p className="my-3">
          <strong className="block font-medium text-gray-900">
            Problem - How might we facilitate RMs in identifying retailers eager
            to place orders but in need of RM assistance?
          </strong>
          Solution - RMs serve as the primary interface between Bijnis and
          retailers. Many retailers prefer placing orders only after conversing
          with RMs. Observing retailer behaviour, where they load products into
          the truck but delay ordering, providing information about retailers
          with products in their trucks becomes crucial. This data empowers RMs
          to efficiently persuade these retailers to place orders, even through
          phone calls, eliminating the need for physical visits.
        </p>
        <ImageContainer
          caption="Design - Buyers action"
          link="/images/work/rm-app/design-buyers-action.webp"
        >
          <Image
            src="/images/work/rm-app/design-buyers-action.webp"
            width={1200}
            height={600}
            alt="Buyers action"
            className="object-contain rounded-md"
          />
        </ImageContainer>
      </div>

      <div>
        <SectionHeader>Product Insight</SectionHeader>
        <p className="my-3">
          <strong className="block font-medium text-gray-900">
            Problem - How might we help RMs to know market trending and most
            likely to get sold products?
          </strong>
          Solution : - To bridge the gap between our daily research on trending
          products and effectively communicating this information to
          Relationship Managers (RMs), we propose implementing the &quot;Product
          Insight&quot; feature. By integrating Bijnis&apos; intelligent product
          insights with RM access, this feature will empower RMs to promote
          high-demand products, enhancing sales even with retailers initially
          uninterested in buying.
        </p>
        <ImageContainer
          caption="Design - Product Insight"
          link="/images/work/rm-app/design-product-insight.webp"
        >
          <Image
            src="/images/work/rm-app/design-product-insight.webp"
            width={1200}
            height={600}
            alt="Product Insight"
            className="object-contain rounded-md"
          />
        </ImageContainer>
      </div>
    </div>
  );
};

const Test = () => {
  return (
    <div className="pt-1 mb-10 text-xl font-normal text-gray-600">
      <div>
        <SectionHeader>AB Testing</SectionHeader>
        <p className="my-3">
          While developing the meetings page, I needed to assess which version
          is more effective in terms of saving time and providing clear, helpful
          data for our RM team&apos;s understanding Solution - The new dashboard
          employs gamification to highlight RMs progress, encouraging better
          performance for enhanced incentives. It prioritizes key data at the
          top, ensures a clear section division for easy comprehension, and
          presents essential actions prominently, enabling RMs to achieve
          desired outcomes with a single click. To monitor progress, RMs can
          conveniently review data on a daily basis, facilitating a more
          informed and actionable approach.
        </p>
        <ImageContainer
          caption="AB Testing"
          link="/images/work/rm-app/ab-testing.webp"
        >
          <Image
            src="/images/work/rm-app/ab-testing.webp"
            width={1200}
            height={600}
            alt="Dashboard"
            className="object-contain rounded-md"
          />
        </ImageContainer>
      </div>

      <p className="my-3">
        While distributing prototypes to a group of RM&apos;s, the majority
        chose VERSION B, finding it more helpful for checking and providing
        clear information on the data. With a clear data division between
        insights and follow-ups, it became easier for RMs to understand the
        status of retailers. The inclusion of order counts facilitates a clear
        comparison between visits and no visits, all while saving time on
        scrolling.
      </p>

      <div>
        <SectionHeader>Usability Testing</SectionHeader>
        <p className="my-3">
          Usability testing involves evaluating a product&apos;s ease of use by
          observing real users interacting with it, aiming to identify and
          resolve usability issues to enhance overall user experience. I have
          done internal testing by sending app to 20 RM’s including top and
          least performer.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 text-xl">
        <div className="border p-6 rounded-lg">
          <div className="border-b-2 border-dashed pb-3 mb-3">
            <strong className="font-medium text-gray-900 block mb-1">
              Que. Are you able to find data easily.
            </strong>
            Ans. Yes, all the important information is easily accessible
          </div>
          <ProgressBar text="Vote Result" progress={86} color="green" />
        </div>

        <div className="border p-6 rounded-lg">
          <div className="border-b-2 border-dashed pb-3 mb-3">
            <strong className="font-medium text-gray-900 block mb-1">
              Que. Logistic related issue are solved?
            </strong>
            Ans. Yes, Logistic tracking has helped in reduction of NDR in just
            one month.
          </div>
          <ProgressBar text="Vote Result" progress={89} color="green" />
        </div>

        <div className="border p-6 rounded-lg">
          <div className="border-b-2 border-dashed pb-3 mb-3">
            <strong className="font-medium text-gray-900 block mb-1">
              Que. GMV data is clearly understandable?
            </strong>
            Ans. To a major extent although, it would be better if GMV will be
            divided based on PP and DP.
          </div>
          <ProgressBar text="Vote Result" progress={78} color="green" />
        </div>

        <div className="border p-6 rounded-lg">
          <div className="border-b-2 border-dashed pb-3 mb-3">
            <strong className="font-medium text-gray-900 block mb-1">
              Que. New Insights and Meeting feature is helpful?
            </strong>
            Ans. Overall effort to find potential buyer is reduced and chance of
            orders have increased.
          </div>
          <ProgressBar text="Vote Result" progress={77} color="green" />
        </div>
      </div>

      <div className="text-gray-900 border rounded-md my-6 lg:my-12 p-6">
        <div className="flex items-center gap-4 mb-6">
          <span className="block p-2 shadow bg-orange-100 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <g clip-path="url(#clip0_2206_2061)">
                <path
                  d="M14.625 25.9993H11.375C10.6167 25.9993 9.75002 25.3493 9.75002 24.0493V21.7743C9.75002 20.691 9.20835 19.716 8.34169 18.9577C6.39169 17.441 5.41669 15.2743 5.41669 12.891C5.52502 8.77435 8.88335 5.52435 12.8917 5.41602C14.95 5.41602 16.9 6.17435 18.3084 7.58268C19.7167 8.99102 20.5834 10.941 20.5834 12.9993C20.5834 15.2743 19.6084 17.441 17.7667 18.8493C16.7917 19.6077 16.25 20.7993 16.25 21.8827V24.3743C16.25 25.241 15.4917 25.9993 14.625 25.9993ZM13 6.49935C9.53336 6.49935 6.60835 9.42435 6.50002 12.891C6.50002 14.9493 7.36669 16.8993 8.99169 18.091C10.1834 19.066 10.8334 20.366 10.8334 21.7743V24.0493C10.8334 24.266 10.8334 24.916 11.375 24.916H14.625C14.95 24.916 15.1667 24.6993 15.1667 24.3743V21.8827C15.1667 20.4743 15.925 18.9577 17.1167 17.9827C18.6334 16.791 19.5 14.9493 19.5 12.9993C19.5 11.266 18.85 9.64102 17.55 8.34102C16.3584 7.14935 14.7334 6.49935 13 6.49935Z"
                  fill="#F47929"
                />
                <path
                  d="M15.7083 22.7493H10.2917C9.96667 22.7493 9.75 22.5327 9.75 22.2077C9.75 21.8827 9.96667 21.666 10.2917 21.666H15.7083C16.0333 21.666 16.25 21.8827 16.25 22.2077C16.25 22.5327 16.0333 22.7493 15.7083 22.7493Z"
                  fill="#F47929"
                />
                <path
                  d="M13 3.25C12.675 3.25 12.4583 3.03333 12.4583 2.70833V0.541667C12.4583 0.216667 12.675 0 13 0C13.325 0 13.5416 0.216667 13.5416 0.541667V2.70833C13.5416 3.03333 13.325 3.25 13 3.25Z"
                  fill="#F47929"
                />
                <path
                  d="M20.2583 6.28411C20.15 6.28411 19.9333 6.28411 19.825 6.17578C19.6083 5.95911 19.6083 5.63411 19.825 5.41745L21.3416 3.90078C21.5583 3.68411 21.8833 3.68411 22.1 3.90078C22.3166 4.11745 22.3166 4.44245 22.1 4.65911L20.5833 6.17578C20.5833 6.17578 20.3666 6.28411 20.2583 6.28411Z"
                  fill="#F47929"
                />
                <path
                  d="M25.4583 13.5423H23.2917C22.9667 13.5423 22.75 13.3257 22.75 13.0007C22.75 12.6757 22.9667 12.459 23.2917 12.459H25.4583C25.7833 12.459 26 12.6757 26 13.0007C26 13.3257 25.7833 13.5423 25.4583 13.5423Z"
                  fill="#F47929"
                />
                <path
                  d="M21.775 22.3173C21.6666 22.3173 21.45 22.3173 21.3416 22.209L19.825 20.6923C19.6083 20.4757 19.6083 20.1507 19.825 19.934C20.0416 19.7173 20.3666 19.7173 20.5833 19.934L22.1 21.4507C22.3166 21.6673 22.3166 21.9923 22.1 22.209C22.1 22.3173 21.9916 22.3173 21.775 22.3173Z"
                  fill="#F47929"
                />
                <path
                  d="M4.22498 22.3173C4.11665 22.3173 3.89998 22.3173 3.79165 22.209C3.57498 21.9923 3.57498 21.6673 3.79165 21.4507L5.30832 19.934C5.52498 19.7173 5.84998 19.7173 6.06665 19.934C6.28332 20.1507 6.28332 20.4757 6.06665 20.6923L4.54998 22.209C4.44165 22.3173 4.33332 22.3173 4.22498 22.3173Z"
                  fill="#F47929"
                />
                <path
                  d="M2.70833 13.5423H0.541667C0.216667 13.5423 0 13.3257 0 13.0007C0 12.6757 0.216667 12.459 0.541667 12.459H2.70833C3.03333 12.459 3.25 12.6757 3.25 13.0007C3.25 13.3257 3.03333 13.5423 2.70833 13.5423Z"
                  fill="#F47929"
                />
                <path
                  d="M5.74165 6.28307C5.63332 6.28307 5.41665 6.28307 5.30832 6.17474L3.79165 4.54974C3.57498 4.33307 3.57498 4.00807 3.79165 3.79141C4.00832 3.57474 4.33332 3.57474 4.54998 3.79141L6.06665 5.30807C6.28332 5.52474 6.28332 5.84974 6.06665 6.06641C5.95832 6.17474 5.84998 6.28307 5.74165 6.28307Z"
                  fill="#F47929"
                />
                <path
                  d="M17.3333 13.5417C17.0083 13.5417 16.7916 13.325 16.7916 13C16.7916 10.9417 15.0583 9.20833 13 9.20833C12.675 9.20833 12.4583 8.99167 12.4583 8.66667C12.4583 8.34167 12.675 8.125 13 8.125C15.7083 8.125 17.875 10.2917 17.875 13C17.875 13.325 17.6583 13.5417 17.3333 13.5417Z"
                  fill="#F47929"
                />
              </g>
              <defs>
                <clipPath id="clip0_2206_2061">
                  <rect width="26" height="26" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <h3 className="font-semibold">Feedback and Feature Request.</h3>
        </div>
        <ul className="my-3 list-disc ml-4 flex flex-col gap-2 marker:text-orange-500">
          <li>
            In progress section the division of Net worth should be visible
            based on Brands GMV and Factory GMV.
          </li>
          <li>
            After logistic the next biggest issue is sellers/factories, RM
            should be able to connect with seller to make sure dispatch is on
            time and order is correct.
          </li>
          <li>Better incentive plan for RM to be motivated and work hard.</li>
          <li>
            RM should be able to share new design to Bijnis operation team to
            solve Retailers issue in better level.
          </li>
        </ul>
      </div>
    </div>
  );
};

const Impact = () => {
  return (
    <div className="pt-1 mb-10 text-xl font-normal text-gray-600">
      <SectionHeader>Lets Talk Numbers !</SectionHeader>

      <p className="my-3">
        Ummmm, I wish I could, but you know the fuss about data, right? I’m not
        allowed to disclose the actual numbers 🥹.
      </p>
      <p className="my-3">
        But, this new flow{" "}
        <strong className="font-medium text-gray-900">
          indeed performed really well!
        </strong>{" "}
        🤩
      </p>
      <p className="my-3">
        We launched this flow as an{" "}
        <strong className="font-medium text-gray-900">experiment</strong> to a
        small set of our users between{" "}
        <strong className="font-medium text-gray-900">Sept & Oct 2023</strong>,
        and then in{" "}
        <strong className="font-medium text-gray-900">
          November 2023, we scaled it to 100% of our users.
        </strong>
      </p>
      <p className="my-3">
        And as of{" "}
        <strong className="font-medium text-gray-900">December 2023,</strong>{" "}
        these are the results we observed:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 my-6">
        <div className="flex flex-col border rounded-md p-6">
          <span>😍 </span>
          <span>
            {" "}
            Significantly higher increment in GMV from{" "}
            <strong className="font-medium text-green-600">
              38 crore in Nov to 43 crore in Dec
            </strong>
          </span>
        </div>

        <div className="flex flex-col border rounded-md p-6">
          <span>😄 </span>
          <span>
            {" "}
            Reduction in NDR from{" "}
            <strong className="font-medium text-green-600">
              19% in Nov to 12% in Dec.
            </strong>
          </span>
        </div>

        <div className="flex flex-col border rounded-md p-6">
          <span>😍 </span>
          <span>
            {" "}
            Significantly higher increment in Buyer conversion{" "}
            <strong className="font-medium text-green-600">64% to 76%.</strong>
          </span>
        </div>

        <div className="flex flex-col border rounded-md p-6">
          <span>😄 </span>
          <span>
            {" "}
            Reduction in RTO from{" "}
            <strong className="font-medium text-green-600">
              17% in Nov to 14% in Dec.
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
};

const Learnings = () => {
  return (
    <div className="pt-1 mb-10 text-xl font-normal text-gray-600">
      <SectionHeader>That’s a wrap</SectionHeader>
      <p>
        This project marked my initiation into demand-based real-world design,
        and the experience has been incredibly enriching. From mastering the art
        of thinking from both the perspectives of RM and business, to adeptly
        managing and persuading numerous stakeholders, to tirelessly refining my
        skills through iteration, to meticulously analyzing and enhancing my
        work, to embracing feedback and crafting something truly remarkable -
        every step has been a whirlwind of learning and growth. It&apos;s been
        an exhilarating journey, and I&apos;ve relished every moment of it.
      </p>
    </div>
  );
};

const SECTIONS = [
  {
    name: "Summary",
    id: "summary",
    component: <Summary />,
  },
  {
    name: "Discovery",
    id: "discovery",
    component: <Discovery />,
  },
  {
    name: "User Research",
    id: "user-research",
    component: <UserResearch />,
  },
  {
    name: "Define",
    id: "define",
    component: <Define />,
  },
  {
    name: "Ideate",
    id: "ideate",
    component: <Ideate />,
  },
  {
    name: "Visual Designs",
    id: "visual-designs",
    component: <VisualDesigns />,
  },
  {
    name: "Test",
    id: "test",
    component: <Test />,
  },
  {
    name: "Impact",
    id: "impact",
    component: <Impact />,
  },
  {
    name: "Learnings",
    id: "learnings",
    component: <Learnings />,
  },
];

function CaseStudy() {
  const [inView, setInView] = React.useState("");

  return (
    <AnimatePresence>
      <main className="min-h-screen">
        <Reveal width="100%">
          <div className="w-full h-[250px] lg:h-[480px] mt-4">
            <Image
              src="/images/work/rm-app/main-banner.jpg"
              alt="disha"
              width={1184}
              height={520}
              className="w-full h-full object-cover lg:object-cover object-bottom rounded group-hover:scale-105 transition-all duration-300"
            />
          </div>
        </Reveal>

        <div className="gap-12 mt-12 lg:mt-16 p-8 md:p-10 lg:p-16 xl:p-32 md:pt-8 lg:pt-8 xl:pt-8">
          <div className="flex items-start">
            <Aside sections={SECTIONS} inView={inView} />

            <div className="w-full">
              {SECTIONS.map((section) => {
                return (
                  <InView
                    key={section.name}
                    as="section"
                    onChange={(inView: any) => {
                      if (inView) setInView(section.id);
                    }}
                    id={section.id}
                    // threshold={0.95}
                  >
                    {section.component}
                  </InView>
                );
              })}
            </div>
          </div>

          {/* <div className="mt-40">
            <h2 className="text-3xl border-b pb-2 border-b-black">
              More Case Studies
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 mt-12">
              <MoreCaseStudyCard
                image="/images/case-study-1.png"
                name="Microsoft Budget Platform"
                shortDescription="A collaborative space to plan, produce, and publish omnichannel campaigns."
                link=""
              />
              <MoreCaseStudyCard
                image="/images/case-study-2.png"
                name="Content Marketing"
                shortDescription="A collaborative space to plan, produce, and publish omnichannel campaigns."
                link=""
              />
            </div>
          </div> */}
        </div>

        <div className="h-[150px]" />
      </main>
    </AnimatePresence>
  );
}

export default CaseStudy;

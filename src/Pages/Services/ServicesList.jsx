import React from "react";
import { RiCapsuleLine } from "react-icons/ri";
import { BsBootstrapFill } from "react-icons/bs";
import { SiWebcomponentsdotorg } from "react-icons/si";
import { BsSpeedometer2 } from "react-icons/bs";
import { BiCustomize } from "react-icons/bi";
import { FaArrowsRotate } from "react-icons/fa6";

const listOfService = [
  {
    name: "Refreshing Design",
    Icon: <RiCapsuleLine />,
    desc: "Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt labor dolore magna.",
  },
  {
    name: "Solid Bootstrap 5",
    Icon: <BsBootstrapFill />,
    desc: "Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt labor dolore magna.",
  },
  {
    name: "100+ Components",
    Icon: <SiWebcomponentsdotorg />,
    desc: "Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt labor dolore magna.",
  },
  {
    name: "Speed Optimized",
    Icon: <BsSpeedometer2 />,
    desc: "Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt labor dolore magna.",
  },
  {
    name: "Fully Customizable",
    Icon: <BiCustomize />,
    desc: "Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt labor dolore magna.",
  },
  {
    name: "Regular Updates",
    Icon: <FaArrowsRotate />,
    desc: "Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt labor dolore magna.",
  },
];

const ServicesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-5 p-3!">
      {listOfService.map((list, idx) => (
        <div key={idx} className="flex flex-col items-center md:items-start gap-3 border border-zinc-200 rounded-lg px-1! py-3! sm:px-7! sm:py-10! hover:scale-101 hover:shadow-md/10">
          <div className="border-2 text-3xl sm:text-5xl border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full w-13 sm:w-19 p-2! sm:p-3!">
            {list.Icon}
          </div>
          <h1 className="text-2xl font-bold">{list.name}</h1>
          <p className="text-zinc-600 text-[12px] sm:text-base  text-center md:text-start">{list.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesList;

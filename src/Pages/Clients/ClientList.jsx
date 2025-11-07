import React from "react";
import { CgGoogle } from "react-icons/cg";
import { DiMagento } from "react-icons/di";
import { GrFreebsd } from "react-icons/gr";
import { ImInfinite } from "react-icons/im";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";

const client = [
  {
    icon: <CgGoogle />,
    name: "GRAYGRIDS",
  },
  {
    icon: <DiMagento />,
    name: "deck",
  },
  {
    icon: <GrFreebsd />,
    name: "AYRO UI",
  },
  {
    icon: <ImInfinite />,
    name: "Lineicons",
  },
  {
    icon: <RiTailwindCssFill />,
    name: "Tailwind Templates",
  },
  {
    icon: <FaShoppingCart />,
    name: "ecommerce",
  },
];

const ClientList = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-1 sm:gap-x-7 gap-y-5">
      {client.map((list, idx) => (
        <div key={idx} className="flex items-center justify-center gap-3 shadow-md/10 bg-white rounded-lg px-5! py-8! text-xl sm:text-2xl font-bold h-30 hover:scale-105 hover:transition duration-100 ease-in cursor-pointer ">
          <div className="text-blue-800 text-4xl">{list.icon}</div>
          <p className="">{list.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ClientList;

import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdSchedule } from "react-icons/md";

const contactDetails = [
  {
    icon: <IoCallOutline />,
    name: "Contact",
    desc: ["0984537278623", "yourmail@gmail.com"],
  },
  {
    icon: <HiOutlineLocationMarker />,
    name: "Address",
    desc: ["175 5th Ave, New York, NY 10010", "United States"],
  },
  {
    icon: <MdSchedule />,
    name: "Schedule",
    desc: ["24 Hours / 7 Days Open", "Office time: 10 AM - 5:30 PM"],
  },
];

const ContactLeft = () => {
  return (
    <div className="flex flex-col gap-5 w-5/6 sm:w-3/6 lg:w-2/6">
      {contactDetails.map((item) => (
        <div className="flex items-center gap-4 p-5! justify-center lg:justify-start md:h-45 lg:h-40 border border-zinc-200 rounded-lg">
          <div className="text-4xl rounded-full bg-blue-700 text-white p-2!">{item.icon}</div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl lg:text-xl text-blue-700 font-bold">{item.name}</h1>
            <p className="text-zinc-600">{item.desc[0]} <br /> {item.desc[1]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactLeft;

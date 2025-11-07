import React, { useState } from "react";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSideOpen, setIsSideOpen] = useState(false);
  return (
    <header
      style={{ height: isOpen ? "30vh" : "12vh" }}
      className="shadow-red-700 flex items-center justify-between px-8! py-5! bg-blue-600 text-white flex-col gap-4 lg:flex-row overflow-hidden"
    >
      <div className="flex items-center text-4xl cursor-pointer justify-between w-full lg:w-50">
        <div className="flex items-center gap-2">
          <MdOutlineBusinessCenter />
          <h1 className="font-bold">Business</h1>
        </div>
        <div className="flex lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <IoIosArrowDropdown />
        </div>
      </div>

      <nav>
        <ul className="flex items-center flex-wrap gap-5 justify-center sm:gap-10 lg:flex-nowrap font-bold cursor-pointer">
          {["Home", "Services", "Portfolio", "Pricing", "Team", "Contact"].map(
            (li, idx) => (
              <li key={idx}>{li}</li>
            )
          )}
        </ul>
      </nav>

      <div className="border p-2! rounded-2xl hover:bg-white hover:text-blue-600 cursor-pointer">
        <FaBars className="" onClick={() => setIsSideOpen(!isSideOpen)} />
      </div>
      <aside
        className="fixed w-75 lg:w-100 h-dvh right-0 top-0 px-7! py-10! bg-white shadow-2xl"
        style={{ display: isSideOpen ? "block" : "none" }}
      >
        <div className="flex flex-col gap-7">
          <div className="text-black flex items-center justify-end text-2xl cursor-pointer">
            <IoMdCloseCircleOutline
              onClick={() => setIsSideOpen(!isSideOpen)}
            />
          </div>

          <div className="text-black flex items-center text-4xl cursor-pointer">
            <MdOutlineBusinessCenter />
            <h1 className="font-bold">Business</h1>
          </div>

          <p className="text-zinc-600 text-lg">
            Lorem ipsum dolor sit amet adipisicing elit. Sapiente fuga nisi
            rerum iusto intro.
          </p>

          <div className="flex flex-col gap-4">
            <h1 className="text-black font-bold text-xl">Quick Links</h1>
            <nav className="text-zinc-600 text-lg">
              <ul className="flex flex-col gap-2">
                {["About Us", "Our Team", "Latest News", "Contact Us"].map((list) => (
                  <li key={list} className="hover:text-blue-500 cursor-pointer hover:translate-x-2 hover:transition duration-200 ease-in">{list}</li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-black text-xl font-bold">Follow Us On</h1>
            <div className="text-zinc-600 flex gap-2">
              {[<FaFacebookF />, <FaTwitter />, <FaLinkedin />, <FaYoutube />].map((icon) => (
                <div key={icon} className="border border-zinc-200 p-3! rounded-full hover:bg-blue-500 hover:text-white cursor-pointer">{icon}</div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Header;

import React from "react";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <section className="grid place-items-center py-10! bg-zinc-100">
        <div className="grid gap-10 sm:place-items-start md:place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10 w-[80vw] sm:w-[75vw] lg:w-[85vw] xl:w-5/6">
          <div className="flex flex-col gap-4  text-lg text-zinc-600">
            <div className="flex items-center gap-2 text-4xl font-bold">
              <MdOutlineBusinessCenter />
              <h1 className="text-black">Business</h1>
            </div>

            <p className="w-5/6 sm:w-full">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>

            <div className="flex flex-col">
              <p>&copy; 2024 Ayro UI.</p>
              <p>Designed and Developed by Ayro UI </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-lg">
            <h1 className="font-bold text-xl">Solutions</h1>
            <nav>
              <ul className="flex flex-col gap-2 text-zinc-600">
                {["Marketing", "Analytics", "Commerce", "Insights"].map(
                  (list) => (
                    <li key={list}>{list}</li>
                  )
                )}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-4 text-lg">
            <h1 className="font-bold text-xl">Support</h1>
            <nav>
              <ul className="flex flex-col gap-2 text-zinc-600">
                {["Pricing", "Documentation", "Guides", "API Status"].map(
                  (list) => (
                    <li key={list}>{list}</li>
                  )
                )}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-6 text-lg ">
            <h1 className="font-bold text-xl">Subscribe</h1>
            <p className="text-zinc-600 w-4/6 sm:w-5/6">
              Subscribe to our newsletter for the latest updates
            </p>
            <form action="" className="">
              <div className="relative">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email address"
                  className="border p-2! w-65 sm:w-full border-zinc-300 rounded-lg "
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

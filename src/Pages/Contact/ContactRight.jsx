import React from "react";

const ContactRight = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-4 border border-zinc-200 rounded-lg w-[90vw] sm:w-5/6 md:w-4/6 p-5!">
        <div className="flex items-center flex-col gap-3">
          <p className="text-blue-700 text-xl font-bold">Get in Touch</p>
          <h1 className="text-2xl sm:text-3xl font-bold">
            Ready to Get Started{" "}
          </h1>
          <p className="w-5/6 text-[14px] sm:text-base text-center">
            At vero eos et accusamus et iusto odio dignissimos ducimus
            quiblanditiis praesentium{" "}
          </p>
        </div>

        <form action="" className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-4 sm:flex-row items-center sm:gap-2 ">
            <p className="border w-full border-zinc-300 rounded-4xl p-4!"><input type="text" name="" id="" placeholder="Name" /></p>
            <p className="border w-full border-zinc-300 rounded-4xl p-4!"><input type="email" name="" id="" placeholder="Email" /></p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row items-center sm:gap-2">
            <p className="border w-full border-zinc-300 rounded-4xl p-4!"><input type="tel" name="" id="" placeholder="Phone" /></p>
            <p className="border w-full border-zinc-300 rounded-4xl p-4!"><input type="text" name="" id="" placeholder="Subject" /></p>
          </div>

          <div>
            <p className="border border-zinc-300 rounded-2xl"><textarea
              className="w-full p-3!"
              rows={5}
              name=""
              id=""
              placeholder="Type Message"
            ></textarea></p>
          </div>
        </form>

        <div>
          <button className=" rounded-4xl font-bold py-2! px-5! bg-blue-700 text-white">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactRight;

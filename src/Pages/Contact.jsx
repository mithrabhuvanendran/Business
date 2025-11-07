import React from "react";
import ContactLeft from "./Contact/ContactLeft";
import ContactRight from "./Contact/ContactRight";

const Contact = () => {
  return (
    <>
      <section className="grid place-items-center py-10!">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 w-screen lg:w-[85vw] ">
            <ContactLeft />
            <ContactRight />
          </div>
      </section>
    </>
  );
};

export default Contact;

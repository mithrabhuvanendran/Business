import React from "react";
import ClientTop from "./Clients/ClientTop";
import ClientList from "./Clients/ClientList";

const Clients = () => {
  return (
    <>
      <section className="grid place-items-center py-10! bg-zinc-100">
        <div className="flex flex-col items-center justify-center gap-10 sm:gap-15 w-[90vw] sm:w-5/6 md:w-5/6 lg:w-4/6 2xl:w-3/6">
          <ClientTop />
          <ClientList />
        </div>
      </section>
    </>
  );
};

export default Clients;

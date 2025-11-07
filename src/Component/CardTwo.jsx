import React, { useEffect, useState } from "react";

const CardTwo = ({ category }) => {
  return (
    <>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {category.map((item) => (
            <figure className="border border-zinc-200 shadow-md/10 rounded-lg h-90 sm:h-100 flex flex-col gap-5">
              <div className="h-60 sm:h-70 md:h-80 rounded-tl-lg rounded-tr-lg">
                <img className="rounded-tl-lg rounded-tr-lg" src={item.img} alt="" />
              </div>
              <figcaption className="flex flex-col gap-2 items-center py-5!">
                <p className="text-2xl font-bold">{item.name}</p>
                <p className="text-lg text-blue-600">{item.designation}</p>
              </figcaption>
            </figure>
          ))}
        </div>
    </>
  );
};

export default CardTwo;

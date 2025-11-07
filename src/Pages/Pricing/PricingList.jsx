import React from "react";
import { TiTick } from "react-icons/ti";

const planDetails = [
  {
    name: "Starter",
    desc: "Lorem Ipsum is simply dummy text of the printing and industry.",
    price: "0",
    trial: "START FREE TRIAL",
    options: [
      "Cras justo odio.",
      "Dapibus ac facilisis in.",
      "Morbi leo risus.",
      "Excepteur sint occaecat velit.",
    ],
    icon: <TiTick />
  },
  {
    name: "Exclusive",
    desc: "Lorem Ipsum is simply dummy text of the printing and industry.",
    price: "99",
    trial: "START FREE TRIAL",
    options: [
      "Cras justo odio.",
      "Dapibus ac facilisis in.",
      "Morbi leo risus.",
      "Excepteur sint occaecat velit.",
    ],
    icon: <TiTick />
  },
  {
    name: "Premium",
    desc: "Lorem Ipsum is simply dummy text of the printing and industry.",
    price: "150",
    trial: "START FREE TRIAL",
    options: [
      "Cras justo odio.",
      "Dapibus ac facilisis in.",
      "Morbi leo risus.",
      "Excepteur sint occaecat velit.",
    ],
    icon: <TiTick />
  },
];

const PricingList = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {planDetails.map((list) => (
          <div className="flex flex-col gap-5 bg-white rounded-lg px-5! py-5! sm:py-10! shadow-md ">
            <div className="flex flex-col gap-5 items-center">
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 cursor-pointer hover:text-white px-5! py-1! rounded-3xl ">{list.name}</button>
              <p className="w-full sm:w-4/6 text-center">{list.desc}</p>

              <p className="flex items-center text-6xl">
                <sup className="text-2xl">$</sup>
                {list.price}
                <sub className="text-2xl">/mo</sub>
              </p>

              <button className="border border-blue-600 rounded-md font-bold text-blue-600 hover:bg-blue-600 cursor-pointer hover:text-white py-2! px-4!">{list.trial}</button>
            </div>
            <div className="flex flex-col px-2! gap-3">
              <p className="flex gap-2 items-center">{list.icon}{list.options[0]}</p>
              <p className="flex gap-2 items-center">{list.icon}{list.options[1]}</p>
              <p className="flex gap-2 items-center">{list.icon}{list.options[2]}</p>
              <p className="flex gap-2 items-center">{list.icon}{list.options[3]}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PricingList;

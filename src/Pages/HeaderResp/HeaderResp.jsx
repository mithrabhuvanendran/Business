import React, { useState } from "react";

const HeaderResp = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header
        style={{ height: isOpen ? "40vh" : "7vh" }}
        className="flex items-center justify-between flex-col sm:flex-row p-4! overflow-hidden transition-[height] gap-5"
      >
        <div className="flex items-center justify-between w-full">
          <h1>Business</h1>
          <div className="flex sm:hidden" onClick={() => setIsOpen(!isOpen)}>
            Click
          </div>
        </div>

        <nav>
          <ul className="flex items-center flex-col sm:flex-row gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HeaderResp;

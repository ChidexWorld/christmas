import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { SquaresFour } from "@phosphor-icons/react";
function NavBar() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navBar_list = ["Home", "Celebrate", "Gifts", "New"];

  const handleClick = (index) => {
    setActiveIndex(index); // Update the active index on click
  };

  return (
    <div>
      <nav className="flex justify-around gap-[3rem]">
        <div className="flex items-center" style={{ border: "solid red" }}>
          <img src="assets/santa-mobile.png" alt="logo" />
          <h6>Christmas</h6>
        </div>

        <ul
          className="flex items-center w-[5rem] sm:w-[430px] justify-between"
          style={{ border: "solid yellow" }}
        >
          {navBar_list.map((e, i) => (
            <li
              key={i}
              className="cursor-pointer hidden sm:block"
              style={{
                color: activeIndex === i ? "#DC3845" : "#282525",
                transition: "background-color 0.3s ease",
              }}
              onClick={() => handleClick(i)}
            >
              {e}
            </li>
          ))}

          <FontAwesomeIcon icon={faMoon} />
          <SquaresFour size={28} className="sm:hidden" />
        </ul>
      </nav>

      <div>
        {navBar_list.map((e, i) => (
          <li
            key={i}
            className="cursor-pointer flex flex-col items-center sm:hidden"
            style={{
              color: activeIndex === i ? "#DC3845" : "#282525",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => handleClick(i)}
          >
            {e}
          </li>
        ))}
      </div>
    </div>
  );
}

export default NavBar;

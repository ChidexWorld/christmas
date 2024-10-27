import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons"; // Import the solid sun icon
import { SquaresFour, X } from "@phosphor-icons/react";
import { ThemeContext } from "../Contexts/ThemeContext";
import { Link, useLocation } from "react-router-dom"; // Import Link for routing

// Define navigation items with paths and labels
const navBarList = [
  { path: "/", label: "Home" },
  { path: "/celebrate", label: "Celebrate" },
  { path: "/gift", label: "Gifts" },
  { path: "/new", label: "New" },
];

function NavBar() {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active tab
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu toggle state
  const { darkMode, toggleDarkMode } = useContext(ThemeContext); //Use context
  const location = useLocation(); // Get the current route,

  // Determine the active link based on the current path
  React.useEffect(() => {
    const currentIndex = navBarList.findIndex(
      (item) => item.path === location.pathname
    );
    if (currentIndex !== -1) setActiveIndex(currentIndex);
  }, [location.pathname]); // Update active index when the path changes

  const handleClick = (index) => {
    setActiveIndex(index); // Update the active index on click
    setIsMobileMenuOpen(false); // Close mobile menu on link click
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle mobile menu

  return (
    <div
      className={`transition duration-500 ${
        darkMode ? "dark" : ""
      } pt-[2rem] pb-[3rem] dark:bg-[#251819]`}
    >
      <nav className="flex justify-around gap-[3rem] dark:text-[#F3F2F2]">
        <div className="flex items-center">
          <img src="assets/santa-mobile.png" alt="logo" loading="lazy" />
          <h6>Christmas</h6>
        </div>

        <ul className="flex items-center w-[5rem] sm:w-[430px] justify-between">
          {navBarList.map((e, i) => (
            <li
              key={i}
              className={`cursor-pointer list-none 
                    transition-colors duration-300 ease-in-out hidden sm:block
                    ${activeIndex === i ? "text-[#DC3845]" : "text-[#282525]"} 
                    dark:${
                      activeIndex === i ? "text-[#DC3845]" : "text-[#F3F2F2]"
                    }`}
              onClick={() => handleClick(i)}
            >
              <Link to={e.path}>{e.label}</Link>
            </li>
          ))}

          <FontAwesomeIcon
            icon={darkMode ? faSun : faMoon}
            onClick={toggleDarkMode}
            className="cursor-pointer transition duration-300"
          />

          <SquaresFour
            size={28}
            className="sm:hidden"
            onClick={toggleMobileMenu}
          />
        </ul>
      </nav>

      {isMobileMenuOpen && (
        <div
          className={`flex flex-col items-center h-[20rem] rounded-b-[12px] pb-[3rem] justify-between bg-gray-100 fixed w-[100%] top-[0rem] sm:hidden transition-all duration-300  origin-top ${
            isMobileMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
          } dark:bg-[#2f2223] dark:text-[#F3F2F2] z-10`}
        >
          <div className="w-[100%] flex items-center justify-between pr-[1.3rem]">
            <img
              src="assets/nav.png"
              alt="nav"
              className="w-[100px]"
              loading="lazy"
            />
            <X
              size={24}
              onClick={toggleMobileMenu}
              className="cursor-pointer"
            />
          </div>
          {navBarList.map((e, i) => (
            <li
              key={i}
              className={`cursor-pointer list-none 
              transition-colors duration-300 ease-in-out 
              ${activeIndex === i ? "text-[#DC3845]" : "text-[#282525]"} 
              dark:${activeIndex === i ? "text-[#DC3845]" : "text-[#F3F2F2]"}`}
              onClick={() => handleClick(i)}
            >
              <Link to={e.path}>{e.label}</Link>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default NavBar;

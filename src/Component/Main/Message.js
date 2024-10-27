import React, { useContext, useState } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

export default function Message() {
  const [inputValue, setInputValue] = useState("");
  // const [emailValue, setEmailvalue] = useState("");

  const handleSubmit = (event) => {
    setInputValue(""); // Optional: Clear the input field after submission
    // setEmailvalue('')
    event.preventDefault(); // Prevent page reload
    console.log(inputValue); // Do something with the input value (like sending it to an API)
  };

  const { darkMode } = useContext(ThemeContext); //Use context

  return (
    <div
      className={`flex justify-center mt-12 mb-12 ml-8 mr-8 transition duration-500 ${
        darkMode ? "dark" : ""
      } dark:bg-[#251819]`}
    >
      <section className="bg-[#DC3845] w-[968px] flex rounded-[32px] justify-around items-center flex-wrap p-[1rem] dark:bg-[#2F2223]">
        <form
          className=" w-[264px] h-[270px] flex flex-col justify-between sm:h-[300px] sm:justify-around"
          green
          onSubmit={handleSubmit}
        >
          <h2 className="font-semibold text-[30px] leading-[30px] text-center text-white p-[1rem] sm:text-left sm:text-[36px] sm:leading-[54px]">
            Send Good Wishes!
          </h2>
          <input
            type="text"
            placeholder="Write your message"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className="w-[264px] h-[55px] rounded-[64px] font-medium text-[16px] dark:text-[#C2BDBD] pl-4 dark:bg-[#282525]"
          />
          {/* 
          <input
            type="email"
            placeholder="Receivers email"
            onChange={(e) => setEmailvalue(e.target.value)}
            value={emailValue}
            className="w-[264px] h-[55px] rounded-[64px] font-medium text-[16px] dark:text-[#C2BDBD] pl-4 dark:bg-[#282525]"
          /> */}

          <input
            className="w-[264px] h-[55px] bg-[#282525] rounded-[64px] font-medium text-[16px] leading-6 text-[#FFFFFF] cursor-pointer sm:w-[175px] dark:text-[#C2BDBD] dark:bg-[#DC3845]"
            value={"Send Message"}
            type="submit"
          ></input>
        </form>

        <picture>
          <source
            srcSet="assets/letter-mobile.png"
            media="(max-width: 425px)"
          />

          <img
            src="assets/letter-desktop.png"
            alt="letter"
            loading="lazy"
          ></img>
        </picture>
      </section>
    </div>
  );
}

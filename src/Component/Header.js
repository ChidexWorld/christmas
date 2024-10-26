import React from "react";

function Header() {
  return (
    <div>
      <header
        className="flex flex-col justify-center items-center sm:flex-row sm:flex-wrap"
        style={{ border: "solid yellow" }}
      >
        <picture>
          <source srcSet="assets/home-mobile.png" media="(max-width: 640px)" />
          <img src="assets/home-desktop.png" alt="celebration" />
        </picture>

        <div className="sm:w-[450px] flex flex-col items-center sm:items-start justify-between mt-[2rem] sm:mt-[0] gap-[2rem]">
          <h1 className="font-semibold sm:text-[40px] text-[24px] leading-[33.3px]  sm:leading-[56px] text-center sm:text-start w-[312px] sm:w-[450px]">
            Merry Christmas and Happy New Year,
          </h1>

          <p className="text-[15px] font-normal text-center sm:text-start leading-[22.5px] sm:w-[380px] w-[312px]">
            Christmas and a new year is about to begin, all good wishes and
            success
          </p>

          <button className="w-[204px] h-[64px] bg-[#DC3845] rounded-[64px] font-medium text-[16px] leading-6 text-[#FFFFFF]">
            Get started
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
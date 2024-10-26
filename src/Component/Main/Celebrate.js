import React from "react";

function Celebrate() {
  return (
    <div>
      <section
        className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center mt-[2rem]"
      >
        <div className="flex flex-col items-center sm:items-start sm:items-left justify-between h-[280px] gap-[0.5rem]">
          <h1 className="font-semibold text-center font-semibold text-2xl w-[205px] sm:text-left m-[1rem]">
            Celebrate With A Lot Of Love
          </h1>

          <p className="text-[1rem] font-normal text-center sm:text-left sm:w-[380px] w-[312px] leading-[22.5px]">
            In this holidays, celebrate with much love and peace, offering many
            blessings to our loved ones, friends and neighbors, wishing them a
            good Christmas message.
          </p>

          <button className="w-[204px] h-[64px] bg-[#DC3845] rounded-[64px] font-medium text-[1rem] leading-[22.5px] text-[#fff]">
            Get started
          </button>
        </div>

        <picture>
          <source
            srcSet="assets/fireplace-mobile.png"
            media="(max-width: 640px)"
          />
          <img src="assets/fireplace-desktop.png" alt="celebration" />
        </picture>
      </section>
    </div>
  );
}

export default Celebrate;
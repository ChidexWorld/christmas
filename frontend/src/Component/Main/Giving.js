import React, { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";

function Giving() {
  // Array of data for each card
  const cards = [
    {
      id: 1,
      imgSrc: "/assets/giving-desktop.png",
      title: "Surprise gifts",
      description: "They are the best gifts there is.",
    },
    {
      id: 2,
      imgSrc: "/assets/bells-desktop.png",
      title: "Ornaments",
      description: "Give a moment to decorate",
    },
    {
      id: 3,
      imgSrc: "/assets/socks-desktop.png",
      title: "Lots of love",
      description: "Give away feelings that last forever",
    },
  ];

  const { darkMode } = useContext(ThemeContext); //Use context

  return (
    <div
      className={`transition duration-500 ${
        darkMode ? "dark" : ""
      } dark:bg-[#251819]`}
    >
      <section className="w-full text-center flex flex-col items-center h-[27.5re] justify-around">
        <h2 className="font-semibold text-2xl w-[205px] m-[4rem] dark:text-[#F3F2F2]">
          Start Giving This Christmas
        </h2>

        <div className="grid gap-3  grid-cols-2 sm:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="card w-[142px] h-[208px] flex flex-col items-center justify-between"
            >
              <img src={card.imgSrc} alt={card.title} loading="lazy" />

              <div>
                <h3 className="font-semibold text-lg text-sm font-normal dark:text-[#F3F2F2]">
                  {card.title}
                </h3>
                <p className="font-normal text-sm dark:text-[#C2BDBD]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Giving;

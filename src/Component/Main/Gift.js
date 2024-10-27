import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../../Contexts/ThemeContext";

function Gift() {
  const cards = [
    {
      id: 1,
      imgSrc: "/assets/ginger-man-desktop.png",
      price: 15,
      nameProduct: "Reindeer",
    },
    {
      id: 2,
      imgSrc: "/assets/santa-claus-hat-desktop.png",
      price: 22,
      nameProduct: "Snow Globe",
    },
    {
      id: 3,
      imgSrc: "/assets/candy-umbrella-desktop.png",
      price: 12,
      nameProduct: "Candle Stick",
    },
    {
      id: 4,
      imgSrc: "/assets/christmas-tree-desktop.png",
      price: 48,
      nameProduct: "Christmas Tree",
    },
    {
      id: 5,
      imgSrc: "/assets/snowman-desktop.png",
      price: 48,
      nameProduct: "Christmas Tree",
    },
  ];

  const { darkMode } = useContext(ThemeContext); //Use context

  return (
    <div
      className={`transition duration-500 ${
        darkMode ? "dark" : ""
      } dark:bg-[#251819]`}
    >
      <section className="text-center flex flex-col items-center  justify-around">
        <h2 className="font-semibold text-2xl w-[205px] m-[5rem]  dark:text-[#F3F2F2]">
          Share a gift
        </h2>

        <div className="grid gap-5  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="card w-[200px] mb-[3rem] rounded-xl flex flex-col items-center justify-between p-4 dark:bg-[#2F2223]"
              style={darkMode ? {} : { boxShadow: "2px 0px 20px -5px #301d1e" }}
            >
              <div className="flex justify-end w-[150px] ">
                <FontAwesomeIcon
                  icon="fa-regular fa-heart"
                  style={{ color: "#DC3845" }}
                />
              </div>

              <img src={card.imgSrc} alt={card.title} loading="lazy" />

              <div className="text-left w-[150px]">
                <h3 className="font-semibold text-lg text-sm font-normal dark:text-[#F3F2F2]">
                  ${card.price}
                </h3>
                <p className="font-normal text-sm  dark:text-[#C2BDBD]">
                  {card.nameProduct}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Gift;

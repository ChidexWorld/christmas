import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../../Contexts/ThemeContext";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function Slider() {
  const { darkMode } = useContext(ThemeContext); //Use context

  const cards = [
    {
      id: 1,
      imgSrc: "/assets/ginger-man-desktop.png",
      price: 95,
      nameProduct: "Reindeer",
    },
    {
      id: 2,
      imgSrc: "/assets/santa-claus-hat-desktop.png",
      price: 20,
      nameProduct: "Snow Globe",
    },
    {
      id: 3,
      imgSrc: "/assets/candy-umbrella-desktop.png",
      price: 75,
      nameProduct: "Sledge",
    },
    {
      id: 4,
      imgSrc: "/assets/christmas-tree-desktop.png",
      price: 18,
      nameProduct: "Christmas Wreath",
    },
    {
      id: 5,
      imgSrc: "/assets/snowman-desktop.png",
      price: 95,
      nameProduct: "Reindeer",
    },
  ];

  return (
    <div
      className={`transition duration-500 ${
        darkMode ? "dark" : ""
      } dark:bg-[#251819] z-0`}
    >
      <section className="text-center">
        <h2 className="font-semibold text-2xl m-[5rem] dark:text-[#F3F2F2]">
          Share a gift
        </h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            // When the screen is 320px or wider
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // When the screen is 768px or wider (tablet)
            426: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // When the screen is 1024px or wider (desktop)
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper w-[65%] h-[25rem]"
          style={{ padding: "1rem" }}
        >
          <div className="card-container ">
            {cards.map((card, i) => (
              <SwiperSlide
                className="card dark:bg-[#2F2223]"
                key={i}
                style={{
                  ...(darkMode
                    ? {}
                    : { boxShadow: "2px 0px 20px -5px #301d1e" }), // Conditional shadow
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "300px", // Adjust height as needed
                  borderRadius: "12px",
                }}
              >
                <div className="w-[100%] bg-[#dc3845] h-[200px] rounded-b-[50%] rounded-t-xl flex justify-center items-center">
                  <img
                    src={card.imgSrc}
                    alt={card.nameProduct}
                    className="card-image"
                    loading="lazy"
                  />
                </div>

                <div className="w-[100%]">
                  <h3 className="card-title font-semibold text-lg text-sm font-normal dark:text-[#F3F2F2]">
                    ${card.price}
                  </h3>
                  <p className="card-description dark:text-[#C2BDBD]">
                    {card.nameProduct}
                  </p>
                  <div className="flex justify-end rounded-br-x">
                    <FontAwesomeIcon
                      icon="fa-regular fa-heart"
                      style={{ color: "#ffff" }}
                      className="p-[10px] bg-[#DC3845] rounded-br-xl"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>
    </div>
  );
}

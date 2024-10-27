import React from "react";
import Celebrate from "./Main/Celebrate";
import Gift from "./Main/Gift";
import Slider from "./Main/Slider";
import Giving from "./Main/Giving";
import Message from "./Main/Message";
import Header from "./Header";

function Home() {
  return (
    <>
      <Header />

      <Giving></Giving>
      <Celebrate></Celebrate>
      <Gift></Gift>
      <Slider></Slider>
      <Message />
    </>
  );
}

export default Home;

import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { CheckCircle, Warning, X } from "@phosphor-icons/react";

export default function Message() {
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (response || error) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          setResponse("");
          setError("");
        }, 300);
      }, 3000); // Hide after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [response, error]);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    console.log(message, recipient); // Do something with the input value (like sending it to an API)

    try {
      // Send a POST request using Fetch
      const res = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, recipient }),
      });

      // Check if the response is ok (status in the range 200-299)
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      // Parse the JSON response
      const data = await res.json();
      setResponse(data.message); // Set the response message

      console.log(data.message);

      // Clear input fields after submission
      setMessage("");
      setRecipient("");
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to send email");
    }
  };

  const { darkMode } = useContext(ThemeContext); //Use context

  return (
    <div
      className={`flex justify-center relative mt-12 mb-12 ml-8 mr-8 transition duration-500 ${
        darkMode ? "dark" : ""
      } dark:bg-[#251819]`}
    >
      <section className="bg-[#DC3845] w-[968px] flex rounded-[32px] justify-around items-center flex-wrap p-[1rem] dark:bg-[#2F2223]">
        <form
          className=" w-[264px] flex flex-col justify-between  sm:justify-around"
          onSubmit={handleSubmit}
        >
          <h2 className="font-semibold text-[30px] leading-[30px] text-center text-white p-[1rem] sm:text-left sm:text-[36px] sm:leading-[54px]">
            Send Good Wishes!
          </h2>
          <input
            type="text"
            placeholder="Write your message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="w-[264px] h-[55px] rounded-[64px] font-medium text-[16px] dark:text-[#C2BDBD] pl-4 dark:bg-[#282525] mb-[1.5rem]"
          />

          <input
            type="email"
            placeholder="Receivers email"
            onChange={(e) => setRecipient(e.target.value)}
            value={recipient}
            className="w-[264px] h-[55px] rounded-[64px] font-medium text-[16px] dark:text-[#C2BDBD] pl-4 dark:bg-[#282525] mb-[1.5rem]"
          />

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
            alt="Illustration of a letter"
            loading="lazy"
          ></img>
        </picture>
      </section>

      {(response || error) && (
        <div
          className={`flex items-center justify-around absolute rounded-lg top-[1rem] h-[2rem] text-white w-[14rem] ${
            response ? "bg-green-700" : "bg-rose-700"
          } sm-h-[5rem] transition-opacity duration-300 transform ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {response ? <CheckCircle size={20} /> : <Warning size={20} color="yellow" />}
          <p className="text-white">{response || error}</p>{" "}
          <X
            size={16}
            color={response? "red":"white"}
            onClick={() => {
              setResponse("");
              setError("");
            }}
          />{" "}
        </div>
      )}
    </div>
  );
}

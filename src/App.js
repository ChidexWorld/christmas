import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"; // Import all solid icons
import { far } from "@fortawesome/free-regular-svg-icons"; // Load entire regular icon set
import Header from "./Component/Header";
import Celebrate from "./Component/Main/Celebrate";
import Giving from "./Component/Main/Giving";
import Gift from "./Component/Main/Gift";
import NavBar from "./Component/NavBar";
import Slider from "./Component/Main/Slider";
import Message from "./Component/Main/Message";
import Footer from "./Component/Footer";
import { ThemeProvider, ThemeContext } from "./Contexts/ThemeContext";

library.add(far);

// Add all solid icons to the library
library.add(fas);

function App() {
  // const { darkMode } = useContext(ThemeContext); //Use context

  return (
    
      <ThemeProvider>
         <ThemeContext.Consumer>
        {({ darkMode }) => ( // Use ThemeContext Consumer to access darkMode
          <div
            className={`App transition duration-500 ${darkMode ? "dark" : ""} dark:bg-[#251819]`}
          >
          <NavBar />
          <Header />
          <main>
            <Giving />
            <Celebrate />
            <Gift></Gift>
            <Slider></Slider>
            <Message></Message>
          </main>
          <Footer></Footer>
        </div>
        )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    
  );
}

export default App;

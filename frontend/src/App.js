import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons"; // Import all solid icons
import { far } from "@fortawesome/free-regular-svg-icons"; // Load entire regular icon set
import Celebrate from "./Component/Main/Celebrate";
import Gift from "./Component/Main/Gift";
import NavBar from "./Component/NavBar";
import Slider from "./Component/Main/Slider";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import { ThemeProvider, ThemeContext } from "./Contexts/ThemeContext";

library.add(far);

// Add all solid icons to the library
library.add(fas);

function App() {
  // const { darkMode } = useContext(ThemeContext); //Use context

  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {(
          { darkMode } // Use ThemeContext Consumer to access darkMode
        ) => (
          <div
            className={`App transition duration-500 ${
              darkMode ? "dark" : ""
            } dark:bg-[#251819]`}
          >
            <Router>
              <NavBar />
              <main>
                <Routes>
                  <Route exact path="/" element={<Home />} />

                  <Route path="/celebrate" element={<Celebrate />} />
                  <Route path="/gift" element={<Gift />} />
                  <Route path="/new" element={<Slider />} />
                  <Route path="*" element={<h1>404: Page Not Found</h1>} />
                </Routes>
              </main>
              <Footer></Footer>
            </Router>
          </div>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Intro from "./components/pages/intro/Intro";
import Aside from "./components/assets/Aside";
import Portfolio from "./components/pages/portfolio/Portfolio";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Footer from "./components/pages/footer/Footer";
function App() {
  const [openAside, setOpenAside] = useState(false);

  const toggleAside = () => {
    setOpenAside(!openAside);
  };

  return (
    <div className="App">
      <div className="content-container">
        <section id="intro">
          <Intro toggleAside={toggleAside} openAside={openAside} />
        </section>
        <section id="portfolio">
          <Portfolio toggleAside={toggleAside} openAside={openAside} />
        </section>
        <section id="about">
          <About toggleAside={toggleAside} openAside={openAside} />
        </section>
        <section id="contact">
          <Contact toggleAside={toggleAside} openAside={openAside} />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
      <Aside open={openAside} />
    </div>
  );
}

export default App;

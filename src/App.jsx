import React, { useState } from "react";
import "./App.css";
import Intro from "./components/intro/Intro";
import Aside from "./components/aside/Aside";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
function App() {
  const [openAside, setOpenAside] = useState(false);

  const toggleAside = () => {
    setOpenAside(!openAside);
  };

  return (
    <div className="App">
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
      <Aside open={openAside} />
    </div>
  );
}

export default App;

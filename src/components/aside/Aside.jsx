import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faGithub,
  faTwitter,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

export default function Aside({ open }) {
  const [activeSection, setActiveSection] = useState("intro");

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  }

  const logo = [
    {
      id: 1,
      name: "Jane Doe",
      image: (
        <img
          src="https://html5up.net/uploads/demos/prologue/images/avatar.jpg"
          alt="logo"
        />
      ),
      title: "Hyperspace Engineer",
    },
  ];

  const navItems = [
    {
      id: 1,
      name: "Intro",
      icon: <FontAwesomeIcon icon={faHome} />,
      sectionId: "intro",
    },
    {
      id: 2,
      name: "Portfolio",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      sectionId: "portfolio",
    },
    {
      id: 3,
      name: "About Me",
      icon: <FontAwesomeIcon icon={faUser} />,
      sectionId: "about",
    },
    {
      id: 4,
      name: "Contact",
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      sectionId: "contact",
    },
  ];

  const icons = [
    {
      id: 1,
      icon: <FontAwesomeIcon icon={faFacebook} />,
    },
    {
      id: 2,
      icon: <FontAwesomeIcon icon={faGithub} />,
    },
    {
      id: 3,
      icon: <FontAwesomeIcon icon={faDribbble} />,
    },
    {
      id: 4,
      icon: <FontAwesomeIcon icon={faTwitter} />,
    },
    {
      id: 5,
      icon: <FontAwesomeIcon icon={faEnvelope} />,
    },
  ];

  return (
    <div className={open ? "aside open" : "aside"}>
      {logo.map((logo) => (
        <div className="logo" key={logo.id}>
          <span className="image"> {logo.image}</span>
          <div>
            <h1>{logo.name}</h1>
            <p>{logo.title}</p>
          </div>
        </div>
      ))}
      
      <nav className="nav">
        <ul>
          {navItems.map((navItem) => (
            <li
              key={navItem.id}
              onClick={() => scrollToSection(navItem.sectionId)}
              className={activeSection === navItem.sectionId ? "active" : ""}
            >
              <span className="name"> {navItem.name}</span>
              <span className="icon"> {navItem.icon} </span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="iconContainer">
        {icons.map((icon) => (
          <div className="icons" id={`icon_${icon.id}`} key={icon.id}>
            {" "}
            <span className="icon">{icon.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import "./Navigation.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const tabs = [
  { name: "About", refKey: "aboutRef" },
  { name: "Tickets", refKey: "ticketsRef" },
  { name: "This is speakers section ", refKey: "speakersRef" },
  { name: "This is workshop section", refKey: "workshopsRef" },
  { name: "This is event sponsors", refKey: "sponsorsRef" },
];

const Navigation = ({ scrollToSection, sectionRefs }) => {
  return (
    <div className="navigationBar">
      <div className="tabsContainer">
        <FaChevronLeft className="btnArrow" />
        <div className="tabsScroll">
          {tabs.map(({ name, refKey }) => (
            <button
              className={`tab manrope-font ${name === "About" && "active"}`}
              onClick={() => scrollToSection(sectionRefs[refKey])}
            >
              {name}
            </button>
          ))}
        </div>
        <FaChevronRight className="btnArrow" />
      </div>
    </div>
  );
};

export default Navigation;

import React from "react";
import { CgClose } from "react-icons/cg";
import SpeakerCard from "../SpeakerCard/SpeakerCard";
import { speakersData } from "../../Constants";
import "./SidebarDrawer.css";
import { IoLocation } from "../../icon";

const SidebarDrawer = ({ workshop, isOpen, setIsOpen }) => {
  const {
    workshop_description,
    workshop_timestamp,
    profile_url,
    website,
    location,
  } = workshop;

  const speakers =
    profile_url?.length > 0 &&
    profile_url?.flatMap((url) =>
      speakersData?.filter((speaker) => speaker?.profile_url === url)
    );
  return (
    <div className="modalOuterContainer">
      <div className={`drawerContainer ${isOpen ? "open" : ""}`}>
        <CgClose onClick={() => setIsOpen(null)} className="closeIcon" />
        <h2 className="heading">{workshop_description}</h2>
        <p className="timestamp">{workshop_timestamp}</p>
        {website && (
          <a href={website} className="website">
            {website}
          </a>
        )}
        {location && (
          <div className="location">
            <IoLocation color="red" />
            <span>{location}</span>
          </div>
        )}
        <p className="workshopDescription">
          This is the description of a workshop.
        </p>
        <div>
          <h2 className="manrope-heading" style={{ marginLeft: "0.6rem" }}>
            {" "}
            Speakers
          </h2>
          <div className="speakersContainer">
            {speakers?.length !== 0 &&
              speakers?.map((speaker) => (
                <SpeakerCard key={speaker.id} speaker={speaker} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarDrawer;

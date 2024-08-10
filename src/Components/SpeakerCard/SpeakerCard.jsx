import React, { useState } from "react";
import "./SpeakerCard.css";
import SidebarDrawer from "../SidebarDrawer/SidebarDrawer";
import { useData } from "../../Context/DataContext";

const SpeakerCard = ({ speaker, drawer }) => {
  const {
    profile_url,
    profile_name,
    profile_details,
    social_media_links,
    profile_designation,
  } = speaker;
  const [isOpen, setIsOpen] = useState(null);

  return (
    <>
      <div
        className="speakerCard"
        onClick={() => !drawer && setIsOpen(speaker)}
        style={{
          border: !drawer && " .8px solid #cacaca",
          background: !drawer ? "white" : "transparent",
          gap: drawer ? "3rem" : "1rem",
        }}
      >
        <div className="imgcard">
          <img
            className={drawer ? "drawerImg" : "profileImg"}
            src={profile_url}
            alt={profile_name}
          />
        </div>
        <div>
          <div className="dataContainer">
            <p className="profileName">{profile_name}</p>
            <p className="details" style={{ fontSize: "1rem" }}>
              {profile_designation}
            </p>
            <p className="details">{profile_details}</p>
          </div>
          <div className="links">
            {social_media_links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="iconContainer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <SidebarDrawer
          speaker={speaker}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  );
};

export default SpeakerCard;

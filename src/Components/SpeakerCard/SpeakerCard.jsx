import React from "react";
import "./SpeakerCard.css";

const SpeakerCard = ({ speaker }) => {
  const {
    profile_url,
    profile_name,
    profile_details,
    social_media_links,
    profile_designation,
  } = speaker;
  return (
    <div className="speakerCard">
      <div className="imgcard">
        <img className="profileImg" src={profile_url} alt={profile_name} />
      </div>
      <div>
        <div className="dataContainer">
          <p className="profileName">{profile_name}</p>
          <p className="details">{profile_designation}</p>
          <p className="details">{profile_details}</p>
        </div>
        <div className="links">
          {social_media_links.map((link, index) => (
            <div
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="iconContainer"
            >
              {link.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;

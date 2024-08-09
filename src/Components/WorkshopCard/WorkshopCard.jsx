import React from "react";
import "./WorkshopCard.css";
import { SlCalender } from "react-icons/sl";

const WorkshopCard = ({ workshop }) => {
  const {
    workshop_topic_img_url,
    workshop_description,
    workshop_timestamp,
    profile_url,
  } = workshop;
  return (
    <div className="Card">
      <div className="imgContainer">
        <img
          className="img_url"
          src={workshop_topic_img_url}
          alt={workshop_topic_img_url}
        />
      </div>
      <p className="description">{workshop_description}</p>
      <div className="calender_details">
        <SlCalender />
        <p className="timestamp">{workshop_timestamp}</p>
      </div>
      <div className="view_sections">
        <div className="imgsContainer">
          {profile_url?.map((url, index) => (
            <img
              style={{
                borderRadius: "50%",
                right: index === 1 ? "14px" : "0px",
              }}
              src={url}
              alt={url}
            />
          ))}
        </div>
        <button className="ctaButton">View Details</button>
      </div>
    </div>
  );
};

export default WorkshopCard;

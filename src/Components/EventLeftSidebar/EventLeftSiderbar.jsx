import React, { useState, useEffect } from "react";
import { useData } from "../../Context/DataContext";
import { FaVideo } from "react-icons/fa";
import { calculateTimeLeft } from "../utils";
import "./EventLeftSidebar.css";
import { GoLinkExternal } from "react-icons/go";
import {
  TfiWorld,
  FaFacebookF,
  FaXTwitter,
  TiSocialLinkedin,
  MdMailOutline,
  MdCall,
  GrTicket,
} from "./../../icon";
import { useNavigate } from "react-router";

const EventLeftSiderbar = () => {
  const { pageData } = useData();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const organiserSocialLinks = [
    { icon: <FaFacebookF />, url: pageData?.organizer_facebook_url },
    { icon: <FaXTwitter />, url: pageData?.organizer_twitter_url },
    { icon: <TiSocialLinkedin />, url: pageData?.organizer_linkedin_url },
    { icon: <TfiWorld />, url: pageData?.organiser_website },
    { icon: <MdMailOutline />, url: `mailto:${pageData?.organiser_email}` },
    {
      icon: <MdCall />,
      url: `tel:${pageData?.organiser_dial_code}${pageData?.organiser_phone}`,
    },
  ];
  return (
    <div className="sidebarContainer">
      {/* Event div */}
      <div className="sidebarEventContainer">
        <h2 className="sidebarEventHeading">{pageData?.name}</h2>
        <div className="actionContainer">
          <div className="action">
            <FaVideo /> Online
          </div>
          <div className="action">
            <GrTicket /> Paid
          </div>
        </div>
        <p className="eventLink">
          <strong>Event Live Link</strong> : &nbsp;
          <a href={pageData?.event_website} className="streamingLink">
            Open streaming website
          </a>
        </p>
        <p className="eventLink">
          <strong>Date</strong>: Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM
          IST
        </p>
        <p className="eventDetail">Event starts in</p>
        <div className="timeDetail">{timeLeft}</div>
      </div>
      {/* buttons */}
      <div className="btnContainer">
        <button className="ctaButton" onClick={() => navigate("/payment")}>
          Buy Now
        </button>
        <button href="#" className="officialWebsite">
          Official Website
          <GoLinkExternal />
        </button>
      </div>
      {/* hosted by */}
      <h2 className="eventHeading">Hosted by</h2>
      <div className="sidebarEventContainer hostContainer">
        <div className="imageAndName">
          <img
            src={pageData?.organiser_image_url}
            alt="organiser_profile_url"
          />
          <span>{pageData?.organiser_name}</span>
        </div>
        <div
          className="eventOrganiserDetail"
          dangerouslySetInnerHTML={{
            __html: pageData?.organiser_info,
          }}
        />
        <p className="contactText">Contact Us On</p>
        <div className="links">
          {organiserSocialLinks
            ?.filter((link) => link.url)
            ?.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="iconContainer"
                style={{
                  background: "black",
                  height: "27px",
                  width: "27px",
                  marginLeft: "-0.2rem",
                }}
              >
                {link.icon}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EventLeftSiderbar;

import React, { useState, useRef } from "react";
import { useData } from "../../Context/DataContext";
import "./EventData.css";
import Navigation from "../Navigation/Navigation";
import {
  accordionCardData,
  speakersData,
  ticketPlanDetails,
  workshopData,
} from "../../Constants";
import TicketCard from "../TicketCard/TicketCard";
import CollapsableTicket from "../CollapsableTicket/CollapsableTicket";
import SpeakerCard from "../SpeakerCard/SpeakerCard";
import WorkshopCard from "../WorkshopCard/WorkshopCard";
import ReusableTickets from "../ReusableTickets/ReusableTickets";

const EventDetails = () => {
  const { pageData } = useData();
  const aboutRef = useRef(null);
  const ticketsRef = useRef(null);
  const speakersRef = useRef(null);
  const workshopsRef = useRef(null);
  const sponsorsRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const sectionRefs = {
    aboutRef,
    ticketsRef,
    speakersRef,
    workshopsRef,
    sponsorsRef,
  };

  return (
    <div className="eventDetailsContainer">
      <div className="imageContainer">
        <img
          src={pageData?.event_poster_url}
          alt="konfhub_event_img"
          className="posterImage"
        />
      </div>
      <div>
        <Navigation
          scrollToSection={scrollToSection}
          sectionRefs={sectionRefs}
        />
      </div>
      {/* About section */}
      <div className="container" ref={aboutRef}>
        <h2 className="manrope-heading">ABOUT EVENT</h2>
        <div
          className="manrope-text decriptionText"
          dangerouslySetInnerHTML={{
            __html: pageData?.description,
          }}
        />
      </div>
      {/* TICKET CONTAINER */}
      <div className="container" ref={ticketsRef}>
        <h2 className="manrope-heading">TICKETS</h2>
        {/* <div className="ticketContainer">
          {ticketPlanDetails.map((ticket) => (
            <TicketCard key={ticket?.id} ticket={ticket} />
          ))}
          <div className="collapsableTicketContainer">
            {accordionCardData?.map((collapsableTicket) => (
              <CollapsableTicket
                key={collapsableTicket?.id}
                ticket={collapsableTicket}
                iscollapsableIds={iscollapsableIds}
                setIscollapsableIds={setIscollapsableIds}
              />
            ))}
          </div>
        </div> */}
        <ReusableTickets />
      </div>
      {/*  speaker sections */}
      <div className="container" ref={speakersRef}>
        <h2 className="manrope-heading">{pageData?.speaker_section_title}</h2>
        <div
          className="manrope-text"
          dangerouslySetInnerHTML={{
            __html: pageData?.speaker_section_description,
          }}
        />
        <div className="speakerContainer">
          {speakersData?.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} drawer={false} />
          ))}
        </div>
      </div>
      {/* workshops section */}
      <div className="container" ref={workshopsRef}>
        <h2 className="manrope-heading">{pageData?.workshop_section_title}</h2>
        <div
          className="manrope-text"
          dangerouslySetInnerHTML={{
            __html: pageData?.workshop_section_description,
          }}
        />
        <div className="speakerContainer">
          {workshopData?.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      </div>
      {/* sponsors section */}
      <div className="container" ref={sponsorsRef}>
        <h2 className="manrope-heading">{pageData?.sponsor_section_title}</h2>
        <div
          className="manrope-text"
          dangerouslySetInnerHTML={{
            __html: pageData?.sponsor_section_description,
          }}
        />
        <div className="">
          <img
            className="sponsor_img"
            src="https://dev.konfhub.com/_next/image?url=https%3A%2F%2Fdev-media.konfhub.com%2Fsponsors%2F2024%2FJune%2F09%2F1717977584480-2a58c92e-ac5f-4ebd-9570-d6bcfc792dc2.png&w=1920&q=75"
          />

          <div className="category">
            <h2>Sponsor Category</h2>
            <div className="divider"></div>
            <img
              className="category_img"
              src="https://dev-media.konfhub.com/sponsors/2024/June/10/1717977635909-75bb1d01-51a2-4af1-82cd-72d587192692.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

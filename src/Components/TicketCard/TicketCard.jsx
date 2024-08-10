import React from "react";
import "./TicketCard.css";
import { IoLocation } from "../../icon";

const TicketCard = ({ ticket }) => {
  const {
    ticket_plan_type,
    ticket_timestamp,
    ticket_additional_heading,
    ticket_type,
    ticket_venue,
    button_name,
    ticket_description,
  } = ticket;
  return (
    <div className="ticketCard">
      <p className="ticketPlanName">{ticket_plan_type}</p>
      <p className="ticketDescription">{ticket_description}</p>
      {ticket_venue !== "" && (
        <a className="ticketVenue" href="#">
          <IoLocation />
          {ticket_venue}
        </a>
      )}
      <p className="ticketAdditional">{ticket_additional_heading}</p>
      <strong className="ticketTimestamp">{ticket_timestamp}</strong>
      <div className="ticketPlan">
        <span className="ticketType">{ticket_type}</span>
        <button className="ctaButton">{button_name}</button>
      </div>
    </div>
  );
};

export default TicketCard;

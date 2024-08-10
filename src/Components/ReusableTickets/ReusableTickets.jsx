import React, { useState } from "react";
import { ticketPlanDetails, accordionCardData } from "../../Constants";
import TicketCard from "../TicketCard/TicketCard";
import CollapsableTicket from "../CollapsableTicket/CollapsableTicket";
import "../EventData/EventData.css";
import { useLocation } from "react-router";

const ReusableTickets = () => {
  const [iscollapsableIds, setIscollapsableIds] = useState([]);
  const { pathname } = useLocation();
  return (
    <div
      className="ticketContainer"
      style={{
        width: pathname === "/" ? "70%" : "100%",
        background: pathname === "/" ? "#f6f6fc" : "transparent",
        margin: pathname !== "/" && "-1rem",
      }}
    >
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
    </div>
  );
};

export default ReusableTickets;

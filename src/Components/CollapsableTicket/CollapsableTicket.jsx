import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import TicketCard from "../TicketCard/TicketCard";
import "./Collapsableticket.css";

const CollapsableTicket = ({
  ticket,
  iscollapsableIds,
  setIscollapsableIds,
}) => {
  const { ticket_name, description, tickets } = ticket;

  const handleClickHandler = (ticket) => {
    if (iscollapsableIds.includes(ticket?.id)) {
      setIscollapsableIds((prev) => prev.filter((id) => id !== ticket.id));
    } else {
      setIscollapsableIds((prev) => [...prev, ticket.id]);
    }
  };

  return (
    <div
      className="collapsableTicket"
      style={{
        background: iscollapsableIds.includes(ticket.id)
          ? "transparent"
          : "white",
        boxShadow: "0px 0px 10px rgba(0,0,0,.15)",
      }}
    >
      <div
        className="header"
        onClick={() => handleClickHandler(ticket)}
        style={{
          background: iscollapsableIds.includes(ticket.id) && "white",
          borderBottomLeftRadius: iscollapsableIds.includes(ticket.id) && "0px",
          borderBottomRightRadius:
            iscollapsableIds.includes(ticket.id) && "0px",
        }}
      >
        <h2 className="title">{ticket_name}</h2>
        {iscollapsableIds.includes(ticket.id) ? (
          <IoIosArrowUp size={25} color="#0d6efd" className="icon" />
        ) : (
          <IoIosArrowDown size={25} className="icon" />
        )}
      </div>
      {iscollapsableIds.includes(ticket.id) && (
        <>
          <p className="descrption">{description}</p>
          <div>
            {tickets?.map((categoryticket) => {
              return (
                <TicketCard key={categoryticket?.id} ticket={categoryticket} />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default CollapsableTicket;

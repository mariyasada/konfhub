import React, { useState } from "react";
import "./TicketsContainer.css";
import { CiSearch } from "../../icon";
import { sideBarData } from "../../Constants";
import ReusableTickets from "../ReusableTickets/ReusableTickets";
import { useLocation } from "react-router";

const TicketsContainer = () => {
  const [activeTab, setActiveTab] = useState("Pick Tickets");

  return (
    <div className="ticketsDiv">
      {/* sidebar Data */}
      <div className="sidebarData">
        {sideBarData?.map((sidebarItem, index) => {
          return (
            <div key={sidebarItem.name} className="ticketItem">
              <div
                style={{
                  border:
                    activeTab === sidebarItem.name
                      ? "2px solid black"
                      : "2px solid white",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              >
                <div
                  className="sidebarIcon"
                  style={{
                    background:
                      activeTab === sidebarItem.name ? "black" : "white",
                    color: activeTab === sidebarItem.name ? "white" : "black",
                  }}
                >
                  {sidebarItem.icon}
                </div>
              </div>
              <span style={{ fontSize: "0.9rem", fontWeight: "500" }}>
                {sidebarItem.name}
              </span>
              {index < sideBarData.length - 1 && (
                <div className="dottedLine"></div>
              )}
            </div>
          );
        })}
      </div>
      {/* right side data */}
      <div className="ticketsAndSearch">
        <div className="inputDiv">
          <input placeholder="Search for tickets..." />
          <CiSearch size={20} color="red" />
        </div>
        <div className="ticketsDivContainer">
          <ReusableTickets  />
        </div>
      </div>
    </div>
  );
};

export default TicketsContainer;

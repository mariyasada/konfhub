import React from "react";
import EventLeftSiderbar from "../Components/EventLeftSidebar/EventLeftSiderbar";
import EventDetails from "../Components/EventData/EventData";
import "./EventPage.css";

const EventPage = () => {
  return (
    <div className="eventContainer">
      <EventDetails />
      <EventLeftSiderbar />
    </div>
  );
};

export default EventPage;

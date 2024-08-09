import React from "react";
import EventLeftSiderbar from "../Components/EventLeftSidebar/EventLeftSiderbar";
import EventDetails from "../Components/EventData/EventData";

const EventPage = () => {
  return (
    <div className="eventContainer">
      <EventDetails />
      <EventLeftSiderbar />
    </div>
  );
};

export default EventPage;

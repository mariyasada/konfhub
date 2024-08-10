import React from "react";
import EventLeftSiderbar from "../Components/EventLeftSidebar/EventLeftSiderbar";
import EventDetails from "../Components/EventData/EventData";
import "./EventPage.css";
import Navbar from "../Components/Navbar/Navbar";

const EventPage = () => {
  return (
    <>
      <Navbar />
      <div className="eventContainer">
        <EventDetails />
        <EventLeftSiderbar />
      </div>
    </>
  );
};

export default EventPage;

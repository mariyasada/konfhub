import React from "react";
import { FaArrowLeft } from "../../icon";
import "./BuyTicketsPage.css";
import { SlCalender } from "react-icons/sl";
import { useData } from "../../Context/DataContext";
import { useNavigate } from "react-router";
import TicketsContainer from "../../Components/TicketsContainer/TicketsContainer";

const BuyTicketsPage = () => {
  const { pageData } = useData();
  const navigate = useNavigate();
  return (
    <div className="buyTicketContainer">
      {/* header */}
      <div className="ticketHeading">
        <div className="iconDiv" onClick={() => navigate("/")}>
          <FaArrowLeft />
        </div>
        <div className="titleContainer">
          <h2>{pageData?.name}</h2>
          <div className="timestampDetail">
            <SlCalender />
            <span>
              31st Jul, 2034 at 6:00 AM IST to 31st Aug, 2034 at 6:00 PM IST
            </span>
          </div>
        </div>
      </div>
      <div className="detailsContainer">
        <TicketsContainer />
      </div>
    </div>
  );
};

export default BuyTicketsPage;

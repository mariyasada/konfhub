import React from "react";
import { BsCart, FaArrowLeft } from "../../icon";
import "./BuyTicketsPage.css";
import { SlCalender } from "react-icons/sl";
import { useData } from "../../Context/DataContext";
import { useNavigate } from "react-router";
import TicketsContainer from "../../Components/TicketsContainer/TicketsContainer";

const BuyTicketsPage = () => {
  const { pageData } = useData();
  const navigate = useNavigate();
  return (
    <>
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
          {/*  Ticket price container */}
          <div className="payment" style={{ opacity: "0.7" }}>
            <div className="cartContainer">
              <div>
                <BsCart size={50} color="#C7C7B3" />
              </div>
              <p style={{ fontSize: "0.9rem", lineHeight: "27px" }}>
                you haven't selected any ticket. Select a ticket to see the
                ticket summary.
              </p>
            </div>
            <button
              className="ctaButton"
              style={{
                width: "100%",
                marginTop: "1rem",
                cursor: "not-allowed",
              }}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={pageData?.checkout_footer_icon}
          alt="footer_icon"
          style={{ height: "100px", objectFit: "contain" }}
        />
      </div>
    </>
  );
};

export default BuyTicketsPage;

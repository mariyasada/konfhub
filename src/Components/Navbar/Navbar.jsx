import React from "react";
import { FaRegUser } from "react-icons/fa";
import "./Navbar.css";
import { useData } from "../../Context/DataContext";

const Navbar = () => {
  const { pageData, loading } = useData();
  return (
    <>
      {!loading && (
        <nav className="navbarContainer">
          <img src={pageData?.navbar_icon} alt="konfhub_logo" />
          <FaRegUser className="icon" />
        </nav>
      )}
    </>
  );
};

export default Navbar;

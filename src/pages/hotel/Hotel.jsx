import React from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hotel = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <h1 className="hotelTitle">Hotel Name</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} className="hotelIcon" />
            <span>Address</span>
          </div>
          <span className="hotelDistance">2.5 km from city</span>
          <span className="hotelPriceHighlight">$120/night</span>
          <div className="hotelImages">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;

import React from "react";
import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://images.pexels.com/photos/20653851/pexels-photo-20653851/free-photo-of-hotel-room-with-a-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="searchItem"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Hotel Name</h1>
        <span className="siDistance">2.5 km from city</span>
        <span className="siTaxiOp">$120/night</span>
        <span className="siSubtitle">8.9 Excellent</span>
        <span className="siFeatures">
          Entire studio. 2 beds. 2 guests. 1 bedroom. 1 bathroom
        </span>
        <span className="siCancelOp">free cancellation</span>

        <span className="siCancelOpSubtitle">
          Cancel before 12:00 PM on 12th June
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$120/night</span>
          <span className="siTaxiOp">Includes taxed and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;

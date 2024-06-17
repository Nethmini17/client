import React from "react";
import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/20705879/pexels-photo-20705879/free-photo-of-opened-doors-to-swimming-pool-in-hotel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="pList"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>123 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/20697900/pexels-photo-20697900/free-photo-of-gray-apartment-building-in-city.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="pList"
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>123 apartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/3280801/pexels-photo-3280801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="pList"
        />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>123 resorts</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="pList"
        />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>123 villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.pexels.com/photos/1144694/pexels-photo-1144694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="pList"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>123 cabins</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;

import React from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import { useState } from "react";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://images.pexels.com/photos/4577385/pexels-photo-4577385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/4577386/pexels-photo-4577386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/4577191/pexels-photo-4577191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/4577186/pexels-photo-4577186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://images.pexels.com/photos/7538088/pexels-photo-7538088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSliderNumber;
    if (direction === "l") {
      newSliderNumber= slideNumber === 0 ? 5: slideNumber - 1;
    }
   else {
      slideNumber = photos.length - 1 & setSlideNumber(slideNumber + 1);
    }
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && 
          <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight}  className="arrow" onClick={()=>handleMove("r")}/>
          </div>
        }
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book now!</button>
          <h1 className="hotelTitle">Hotel Name</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} className="hotelIcon" />
            <span>Address</span>
          </div>
          <span className="hotelDistance">2.5 km from city</span>
          <span className="hotelPriceHighlight">$120/night</span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt="hotel"
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              '<h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from the Main Market Square and the Old
                Town, Hotel Wawel is a 3-star hotel offering a view of the Wawel
                Royal Castle. It features elegant rooms with free Wi-Fi and a
                flat-screen TV.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b>(9 nights)
              </h2>
              <button>Reserve or Book now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;

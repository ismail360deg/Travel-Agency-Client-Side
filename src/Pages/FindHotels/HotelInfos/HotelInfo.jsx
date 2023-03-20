import React from "react";
import { Link } from "react-router-dom";

const HotelInfo = ({hotelName}) => {
    const { photo,country  } = hotelName;
  return <div>
        <div className="col">
    <div className="">
      <img src={photo} class="card-img-top" alt="..."/>
      <div className="card-body book">
        <h5 className="card-title">{country}</h5>
        <p className="card-text">An amazing journey</p>
        <Link to={`/hotel-listing?country=${country}`}><button>Book a Hotel</button></Link>
      </div>
    </div>
  </div>
  </div>;
};

export default HotelInfo;

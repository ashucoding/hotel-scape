import React from "react";
import { Link } from "react-router-dom";

function HotelRow({ hotel }) {
  return (
    <li key={hotel.attributes.name}>
      <Link to={`hotels/${hotel.attributes.slug}`}>
        {hotel.attributes.name}
      </Link>
    </li>
  );
}
export default HotelRow;

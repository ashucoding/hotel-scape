import React from "react";
import "./HotelNavbar.css";
import { Link } from "react-router-dom";

function HotelNavbar() {
  return (
    <div className="hotelNavbar">
      <h3>
        <span className="hotelNavbar_links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/hotels/:id">Hotel Reviews</Link>
            </li>
            <li>
              <Link to="/hotels/new">New Hotel</Link>
            </li>
          </ul>
        </span>
      </h3>

      <div className="hotelNavbar_search">
        <input placeholder="Search" />
        {/* <SearchRoundedIcon /> */}
      </div>
    </div>
  );
}
export default HotelNavbar;

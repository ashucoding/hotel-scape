import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import HotelHeader from "./HotelHeader";
import {connect} from 'react-redux';
import { getHotels } from './store';
import HotelRow from './HotelRow';

function Home({hotels, getHotels}) {

  useEffect(() => {
    getHotels();
  }, []);

  const list = hotels.map((hotel) => {
    return <HotelRow hotel={hotel}/>;
  });

  return (
    <div>
      <HotelHeader />
      <h4 class="ui teal header">Home - All Hotels</h4>
      
      <div className="grid">
        <ul> {list} </ul>
      </div>
    </div>
  );
}

export default connect(state => ({hotels: state.hotels}), {getHotels})(Home);

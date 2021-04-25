import { React, useEffect, useState } from "react";
import HotelCard from './HotelCard';
import { Link, useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { getHotels } from './store';


function Hotel({ hotels, getHotels }) {
  const params = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    getHotels();
  }, [params.id]);

  useEffect(() => {
    const found_hotel = hotels.find(hotel => hotel.attributes.slug === params.slug);
    setHotel(found_hotel);
  }, [hotels]);

  return (
    <div>
      {hotel && (
        <HotelCard hotel={hotel}/>
      )}
    </div>
  );
}

export default connect(state => ({ hotels: state.hotels }), {getHotels})(Hotel);

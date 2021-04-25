import React from 'react';

function HotelCard({hotel}){
    return (<div className="hotel_card">
    <div className="hotel_logo">
      <img src={hotel.attributes.image_url} alt={hotel.name} />
    </div>

    <h2 className="hotel_name">{hotel.attributes.name}</h2>

    <div className="hotel_score">Score: {hotel.attributes.avg_score}</div>

    <h2>Hotel Reviews</h2>

  </div>)
}

export default HotelCard;
import { React, useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

function Hotel() {
  const [hotel, setHotel] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch(`/api/v1/hotels/${params.slug}`)
      .then((resp) => resp.json())
      .then((respJSON) => {
        setHotel(respJSON.data);
      });
  }, [params.id]);

  return (
    <div>
      
      {hotel && (
        <div className="hotel_card">
          <div className="hotel_logo">
            <img src={hotel.attributes.image_url} alt={hotel.name} />
          </div>

          <h2 className="hotel_name">{hotel.attributes.name}</h2>

          <div className="hotel_score">Score: {hotel.attributes.avg_score}</div>

          <h2>Hotel Reviews</h2>

        </div>
      )}
    </div>
  );
}

export default Hotel;

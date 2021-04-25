import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import {createHotel} from './store';

function CreateHotel({createHotel}) {
  const [hotelName, setHotelName] = useState("");
  const [hotelImgUrl, setHotelImgUrl] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    createHotel({name: hotelName, image_url: hotelImgUrl})
    .then(() => {
      history.push("/");
    });
  };

  return (
    <div>
      <h1>Create a Hotel</h1>
      <form>
        <label for="name">Hotel Name:</label>
        <input
          type="text"
          value={hotelName}
          onChange={(e) => setHotelName(e.target.value)}
          name="name"
        />
        <label for="image_url">Image Url:</label>
        <input
          type="text"
          value={hotelImgUrl}
          onChange={(e) => setHotelImgUrl(e.target.value)}
          name="image_url"
        />
        <input type="submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default connect(null, {createHotel})(CreateHotel);

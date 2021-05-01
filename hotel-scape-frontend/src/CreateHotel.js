import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import {createHotel} from './store';
import styled from "styled-components";

const FormHeader = styled.div`
text-align:center;
display: flex;
background-color: #ff6f69;
white-space: normal;
font-weight: 700;
font-size: 100px;
padding: 100px;
margin: -75px;
`

const Form = styled.form`
display: center;
width: auto;
padding: 200px 0 200px 0;
`;

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
      <Form>
      <FormHeader>Create a Hotel</FormHeader>
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
      </Form>
    </div>
  );
}

// export default CreateHotel;
export default connect(null, { createHotel })(CreateHotel);

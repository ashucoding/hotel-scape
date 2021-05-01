import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Card = styled.div`
  border: 1px solid #efefef;
  background-color: white;
`
const HotelLogo = styled.div`
  width: 50px;
  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
`
const HotelName = styled.div`
padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
margin: 30px 0 20px 0;
height: 50px;

a{
  color: #fff;
  background: #000;
  border-radius: 4px;
  padding: 10px 50px;
  border: 1px solid #000;
  width: 100%;
  text-decoration: none;
}
`

function HotelShow({ hotel }) {
  return (
    <Card>
      <HotelLogo>
        <img src={hotel.attributes.image_url} alt={hotel.name} />
      </HotelLogo>

      <HotelName>{hotel.attributes.name}</HotelName>

      <h2><Link to={`/`}>
      View All Hotels
      </Link></h2>
    </Card>
  );
}

export default HotelShow;

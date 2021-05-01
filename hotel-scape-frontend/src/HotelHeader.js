import React from "react";
import styled from "styled-components";

const HotelHeaderStyle = styled.div`
background-color: #ffcc5c; 
margin: -75px;
padding: 40px;
height: 100px;
border-bottom: 0.5px solid #b3b3b3;
background-image: url(omen.png);
background-repeat: no-repeat;
background-position: center;
`

const HotelHeaderTitle = styled.div`
 
  color: #224c3a;
  font-weight: 400;
  font-family: cursive;
  font-size: 10vh;
`

function HotelHeader() {
  return (
    <HotelHeaderStyle>
      <h3>
        <HotelHeaderTitle>Hotel Scape</HotelHeaderTitle>
      </h3>
    </HotelHeaderStyle>
  );
}
export default HotelHeader;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HotelHeader from "./HotelHeader";
import { connect } from "react-redux";
import { getHotels } from "./store";
import HotelCard from "./HotelCard";
import styled from "styled-components";

const Home_Page = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
const Home_Header = styled.div`
  padding: 100px 100px 10px 100px;
  h1 {
    font-size: 42px;
  }
`;
const Home_Subheader = styled.div`
  margin: 100px;
  font-weight: 300;
  font-size: 26px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`;

function Home({ hotels, getHotels }) {
  useEffect(() => {
    getHotels();
  }, []);

  const list = hotels.map((hotel) => {
    return <HotelCard hotel={hotel} />;
  });

  return (
    <Home_Page>
      <Home_Header>
        <HotelHeader />
        <Home_Subheader> Tell Us About Your Hotel Stay </Home_Subheader>
      </Home_Header>
      <Grid>{list}</Grid>
    </Home_Page>
  );
}

export default connect((state) => ({ hotels: state.hotels }), { getHotels })(
  Home
);

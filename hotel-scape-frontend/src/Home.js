import React, { useState, useEffect } from "react";
import HotelHeader from "./HotelHeader";

function Home() {
  const [hotels, setHotels] = useState([]);
  
  useEffect(() => {
    const promise = fetch("/api/v1/hotels");
    promise
      .then((response) => response.json())
      .then((resp) => {
        setHotels(resp.data);
      })
      .catch((resp) => {
        console.log(resp);
      });
  }, []);

  const list = hotels.map((item) => {
    return <li key={item.attributes.name}>{item.attributes.name}</li>;
  });

  return (
    <div>
      <HotelHeader />
      <h2>Home - All Hotels</h2>
      <div className="grid">
        <ul> {list} </ul>
      </div>
    </div>
  );
}

export default Home;

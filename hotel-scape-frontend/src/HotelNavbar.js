import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
width:500px;
margin:0 auto;
list-style:none;
`;

const HotelNavBarLinks = styled.div`
 li {
  float:left;
}

a {
font-size:20px;
  
display:block;
text-align:center;
width:150px;
text-decoration:none;
}

`;


function HotelNavbar() {
  return (
    <Header>
      <nav>
        <HotelNavBarLinks>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hotels/new">New Hotel</Link>
          </li>
        </HotelNavBarLinks>
      </nav>
    </Header>
  );
}
export default HotelNavbar;

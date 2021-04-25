import React from 'react';
import {Link} from 'react-router-dom';

function Hotel(props) {

    var props = {attributes: {
        id: 1,
        name: "Fake Hotel",
        image_url: "",
        avg_score: "5",
        slug: "fake-hotel"
    }};
    return (
        <div>
            <h2>Hotel Reviews</h2>
            <div className="hotel_card">
                <div className="hotel_logo">
                    <img src={props.attributes.image_url} alt={props.attributes.name}/>
                </div>

                <h2 className="hotel_name">{props.attributes.name}</h2>

                <div className="hotel_score">Score: {props.attributes.avg_score}</div>

                <div className="hotel_link"> 
                    <Link to={`/hotels/${props.attributes.slug}`}>View Hotels</Link>
                </div>
            </div>
        </div>
    )
};

export default Hotel;
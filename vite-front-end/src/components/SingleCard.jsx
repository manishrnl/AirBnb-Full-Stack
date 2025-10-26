// src/components/RoomCard.jsx
import React from "react";

const SingleCard = ({image, amenities, type, description, buttonText}) => {
    return (<div className="card shadow-sm h-100"><img src={image} className="card-img-top"
                                                       alt={type}/>
        <div className="card-body d-flex flex-column"><h5 className="card-title">Type
            : {type}</h5> <p className="card-text flex-grow-1">{description}</p> <p
            className="card-text flex-grow-1">Facilities : {amenities}</p> <a href="/bookings"
                                                                              className="btn btn-outline-primary mt-auto">{buttonText}</a>
        </div>
    </div>);
};
export default SingleCard;
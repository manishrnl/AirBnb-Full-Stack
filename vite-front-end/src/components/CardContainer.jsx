import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard.jsx";
import { getRooms } from "../service/UserService.jsx";

const CardContainer = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchRooms = () => {
        setLoading(true);
        setError("");
        getRooms()
            .then((res) => {
                console.log("API response:", res.data);
                setRooms(res.data.data || []); // <-- fix here
            })
            .catch((err) => {
                console.error("Error fetching rooms:", err);
                setError("Failed to fetch rooms. Please try again later.");
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchRooms();
    }, []);

    if (loading) return <p className="text-center py-5">Loading rooms...</p>;
    if (error) return <p className="text-center py-5 text-danger">{error}</p>;

    return (
        <div className="container py-5" id="rooms">
            <h2 className="text-center mb-5">Our Rooms</h2>
            {rooms.length === 0 ? (
                <p className="text-center">No rooms available</p>
            ) : (
                <div className="row g-4">
                    {rooms.map((room) => (
                        <div key={room.id} className="col-md-6 col-lg-3">
                            <SingleCard
                                image={room.photos[0]} // first photo from photos array
                                type={room.type}
                                amenities={room.amenities.join(" , ")}
                                description={`Price: ₹${room.basePrice}`}

                                buttonText="Book Now"
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CardContainer;

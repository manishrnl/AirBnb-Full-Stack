import React, {useEffect} from "react";
import hotel1 from "../assets/hotel-1.jpg";
import hotel2 from "../assets/hotel-2.webp";
import hotel3 from "../assets/hotel-3.jpg";

const roomsData = [
    {
        id: 1,
        name: "Deluxe Room",
        city:"Madhubani",
        description: "A spacious room with king-size bed, free Wi-Fi, and city view.",
        price: "₹ 120 / night",
        image: hotel1
    },
    {
        id: 2,
        name: "Standard Room",
        description: "Comfortable room with queen bed and modern amenities.",
        price: " ₹ 80 / night",
        city:"Madhubani",
        image: hotel2
    },
    {
        id: 3,
        name: "Suite",
        city:"Madhubani",
        description: "Luxurious suite with living area, balcony, and premium facilities.",
        price: "₹ 200 / night",
        image: hotel3
    }
];

const Rooms = () => {
    useEffect(() => {
        document.title = "Rooms - HotelBooking";
    }, []); // Empty dependency array means it runs once on mount

    return (
        <div className="rooms-section py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5 text-primary">Our Rooms</h2>
                <div className="row">
                    {roomsData.map((room) => (
                        <div key={room.id} className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <img
                                    src={room.image}
                                    className="card-img-top p-4"
                                    alt={room.name}
                                    style={{height: "200px", objectFit: "contain"}}
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Type - {room.name}</h5>
                                    <h5 className="card-title">City - {room.city}</h5>
                                    <p className="card-text">{room.description}</p>
                                    <h6 className="text-primary">{room.price}</h6>
                                    <button className="btn btn-primary mt-3">Book Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Rooms;

// src/pages/Home.jsx
import React, {useEffect} from "react";
import CardContainer from "../components/CardContainer.jsx";
import { Link } from "react-router-dom";

const Home = () => {
    useEffect(() => {
        document.title = "Home - HotelBooking";
    }, []); // Empty dependency array means it runs once on mount

    return (
        <div>
            {/* Hero Section */}
            <section
                className="hero-section text-white text-center d-flex align-items-center"
                style={{
                     backgroundImage: 'url("https://tse1.mm.bing.net/th/id/OIP.FtudhIBH-HYhxMpS4TU-sAHaE8?pid=Apihttps://tse1.mm.bing.net/th/id/OIP.FtudhIBH-HYhxMpS4TU-sAHaE8?pid=Api")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "80vh",
                    position: "relative"
                }}
            >
                <div className="container">
                    <h1 className="display-4 fw-bold">Welcome to HotelBooking</h1>
                    <p className="lead mb-4">Luxury stays. Best prices. Instant booking.</p>
                    <Link to="/rooms" className="btn btn-primary btn-lg">
                        Book Now
                    </Link>
                </div>
                <div
                    className="overlay"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0,0,0,0.5)"
                    }}
                ></div>
            </section>

            {/* Rooms Cards */}
            <CardContainer />
        </div>
    );
};

export default Home;

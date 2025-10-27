import React, { useEffect, useRef } from "react";
import CardContainer from "../components/CardContainer.jsx";
import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const heroRef = useRef(null);
    const roomRef = useRef(null);

    useEffect(() => {
        document.title = "Home - Hotel Booking";

    }, []);
    useEffect(() => {
        const hash = location.hash;
        if (hash === "#room-section" && roomRef.current) {
            roomRef.current.scrollIntoView({ behavior: "smooth" });
        }
        if (hash === "#hero-section" && roomRef.current) {
            heroRef.current.scrollIntoView({ behavior: "smooth" });
        }

    }, [location]);
    return (
        <div>
            <section
                id="hero-section"
                ref={heroRef}
                className="hero-section text-white text-center d-flex align-items-center"
                style={{
                    backgroundImage:
                        'url("https://tse1.mm.bing.net/th/id/OIP.FtudhIBH-HYhxMpS4TU-sAHaE8?pid=Api")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "80vh",
                    position: "relative",
                }}
            >
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <h1 className="display-4 fw-bold">Welcome to Hotel Booking</h1>
                    <p className="lead mb-4">Luxury stays. Best prices. Instant booking.</p>
                </div>
            </section>

            <section id="room-section" ref={roomRef} className="room-section">
                <CardContainer />
            </section>
        </div>
    );
};

export default Home;

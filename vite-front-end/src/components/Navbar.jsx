// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logout from "../pages/Logout.jsx";

const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Example logout logic — replace with your own
        console.log("User logged out");
        setShowLogout(false);
        localStorage.removeItem("user"); // if you store login info
        navigate("/login");
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#007bff" viewBox="0 0 24 24" width="28" height="28">
                            <path d="M21 11V9a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v2a2 2 0 0 0 2 2v7h2v-7h10v7h2v-7a2 2 0 0 0 2-2ZM6 9V7h12v2H6Zm8 9h-4v-4h4v4Z"/>
                        </svg>
                        <span>Airbnb Clone</span>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-controls="navbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" to="/offers">Offers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about-us">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact-us">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>

                            {/* Authentication Dropdown */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="authDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Account
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="authDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="/login">Login</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/signup">Sign Up</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/myBookings">My Bookings</Link>
                                    </li>
                                    <li>
                                        <button
                                            className="dropdown-item text-danger"
                                            onClick={() => setShowLogout(true)}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* ✅ Logout confirmation popup */}
            <Logout
                show={showLogout}
                onConfirm={handleLogout}
                onCancel={() => setShowLogout(false)}
            />
        </>
    );
};

export default Navbar;

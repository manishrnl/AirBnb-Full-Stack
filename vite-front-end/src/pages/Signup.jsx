import React, {useEffect, useState} from "react";

import {Link} from "react-router-dom";

const Signup = () => {
    useEffect(() => {
        document.title = "Sign Up - HotelBooking";
    }, []); // Empty dependency array means it runs once on mount


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        console.log("Name:", name, "Email:", email, "Password:", password);
        // Add signup logic here
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-lg p-4" style={{width: "400px", borderRadius: "15px"}}>
                <h3 className="text-center mb-4 text-success">Sign Up</h3>
                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 mb-3">Sign Up
                    </button>
                    <p className="text-center">
                        Already have an account?{" "}
                        <Link to="/login" className="text-success">
                            Login
                        </Link>
                    </p>

                </form>
            </div>
        </div>
    );
};

export default Signup;

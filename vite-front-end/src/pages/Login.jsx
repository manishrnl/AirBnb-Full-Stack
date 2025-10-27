import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const Login = () => {
    useEffect(() => {
        document.title = "Login - Hotel Booking";
    }, []); // Empty dependency array means it runs once on mount

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
        // Add login logic here
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card shadow-lg p-4" style={{ width: "400px", borderRadius: "15px" }}>
                <h3 className="text-center mb-4 text-primary">Login</h3>
                <form onSubmit={handleLogin}>
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
                    <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
                    <p className="text-center">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-primary">
                            Sign Up
                        </Link>
                    </p>

                </form>
            </div>
        </div>
    );
};

export default Login;

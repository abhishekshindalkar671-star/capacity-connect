import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const isLoggedIn =
    localStorage.getItem("capacityConnectLoggedIn") === "true";

  const handleLogout = () => {
    // Only remove login session
    // Registered user data will remain safe
    localStorage.removeItem("capacityConnectLoggedIn");
    localStorage.removeItem("capacityConnectCurrentUser");

    // Redirect to Login page
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        <span className="logo-icon">🎓</span>
        <span>Capacity Connect</span>
      </div>

      {/* NAVIGATION LINKS */}
      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/courses">Courses</Link>

        <Link to="/about">About</Link>

        {isLoggedIn ? (
          <button
            type="button"
            onClick={handleLogout}
            className="login-btn"
            style={{
              border: "none",
              cursor: "pointer",
              font: "inherit",
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
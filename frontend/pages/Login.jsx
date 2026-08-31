import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/* =====================================================
   LOGIN PAGE
===================================================== */

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /* =====================================================
     HANDLE INPUT CHANGE
  ===================================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setError("");
    setSuccess("");
  };

  /* =====================================================
     HANDLE LOGIN
  ===================================================== */

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    /* ---------------------------------------------------
       VALIDATION
    --------------------------------------------------- */

    if (!formData.email || !formData.password) {
      setError("Please enter email and password.");
      return;
    }

    /* ---------------------------------------------------
       GET REGISTERED USER
    --------------------------------------------------- */

    const storedUser = localStorage.getItem("capacityConnectUser");

    if (!storedUser) {
      setError("No account found. Please register first.");
      return;
    }

    const user = JSON.parse(storedUser);

    /* ---------------------------------------------------
       CHECK LOGIN DETAILS
    --------------------------------------------------- */

    if (
      formData.email !== user.email ||
      formData.password !== user.password
    ) {
      setError("Invalid email or password.");
      return;
    }

    /* ---------------------------------------------------
       LOGIN SUCCESS
    --------------------------------------------------- */

    localStorage.setItem(
      "capacityConnectLoggedIn",
      "true"
    );

    localStorage.setItem(
      "capacityConnectCurrentUser",
      JSON.stringify(user)
    );

    setSuccess("Login successful! Redirecting...");

    /* ---------------------------------------------------
       GO TO DASHBOARD
    --------------------------------------------------- */

    setTimeout(() => {
      navigate("/dashboard");
    }, 800);
  };

  /* =====================================================
     UI
  ===================================================== */

  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="auth-header">

          <div className="auth-icon">
            🎓
          </div>

          <span className="hero-badge">
            🔐 STUDENT LOGIN
          </span>

          <h1>
            Welcome Back!
          </h1>

          <p>
            Login to continue your learning journey.
          </p>

        </div>


        {/* =================================================
            ERROR MESSAGE
        ================================================= */}

        {error && (
          <div
            className="auth-message error-message"
            style={{
              marginBottom: "20px",
              padding: "12px 15px",
              borderRadius: "10px",
              background: "#fee2e2",
              color: "#b91c1c",
              fontWeight: "600",
            }}
          >
            ❌ {error}
          </div>
        )}


        {/* =================================================
            SUCCESS MESSAGE
        ================================================= */}

        {success && (
          <div
            className="auth-message success-message"
            style={{
              marginBottom: "20px",
              padding: "12px 15px",
              borderRadius: "10px",
              background: "#dcfce7",
              color: "#15803d",
              fontWeight: "600",
            }}
          >
            ✅ {success}
          </div>
        )}


        {/* =================================================
            LOGIN FORM
        ================================================= */}

        <form onSubmit={handleLogin}>

          {/* EMAIL */}

          <div className="form-group">

            <label htmlFor="email">
              Email Address
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />

          </div>


          {/* PASSWORD */}

          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
            />

          </div>


          {/* LOGIN BUTTON */}

          <button
            type="submit"
            className="primary-btn"
            style={{
              width: "100%",
              border: "none",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Login →
          </button>

        </form>


        {/* =================================================
            REGISTER LINK
        ================================================= */}

        <div
          style={{
            textAlign: "center",
            marginTop: "25px",
            color: "#6b7280",
          }}
        >

          <p>
            Don't have an account?
          </p>

          <Link
            to="/register"
            className="secondary-btn"
            style={{
              display: "inline-block",
              marginTop: "10px",
            }}
          >
            Create Account
          </Link>

        </div>


        {/* =================================================
            BACK HOME
        ================================================= */}

        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >

          <Link
            to="/"
            style={{
              color: "#6366f1",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
}


export default Login;
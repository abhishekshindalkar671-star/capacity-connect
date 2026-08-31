import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/* =====================================================
   REGISTER PAGE
===================================================== */

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
     HANDLE REGISTER
  ===================================================== */

  const handleRegister = (e) => {

    e.preventDefault();

    setError("");
    setSuccess("");


    /* ---------------------------------------------------
       VALIDATION
    --------------------------------------------------- */

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {

      setError("Please fill all fields.");

      return;
    }


    /* ---------------------------------------------------
       PASSWORD CHECK
    --------------------------------------------------- */

    if (formData.password.length < 6) {

      setError(
        "Password must contain at least 6 characters."
      );

      return;
    }


    /* ---------------------------------------------------
       CONFIRM PASSWORD
    --------------------------------------------------- */

    if (
      formData.password !==
      formData.confirmPassword
    ) {

      setError("Passwords do not match.");

      return;
    }


    /* ---------------------------------------------------
       CREATE USER OBJECT
    --------------------------------------------------- */

    const user = {

      name: formData.name,

      email: formData.email,

      password: formData.password,

      role: "student",

      createdAt: new Date().toISOString(),

    };


    /* ---------------------------------------------------
       SAVE USER
    --------------------------------------------------- */

    localStorage.setItem(
      "capacityConnectUser",
      JSON.stringify(user)
    );


    /* ---------------------------------------------------
       SUCCESS MESSAGE
    --------------------------------------------------- */

    setSuccess(
      "Account successfully created! Redirecting to login..."
    );


    /* ---------------------------------------------------
       REDIRECT TO LOGIN
    --------------------------------------------------- */

    setTimeout(() => {

      navigate("/login");

    }, 1000);

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
            📝 STUDENT REGISTRATION
          </span>

          <h1>
            Create Your Account
          </h1>

          <p>
            Join Capacity Connect and start your learning journey.
          </p>

        </div>


        {/* =================================================
            ERROR MESSAGE
        ================================================= */}

        {error && (

          <div
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
            REGISTER FORM
        ================================================= */}

        <form onSubmit={handleRegister}>

          {/* NAME */}

          <div className="form-group">

            <label htmlFor="name">
              Full Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
            />

          </div>


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
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
            />

          </div>


          {/* CONFIRM PASSWORD */}

          <div className="form-group">

            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
            />

          </div>


          {/* CREATE ACCOUNT BUTTON */}

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
            Create Student Account →
          </button>

        </form>


        {/* =================================================
            LOGIN LINK
        ================================================= */}

        <div
          style={{
            textAlign: "center",
            marginTop: "25px",
            color: "#6b7280",
          }}
        >

          <p>
            Already have an account?
          </p>

          <Link
            to="/login"
            className="secondary-btn"
            style={{
              display: "inline-block",
              marginTop: "10px",
            }}
          >
            Login
          </Link>

        </div>


        {/* =================================================
            HOME LINK
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


export default Register;
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function PublicNavbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
      <div className="container">
        {/* =========================
            BRAND
        ========================= */}

        <Link to="/" className="navbar-brand d-flex align-items-center fw-bold">
          <span
            className="bg-white text-primary rounded-3 d-flex align-items-center justify-content-center me-2"
            style={{
              width: "38px",
              height: "38px",
            }}
          >
            <i className="bi bi-people-fill fs-5"></i>
          </span>

          <span>
            Employee<span className="text-warning">MS</span>
          </span>
        </Link>

        {/* =========================
            MOBILE TOGGLER
        ========================= */}

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#publicNavbar"
          aria-controls="publicNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* =========================
            NAVIGATION
        ========================= */}

        <div className="collapse navbar-collapse" id="publicNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {/* HOME */}

            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link px-3 ${
                  isActive("/") ? "active fw-semibold" : ""
                }`}
              >
                <i className="bi bi-house-door me-1"></i>
                Home
              </Link>
            </li>

            {/* ABOUT */}

            <li className="nav-item">
              <Link
                to="/aboutus"
                className={`nav-link px-3 ${
                  isActive("/aboutus") ? "active fw-semibold" : ""
                }`}
              >
                <i className="bi bi-info-circle me-1"></i>
                About Us
              </Link>
            </li>

            {/* SERVICES */}

            <li className="nav-item">
              <Link
                to="/services"
                className={`nav-link px-3 ${
                  isActive("/services") ? "active fw-semibold" : ""
                }`}
              >
                <i className="bi bi-grid me-1"></i>
                Services
              </Link>
            </li>

            {/* CONTACT */}

            <li className="nav-item">
              <Link
                to="/contactus"
                className={`nav-link px-3 ${
                  isActive("/contactus") ? "active fw-semibold" : ""
                }`}
              >
                <i className="bi bi-envelope me-1"></i>
                Contact
              </Link>
            </li>

            {/* DIVIDER */}

            <li className="nav-item d-none d-lg-block">
              <span className="text-white opacity-50 mx-1">|</span>
            </li>

            {/* SIGNUP / LOGIN */}

            <li className="nav-item mt-2 mt-lg-0">
              <Link
                to="/registerform"
                className="btn btn-warning text-dark fw-semibold px-4 py-2 rounded-3 shadow-sm"
              >
                <i className="bi bi-person-circle me-2"></i>
                Sign Up / Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

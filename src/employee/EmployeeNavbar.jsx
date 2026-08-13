import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function EmployeeNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const user = JSON.parse(localStorage.getItem("userinfo")) || null;

  // =========================
  // LOGOUT
  // =========================

  const logout = () => {
    localStorage.removeItem("userinfo");
    navigate("/");
  };

  // =========================
  // ACTIVE LINK
  // =========================

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
      <div className="container">

        {/* =========================
            BRAND
        ========================= */}

        <Link
          to="/employeedashboard"
          className="navbar-brand d-flex align-items-center fw-bold"
        >
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
          data-bs-target="#employeeNavbar"
          aria-controls="employeeNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* =========================
            NAVIGATION
        ========================= */}

        <div
          className="collapse navbar-collapse"
          id="employeeNavbar"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            {/* DASHBOARD */}

            <li className="nav-item">
              <Link
                to="/employeedashboard"
                className={`nav-link px-3 ${
                  isActive("/employeedashboard")
                    ? "active fw-semibold"
                    : ""
                }`}
              >
                <i className="bi bi-speedometer2 me-1"></i>
                Dashboard
              </Link>
            </li>

            {/* PROFILE */}

            <li className="nav-item">
              <Link
                to="/employeeprofile"
                className={`nav-link px-3 ${
                  isActive("/employeeprofile")
                    ? "active fw-semibold"
                    : ""
                }`}
              >
                <i className="bi bi-person-circle me-1"></i>
                My Profile
              </Link>
            </li>

            {/* DIVIDER */}

            <li className="nav-item d-none d-lg-block">
              <span className="text-white opacity-50 mx-1">
                |
              </span>
            </li>

            {/* USER INFO */}

            {user && (
              <li className="nav-item">
                <span className="nav-link d-flex align-items-center px-3">
                  <span
                    className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center me-2"
                    style={{
                      width: "32px",
                      height: "32px",
                    }}
                  >
                    <i className="bi bi-person-fill"></i>
                  </span>

                  <span className="fw-semibold">
                    {user.username}
                  </span>
                </span>
              </li>
            )}

            {/* LOGOUT */}

            <li className="nav-item mt-2 mt-lg-0">

              <button
                type="button"
                className="btn btn-light text-danger fw-semibold px-3 py-2 rounded-3 shadow-sm"
                onClick={logout}
              >
                <i className="bi bi-box-arrow-right me-2"></i>
                Logout
              </button>

            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}
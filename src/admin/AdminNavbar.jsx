import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("userinfo");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container-fluid px-4">

        {/* Brand */}
        <NavLink
          to="/admindashboard"
          className="navbar-brand fw-bold d-flex align-items-center"
        >
          <span className="fs-4 me-2">▣</span>
          Employee<span className="text-primary">MS</span>
          <span className="badge bg-primary ms-2 small">ADMIN</span>
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbar"
          aria-controls="adminNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div
          className="collapse navbar-collapse"
          id="adminNavbar"
        >
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

            {/* Dashboard */}
            <li className="nav-item">
              <NavLink
                to="/admindashboard"
                className={({ isActive }) =>
                  `nav-link px-3 ${
                    isActive ? "active fw-bold text-white" : ""
                  }`
                }
              >
                <span className="me-1">▦</span>
                Dashboard
              </NavLink>
            </li>

            {/* Add Employee */}
            <li className="nav-item">
              <NavLink
                to="/addemployee"
                className={({ isActive }) =>
                  `nav-link px-3 ${
                    isActive ? "active fw-bold text-white" : ""
                  }`
                }
              >
                <span className="me-1">＋</span>
                Add Employee
              </NavLink>
            </li>

            {/* Manage Employees */}
            <li className="nav-item">
              <NavLink
                to="/viewemployee"
                className={({ isActive }) =>
                  `nav-link px-3 ${
                    isActive ? "active fw-bold text-white" : ""
                  }`
                }
              >
                <span className="me-1">♙</span>
                Manage Employees
              </NavLink>
            </li>

            {/* Divider */}
            <li className="nav-item d-none d-lg-block">
              <span className="text-secondary mx-1">|</span>
            </li>

            {/* Logout */}
            <li className="nav-item">
              <button
                type="button"
                onClick={logout}
                className="btn btn-outline-warning btn-sm px-3 fw-semibold"
              >
                Logout
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
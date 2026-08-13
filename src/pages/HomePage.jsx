import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("userinfo"));

  const userRole = user?.role?.toUpperCase();

  const handleDashboard = () => {
    if (userRole === "ADMIN") {
      navigate("/admindashboard");
    } else if (userRole === "EMPLOYEE") {
      navigate("/employeedashboard");
    }
  };

  return (
    <div className="bg-light min-vh-100">

      {/* ================= HERO SECTION ================= */}
      <section className="container py-5">
        <div className="row align-items-center g-5 py-lg-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-7">

            <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill mb-3">
              Employee Management System
            </span>

            <h1 className="display-4 fw-bold text-dark lh-sm mb-3">
              Manage Your
              <span className="text-primary"> Workforce </span>
              Smarter
            </h1>

            <p className="lead text-secondary mb-4">
              A simple and powerful platform to manage employees,
              organize workforce information, and improve your
              organization's productivity.
            </p>

            {/* BUTTONS */}
            <div className="d-flex flex-wrap gap-3 mb-4">

              {user ? (
                <button
                  type="button"
                  onClick={handleDashboard}
                  className="btn btn-primary btn-lg px-4 fw-semibold shadow-sm"
                >
                  <i className="bi bi-speedometer2 me-2"></i>
                  {userRole === "ADMIN"
                    ? "Admin Dashboard"
                    : "My Dashboard"}
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => navigate("/registerform")}
                    className="btn btn-primary btn-lg px-4 fw-semibold shadow-sm"
                  >
                    Get Started
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate("/services")}
                    className="btn btn-outline-dark btn-lg px-4 fw-semibold"
                  >
                    Explore Services
                  </button>
                </>
              )}

            </div>

            {/* SMALL TRUST INFO */}
            <div className="d-flex flex-wrap gap-4 text-secondary small">

              <div className="d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Easy to Use
              </div>

              <div className="d-flex align-items-center">
                <i className="bi bi-shield-check text-primary me-2"></i>
                Secure
              </div>

              <div className="d-flex align-items-center">
                <i className="bi bi-phone text-primary me-2"></i>
                Responsive
              </div>

            </div>

          </div>


          {/* RIGHT HERO CARD */}
          <div className="col-lg-5">

            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

              <div className="bg-primary text-white p-4">

                <div className="d-flex justify-content-between align-items-center mb-4">

                  <div>
                    <p className="mb-1 opacity-75 small">
                      Employee Overview
                    </p>

                    <h4 className="fw-bold mb-0">
                      Workforce Dashboard
                    </h4>
                  </div>

                  <div
                    className="bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "52px", height: "52px" }}
                  >
                    <i className="bi bi-people-fill fs-4"></i>
                  </div>

                </div>

                <div className="row g-3">

                  <div className="col-6">
                    <div className="bg-white bg-opacity-10 rounded-3 p-3">
                      <i className="bi bi-people fs-4"></i>
                      <h3 className="fw-bold mt-2 mb-0">
                        Employees
                      </h3>
                      <small className="opacity-75">
                        Manage workforce
                      </small>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="bg-white bg-opacity-10 rounded-3 p-3">
                      <i className="bi bi-bar-chart fs-4"></i>
                      <h3 className="fw-bold mt-2 mb-0">
                        Reports
                      </h3>
                      <small className="opacity-75">
                        Track information
                      </small>
                    </div>
                  </div>

                </div>

              </div>

              <div className="card-body p-4">

                <div className="d-flex align-items-center mb-3">
                  <div
                    className="bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center me-3"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <i className="bi bi-person-check fs-4"></i>
                  </div>

                  <div>
                    <h6 className="fw-bold mb-1">
                      Centralized Employee Data
                    </h6>

                    <p className="small text-secondary mb-0">
                      Keep employee information organized in one place.
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div
                    className="bg-success-subtle text-success rounded-3 d-flex align-items-center justify-content-center me-3"
                    style={{ width: "48px", height: "48px" }}
                  >
                    <i className="bi bi-check2-circle fs-4"></i>
                  </div>

                  <div>
                    <h6 className="fw-bold mb-1">
                      Simple & Efficient
                    </h6>

                    <p className="small text-secondary mb-0">
                      Perform employee management tasks quickly.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= STATS SECTION ================= */}
      <section className="container pb-5">

        <div className="row g-3">

          <div className="col-6 col-lg-3">
            <div className="bg-white border rounded-3 p-4 text-center h-100 shadow-sm">
              <i className="bi bi-people-fill text-primary fs-2"></i>
              <h4 className="fw-bold mt-2 mb-1">
                Employee
              </h4>
              <p className="text-secondary small mb-0">
                Management
              </p>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="bg-white border rounded-3 p-4 text-center h-100 shadow-sm">
              <i className="bi bi-database-check text-success fs-2"></i>
              <h4 className="fw-bold mt-2 mb-1">
                Centralized
              </h4>
              <p className="text-secondary small mb-0">
                Data Management
              </p>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="bg-white border rounded-3 p-4 text-center h-100 shadow-sm">
              <i className="bi bi-shield-lock-fill text-warning fs-2"></i>
              <h4 className="fw-bold mt-2 mb-1">
                Secure
              </h4>
              <p className="text-secondary small mb-0">
                Role Based Access
              </p>
            </div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="bg-white border rounded-3 p-4 text-center h-100 shadow-sm">
              <i className="bi bi-phone-fill text-info fs-2"></i>
              <h4 className="fw-bold mt-2 mb-1">
                Responsive
              </h4>
              <p className="text-secondary small mb-0">
                All Devices
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* ================= FEATURES SECTION ================= */}
      <section className="bg-white border-top border-bottom">

        <div className="container py-5">

          <div className="text-center mb-5">

            <span className="text-primary fw-semibold">
              FEATURES
            </span>

            <h2 className="fw-bold mt-2">
              Everything You Need to Manage Employees
            </h2>

            <p className="text-secondary mx-auto mb-0" style={{ maxWidth: "650px" }}>
              Our employee management system provides simple tools
              to organize employee information and streamline daily
              management activities.
            </p>

          </div>


          <div className="row g-4">

            {/* FEATURE 1 */}
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 bg-light rounded-4 h-100 p-2">

                <div className="card-body p-4">

                  <div
                    className="bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center mb-4"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <i className="bi bi-person-vcard fs-4"></i>
                  </div>

                  <h5 className="fw-bold">
                    Employee Profiles
                  </h5>

                  <p className="text-secondary mb-0">
                    Store and manage employee information,
                    contact details, and professional data
                    in an organized manner.
                  </p>

                </div>

              </div>
            </div>


            {/* FEATURE 2 */}
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 bg-light rounded-4 h-100 p-2">

                <div className="card-body p-4">

                  <div
                    className="bg-success-subtle text-success rounded-3 d-flex align-items-center justify-content-center mb-4"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <i className="bi bi-bar-chart-line fs-4"></i>
                  </div>

                  <h5 className="fw-bold">
                    Analytics & Reports
                  </h5>

                  <p className="text-secondary mb-0">
                    Get a clear overview of workforce
                    information and make better
                    management decisions.
                  </p>

                </div>

              </div>
            </div>


            {/* FEATURE 3 */}
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 bg-light rounded-4 h-100 p-2">

                <div className="card-body p-4">

                  <div
                    className="bg-warning-subtle text-warning rounded-3 d-flex align-items-center justify-content-center mb-4"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <i className="bi bi-shield-check fs-4"></i>
                  </div>

                  <h5 className="fw-bold">
                    Secure Access
                  </h5>

                  <p className="text-secondary mb-0">
                    Role-based access helps ensure that
                    administrators and employees can
                    access appropriate information.
                  </p>

                </div>

              </div>
            </div>


            {/* FEATURE 4 */}
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 bg-light rounded-4 h-100 p-2">

                <div className="card-body p-4">

                  <div
                    className="bg-info-subtle text-info rounded-3 d-flex align-items-center justify-content-center mb-4"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <i className="bi bi-phone fs-4"></i>
                  </div>

                  <h5 className="fw-bold">
                    Responsive Interface
                  </h5>

                  <p className="text-secondary mb-0">
                    Access the system comfortably from
                    desktop, tablet, or mobile devices.
                  </p>

                </div>

              </div>
            </div>


            {/* FEATURE 5 */}
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 bg-light rounded-4 h-100 p-2">

                <div className="card-body p-4">

                  <div
                    className="bg-danger-subtle text-danger rounded-3 d-flex align-items-center justify-content-center mb-4"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <i className="bi bi-pencil-square fs-4"></i>
                  </div>

                  <h5 className="fw-bold">
                    Easy Management
                  </h5>

                  <p className="text-secondary mb-0">
                    Add, update, view, and manage employee
                    records through a simple interface.
                  </p>

                </div>

              </div>
            </div>


            {/* FEATURE 6 */}
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 bg-light rounded-4 h-100 p-2">

                <div className="card-body p-4">

                  <div
                    className="bg-dark-subtle text-dark rounded-3 d-flex align-items-center justify-content-center mb-4"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <i className="bi bi-lightning-charge fs-4"></i>
                  </div>

                  <h5 className="fw-bold">
                    Fast & Efficient
                  </h5>

                  <p className="text-secondary mb-0">
                    Perform everyday employee management
                    operations quickly and efficiently.
                  </p>

                </div>

              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA SECTION ================= */}
      <section className="container py-5">

        <div className="bg-primary text-white rounded-4 p-4 p-md-5 shadow">

          <div className="row align-items-center">

            <div className="col-lg-8">

              <h2 className="fw-bold mb-2">
                Ready to Manage Your Employees Better?
              </h2>

              <p className="mb-lg-0 opacity-75">
                Get started with a simple and organized employee
                management experience.
              </p>

            </div>

            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">

              {!user ? (
                <button
                  type="button"
                  onClick={() => navigate("/registerform")}
                  className="btn btn-light btn-lg px-4 fw-semibold"
                >
                  Get Started
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleDashboard}
                  className="btn btn-light btn-lg px-4 fw-semibold"
                >
                  Go to Dashboard
                  <i className="bi bi-speedometer2 ms-2"></i>
                </button>
              )}

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-dark text-white mt-4">

        <div className="container py-5">

          <div className="row g-4">

            {/* BRAND */}
            <div className="col-lg-5">

              <h4 className="fw-bold mb-3">
                Employee Management System
              </h4>

              <p className="text-white-50 mb-0">
                A simple and efficient platform designed to
                organize employee information and make workforce
                management easier.
              </p>

            </div>


            {/* QUICK LINKS */}
            <div className="col-6 col-lg-3">

              <h6 className="fw-bold mb-3">
                Quick Links
              </h6>

              <ul className="list-unstyled mb-0">

                <li className="mb-2">
                  <button
                    onClick={() => navigate("/")}
                    className="btn btn-link text-white-50 text-decoration-none p-0"
                  >
                    Home
                  </button>
                </li>

                <li className="mb-2">
                  <button
                    onClick={() => navigate("/aboutus")}
                    className="btn btn-link text-white-50 text-decoration-none p-0"
                  >
                    About Us
                  </button>
                </li>

                <li className="mb-2">
                  <button
                    onClick={() => navigate("/services")}
                    className="btn btn-link text-white-50 text-decoration-none p-0"
                  >
                    Services
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => navigate("/contactus")}
                    className="btn btn-link text-white-50 text-decoration-none p-0"
                  >
                    Contact Us
                  </button>
                </li>

              </ul>

            </div>


            {/* SYSTEM */}
            <div className="col-6 col-lg-4">

              <h6 className="fw-bold mb-3">
                System
              </h6>

              <p className="text-white-50 small mb-2">
                <i className="bi bi-check-circle me-2"></i>
                Employee Management
              </p>

              <p className="text-white-50 small mb-2">
                <i className="bi bi-shield-check me-2"></i>
                Role Based Access
              </p>

              <p className="text-white-50 small mb-0">
                <i className="bi bi-database-check me-2"></i>
                Centralized Data
              </p>

            </div>

          </div>


          <hr className="border-secondary my-4" />


          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">

            <small className="text-white-50 text-center">
              © {new Date().getFullYear()} Employee Management System
            </small>

            <small className="text-white-50 text-center">
              Designed & Developed by{" "}
              <span className="text-white fw-semibold">
                Sahil Mangade
              </span>
            </small>

          </div>

        </div>

      </footer>

    </div>
  );
}
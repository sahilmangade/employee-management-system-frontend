import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutUsPage() {
  const navigate = useNavigate();

  const values = [
    {
      icon: "bi-lightbulb",
      title: "Innovation",
      description:
        "We continuously improve the system with modern technologies and practical solutions.",
      bg: "bg-primary-subtle",
      color: "text-primary",
    },
    {
      icon: "bi-shield-check",
      title: "Integrity",
      description:
        "We believe in transparency, reliability, and responsible handling of employee information.",
      bg: "bg-success-subtle",
      color: "text-success",
    },
    {
      icon: "bi-award",
      title: "Excellence",
      description:
        "We focus on building a reliable, simple, and high-quality management experience.",
      bg: "bg-warning-subtle",
      color: "text-warning",
    },
    {
      icon: "bi-people",
      title: "User Focus",
      description:
        "The system is designed around the needs of administrators and employees.",
      bg: "bg-info-subtle",
      color: "text-info",
    },
    {
      icon: "bi-lock",
      title: "Security",
      description:
        "Protecting employee information and controlling access is an important part of the system.",
      bg: "bg-danger-subtle",
      color: "text-danger",
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Growth",
      description:
        "The platform is designed to support better organization and continuous improvement.",
      bg: "bg-dark-subtle",
      color: "text-dark",
    },
  ];

  return (
    <div className="bg-light min-vh-100">
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="container py-5">
        <div className="row align-items-center py-lg-5 g-5">
          {/* LEFT */}

          <div className="col-lg-7">
            <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill mb-3">
              ABOUT OUR SYSTEM
            </span>

            <h1 className="display-4 fw-bold text-dark mb-4">
              Making Employee Management
              <span className="text-primary"> Simple & Efficient</span>
            </h1>

            <p className="lead text-secondary mb-4">
              Employee Management System is a modern platform designed to help
              organizations manage employee information, streamline daily
              operations, and maintain organized workforce data.
            </p>

            <div className="d-flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => navigate("/services")}
                className="btn btn-primary btn-lg px-4 fw-semibold"
              >
                Explore Services
                <i className="bi bi-arrow-right ms-2"></i>
              </button>

              <button
                type="button"
                onClick={() => navigate("/contactus")}
                className="btn btn-outline-primary btn-lg px-4 fw-semibold"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* RIGHT */}

          <div className="col-lg-5">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-body p-4 p-md-5">
                <div
                  className="bg-primary text-white rounded-4 d-flex align-items-center justify-content-center mx-auto mb-4"
                  style={{
                    width: "90px",
                    height: "90px",
                  }}
                >
                  <i className="bi bi-people-fill display-6"></i>
                </div>

                <h4 className="fw-bold text-center mb-3">One Platform</h4>

                <p className="text-secondary text-center mb-4">
                  Everything you need to organize and manage employee
                  information in one place.
                </p>

                <div className="row g-3 text-center">
                  <div className="col-4">
                    <div className="bg-light rounded-3 p-3">
                      <i className="bi bi-person-check text-primary fs-4"></i>
                      <p className="small fw-semibold mb-0 mt-2">Profiles</p>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="bg-light rounded-3 p-3">
                      <i className="bi bi-database text-success fs-4"></i>
                      <p className="small fw-semibold mb-0 mt-2">Data</p>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="bg-light rounded-3 p-3">
                      <i className="bi bi-shield-lock text-warning fs-4"></i>
                      <p className="small fw-semibold mb-0 mt-2">Security</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION & VISION
      ===================================================== */}

      <section className="bg-white border-top border-bottom">
        <div className="container py-5">
          <div className="row g-4">
            {/* MISSION */}

            <div className="col-lg-6">
              <div className="card border-0 bg-light rounded-4 h-100">
                <div className="card-body p-4 p-md-5">
                  <div
                    className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center mb-4"
                    style={{
                      width: "55px",
                      height: "55px",
                    }}
                  >
                    <i className="bi bi-bullseye fs-4"></i>
                  </div>

                  <span className="text-primary fw-semibold small">
                    OUR MISSION
                  </span>

                  <h2 className="fw-bold mt-2 mb-3">
                    Simplify Employee Management
                  </h2>

                  <p className="text-secondary lh-lg mb-0">
                    Our mission is to provide a simple, efficient, and modern
                    solution for managing employee information. We aim to reduce
                    manual effort, organize workforce data, and make everyday
                    employee management easier.
                  </p>
                </div>
              </div>
            </div>

            {/* VISION */}

            <div className="col-lg-6">
              <div className="card border-0 bg-light rounded-4 h-100">
                <div className="card-body p-4 p-md-5">
                  <div
                    className="bg-success text-white rounded-3 d-flex align-items-center justify-content-center mb-4"
                    style={{
                      width: "55px",
                      height: "55px",
                    }}
                  >
                    <i className="bi bi-eye fs-4"></i>
                  </div>

                  <span className="text-success fw-semibold small">
                    OUR VISION
                  </span>

                  <h2 className="fw-bold mt-2 mb-3">
                    Better Technology, Better Management
                  </h2>

                  <p className="text-secondary lh-lg mb-0">
                    We envision an organized and efficient workplace where
                    employee management becomes a simple digital process. Our
                    goal is to continuously improve the platform with useful
                    features and modern technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}

      <section className="container py-5">
        <div className="text-center mb-5">
          <span className="text-primary fw-semibold small">
            WHAT WE BELIEVE IN
          </span>

          <h2 className="fw-bold mt-2 mb-3">Our Core Values</h2>

          <p
            className="text-secondary mx-auto mb-0"
            style={{ maxWidth: "650px" }}
          >
            These principles guide how we design, develop, and improve our
            Employee Management System.
          </p>
        </div>

        <div className="row g-4">
          {values.map((value, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body p-4">
                  <div
                    className={`${value.bg} ${value.color} rounded-3 d-flex align-items-center justify-content-center mb-4`}
                    style={{
                      width: "55px",
                      height: "55px",
                    }}
                  >
                    <i className={`bi ${value.icon} fs-4`}></i>
                  </div>

                  <h5 className="fw-bold mb-2">{value.title}</h5>

                  <p className="text-secondary small mb-0">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          SYSTEM HIGHLIGHTS
      ===================================================== */}

      <section className="bg-white border-top border-bottom">
        <div className="container py-5">
          <div className="text-center mb-5">
            <span className="text-primary fw-semibold small">OUR PLATFORM</span>

            <h2 className="fw-bold mt-2 mb-3">
              Built for Simple & Organized Management
            </h2>

            <p
              className="text-secondary mx-auto mb-0"
              style={{ maxWidth: "650px" }}
            >
              The system brings essential employee management functionality
              together in a structured platform.
            </p>
          </div>

          <div className="row g-4 text-center">
            {/* ITEM 1 */}

            <div className="col-6 col-lg-3">
              <div className="p-4">
                <div
                  className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "65px",
                    height: "65px",
                  }}
                >
                  <i className="bi bi-person-lines-fill fs-4"></i>
                </div>

                <h4 className="fw-bold mb-1">Employee</h4>

                <p className="small text-secondary mb-0">Profile Management</p>
              </div>
            </div>

            {/* ITEM 2 */}

            <div className="col-6 col-lg-3">
              <div className="p-4">
                <div
                  className="bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "65px",
                    height: "65px",
                  }}
                >
                  <i className="bi bi-database-check fs-4"></i>
                </div>

                <h4 className="fw-bold mb-1">Centralized</h4>

                <p className="small text-secondary mb-0">Employee Data</p>
              </div>
            </div>

            {/* ITEM 3 */}

            <div className="col-6 col-lg-3">
              <div className="p-4">
                <div
                  className="bg-warning-subtle text-warning rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "65px",
                    height: "65px",
                  }}
                >
                  <i className="bi bi-shield-check fs-4"></i>
                </div>

                <h4 className="fw-bold mb-1">Secure</h4>

                <p className="small text-secondary mb-0">Role-Based Access</p>
              </div>
            </div>

            {/* ITEM 4 */}

            <div className="col-6 col-lg-3">
              <div className="p-4">
                <div
                  className="bg-info-subtle text-info rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{
                    width: "65px",
                    height: "65px",
                  }}
                >
                  <i className="bi bi-phone fs-4"></i>
                </div>

                <h4 className="fw-bold mb-1">Responsive</h4>

                <p className="small text-secondary mb-0">User Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="container py-5">
        <div className="bg-primary text-white rounded-4 shadow p-4 p-md-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="badge bg-white bg-opacity-25 text-white px-3 py-2 rounded-pill mb-3">
                DISCOVER MORE
              </span>

              <h2 className="fw-bold mb-2">
                Want to Know More About Our Services?
              </h2>

              <p className="mb-lg-0 opacity-75">
                Explore the features and services available in our Employee
                Management System.
              </p>
            </div>

            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <button
                type="button"
                onClick={() => navigate("/services")}
                className="btn btn-light btn-lg px-4 fw-semibold"
              >
                View Services
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-dark text-white">
        <div className="container py-5">
          <div className="row g-4">
            {/* BRAND */}

            <div className="col-lg-5">
              <h4 className="fw-bold mb-3">Employee Management System</h4>

              <p className="text-white-50 mb-0">
                A simple and efficient platform designed to organize employee
                information and make workforce management easier.
              </p>
            </div>

            {/* QUICK LINKS */}

            <div className="col-6 col-lg-3">
              <h6 className="fw-bold mb-3">Quick Links</h6>

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
              <h6 className="fw-bold mb-3">System</h6>

              <p className="text-white-50 small mb-2">
                <i className="bi bi-people me-2"></i>
                Employee Management
              </p>

              <p className="text-white-50 small mb-2">
                <i className="bi bi-shield-check me-2"></i>
                Secure Role-Based Access
              </p>

              <p className="text-white-50 small mb-0">
                <i className="bi bi-database-check me-2"></i>
                Centralized Employee Data
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
              <span className="text-white fw-semibold">Sahil Mangade</span>
            </small>
          </div>
        </div>
      </footer>
    </div>
  );
}

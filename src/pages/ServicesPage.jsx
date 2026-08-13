import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServicesPage() {
  const navigate = useNavigate();

  const services = [
    {
      icon: "bi-person-vcard",
      iconBg: "bg-primary-subtle",
      iconColor: "text-primary",
      title: "Employee Management",
      description:
        "Manage employee profiles, personal information, professional details, and records from one centralized platform.",
      features: [
        "Employee Profiles",
        "Employee Records",
        "Information Management",
        "Data Organization",
      ],
    },
    {
      icon: "bi-bar-chart-line",
      iconBg: "bg-success-subtle",
      iconColor: "text-success",
      title: "Analytics & Reporting",
      description:
        "Get a clear overview of workforce information and generate useful insights for better management decisions.",
      features: [
        "Dashboard Insights",
        "Workforce Reports",
        "Data Analysis",
        "Performance Overview",
      ],
    },
    {
      icon: "bi-calendar-check",
      iconBg: "bg-info-subtle",
      iconColor: "text-info",
      title: "Attendance Management",
      description:
        "Keep track of employee attendance and maintain organized records for everyday workforce management.",
      features: [
        "Attendance Tracking",
        "Leave Records",
        "Daily Monitoring",
        "Attendance Reports",
      ],
    },
    {
      icon: "bi-shield-lock",
      iconBg: "bg-warning-subtle",
      iconColor: "text-warning",
      title: "Data Security",
      description:
        "Protect employee information with secure access and role-based permissions for different types of users.",
      features: [
        "Role-Based Access",
        "Secure Login",
        "Data Protection",
        "Access Management",
      ],
    },
    {
      icon: "bi-gear",
      iconBg: "bg-danger-subtle",
      iconColor: "text-danger",
      title: "System Management",
      description:
        "A structured management system that makes adding, updating, viewing, and maintaining employee records easier.",
      features: [
        "Add Employees",
        "Update Records",
        "View Employees",
        "Delete Records",
      ],
    },
    {
      icon: "bi-headset",
      iconBg: "bg-dark-subtle",
      iconColor: "text-dark",
      title: "Support & Assistance",
      description:
        "A simple and user-friendly platform designed to make employee management easier for administrators and employees.",
      features: [
        "User-Friendly Interface",
        "Easy Navigation",
        "Helpful Documentation",
        "System Assistance",
      ],
    },
  ];

  return (
    <div className="bg-light min-vh-100">

      {/* =====================================================
          PAGE HERO
      ===================================================== */}

      <section className="container py-5">

        <div className="row justify-content-center text-center py-lg-4">

          <div className="col-lg-8">

            <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill mb-3">
              WHAT WE OFFER
            </span>

            <h1 className="display-5 fw-bold text-dark mb-3">
              Powerful Services for
              <span className="text-primary"> Better Management</span>
            </h1>

            <p className="lead text-secondary mb-0">
              Everything you need to organize employee information,
              manage workforce data, and simplify everyday
              employee management.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES GRID
      ===================================================== */}

      <section className="container pb-5">

        <div className="row g-4">

          {services.map((service, index) => (

            <div
              className="col-md-6 col-lg-4"
              key={index}
            >

              <div className="card border-0 shadow-sm rounded-4 h-100">

                <div className="card-body p-4">

                  {/* ICON */}

                  <div
                    className={`${service.iconBg} ${service.iconColor} rounded-3 d-flex align-items-center justify-content-center mb-4`}
                    style={{
                      width: "58px",
                      height: "58px",
                    }}
                  >
                    <i className={`bi ${service.icon} fs-4`}></i>
                  </div>


                  {/* TITLE */}

                  <h4 className="fw-bold mb-3">
                    {service.title}
                  </h4>


                  {/* DESCRIPTION */}

                  <p className="text-secondary mb-4">
                    {service.description}
                  </p>


                  {/* FEATURES */}

                  <div>

                    {service.features.map((feature, featureIndex) => (

                      <div
                        key={featureIndex}
                        className="d-flex align-items-center mb-2"
                      >

                        <i className="bi bi-check-circle-fill text-success me-2"></i>

                        <span className="small text-secondary">
                          {feature}
                        </span>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          WHY CHOOSE OUR SYSTEM
      ===================================================== */}

      <section className="bg-white border-top border-bottom">

        <div className="container py-5">

          <div className="row align-items-center g-5">

            {/* LEFT */}

            <div className="col-lg-6">

              <span className="text-primary fw-semibold">
                WHY CHOOSE US
              </span>

              <h2 className="fw-bold mt-2 mb-3">
                Designed to Make Employee Management Simple
              </h2>

              <p className="text-secondary mb-4">
                Our Employee Management System brings essential
                employee management features together in one
                organized platform.
              </p>


              {/* BENEFIT 1 */}

              <div className="d-flex mb-4">

                <div
                  className="bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                  style={{
                    width: "48px",
                    height: "48px",
                  }}
                >
                  <i className="bi bi-lightning-charge fs-5"></i>
                </div>

                <div>

                  <h6 className="fw-bold mb-1">
                    Simple & Efficient
                  </h6>

                  <p className="small text-secondary mb-0">
                    Perform everyday employee management
                    operations with a simple interface.
                  </p>

                </div>

              </div>


              {/* BENEFIT 2 */}

              <div className="d-flex mb-4">

                <div
                  className="bg-success-subtle text-success rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                  style={{
                    width: "48px",
                    height: "48px",
                  }}
                >
                  <i className="bi bi-shield-check fs-5"></i>
                </div>

                <div>

                  <h6 className="fw-bold mb-1">
                    Secure Access
                  </h6>

                  <p className="small text-secondary mb-0">
                    Role-based access helps keep employee
                    information protected.
                  </p>

                </div>

              </div>


              {/* BENEFIT 3 */}

              <div className="d-flex">

                <div
                  className="bg-warning-subtle text-warning rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                  style={{
                    width: "48px",
                    height: "48px",
                  }}
                >
                  <i className="bi bi-phone fs-5"></i>
                </div>

                <div>

                  <h6 className="fw-bold mb-1">
                    Responsive Experience
                  </h6>

                  <p className="small text-secondary mb-0">
                    Access the system comfortably across
                    desktop, tablet, and mobile devices.
                  </p>

                </div>

              </div>

            </div>


            {/* RIGHT */}

            <div className="col-lg-6">

              <div className="card border-0 bg-light rounded-4 shadow-sm">

                <div className="card-body p-4 p-md-5">

                  <div className="d-flex align-items-center justify-content-between mb-4">

                    <div>

                      <p className="text-secondary small mb-1">
                        MANAGEMENT PLATFORM
                      </p>

                      <h4 className="fw-bold mb-0">
                        One System
                      </h4>

                    </div>

                    <div
                      className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "52px",
                        height: "52px",
                      }}
                    >
                      <i className="bi bi-grid-1x2-fill fs-5"></i>
                    </div>

                  </div>


                  {/* PROGRESS ITEM */}

                  <div className="mb-4">

                    <div className="d-flex justify-content-between mb-2">

                      <span className="small fw-semibold">
                        Employee Management
                      </span>

                      <span className="small text-success">
                        Organized
                      </span>

                    </div>

                    <div
                      className="progress"
                      style={{ height: "7px" }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "90%" }}
                      ></div>
                    </div>

                  </div>


                  {/* PROGRESS ITEM */}

                  <div className="mb-4">

                    <div className="d-flex justify-content-between mb-2">

                      <span className="small fw-semibold">
                        Data Organization
                      </span>

                      <span className="small text-success">
                        Centralized
                      </span>

                    </div>

                    <div
                      className="progress"
                      style={{ height: "7px" }}
                    >
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "85%" }}
                      ></div>
                    </div>

                  </div>


                  {/* PROGRESS ITEM */}

                  <div>

                    <div className="d-flex justify-content-between mb-2">

                      <span className="small fw-semibold">
                        User Experience
                      </span>

                      <span className="small text-success">
                        Simple
                      </span>

                    </div>

                    <div
                      className="progress"
                      style={{ height: "7px" }}
                    >
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "92%" }}
                      ></div>
                    </div>

                  </div>

                </div>

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
                GET STARTED
              </span>

              <h2 className="fw-bold mb-2">
                Ready to Simplify Employee Management?
              </h2>

              <p className="mb-lg-0 opacity-75">
                Explore our platform and discover a better way
                to manage employee information.
              </p>

            </div>

            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">

              <button
                type="button"
                onClick={() => navigate("/contactus")}
                className="btn btn-light btn-lg px-4 fw-semibold"
              >
                Contact Us
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
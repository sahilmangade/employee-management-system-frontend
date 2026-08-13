import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ContactUsPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="bg-light min-vh-100">

      {/* =====================================================
          PAGE HERO
      ===================================================== */}

      <section className="container py-5">

        <div className="row justify-content-center text-center py-lg-4">

          <div className="col-lg-8">

            <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill mb-3">
              GET IN TOUCH
            </span>

            <h1 className="display-5 fw-bold text-dark mb-3">
              We'd Love to
              <span className="text-primary"> Hear From You</span>
            </h1>

            <p className="lead text-secondary mb-0">
              Have a question, suggestion, or need assistance?
              Send us a message and our team will be happy to help.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTACT SECTION
      ===================================================== */}

      <section className="container pb-5">

        <div className="row g-4">

          {/* =================================================
              LEFT - CONTACT INFORMATION
          ================================================= */}

          <div className="col-lg-5">

            <div className="card border-0 shadow-sm rounded-4 h-100">

              <div className="card-body p-4 p-md-5">

                <span className="text-primary fw-semibold small">
                  CONTACT INFORMATION
                </span>

                <h3 className="fw-bold mt-2 mb-3">
                  Let's Start a Conversation
                </h3>

                <p className="text-secondary mb-4">
                  Whether you have a question about the system,
                  need assistance, or simply want to learn more,
                  feel free to reach out to us.
                </p>


                {/* PHONE */}

                <div className="d-flex align-items-start mb-4">

                  <div
                    className="bg-primary-subtle text-primary rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                    style={{
                      width: "48px",
                      height: "48px",
                    }}
                  >
                    <i className="bi bi-telephone-fill"></i>
                  </div>

                  <div>

                    <h6 className="fw-bold mb-1">
                      Phone
                    </h6>

                    <p className="text-secondary small mb-0">
                      +91 98765 43210
                      <br />
                      +91 91234 56789
                    </p>

                  </div>

                </div>


                {/* EMAIL */}

                <div className="d-flex align-items-start mb-4">

                  <div
                    className="bg-success-subtle text-success rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                    style={{
                      width: "48px",
                      height: "48px",
                    }}
                  >
                    <i className="bi bi-envelope-fill"></i>
                  </div>

                  <div>

                    <h6 className="fw-bold mb-1">
                      Email
                    </h6>

                    <p className="text-secondary small mb-0">
                      support@ems.com
                      <br />
                      info@ems.com
                    </p>

                  </div>

                </div>


                {/* LOCATION */}

                <div className="d-flex align-items-start mb-4">

                  <div
                    className="bg-warning-subtle text-warning rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                    style={{
                      width: "48px",
                      height: "48px",
                    }}
                  >
                    <i className="bi bi-geo-alt-fill"></i>
                  </div>

                  <div>

                    <h6 className="fw-bold mb-1">
                      Location
                    </h6>

                    <p className="text-secondary small mb-0">
                      Pune, Maharashtra
                      <br />
                      India
                    </p>

                  </div>

                </div>


                {/* BUSINESS HOURS */}

                <div className="d-flex align-items-start">

                  <div
                    className="bg-info-subtle text-info rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 me-3"
                    style={{
                      width: "48px",
                      height: "48px",
                    }}
                  >
                    <i className="bi bi-clock-fill"></i>
                  </div>

                  <div>

                    <h6 className="fw-bold mb-1">
                      Business Hours
                    </h6>

                    <p className="text-secondary small mb-0">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>

                  </div>

                </div>


                <hr className="my-4" />


                {/* SOCIAL */}

                <div>

                  <h6 className="fw-bold mb-3">
                    Follow Us
                  </h6>

                  <div className="d-flex gap-2">

                    <button
                      type="button"
                      className="btn btn-primary rounded-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "42px",
                        height: "42px",
                      }}
                    >
                      <i className="bi bi-facebook"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-dark rounded-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "42px",
                        height: "42px",
                      }}
                    >
                      <i className="bi bi-twitter-x"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary rounded-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "42px",
                        height: "42px",
                      }}
                    >
                      <i className="bi bi-linkedin"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-danger rounded-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "42px",
                        height: "42px",
                      }}
                    >
                      <i className="bi bi-instagram"></i>
                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT - CONTACT FORM
          ================================================= */}

          <div className="col-lg-7">

            <div className="card border-0 shadow-sm rounded-4">

              <div className="card-body p-4 p-md-5">

                <span className="text-primary fw-semibold small">
                  SEND A MESSAGE
                </span>

                <h3 className="fw-bold mt-2 mb-2">
                  How Can We Help?
                </h3>

                <p className="text-secondary mb-4">
                  Fill out the form below and we'll get back
                  to you as soon as possible.
                </p>


                {/* SUCCESS MESSAGE */}

                {submitted && (
                  <div
                    className="alert alert-success border-0 rounded-3 d-flex align-items-start"
                    role="alert"
                  >

                    <i className="bi bi-check-circle-fill me-2 mt-1"></i>

                    <div>

                      <strong>
                        Message sent successfully!
                      </strong>

                      <div className="small">
                        Thank you for contacting us.
                        We'll get back to you soon.
                      </div>

                    </div>

                    <button
                      type="button"
                      className="btn-close ms-auto"
                      onClick={() => setSubmitted(false)}
                    ></button>

                  </div>
                )}


                {/* FORM */}

                <form onSubmit={handleSubmit}>

                  <div className="row g-3">


                    {/* NAME */}

                    <div className="col-md-6">

                      <label
                        htmlFor="name"
                        className="form-label fw-semibold"
                      >
                        Full Name
                      </label>

                      <div className="input-group">

                        <span className="input-group-text bg-light border-end-0">
                          <i className="bi bi-person text-secondary"></i>
                        </span>

                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control border-start-0"
                          placeholder="Enter your name"
                          required
                        />

                      </div>

                    </div>


                    {/* EMAIL */}

                    <div className="col-md-6">

                      <label
                        htmlFor="email"
                        className="form-label fw-semibold"
                      >
                        Email Address
                      </label>

                      <div className="input-group">

                        <span className="input-group-text bg-light border-end-0">
                          <i className="bi bi-envelope text-secondary"></i>
                        </span>

                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control border-start-0"
                          placeholder="Enter your email"
                          required
                        />

                      </div>

                    </div>


                    {/* PHONE */}

                    <div className="col-md-6">

                      <label
                        htmlFor="phone"
                        className="form-label fw-semibold"
                      >
                        Phone Number
                      </label>

                      <div className="input-group">

                        <span className="input-group-text bg-light border-end-0">
                          <i className="bi bi-telephone text-secondary"></i>
                        </span>

                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control border-start-0"
                          placeholder="Enter phone number"
                        />

                      </div>

                    </div>


                    {/* SUBJECT */}

                    <div className="col-md-6">

                      <label
                        htmlFor="subject"
                        className="form-label fw-semibold"
                      >
                        Subject
                      </label>

                      <div className="input-group">

                        <span className="input-group-text bg-light border-end-0">
                          <i className="bi bi-chat-left-text text-secondary"></i>
                        </span>

                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="form-control border-start-0"
                          placeholder="Enter subject"
                          required
                        />

                      </div>

                    </div>


                    {/* MESSAGE */}

                    <div className="col-12">

                      <label
                        htmlFor="message"
                        className="form-label fw-semibold"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control"
                        rows="6"
                        placeholder="Write your message here..."
                        required
                      ></textarea>

                    </div>


                    {/* SUBMIT */}

                    <div className="col-12 pt-2">

                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100 fw-semibold"
                      >
                        <i className="bi bi-send-fill me-2"></i>
                        Send Message
                      </button>

                    </div>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          QUICK HELP CTA
      ===================================================== */}

      <section className="container pb-5">

        <div className="bg-white border rounded-4 shadow-sm p-4 p-md-5 text-center">

          <div
            className="bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
            style={{
              width: "58px",
              height: "58px",
            }}
          >
            <i className="bi bi-question-circle fs-4"></i>
          </div>

          <h4 className="fw-bold mb-2">
            Looking for More Information?
          </h4>

          <p className="text-secondary mb-4">
            Explore our services to learn more about what our
            Employee Management System can offer.
          </p>

          <button
            type="button"
            onClick={() => navigate("/services")}
            className="btn btn-outline-primary px-4 fw-semibold"
          >
            Explore Services
            <i className="bi bi-arrow-right ms-2"></i>
          </button>

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
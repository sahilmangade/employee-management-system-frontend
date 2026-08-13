import React from "react";
import { useNavigate } from "react-router-dom";

export default function EmployeeDashboard() {
  const user = JSON.parse(localStorage.getItem("userinfo"));
  const navigate = useNavigate();

  return (
    <div className="bg-light min-vh-100">

      {/* ================= HEADER ================= */}

      <div className="container-fluid px-3 px-md-4 pt-4">

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">

          <div>
            <div className="d-flex align-items-center gap-2 mb-1">

              <h2 className="fw-bold mb-0">
                Welcome back, {user?.username || "Employee"}!
              </h2>

              <span style={{ fontSize: "1.5rem" }}>👋</span>

            </div>

            <p className="text-muted mb-0">
              Here's what's happening with your employee account today.
            </p>
          </div>

          <div className="mt-3 mt-md-0">

            <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2">

              <i className="bi bi-person-circle me-2"></i>

              Employee
            </span>

          </div>

        </div>


        {/* ================= QUICK STATS ================= */}

        <div className="row g-3 mb-4">

          {/* Employee Code */}

          <div className="col-sm-6 col-xl-3">

            <div className="card border-0 shadow-sm rounded-4 h-100">

              <div className="card-body p-4">

                <div className="d-flex justify-content-between align-items-start">

                  <div>

                    <small className="text-muted fw-semibold">
                      EMPLOYEE CODE
                    </small>

                    <h4 className="fw-bold mt-2 mb-0">
                      {user?.employeecode || "-"}
                    </h4>

                  </div>

                  <div
                    className="bg-primary bg-opacity-10 text-primary rounded-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "45px",
                      height: "45px",
                    }}
                  >
                    <i className="bi bi-person-badge fs-5"></i>
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* Role */}

          <div className="col-sm-6 col-xl-3">

            <div className="card border-0 shadow-sm rounded-4 h-100">

              <div className="card-body p-4">

                <div className="d-flex justify-content-between align-items-start">

                  <div>

                    <small className="text-muted fw-semibold">
                      ROLE
                    </small>

                    <h4 className="fw-bold mt-2 mb-0">
                      {user?.role || "-"}
                    </h4>

                  </div>

                  <div
                    className="bg-success bg-opacity-10 text-success rounded-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "45px",
                      height: "45px",
                    }}
                  >
                    <i className="bi bi-shield-check fs-5"></i>
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* Attendance */}

          <div className="col-sm-6 col-xl-3">

            <div className="card border-0 shadow-sm rounded-4 h-100">

              <div className="card-body p-4">

                <div className="d-flex justify-content-between align-items-start">

                  <div>

                    <small className="text-muted fw-semibold">
                      ATTENDANCE
                    </small>

                    <h4 className="fw-bold mt-2 mb-0">
                      Present
                    </h4>

                  </div>

                  <div
                    className="bg-success bg-opacity-10 text-success rounded-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "45px",
                      height: "45px",
                    }}
                  >
                    <i className="bi bi-calendar-check fs-5"></i>
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* Account */}

          <div className="col-sm-6 col-xl-3">

            <div className="card border-0 shadow-sm rounded-4 h-100">

              <div className="card-body p-4">

                <div className="d-flex justify-content-between align-items-start">

                  <div>

                    <small className="text-muted fw-semibold">
                      ACCOUNT
                    </small>

                    <h4 className="fw-bold mt-2 mb-0">
                      Active
                    </h4>

                  </div>

                  <div
                    className="bg-info bg-opacity-10 text-info rounded-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "45px",
                      height: "45px",
                    }}
                  >
                    <i className="bi bi-check-circle fs-5"></i>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ================= QUICK ACTIONS ================= */}

        <div className="mb-3">

          <h5 className="fw-bold mb-1">
            Quick Actions
          </h5>

          <p className="text-muted small">
            Access your employee services quickly.
          </p>

        </div>


        <div className="row g-3 mb-4">

          {/* Profile */}

          <div className="col-md-6 col-lg-3">

            <div className="card border-0 shadow-sm rounded-4 h-100">

              <div className="card-body p-4">

                <div
                  className="bg-primary bg-opacity-10 text-primary rounded-3 d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "52px",
                    height: "52px",
                  }}
                >
                  <i className="bi bi-person-vcard fs-4"></i>
                </div>

                <h5 className="fw-bold">
                  My Profile
                </h5>

                <p className="text-muted small">
                  View your personal and professional information.
                </p>

                <button
                  className="btn btn-primary w-100"
                  onClick={() => navigate("/employeeprofile")}
                >
                  View Profile
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>

              </div>

            </div>

          </div>


          {/* Attendance */}

          <div className="col-md-6 col-lg-3">

            <div className="card border-0 shadow-sm rounded-4 h-100">

              <div className="card-body p-4">

                <div
                  className="bg-success bg-opacity-10 text-success rounded-3 d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "52px",
                    height: "52px",
                  }}
                >
                  <i className="bi bi-calendar-check fs-4"></i>
                </div>

                <h5 className="fw-bold">
                  Attendance
                </h5>

                <p className="text-muted small">
                  Track your daily attendance and working days.
                </p>

                <button className="btn btn-success w-100">
                  Check Attendance
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>

              </div>

            </div>

          </div>


          {/* Leave */}

          <div className="col-md-6 col-lg-3">

            <div className="card border-0 shadow-sm rounded-4 h-100">

              <div className="card-body p-4">

                <div
                  className="bg-warning bg-opacity-10 text-warning rounded-3 d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "52px",
                    height: "52px",
                  }}
                >
                  <i className="bi bi-calendar2-minus fs-4"></i>
                </div>

                <h5 className="fw-bold">
                  Leave Request
                </h5>

                <p className="text-muted small">
                  Apply for leave and check your request status.
                </p>

                <button className="btn btn-warning text-dark w-100">
                  View Leaves
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>

              </div>

            </div>

          </div>


          {/* Salary */}

          <div className="col-md-6 col-lg-3">

            <div className="card border-0 shadow-sm rounded-4 h-100">

              <div className="card-body p-4">

                <div
                  className="bg-danger bg-opacity-10 text-danger rounded-3 d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "52px",
                    height: "52px",
                  }}
                >
                  <i className="bi bi-currency-rupee fs-4"></i>
                </div>

                <h5 className="fw-bold">
                  Salary
                </h5>

                <p className="text-muted small">
                  View your salary and compensation information.
                </p>

                <button className="btn btn-danger w-100">
                  View Salary
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>

              </div>

            </div>

          </div>

        </div>


        {/* ================= ACCOUNT INFORMATION ================= */}

        <div className="row g-3 pb-4">

          <div className="col-lg-8">

            <div className="card border-0 shadow-sm rounded-4 h-100">

              <div className="card-body p-4">

                <div className="d-flex align-items-center mb-4">

                  <div
                    className="bg-primary bg-opacity-10 text-primary rounded-3 d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "45px",
                      height: "45px",
                    }}
                  >
                    <i className="bi bi-person-lines-fill fs-5"></i>
                  </div>

                  <div>

                    <h5 className="fw-bold mb-0">
                      Account Information
                    </h5>

                    <small className="text-muted">
                      Your registered account details
                    </small>

                  </div>

                </div>


                <div className="row g-3">

                  <div className="col-md-4">

                    <div className="border rounded-3 p-3">

                      <small className="text-muted d-block mb-1">
                        Employee Code
                      </small>

                      <span className="fw-bold">
                        {user?.employeecode || "-"}
                      </span>

                    </div>

                  </div>


                  <div className="col-md-4">

                    <div className="border rounded-3 p-3">

                      <small className="text-muted d-block mb-1">
                        Username
                      </small>

                      <span className="fw-bold">
                        {user?.username || "-"}
                      </span>

                    </div>

                  </div>


                  <div className="col-md-4">

                    <div className="border rounded-3 p-3">

                      <small className="text-muted d-block mb-1">
                        Account Role
                      </small>

                      <span className="badge bg-primary rounded-pill">
                        {user?.role || "-"}
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* HELP CARD */}

          <div className="col-lg-4">

            <div className="card border-0 shadow-sm rounded-4 h-100">

              <div className="card-body p-4">

                <div
                  className="bg-dark bg-opacity-10 text-dark rounded-3 d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "48px",
                    height: "48px",
                  }}
                >
                  <i className="bi bi-headset fs-5"></i>
                </div>

                <h5 className="fw-bold">
                  Need Help?
                </h5>

                <p className="text-muted small">
                  Have questions or facing an issue? Get in touch with the
                  support team.
                </p>

                <button
                  className="btn btn-outline-dark w-100"
                  onClick={() => navigate("/contactus")}
                >
                  Contact Support
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
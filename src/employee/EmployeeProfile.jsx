import React, { useEffect, useState } from "react";
import axios from "axios";

export default function EmployeeProfile() {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const userInfo = localStorage.getItem("userinfo");

    if (!userInfo) {
      setError("Please login first.");
      setLoading(false);
      return;
    }

    const user = JSON.parse(userInfo);

    console.log("Logged in user:", user);

    if (!user.employeecode) {
      setError("Employee code is not available.");
      setLoading(false);
      return;
    }

    axios
      .get(
        `http://localhost:8080/employeeprofile?employeecode=${user.employeecode}`
      )
      .then((response) => {
        console.log("Employee profile:", response.data);

        setEmployee(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Profile API Error:", error);

        setError("Unable to load employee profile.");
        setLoading(false);
      });
  }, []);

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <div className="min-vh-100 bg-light d-flex justify-content-center align-items-center">
        <div className="text-center">
          <div
            className="spinner-border text-primary mb-3"
            style={{ width: "3rem", height: "3rem" }}
          ></div>

          <h6 className="text-muted">
            Loading Profile...
          </h6>
        </div>
      </div>
    );
  }

  // =========================
  // ERROR
  // =========================

  if (error) {
    return (
      <div className="min-vh-100 bg-light d-flex justify-content-center align-items-center">
        <div className="text-center">

          <div
            className="bg-danger bg-opacity-10 rounded-circle d-flex justify-content-center align-items-center mx-auto mb-3"
            style={{
              width: "80px",
              height: "80px",
            }}
          >
            <i className="bi bi-exclamation-triangle text-danger fs-2"></i>
          </div>

          <h5 className="fw-bold">
            Profile Not Available
          </h5>

          <p className="text-muted mb-0">
            {error}
          </p>

        </div>
      </div>
    );
  }

  // =========================
  // PROFILE
  // =========================

  return (
    <div className="bg-light min-vh-100 py-4">

      <div className="container">

        {/* PAGE HEADER */}

        <div className="mb-4">

          <h3 className="fw-bold mb-1">
            <i className="bi bi-person-vcard text-primary me-2"></i>
            My Profile
          </h3>

          <p className="text-muted mb-0">
            View your personal and professional information
          </p>

        </div>

        {/* PROFILE CARD */}

        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

          {/* PROFILE TOP */}

          <div className="bg-primary text-white p-4 p-md-5">

            <div className="row align-items-center">

              {/* PHOTO */}

              <div className="col-auto">

                <div
                  className="bg-white rounded-circle p-1 shadow"
                  style={{
                    width: "120px",
                    height: "120px",
                  }}
                >

                  <img
                    src={
                      employee.profilepicture ||
                      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    }
                    alt="Employee"
                    className="rounded-circle w-100 h-100"
                    style={{
                      objectFit: "cover",
                    }}
                  />

                </div>

              </div>

              {/* BASIC DETAILS */}

              <div className="col mt-3 mt-md-0">

                <h2 className="fw-bold mb-1">

                  {employee.firstname || ""}{" "}
                  {employee.middlename || ""}{" "}
                  {employee.lastname || ""}

                </h2>

                <p className="mb-3 opacity-75">

                  {employee.designation || "Employee"}

                </p>

                <div className="d-flex flex-wrap gap-2">

                  <span className="badge bg-success rounded-pill px-3 py-2">

                    <i className="bi bi-check-circle me-1"></i>

                    {employee.status || "Active"}

                  </span>

                  <span className="badge bg-white text-primary rounded-pill px-3 py-2">

                    <i className="bi bi-person-badge me-1"></i>

                    {employee.employeecode}

                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* PROFILE BODY */}

          <div className="card-body p-4 p-md-5">

            {/* PERSONAL INFORMATION */}

            <div className="mb-5">

              <div className="d-flex align-items-center mb-4">

                <div
                  className="bg-primary bg-opacity-10 text-primary rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "42px",
                    height: "42px",
                  }}
                >
                  <i className="bi bi-person fs-5"></i>
                </div>

                <div>

                  <h5 className="fw-bold mb-0">
                    Personal Information
                  </h5>

                  <small className="text-muted">
                    Your personal details
                  </small>

                </div>

              </div>

              <div className="row g-3">

                {/* EMAIL */}

                <div className="col-md-6 col-lg-4">
                  <ProfileItem
                    icon="bi-envelope"
                    label="Email"
                    value={employee.email}
                  />
                </div>

                {/* PHONE */}

                <div className="col-md-6 col-lg-4">
                  <ProfileItem
                    icon="bi-telephone"
                    label="Phone"
                    value={employee.phonenumber}
                  />
                </div>

                {/* GENDER */}

                <div className="col-md-6 col-lg-4">
                  <ProfileItem
                    icon="bi-gender-ambiguous"
                    label="Gender"
                    value={employee.gender}
                  />
                </div>

                {/* DOB */}

                <div className="col-md-6 col-lg-4">
                  <ProfileItem
                    icon="bi-calendar3"
                    label="Date of Birth"
                    value={employee.dateofbirth}
                  />
                </div>

                {/* EDUCATION */}

                <div className="col-md-6 col-lg-4">
                  <ProfileItem
                    icon="bi-mortarboard"
                    label="Education"
                    value={employee.education}
                  />
                </div>

                {/* ADDRESS */}

                <div className="col-md-6 col-lg-4">
                  <ProfileItem
                    icon="bi-geo-alt"
                    label="Address"
                    value={employee.address}
                  />
                </div>

              </div>

            </div>

            {/* PROFESSIONAL INFORMATION */}

            <div className="mb-5">

              <div className="d-flex align-items-center mb-4">

                <div
                  className="bg-primary bg-opacity-10 text-primary rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "42px",
                    height: "42px",
                  }}
                >
                  <i className="bi bi-briefcase fs-5"></i>
                </div>

                <div>

                  <h5 className="fw-bold mb-0">
                    Professional Information
                  </h5>

                  <small className="text-muted">
                    Your employment details
                  </small>

                </div>

              </div>

              <div className="row g-3">

                {/* DEPARTMENT */}

                <div className="col-md-6 col-lg-4">
                  <ProfileItem
                    icon="bi-diagram-3"
                    label="Department"
                    value={employee.department}
                  />
                </div>

                {/* DESIGNATION */}

                <div className="col-md-6 col-lg-4">
                  <ProfileItem
                    icon="bi-person-workspace"
                    label="Designation"
                    value={employee.designation}
                  />
                </div>

                {/* EXPERIENCE */}

                <div className="col-md-6 col-lg-4">
                  <ProfileItem
                    icon="bi-clock-history"
                    label="Experience"
                    value={
                      employee.experience
                        ? `${employee.experience} Years`
                        : "-"
                    }
                  />
                </div>

                {/* JOINING DATE */}

                <div className="col-md-6 col-lg-4">
                  <ProfileItem
                    icon="bi-calendar-check"
                    label="Joining Date"
                    value={employee.joiningdate}
                  />
                </div>

                {/* WORK LOCATION */}

                <div className="col-md-6 col-lg-4">
                  <ProfileItem
                    icon="bi-building"
                    label="Work Location"
                    value={employee.worklocation}
                  />
                </div>

                {/* MANAGER */}

                <div className="col-md-6 col-lg-4">
                  <ProfileItem
                    icon="bi-person-lines-fill"
                    label="Reporting Manager"
                    value={employee.reportingmanager}
                  />
                </div>

              </div>

            </div>

            {/* SALARY */}

            <div
              className="rounded-4 p-4"
              style={{
                background: "#eff6ff",
                border: "1px solid #dbeafe",
              }}
            >

              <div className="d-flex align-items-center">

                <div
                  className="bg-primary text-white rounded-3 d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "48px",
                    height: "48px",
                  }}
                >
                  <i className="bi bi-currency-rupee fs-5"></i>
                </div>

                <div>

                  <small className="text-muted d-block">
                    Current Salary
                  </small>

                  <h4 className="fw-bold text-primary mb-0">
                    ₹ {employee.salary || "0"}
                  </h4>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* FOOTER */}

        <div className="text-center mt-4">

          <small className="text-muted">
            <i className="bi bi-shield-check me-1"></i>
            Employee information is securely managed by EMS.
          </small>

        </div>

      </div>

    </div>
  );
}


// ========================================
// REUSABLE PROFILE ITEM
// ========================================

function ProfileItem({ icon, label, value }) {
  return (
    <div className="bg-white border rounded-3 p-3 h-100">

      <small className="text-muted d-block mb-1">

        <i className={`bi ${icon} me-2`}></i>

        {label}

      </small>

      <div className="fw-semibold text-dark">

        {value || "Not Available"}

      </div>

    </div>
  );
}
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaBuilding,
  FaPlus,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";

export default function AdminDashboard() {
  let [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/getemployee")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.log(err));
  }, []);

  let totalEmployees = employees.length;

  let activeEmployees = employees.filter(
    (emp) => emp.status === "Active"
  ).length;

  let inactiveEmployees = employees.filter(
    (emp) => emp.status === "Inactive"
  ).length;

  let departments = new Set(
    employees.map((emp) => emp.department).filter(Boolean)
  ).size;

  let user = JSON.parse(localStorage.getItem("userinfo"));

  return (
    <div
      style={{
        background: "#f5f7fa",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      {/* ================= HEADER ================= */}
      <div className="container-fluid mb-4">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <h2 className="fw-bold mb-1">
              Welcome Back, {user?.username} 👋
            </h2>

            <p className="text-muted mb-0">
              Manage your employees and organization efficiently.
            </p>
          </div>

          <a
            href="/addemployee"
            className="btn btn-primary px-4 py-2 shadow-sm"
          >
            <FaPlus className="me-2" />
            Add Employee
          </a>
        </div>
      </div>

      <div className="container-fluid">

        {/* ================= STATISTICS ================= */}
        <div className="row g-4 mb-4">

          {/* Total */}
          <div className="col-md-6 col-xl-3">
            <div
              className="card border-0 shadow-sm h-100"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-2">
                      Total Employees
                    </p>

                    <h2 className="fw-bold mb-0">
                      {totalEmployees}
                    </h2>
                  </div>

                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "55px",
                      height: "55px",
                      background: "#e8f0ff",
                    }}
                  >
                    <FaUsers
                      size={25}
                      style={{ color: "#0d6efd" }}
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <small className="text-muted">
                    All registered employees
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* Active */}
          <div className="col-md-6 col-xl-3">
            <div
              className="card border-0 shadow-sm h-100"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-2">
                      Active Employees
                    </p>

                    <h2 className="fw-bold mb-0">
                      {activeEmployees}
                    </h2>
                  </div>

                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "55px",
                      height: "55px",
                      background: "#e8f8ef",
                    }}
                  >
                    <FaUserCheck
                      size={25}
                      style={{ color: "#198754" }}
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <small className="text-success">
                    Currently active
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* Inactive */}
          <div className="col-md-6 col-xl-3">
            <div
              className="card border-0 shadow-sm h-100"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-2">
                      Inactive Employees
                    </p>

                    <h2 className="fw-bold mb-0">
                      {inactiveEmployees}
                    </h2>
                  </div>

                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "55px",
                      height: "55px",
                      background: "#fdecec",
                    }}
                  >
                    <FaUserTimes
                      size={25}
                      style={{ color: "#dc3545" }}
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <small className="text-danger">
                    Currently inactive
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* Departments */}
          <div className="col-md-6 col-xl-3">
            <div
              className="card border-0 shadow-sm h-100"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-2">
                      Departments
                    </p>

                    <h2 className="fw-bold mb-0">
                      {departments}
                    </h2>
                  </div>

                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "55px",
                      height: "55px",
                      background: "#fff5dc",
                    }}
                  >
                    <FaBuilding
                      size={25}
                      style={{ color: "#f0ad00" }}
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <small className="text-muted">
                    Active departments
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="row g-4">

          {/* RECENT EMPLOYEES */}
          <div className="col-lg-8">
            <div
              className="card border-0 shadow-sm"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <div className="card-header bg-white border-0 p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="fw-bold mb-1">
                      Recent Employees
                    </h5>

                    <small className="text-muted">
                      Latest employee records
                    </small>
                  </div>

                  <a
                    href="/viewemployee"
                    className="btn btn-light btn-sm"
                  >
                    View All
                    <FaArrowRight className="ms-2" />
                  </a>
                </div>
              </div>

              <div className="card-body p-0">

                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">

                    <thead className="table-light">
                      <tr>
                        <th className="px-4 py-3">
                          Employee
                        </th>

                        <th>Department</th>

                        <th>Designation</th>

                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>

                      {employees.length === 0 ? (
                        <tr>
                          <td
                            colSpan="4"
                            className="text-center py-5 text-muted"
                          >
                            No employees found
                          </td>
                        </tr>
                      ) : (
                        employees.slice(0, 6).map((emp) => (

                          <tr key={emp.id}>

                            <td className="px-4">
                              <div className="d-flex align-items-center gap-3">

                                <img
                                  src={
                                    emp.profilepicture ||
                                    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                  }
                                  alt="profile"
                                  width="42"
                                  height="42"
                                  className="rounded-circle border"
                                  style={{
                                    objectFit: "cover",
                                  }}
                                />

                                <div>
                                  <strong className="d-block">
                                    {emp.firstname}{" "}
                                    {emp.lastname}
                                  </strong>

                                  <small className="text-muted">
                                    {emp.email}
                                  </small>
                                </div>

                              </div>
                            </td>

                            <td>
                              {emp.department || "-"}
                            </td>

                            <td>
                              {emp.designation || "-"}
                            </td>

                            <td>

                              <span
                                className={`badge px-3 py-2 ${
                                  emp.status === "Active"
                                    ? "bg-success"
                                    : "bg-danger"
                                }`}
                              >
                                {emp.status}
                              </span>

                            </td>

                          </tr>

                        ))
                      )}

                    </tbody>

                  </table>
                </div>

              </div>
            </div>
          </div>

          {/* ================= QUICK ACTIONS ================= */}
          <div className="col-lg-4">

            <div
              className="card border-0 shadow-sm h-100"
              style={{
                borderRadius: "15px",
              }}
            >

              <div className="card-body p-4">

                <h5 className="fw-bold mb-1">
                  Quick Actions
                </h5>

                <p className="text-muted small mb-4">
                  Quickly manage your employees
                </p>

                {/* Add Employee */}
                <a
                  href="/addemployee"
                  className="btn btn-primary w-100 py-3 mb-3"
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  <FaPlus className="me-2" />
                  Add New Employee
                </a>

                {/* View Employee */}
                <a
                  href="/viewemployee"
                  className="btn btn-outline-primary w-100 py-3"
                  style={{
                    borderRadius: "10px",
                  }}
                >
                  <FaSearch className="me-2" />
                  Manage Employees
                </a>

                {/* Mini Statistics */}
                <div className="border-top mt-4 pt-4">

                  <p className="text-muted small fw-bold mb-3">
                    EMPLOYEE OVERVIEW
                  </p>

                  <div className="d-flex justify-content-between align-items-center mb-3">

                    <span className="text-muted">
                      Total Employees
                    </span>

                    <strong>
                      {totalEmployees}
                    </strong>

                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3">

                    <span className="text-muted">
                      Active
                    </span>

                    <span className="badge bg-success">
                      {activeEmployees}
                    </span>

                  </div>

                  <div className="d-flex justify-content-between align-items-center">

                    <span className="text-muted">
                      Inactive
                    </span>

                    <span className="badge bg-danger">
                      {inactiveEmployees}
                    </span>

                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
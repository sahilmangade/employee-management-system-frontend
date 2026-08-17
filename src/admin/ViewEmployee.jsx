import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {
  FaEdit,
  FaTrash,
  FaEye,
  FaSearch,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

export default function ViewEmployee() {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [id, setId] = useState(0);
  const [employeecode, setEmployeecode] = useState("");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [dateofbirth, setDateofbirth] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [education, setEducation] = useState("");

  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [joiningdate, setJoiningdate] = useState("");
  const [worklocation, setWorklocation] = useState("");
  const [reportingmanager, setReportingmanager] = useState("");
  const [status, setStatus] = useState("");

  const [profilepicture, setProfilepicture] = useState("");
  const [preview, setPreview] = useState("");

  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const [showView, setShowView] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // =========================
  // GET ALL EMPLOYEES
  // =========================
  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = () => {
    axios
      .get(
        "https://employee-management-system-backend-3-dr1j.onrender.com/getemployee",
      )
      .then((response) => {
        setEmployees(response.data);
        setFilteredEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          icon: "error",
          title: "Unable to load employees",
          text: "Please make sure the backend server is running.",
        });
      });
  };

  // =========================
  // SEARCH
  // =========================
  useEffect(() => {
    const search = searchKeyword.trim().toLowerCase();

    if (search === "") {
      setFilteredEmployees(employees);
      return;
    }

    const filtered = employees.filter((emp) => {
      return (
        (emp.firstname || "").toLowerCase().includes(search) ||
        (emp.lastname || "").toLowerCase().includes(search) ||
        (emp.email || "").toLowerCase().includes(search) ||
        (emp.phonenumber || "").toLowerCase().includes(search) ||
        (emp.department || "").toLowerCase().includes(search) ||
        (emp.designation || "").toLowerCase().includes(search) ||
        (emp.employeecode || "").toLowerCase().includes(search)
      );
    });

    setFilteredEmployees(filtered);
  }, [searchKeyword, employees]);

  // =========================
  // VIEW EMPLOYEE
  // =========================
  const viewEmployee = (emp) => {
    setSelectedEmployee(emp);
    setShowView(true);
  };

  // =========================
  // PROFILE IMAGE
  // =========================
  const handleProfile = (event) => {
    const file = event.target.files[0];

    if (file) {
      const filepath = "/img/" + file.name;

      setProfilepicture(filepath);
      setPreview(filepath);
    }
  };

  // =========================
  // DELETE EMPLOYEE
  // =========================
  const deleteEmployee = (employeeId) => {
    Swal.fire({
      title: "Delete Employee?",
      text: "This employee record will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://employee-management-system-backend-3-dr1j.onrender.com/deletebyid?id=${employeeId}`,
          )
          .then((response) => {
            setEmployees(employees.filter((emp) => emp.id !== employeeId));

            Swal.fire({
              icon: "success",
              title: "Deleted!",
              text: response.data,
              timer: 1800,
              showConfirmButton: false,
            });
          })
          .catch((error) => {
            console.log(error);

            Swal.fire({
              icon: "error",
              title: "Delete Failed",
              text: "Unable to delete employee.",
            });
          });
      }
    });
  };

  // =========================
  // PREPARE UPDATE
  // =========================
  const readyToUpdate = (emp) => {
    setShowForm(true);

    setId(emp.id);
    setEmployeecode(emp.employeecode || "");
    setFirstname(emp.firstname || "");
    setMiddlename(emp.middlename || "");
    setLastname(emp.lastname || "");
    setGender(emp.gender || "");
    setDateofbirth(emp.dateofbirth || "");
    setEmail(emp.email || "");
    setPhonenumber(emp.phonenumber || "");
    setAddress(emp.address || "");
    setEducation(emp.education || "");

    setDepartment(emp.department || "");
    setDesignation(emp.designation || "");
    setExperience(emp.experience || "");
    setSalary(emp.salary || "");
    setJoiningdate(emp.joiningdate || "");
    setWorklocation(emp.worklocation || "");
    setReportingmanager(emp.reportingmanager || "");
    setStatus(emp.status || "");

    setProfilepicture(emp.profilepicture || "");
    setPreview(emp.profilepicture || "");
  };

  // =========================
  // UPDATE EMPLOYEE
  // =========================
  const updateEmployee = (event) => {
    event.preventDefault();

    const employee = {
      employeecode,
      firstname,
      middlename,
      lastname,
      gender,
      dateofbirth,
      profilepicture,
      email,
      phonenumber,
      address,
      education,
      department,
      designation,
      experience,
      salary,
      joiningdate,
      worklocation,
      reportingmanager,
      status,
    };

    axios
      .put(
        `https://employee-management-system-backend-3-dr1j.onrender.com/updateemployee?id=${id}`,
        employee,
      )
      .then((response) => {
        setShowForm(false);

        Swal.fire({
          icon: "success",
          title: "Employee Updated",
          text: response.data,
          timer: 1800,
          showConfirmButton: false,
        });

        getEmployees();
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: "Unable to update employee.",
        });
      });
  };

  const defaultImage =
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

  return (
    <div
      className="container-fluid py-4"
      style={{
        background: "#f5f7fa",
        minHeight: "calc(100vh - 70px)",
      }}
    >
      {/* ================= HEADER ================= */}
      <div className="container mb-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div>
            <h2 className="fw-bold mb-1">Employee Management</h2>
            <p className="text-muted mb-0">
              Search, view, update and manage employee records
            </p>
          </div>

          <div
            className="px-3 py-2 rounded-3 bg-white shadow-sm"
            style={{ minWidth: "150px" }}
          >
            <small className="text-muted d-block">Total Employees</small>
            <span className="fw-bold fs-5">{employees.length}</span>
          </div>
        </div>
      </div>

      {/* ================= MAIN CARD ================= */}
      <div className="container">
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
          {/* SEARCH HEADER */}
          <div className="card-body p-4">
            <div className="row align-items-center g-3">
              <div className="col-lg-8">
                <div className="position-relative">
                  <FaSearch
                    className="position-absolute text-primary"
                    style={{
                      left: "17px",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  />

                  <input
                    type="text"
                    className="form-control ps-5 py-3 border-0 bg-light rounded-3"
                    placeholder="Search by name, employee code, email, department..."
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                  />

                  {searchKeyword && (
                    <button
                      type="button"
                      onClick={() => setSearchKeyword("")}
                      className="btn position-absolute"
                      style={{
                        right: "8px",
                        top: "50%",
                        transform: "translateY(-50%)",
                      }}
                    >
                      <FaTimes className="text-muted" />
                    </button>
                  )}
                </div>
              </div>

              <div className="col-lg-4 text-lg-end">
                <span className="text-muted">
                  Showing <strong>{filteredEmployees.length}</strong> employees
                </span>
              </div>
            </div>
          </div>

          {/* ================= EMPLOYEE GRID ================= */}
          <div className="card-body pt-0">
            {filteredEmployees.length === 0 ? (
              <div className="text-center py-5">
                <div
                  className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle bg-light"
                  style={{
                    width: "70px",
                    height: "70px",
                  }}
                >
                  <FaUser className="text-muted fs-3" />
                </div>

                <h5 className="fw-bold">No Employees Found</h5>

                <p className="text-muted mb-0">
                  Try searching with a different keyword.
                </p>
              </div>
            ) : (
              <div className="row g-4">
                {filteredEmployees.map((emp) => (
                  <div className="col-sm-6 col-lg-4 col-xl-3" key={emp.id}>
                    <div
                      className="card border-0 shadow-sm h-100 rounded-4"
                      style={{
                        transition: "all 0.2s ease",
                      }}
                    >
                      {/* CARD TOP */}
                      <div className="card-body text-center p-4">
                        <div className="position-relative d-inline-block mb-3">
                          <img
                            src={
                              emp.profilepicture
                                ? emp.profilepicture
                                : defaultImage
                            }
                            alt="profile"
                            width="95"
                            height="95"
                            className="rounded-circle shadow-sm"
                            style={{
                              objectFit: "cover",
                              border: "4px solid #fff",
                            }}
                          />

                          <span
                            className={`position-absolute bottom-0 end-0 rounded-circle border border-2 border-white ${
                              emp.status === "Active"
                                ? "bg-success"
                                : "bg-secondary"
                            }`}
                            style={{
                              width: "17px",
                              height: "17px",
                            }}
                          ></span>
                        </div>

                        <h5 className="fw-bold mb-1">
                          {emp.firstname} {emp.lastname}
                        </h5>

                        <p className="text-primary fw-semibold small mb-1">
                          {emp.designation || "Employee"}
                        </p>

                        <p className="text-muted small mb-2">
                          {emp.employeecode}
                        </p>

                        <span
                          className={`badge rounded-pill ${
                            emp.status === "Active"
                              ? "text-bg-success"
                              : "text-bg-secondary"
                          }`}
                        >
                          {emp.status || "Unknown"}
                        </span>

                        <hr className="my-3" />

                        <div className="text-start small">
                          <div className="d-flex align-items-center mb-2">
                            <FaEnvelope className="text-muted me-2" />
                            <span
                              className="text-muted text-truncate"
                              title={emp.email}
                            >
                              {emp.email}
                            </span>
                          </div>

                          <div className="d-flex align-items-center mb-2">
                            <FaPhone className="text-muted me-2" />
                            <span className="text-muted">
                              {emp.phonenumber}
                            </span>
                          </div>

                          <div className="d-flex align-items-center">
                            <FaBuilding className="text-muted me-2" />
                            <span className="text-muted">{emp.department}</span>
                          </div>
                        </div>

                        {/* ACTIONS */}
                        <div className="d-flex gap-2 mt-4">
                          <button
                            className="btn btn-light border flex-fill"
                            onClick={() => viewEmployee(emp)}
                            title="View Details"
                          >
                            <FaEye className="me-1" />
                            View
                          </button>

                          <button
                            className="btn btn-primary flex-fill"
                            onClick={() => readyToUpdate(emp)}
                            title="Edit Employee"
                          >
                            <FaEdit className="me-1" />
                            Edit
                          </button>
                        </div>

                        <button
                          className="btn btn-outline-danger btn-sm w-100 mt-2"
                          onClick={() => deleteEmployee(emp.id)}
                        >
                          <FaTrash className="me-1" />
                          Delete Employee
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* UPDATE MODAL */}
      {/* ================================================= */}

      {showForm && (
        <>
          <div
            className="modal-backdrop fade show"
            style={{ zIndex: 1040 }}
          ></div>

          <div className="modal d-block" style={{ zIndex: 1050 }} tabIndex="-1">
            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content border-0 rounded-4 shadow">
                <div className="modal-header px-4 py-3">
                  <div>
                    <h5 className="modal-title fw-bold">Edit Employee</h5>
                    <small className="text-muted">
                      Update employee information
                    </small>
                  </div>

                  <button
                    className="btn-close"
                    onClick={() => setShowForm(false)}
                  ></button>
                </div>

                <div className="modal-body p-4">
                  <form onSubmit={updateEmployee}>
                    {/* PERSONAL */}
                    <div className="mb-4">
                      <h6 className="fw-bold text-primary mb-3">
                        Personal Information
                      </h6>

                      <div className="row g-3">
                        <div className="col-md-4">
                          <label className="form-label small fw-semibold">
                            Employee Code
                          </label>
                          <input
                            className="form-control"
                            value={employeecode}
                            onChange={(e) => setEmployeecode(e.target.value)}
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label small fw-semibold">
                            First Name
                          </label>
                          <input
                            className="form-control"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label small fw-semibold">
                            Middle Name
                          </label>
                          <input
                            className="form-control"
                            value={middlename}
                            onChange={(e) => setMiddlename(e.target.value)}
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label small fw-semibold">
                            Last Name
                          </label>
                          <input
                            className="form-control"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label small fw-semibold">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label small fw-semibold">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            value={phonenumber}
                            onChange={(e) => setPhonenumber(e.target.value)}
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label small fw-semibold">
                            Gender
                          </label>
                          <select
                            className="form-select"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                          >
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>

                        <div className="col-md-4">
                          <label className="form-label small fw-semibold">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            value={dateofbirth}
                            onChange={(e) => setDateofbirth(e.target.value)}
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label small fw-semibold">
                            Education
                          </label>
                          <select
                            className="form-select"
                            value={education}
                            onChange={(e) => setEducation(e.target.value)}
                          >
                            <option value="">Select Education</option>
                            <option>BCA</option>
                            <option>BCS</option>
                            <option>BSC Computer Science</option>
                            <option>BCOM</option>
                            <option>BA</option>
                            <option>BBA</option>
                            <option>BTech</option>
                            <option>BE Computer</option>
                            <option>BE IT</option>
                            <option>MCA</option>
                            <option>MCS</option>
                            <option>MSc Computer Science</option>
                            <option>MBA</option>
                            <option>MCOM</option>
                            <option>MA</option>
                            <option>MTech</option>
                            <option>Diploma in Computer Engineering</option>
                            <option>Diploma in IT</option>
                            <option>Diploma in Mechanical</option>
                            <option>Diploma in Civil</option>
                            <option>12th Science</option>
                            <option>12th Commerce</option>
                            <option>12th Arts</option>
                          </select>
                        </div>

                        <div className="col-12">
                          <label className="form-label small fw-semibold">
                            Address
                          </label>
                          <textarea
                            className="form-control"
                            rows="2"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    {/* WORK */}
                    <div className="mb-4">
                      <h6 className="fw-bold text-primary mb-3">
                        Work Information
                      </h6>

                      <div className="row g-3">
                        <div className="col-md-4">
                          <label className="form-label small fw-semibold">
                            Department
                          </label>
                          <input
                            className="form-control"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label small fw-semibold">
                            Designation
                          </label>
                          <input
                            className="form-control"
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label small fw-semibold">
                            Experience
                          </label>
                          <input
                            type="number"
                            min="0"
                            className="form-control"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label small fw-semibold">
                            Salary
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label small fw-semibold">
                            Joining Date
                          </label>
                          <input
                            type="date"
                            className="form-control"
                            value={joiningdate}
                            onChange={(e) => setJoiningdate(e.target.value)}
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label small fw-semibold">
                            Status
                          </label>
                          <select
                            className="form-select"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                          >
                            <option value="">Select Status</option>
                            <option>Active</option>
                            <option>Inactive</option>
                          </select>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label small fw-semibold">
                            Work Location
                          </label>
                          <input
                            className="form-control"
                            value={worklocation}
                            onChange={(e) => setWorklocation(e.target.value)}
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label small fw-semibold">
                            Reporting Manager
                          </label>
                          <input
                            className="form-control"
                            value={reportingmanager}
                            onChange={(e) =>
                              setReportingmanager(e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>

                    {/* PROFILE */}
                    <div className="mb-3">
                      <h6 className="fw-bold text-primary mb-3">
                        Profile Image
                      </h6>

                      <div className="row align-items-center g-3">
                        <div className="col-md-7">
                          <input
                            type="file"
                            className="form-control"
                            accept="image/*"
                            onChange={handleProfile}
                          />
                        </div>

                        <div className="col-md-5 text-center">
                          <img
                            src={preview ? preview : defaultImage}
                            alt="preview"
                            width="100"
                            height="100"
                            className="rounded-circle border shadow-sm"
                            style={{
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-end gap-2 mt-4">
                      <button
                        type="button"
                        className="btn btn-light border px-4"
                        onClick={() => setShowForm(false)}
                      >
                        Cancel
                      </button>

                      <button type="submit" className="btn btn-primary px-4">
                        <FaEdit className="me-2" />
                        Update Employee
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ================================================= */}
      {/* VIEW DETAILS MODAL */}
      {/* ================================================= */}

      {showView && selectedEmployee && (
        <>
          <div
            className="modal-backdrop fade show"
            style={{ zIndex: 1040 }}
          ></div>

          <div className="modal d-block" style={{ zIndex: 1050 }}>
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content border-0 rounded-4 shadow">
                <div className="modal-header">
                  <div>
                    <h5 className="modal-title fw-bold">Employee Profile</h5>
                    <small className="text-muted">
                      Complete employee information
                    </small>
                  </div>

                  <button
                    className="btn-close"
                    onClick={() => setShowView(false)}
                  ></button>
                </div>

                <div className="modal-body p-4">
                  {/* PROFILE HEADER */}
                  <div className="text-center mb-4">
                    <img
                      src={
                        selectedEmployee.profilepicture
                          ? selectedEmployee.profilepicture
                          : defaultImage
                      }
                      alt="profile"
                      width="120"
                      height="120"
                      className="rounded-circle shadow-sm border"
                      style={{ objectFit: "cover" }}
                    />

                    <h4 className="fw-bold mt-3 mb-1">
                      {selectedEmployee.firstname} {selectedEmployee.middlename}{" "}
                      {selectedEmployee.lastname}
                    </h4>

                    <p className="text-primary fw-semibold mb-2">
                      {selectedEmployee.designation}
                    </p>

                    <span
                      className={`badge rounded-pill ${
                        selectedEmployee.status === "Active"
                          ? "text-bg-success"
                          : "text-bg-secondary"
                      }`}
                    >
                      {selectedEmployee.status}
                    </span>
                  </div>

                  {/* INFORMATION */}
                  <div className="row g-3">
                    <InfoItem
                      icon={<FaUser />}
                      label="Employee Code"
                      value={selectedEmployee.employeecode}
                    />

                    <InfoItem
                      icon={<FaEnvelope />}
                      label="Email"
                      value={selectedEmployee.email}
                    />

                    <InfoItem
                      icon={<FaPhone />}
                      label="Phone"
                      value={selectedEmployee.phonenumber}
                    />

                    <InfoItem
                      icon={<FaUser />}
                      label="Gender"
                      value={selectedEmployee.gender}
                    />

                    <InfoItem
                      icon={<FaCalendarAlt />}
                      label="Date of Birth"
                      value={selectedEmployee.dateofbirth}
                    />

                    <InfoItem
                      icon={<FaBriefcase />}
                      label="Education"
                      value={selectedEmployee.education}
                    />

                    <InfoItem
                      icon={<FaBuilding />}
                      label="Department"
                      value={selectedEmployee.department}
                    />

                    <InfoItem
                      icon={<FaBriefcase />}
                      label="Designation"
                      value={selectedEmployee.designation}
                    />

                    <InfoItem
                      icon={<FaBriefcase />}
                      label="Experience"
                      value={`${selectedEmployee.experience} Years`}
                    />

                    <InfoItem
                      icon="₹"
                      label="Salary"
                      value={`₹ ${selectedEmployee.salary}`}
                    />

                    <InfoItem
                      icon={<FaCalendarAlt />}
                      label="Joining Date"
                      value={selectedEmployee.joiningdate}
                    />

                    <InfoItem
                      icon={<FaMapMarkerAlt />}
                      label="Work Location"
                      value={selectedEmployee.worklocation}
                    />

                    <InfoItem
                      icon={<FaUser />}
                      label="Reporting Manager"
                      value={selectedEmployee.reportingmanager}
                    />

                    <InfoItem
                      icon={<FaMapMarkerAlt />}
                      label="Address"
                      value={selectedEmployee.address}
                      full
                    />
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    className="btn btn-secondary px-4"
                    onClick={() => setShowView(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// =====================================================
// INFORMATION ITEM
// =====================================================

function InfoItem({ icon, label, value, full }) {
  return (
    <div className={full ? "col-12" : "col-md-6"}>
      <div className="bg-light rounded-3 p-3 h-100">
        <div className="d-flex align-items-center mb-1">
          <span className="text-primary me-2">{icon}</span>

          <small className="text-muted fw-semibold">{label}</small>
        </div>

        <div className="fw-semibold">{value || "Not Available"}</div>
      </div>
    </div>
  );
}

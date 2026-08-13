import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddEmployee() {
  let [employeecode, setEmployeecode] = useState("");
  let [firstname, setFirstname] = useState("");
  let [middlename, setMiddlename] = useState("");
  let [lastname, setLastname] = useState("");
  let [gender, setGender] = useState("");
  let [dateofbirth, setDateofbirth] = useState("");
  let [email, setEmail] = useState("");
  let [phonenumber, setPhonenumber] = useState("");
  let [address, setAddress] = useState("");
  let [education, setEducation] = useState("");

  let [department, setDepartment] = useState("");
  let [designation, setDesignation] = useState("");
  let [experience, setExperience] = useState("");
  let [salary, setSalary] = useState("");
  let [joiningdate, setJoiningdate] = useState("");
  let [worklocation, setWorklocation] = useState("");
  let [reportingmanager, setReportingmanager] = useState("");
  let [status, setStatus] = useState("");

  let [profilepicture, setProfilepicture] = useState("");
  let [preview, setPreview] = useState("");

  let handleprofile = (event) => {
    let file = event.target.files[0];

    if (file) {
      let filepath = "/img/" + file.name;

      setProfilepicture(filepath);
      setPreview(URL.createObjectURL(file));
    }
  };

  let addemployee = (event) => {
    event.preventDefault();

    let employee = {
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
      experience: Number(experience),
      salary: Number(salary),
      joiningdate,
      worklocation,
      reportingmanager,
      status,
    };

    axios
      .post("http://localhost:8080/addemployee", employee)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data,
          confirmButtonColor: "#0d6efd",
        });

        setEmployeecode("");
        setFirstname("");
        setMiddlename("");
        setLastname("");
        setGender("");
        setDateofbirth("");
        setEmail("");
        setPhonenumber("");
        setAddress("");
        setEducation("");

        setDepartment("");
        setDesignation("");
        setExperience("");
        setSalary("");
        setJoiningdate("");
        setWorklocation("");
        setReportingmanager("");
        setStatus("");

        setProfilepicture("");
        setPreview("");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error While Adding Employee",
          confirmButtonColor: "#dc3545",
        });

        console.log(error);
      });
  };

  let showvalidationmessage = (message) => {
    Swal.fire({
      icon: "warning",
      title: "Validation Error",
      text: message,
      confirmButtonColor: "#f39c12",
    });
  };

  let validation = () => {
    if (firstname === "") {
      showvalidationmessage("First Name is required");
      return false;
    } else if (!/^[A-Za-z]{2,20}$/.test(firstname)) {
      showvalidationmessage("First Name must contain only letters");
      return false;
    } else if (middlename === "") {
      showvalidationmessage("Middle Name is required");
      return false;
    } else if (!/^[A-Za-z]{2,20}$/.test(middlename)) {
      showvalidationmessage("Middle Name must contain only letters");
      return false;
    } else if (lastname === "") {
      showvalidationmessage("Last Name is required");
      return false;
    } else if (!/^[A-Za-z]{2,20}$/.test(lastname)) {
      showvalidationmessage("Last Name must contain only letters");
      return false;
    } else if (gender === "") {
      showvalidationmessage("Please Select Gender");
      return false;
    } else if (dateofbirth === "") {
      showvalidationmessage("Date Of Birth is required");
      return false;
    } else if (new Date(dateofbirth) > new Date()) {
      showvalidationmessage("Date Of Birth cannot be in the future");
      return false;
    } else if (email === "") {
      showvalidationmessage("Email is required");
      return false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
    ) {
      showvalidationmessage("Please Enter Valid Email");
      return false;
    } else if (phonenumber === "") {
      showvalidationmessage("Phone Number is required");
      return false;
    } else if (!/^[0-9]{10}$/.test(phonenumber)) {
      showvalidationmessage("Phone Number must be 10 digits");
      return false;
    } else if (address === "") {
      showvalidationmessage("Address is required");
      return false;
    } else if (address.trim().length < 10) {
      showvalidationmessage("Address must contain at least 10 characters");
      return false;
    } else if (education === "") {
      showvalidationmessage("Please Select Education");
      return false;
    } else if (department === "") {
      showvalidationmessage("Department is required");
      return false;
    } else if (designation === "") {
      showvalidationmessage("Designation is required");
      return false;
    } else if (experience === "") {
      showvalidationmessage("Experience is required");
      return false;
    } else if (Number(experience) < 0) {
      showvalidationmessage("Experience cannot be negative");
      return false;
    } else if (salary === "") {
      showvalidationmessage("Salary is required");
      return false;
    } else if (Number(salary) <= 0) {
      showvalidationmessage("Salary must be greater than 0");
      return false;
    } else if (joiningdate === "") {
      showvalidationmessage("Joining Date is required");
      return false;
    } else if (worklocation === "") {
      showvalidationmessage("Work Location is required");
      return false;
    } else if (reportingmanager === "") {
      showvalidationmessage("Reporting Manager is required");
      return false;
    } else if (status === "") {
      showvalidationmessage("Please Select Status");
      return false;
    } else if (profilepicture === "") {
      showvalidationmessage("Please Select Profile Picture");
      return false;
    }

    return true;
  };

  let checkFields = (event) => {
    event.preventDefault();

    if (validation()) {
      addemployee(event);
    }
  };

  return (
    <div
      className="container-fluid py-4 px-3 px-md-4"
      style={{
        background: "#f5f7fa",
        minHeight: "calc(100vh - 70px)",
      }}
    >
      <div className="container">

        {/* PAGE HEADER */}
        <div className="mb-4">
          <div className="d-flex align-items-center gap-3 mb-2">
            <div
              className="d-flex align-items-center justify-content-center rounded-3"
              style={{
                width: "48px",
                height: "48px",
                background: "#e8f0fe",
                color: "#0d6efd",
                fontSize: "22px",
              }}
            >
              +
            </div>

            <div>
              <h2 className="fw-bold mb-0 text-dark">
                Add Employee
              </h2>

              <p className="text-muted mb-0 small">
                Create a new employee profile and add their information
              </p>
            </div>
          </div>
        </div>

        {/* MAIN CARD */}
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

          <div className="card-body p-4 p-lg-5">

            <form onSubmit={checkFields}>

              {/* PERSONAL INFORMATION */}
              <div className="mb-4">

                <div className="d-flex align-items-center mb-3">
                  <div
                    className="bg-primary rounded-pill me-2"
                    style={{
                      width: "4px",
                      height: "25px",
                    }}
                  ></div>

                  <div>
                    <h5 className="fw-bold mb-0">
                      Personal Information
                    </h5>

                    <small className="text-muted">
                      Basic information about the employee
                    </small>
                  </div>
                </div>

                <div className="row g-3">

                  {/* First Name */}
                  <div className="col-md-4">
                    <label className="form-label fw-semibold small">
                      First Name
                    </label>

                    <input
                      className="form-control"
                      placeholder="Enter first name"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>

                  {/* Middle Name */}
                  <div className="col-md-4">
                    <label className="form-label fw-semibold small">
                      Middle Name
                    </label>

                    <input
                      className="form-control"
                      placeholder="Enter middle name"
                      value={middlename}
                      onChange={(e) => setMiddlename(e.target.value)}
                    />
                  </div>

                  {/* Last Name */}
                  <div className="col-md-4">
                    <label className="form-label fw-semibold small">
                      Last Name
                    </label>

                    <input
                      className="form-control"
                      placeholder="Enter last name"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold small">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Phone */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold small">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter 10 digit phone number"
                      value={phonenumber}
                      onChange={(e) => setPhonenumber(e.target.value)}
                    />
                  </div>

                  {/* Gender */}
                  <div className="col-md-4">
                    <label className="form-label fw-semibold small">
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

                  {/* DOB */}
                  <div className="col-md-4">
                    <label className="form-label fw-semibold small">
                      Date of Birth
                    </label>

                    <input
                      type="date"
                      className="form-control"
                      value={dateofbirth}
                      onChange={(e) => setDateofbirth(e.target.value)}
                    />
                  </div>

                  {/* Education */}
                  <div className="col-md-4">
                    <label className="form-label fw-semibold small">
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

                  {/* Address */}
                  <div className="col-12">
                    <label className="form-label fw-semibold small">
                      Address
                    </label>

                    <input
                      className="form-control"
                      placeholder="Enter full address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>

                </div>
              </div>

              <hr className="my-4 text-muted" />

              {/* WORK INFORMATION */}
              <div className="mb-4">

                <div className="d-flex align-items-center mb-3">
                  <div
                    className="bg-primary rounded-pill me-2"
                    style={{
                      width: "4px",
                      height: "25px",
                    }}
                  ></div>

                  <div>
                    <h5 className="fw-bold mb-0">
                      Work Information
                    </h5>

                    <small className="text-muted">
                      Employee's professional and job details
                    </small>
                  </div>
                </div>

                <div className="row g-3">

                  {/* Department */}
                  <div className="col-md-4">
                    <label className="form-label fw-semibold small">
                      Department
                    </label>

                    <input
                      className="form-control"
                      placeholder="Enter department"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    />
                  </div>

                  {/* Designation */}
                  <div className="col-md-4">
                    <label className="form-label fw-semibold small">
                      Designation
                    </label>

                    <input
                      className="form-control"
                      placeholder="Enter designation"
                      value={designation}
                      onChange={(e) => setDesignation(e.target.value)}
                    />
                  </div>

                  {/* Experience */}
                  <div className="col-md-4">
                    <label className="form-label fw-semibold small">
                      Experience
                    </label>

                    <input
                      type="number"
                      min="0"
                      step="1"
                      className="form-control"
                      placeholder="Years"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                    />
                  </div>

                  {/* Salary */}
                  <div className="col-md-4">
                    <label className="form-label fw-semibold small">
                      Salary
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter salary amount"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                    />
                  </div>

                  {/* Joining Date */}
                  <div className="col-md-4">
                    <label className="form-label fw-semibold small">
                      Joining Date
                    </label>

                    <input
                      type="date"
                      className="form-control"
                      value={joiningdate}
                      onChange={(e) => setJoiningdate(e.target.value)}
                    />
                  </div>

                  {/* Status */}
                  <div className="col-md-4">
                    <label className="form-label fw-semibold small">
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

                  {/* Work Location */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold small">
                      Work Location
                    </label>

                    <input
                      className="form-control"
                      placeholder="Enter work location"
                      value={worklocation}
                      onChange={(e) => setWorklocation(e.target.value)}
                    />
                  </div>

                  {/* Reporting Manager */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold small">
                      Reporting Manager
                    </label>

                    <input
                      className="form-control"
                      placeholder="Enter reporting manager"
                      value={reportingmanager}
                      onChange={(e) => setReportingmanager(e.target.value)}
                    />
                  </div>

                </div>
              </div>

              <hr className="my-4 text-muted" />

              {/* PROFILE IMAGE */}
              <div className="mb-4">

                <div className="d-flex align-items-center mb-3">
                  <div
                    className="bg-primary rounded-pill me-2"
                    style={{
                      width: "4px",
                      height: "25px",
                    }}
                  ></div>

                  <div>
                    <h5 className="fw-bold mb-0">
                      Profile Image
                    </h5>

                    <small className="text-muted">
                      Upload a professional profile photo
                    </small>
                  </div>
                </div>

                <div className="row align-items-center g-4">

                  {/* Upload */}
                  <div className="col-md-7">

                    <label className="form-label fw-semibold small">
                      Upload Profile Image
                    </label>

                    <input
                      type="file"
                      className="form-control"
                      accept="image/*"
                      onChange={handleprofile}
                    />

                    <small className="text-muted d-block mt-2">
                      Supported formats: JPG, JPEG, PNG
                    </small>

                  </div>

                  {/* Preview */}
                  <div className="col-md-5 text-center">

                    <div
                      className="mx-auto rounded-4 overflow-hidden bg-light d-flex align-items-center justify-content-center"
                      style={{
                        width: "130px",
                        height: "130px",
                        border: "2px dashed #ced4da",
                      }}
                    >
                      {preview ? (
                        <img
                          src={preview}
                          alt="preview"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <div className="text-center">
                          <div
                            className="text-secondary mb-1"
                            style={{ fontSize: "28px" }}
                          >
                            👤
                          </div>

                          <small className="text-muted">
                            No Image
                          </small>
                        </div>
                      )}
                    </div>

                    {preview && (
                      <small className="text-success fw-semibold d-block mt-2">
                        ✓ Image Selected
                      </small>
                    )}

                  </div>

                </div>
              </div>

              {/* BUTTONS */}
              <div className="border-top pt-4 mt-4 d-flex justify-content-end">

                <button
                  type="submit"
                  className="btn btn-primary px-5 py-2 fw-semibold rounded-3"
                >
                  Add Employee
                </button>

              </div>

            </form>

          </div>
        </div>

        {/* FOOT NOTE */}
        <div className="text-center mt-3">
          <small className="text-muted">
            All employee information should be accurate and up to date.
          </small>
        </div>

      </div>
    </div>
  );
}
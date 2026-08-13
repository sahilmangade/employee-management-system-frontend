import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function RegisterForm() {
  let [isRegister, setIsRegister] = useState(true);

  let [employeecode, setEmployeecode] = useState("");
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [confirmpassword, setConfirmpassword] = useState("");

  let navigate = useNavigate();

  // ==============================
  // SWITCH TO LOGIN
  // ==============================

  let switchToLogin = () => {
    setUsername("");
    setPassword("");
    setIsRegister(false);
  };

  // ==============================
  // SWITCH TO REGISTER
  // ==============================

  let switchToRegister = () => {
    setUsername("");
    setPassword("");
    setIsRegister(true);
  };

  // ==============================
  // REGISTRATION VALIDATION
  // ==============================

  let validRegistration = () => {
    if (
      employeecode === "" ||
      username === "" ||
      password === "" ||
      confirmpassword === ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "Please Fill All Fields",
        text: "All registration fields are required.",
        confirmButtonColor: "#0d6efd",
      });

      return false;
    }

    // Employee Code Validation
    if (!/^EMP\d{3}$/.test(employeecode)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Employee Code",
        text: "Employee Code should be like EMP001.",
        confirmButtonColor: "#0d6efd",
      });

      return false;
    }

    // Username Validation
    if (!/^[A-Za-z0-9]{4,15}$/.test(username)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Username",
        text: "Username must contain 4 to 15 letters or numbers.",
        confirmButtonColor: "#0d6efd",
      });

      return false;
    }

    // Password Match
    if (password !== confirmpassword) {
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Password and Confirm Password do not match.",
        confirmButtonColor: "#0d6efd",
      });

      return false;
    }

    return true;
  };

  // ==============================
  // REGISTER
  // ==============================

  let register = (event) => {
    event.preventDefault();

    if (validRegistration()) {
      let user = {
        employeecode,
        username,
        password,
        confirmpassword,
      };

      axios
        .post("http://localhost:8080/register", user)

        .then((response) => {
          if (response.data === "Registration Successful") {
            Swal.fire({
              icon: "success",
              title: "Registration Successful!",
              text: "Your account has been created successfully.",
              confirmButtonText: "Continue",
              confirmButtonColor: "#0d6efd",
            }).then(() => {
              setEmployeecode("");
              setUsername("");
              setPassword("");
              setConfirmpassword("");

              // Open Login form
              setIsRegister(false);
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Registration Failed",
              text: response.data,
              confirmButtonColor: "#0d6efd",
            });
          }
        })

        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Registration Error",
            text: "Unable to connect to the server.",
            confirmButtonColor: "#0d6efd",
          });
        });
    }
  };

  // ==============================
  // LOGIN
  // ==============================

  let login = (event) => {
    event.preventDefault();

    if (username === "" || password === "") {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please enter username and password.",
        confirmButtonColor: "#0d6efd",
      });

      return;
    }

    let loginUser = {
      username,
      password,
    };

    axios
      .post("http://localhost:8080/login", loginUser)

      .then((response) => {
        if (response.data) {
          let user = response.data;

          // Store logged-in user
          localStorage.setItem("userinfo", JSON.stringify(user));

          setUsername("");
          setPassword("");

          Swal.fire({
            icon: "success",
            title: "Login Successful!",
            text: "Welcome back.",
            timer: 1200,
            showConfirmButton: false,
          }).then(() => {
            if (user.role.toLowerCase() === "admin") {
              navigate("/admindashboard");
            } else {
              navigate("/employeedashboard");
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Invalid Credentials",
            text: "Username or password is incorrect.",
            confirmButtonColor: "#0d6efd",
          });
        }
      })

      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Unable to connect to the server.",
          confirmButtonColor: "#0d6efd",
        });
      });
  };

  // ==============================
  // UI
  // ==============================

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center py-3"
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #e9f0ff 100%)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            {/* =========================
                MAIN CARD
            ========================= */}

            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              {/* =========================
                  FORM BODY
              ========================= */}

              <div className="card-body px-4 py-4">
                {/* =========================
                    REGISTER FORM
                ========================= */}

                {isRegister ? (
                  <>
                    {/* Heading */}

                    <div className="text-center mb-3">
                      <h4 className="fw-bold mb-1">Employee Registration</h4>

                      <small className="text-muted">
                        Create your account to get started
                      </small>
                    </div>

                    <form onSubmit={register}>
                      {/* Employee Code */}

                      <div className="mb-2">
                        <label className="form-label fw-semibold small mb-1">
                          Employee Code
                        </label>

                        <div className="input-group input-group-sm">
                          <span className="input-group-text bg-light border-end-0">
                            <i className="bi bi-person-badge text-secondary"></i>
                          </span>

                          <input
                            type="text"
                            className="form-control border-start-0"
                            placeholder="Example: EMP001"
                            value={employeecode}
                            onChange={(e) => setEmployeecode(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Username */}

                      <div className="mb-2">
                        <label className="form-label fw-semibold small mb-1">
                          Username
                        </label>

                        <div className="input-group input-group-sm">
                          <span className="input-group-text bg-light border-end-0">
                            <i className="bi bi-person text-secondary"></i>
                          </span>

                          <input
                            type="text"
                            className="form-control border-start-0"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Password */}

                      <div className="mb-2">
                        <label className="form-label fw-semibold small mb-1">
                          Password
                        </label>

                        <div className="input-group input-group-sm">
                          <span className="input-group-text bg-light border-end-0">
                            <i className="bi bi-lock text-secondary"></i>
                          </span>

                          <input
                            type="password"
                            className="form-control border-start-0"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Confirm Password */}

                      <div className="mb-3">
                        <label className="form-label fw-semibold small mb-1">
                          Confirm Password
                        </label>

                        <div className="input-group input-group-sm">
                          <span className="input-group-text bg-light border-end-0">
                            <i className="bi bi-shield-lock text-secondary"></i>
                          </span>

                          <input
                            type="password"
                            className="form-control border-start-0"
                            placeholder="Confirm password"
                            value={confirmpassword}
                            onChange={(e) => setConfirmpassword(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Register Button */}

                      <button
                        type="submit"
                        className="btn btn-primary w-100 fw-semibold"
                      >
                        <i className="bi bi-person-plus-fill me-2"></i>
                        Register
                      </button>
                    </form>

                    {/* Login Switch */}

                    <div className="text-center mt-3">
                      <small className="text-muted">
                        Already have an account?
                      </small>

                      <button
                        type="button"
                        className="btn btn-link btn-sm text-primary fw-semibold text-decoration-none"
                        onClick={switchToLogin}
                      >
                        Login
                      </button>
                    </div>
                  </>
                ) : (
                  /* =========================
                     LOGIN FORM
                  ========================= */

                  <>
                    {/* Heading */}

                    <div className="text-center mb-3">
                      <h4 className="fw-bold mb-1">Employee Login</h4>

                      <small className="text-muted">
                        Login to access your account
                      </small>
                    </div>

                    <form onSubmit={login}>
                      {/* Username */}

                      <div className="mb-3">
                        <label className="form-label fw-semibold small mb-1">
                          Username
                        </label>

                        <div className="input-group input-group-sm">
                          <span className="input-group-text bg-light border-end-0">
                            <i className="bi bi-person text-secondary"></i>
                          </span>

                          <input
                            type="text"
                            className="form-control border-start-0"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Password */}

                      <div className="mb-3">
                        <label className="form-label fw-semibold small mb-1">
                          Password
                        </label>

                        <div className="input-group input-group-sm">
                          <span className="input-group-text bg-light border-end-0">
                            <i className="bi bi-lock text-secondary"></i>
                          </span>

                          <input
                            type="password"
                            className="form-control border-start-0"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Login Button */}

                      <button
                        type="submit"
                        className="btn btn-primary w-100 fw-semibold"
                      >
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Login
                      </button>
                    </form>

                    {/* Register Switch */}

                    <div className="text-center mt-3">
                      <small className="text-muted">New Employee?</small>

                      <button
                        type="button"
                        className="btn btn-link btn-sm text-primary fw-semibold text-decoration-none"
                        onClick={switchToRegister}
                      >
                        Register
                      </button>
                    </div>
                  </>
                )}
              </div>

              {/* =========================
                  CARD FOOTER
              ========================= */}

              <div className="bg-light border-top text-center py-2">
                <small className="text-muted">
                  <i className="bi bi-shield-check me-1"></i>
                  Secure Employee Management System
                </small>
              </div>
            </div>

            {/* =========================
                BACK TO HOME
            ========================= */}

            <div className="text-center mt-2">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="btn btn-link btn-sm text-secondary text-decoration-none"
              >
                <i className="bi bi-arrow-left me-1"></i>
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

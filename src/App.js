import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import AddEmployee from "./admin/AddEmployee";
import ViewEmployee from "./admin/ViewEmployee";
import AdminDashboard from "./admin/AdminDashboard";
import EmployeeDashboard from "./employee/EmployeeDashboard";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ServicesPage from "./pages/ServicesPage";

import RegisterForm from "./auth/RegisterForm";

import PublicNavbar from "./components/PublicNavbar";
import AdminNavbar from "./admin/AdminNavbar";
import EmployeeNavbar from "./employee/EmployeeNavbar";
import EmployeeProfile from "./employee/EmployeeProfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppContent />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/aboutus" element={<AboutUsPage />} />

          <Route path="/contactus" element={<ContactUsPage />} />

          <Route path="/services" element={<ServicesPage />} />

          <Route path="/registerform" element={<RegisterForm />} />

          <Route path="/admindashboard" element={<AdminDashboard />} />

          <Route path="/addemployee" element={<AddEmployee />} />

          <Route path="/viewemployee" element={<ViewEmployee />} />

          <Route path="/employeedashboard" element={<EmployeeDashboard />} />

          <Route path="/employeeprofile" element={<EmployeeProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

function AppContent() {
  let user = JSON.parse(localStorage.getItem("userinfo")) || null;

  let location = useLocation();

  let publicPages = [
    "/",
    "/aboutus",
    "/contactus",
    "/services",
    "/registerform",
  ];

  return (
    <div>
      {user && user.role === "ADMIN" ? (
        <AdminNavbar />
      ) : user && user.role === "EMPLOYEE" ? (
        <EmployeeNavbar />
      ) : null}

      {!user && publicPages.includes(location.pathname) && <PublicNavbar />}
    </div>
  );
}

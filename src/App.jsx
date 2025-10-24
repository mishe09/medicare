import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Pages/Login/Login";




// client-imports
import Home from "./Pages/Client-pages/Home/Home";

import Appointmentbooking from "./Pages/Client-pages/Appointments/Booking/Appointmentbooking";
import Appointmentediting from "./Pages/Client-pages/Appointments/Editing/Appointmentediting";

import Pharmacylisting from "./Pages/Client-pages/Pharmacy/Listing/Listing";
import Pharmacydetailing from "./Pages/Client-pages/Pharmacy/Detailing/Detailing";
import Pharmacycart from "./Pages/Client-pages/Pharmacy/Cart/Cart";
import Pharmacycheckingout from "./Pages/Client-pages/Pharmacy/Checkingout/Checkingout";

import Chat from "./Pages/Client-pages/Chat/Chat";


// admin-imports

import Dashboard from "./Pages/Admin-pages/Dashboard/Dashboard";

import PaitentList from "./Pages/Admin-pages/paitent/List/PaitentList";
import PatientDetails from "./Pages/Admin-pages/paitent/Details/PaitentDetail";
import PatientAdd from "./Pages/Admin-pages/paitent/Add/PaitentAdd";
import PatientEdit from "./Pages/Admin-pages/paitent/Edit/PaitentEdit";

import DoctorList from "./Pages/Admin-pages/Doctor/List/Doctorlist";
import DoctorDetails from "./Pages/Admin-pages/Doctor/Details/Doctordetail";
import DoctorAdd from "./Pages/Admin-pages/Doctor/Add/Doctoradd";
import DoctorEdit from "./Pages/Admin-pages/Doctor/Edit/Doctoredit";

import AppointmentList from "./Pages/Admin-pages/Appointment/List/Appointmentlist";
import AppointmentSchedule from "./Pages/Admin-pages/Appointment/Schedule/Appointmentschedule";
import AppointmentAdd from "./Pages/Admin-pages/Appointment/Book/Appointmentbook";
import AppointmentEdit from "./Pages/Admin-pages/Appointment/Edit/Appointmentedit";

import Wallet from "./Pages/Admin-pages/Wallet/Paitentwallet";
import Settings from "./Pages/Admin-pages/Setting/Paitentsetting";

import ClientLayout from "./Layout/ClientLayout";
import AdminLayout from "./Layout/AdminLayout";

import "./App.css";

export default function App() {
  const [expanded, setExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <Routes>
        {/* 🔑 Login */}
        <Route path="/" element={<Login />} />

        {/* 👤 Client pages */}
        <Route
          path="/Home"
          element={
            <ClientLayout
              expanded={expanded}
              setExpanded={setExpanded}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            >


              <div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                  marginBottom: "-50%",
                }}
              >
                <Home darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </ClientLayout>
          }
        />

         <Route
          path="/Appointmentbooking"
          element={
            <ClientLayout
              expanded={expanded}
              setExpanded={setExpanded}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            >


              <div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                }}
              >
                <Appointmentbooking darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </ClientLayout>
          }
        />
         <Route
          path="/Appointmentediting"
          element={
            <ClientLayout
              expanded={expanded}
              setExpanded={setExpanded}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            >


              <div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                }}
              >
                <Appointmentediting darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </ClientLayout>
          }
        />

         <Route
          path="/Pharmacylisting"
          element={
            <ClientLayout
              expanded={expanded}
              setExpanded={setExpanded}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            >


              <div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                }}
              >
                <Pharmacylisting darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </ClientLayout>
          }
        />
         <Route
          path="/Pharmacydetailing"
          element={
            <ClientLayout
              expanded={expanded}
              setExpanded={setExpanded}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            >


              <div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                }}
              >
                <Pharmacydetailing darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </ClientLayout>
          }
        />

         <Route
          path="/Pharmacycart"
          element={
            <ClientLayout
              expanded={expanded}
              setExpanded={setExpanded}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            >


              <div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                }}
              >
                <Pharmacycart darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </ClientLayout>
          }
        />

         <Route
          path="/Pharmacycheckingout"
          element={
            <ClientLayout
              expanded={expanded}
              setExpanded={setExpanded}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            >


              <div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                }}
              >
                <Pharmacycheckingout darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </ClientLayout>
          }
        />

         <Route
          path="/Chat"
          element={
            <ClientLayout
              expanded={expanded}
              setExpanded={setExpanded}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            >


              <div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                }}
              >
                <Chat darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </ClientLayout>
          }
        />

        {/* 🧩 Admin Pages */}
        <Route
          path="/dashboard"
          element={
            <AdminLayout
              expanded={expanded}
              setExpanded={setExpanded}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            >

        

<div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                }}
              >
              <Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </AdminLayout>
          }
        />

        {/* 🧾 Patients */}
        <Route
          path="/admin/patients/list"
          element={
            <AdminLayout {...{ expanded, setExpanded, darkMode, setDarkMode }}>
              <PaitentList darkMode={darkMode} setDarkMode={setDarkMode} />
            </AdminLayout>
          }
        />


        <Route
          path="/admin/patients/details"
          element={
            <AdminLayout {...{ expanded, setExpanded, darkMode, setDarkMode }}>

              <div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                }}
              >
              <PatientDetails darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </AdminLayout>
          }
        />
        <Route
          path="/admin/patients/add"
          element={
            <AdminLayout {...{ expanded, setExpanded, darkMode, setDarkMode }}>
              <PatientAdd darkMode={darkMode} setDarkMode={setDarkMode} />
            </AdminLayout>
          }
        />
        <Route
          path="/admin/patients/edit"
          element={
            <AdminLayout {...{ expanded, setExpanded, darkMode, setDarkMode }}>

              <div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                }}
              >
              <PatientEdit darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </AdminLayout>
          }
        />

        {/* 👨‍⚕️ Doctors */}
        <Route
          path="/admin/doctors/list"
          element={
            <AdminLayout {...{ expanded, setExpanded, darkMode, setDarkMode }}>

              <div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                }}
              >
              <DoctorList darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </AdminLayout>
          }
        />
        <Route
          path="/admin/doctors/details"
          element={
            <AdminLayout {...{ expanded, setExpanded, darkMode, setDarkMode }}>

              <div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                }}
              >
              <DoctorDetails darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </AdminLayout>
          }
        />
        <Route
          path="/admin/doctors/add"
          element={
            <AdminLayout {...{ expanded, setExpanded, darkMode, setDarkMode }}>

              <div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                }}
              >
              <DoctorAdd darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </AdminLayout>
          }
        />
        <Route
          path="/admin/doctors/edit"
          element={
            <AdminLayout {...{ expanded, setExpanded, darkMode, setDarkMode }}>

               <div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                }}
              >
              <DoctorEdit  darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </AdminLayout>
          }
        />

        {/* 📅 Appointments */}
        <Route
          path="/admin/appointments/list"
          element={
            <AdminLayout {...{ expanded, setExpanded, darkMode, setDarkMode }}>

              <div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                }}
              >
              <AppointmentList darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </AdminLayout>
          }
        />
        <Route
          path="/admin/appointments/schedule"
          element={
            <AdminLayout {...{ expanded, setExpanded, darkMode, setDarkMode }}>

              <div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                }}
              >
              <AppointmentSchedule darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </AdminLayout>
          }
        />
        <Route
          path="/admin/appointments/add"
          element={
            <AdminLayout {...{ expanded, setExpanded, darkMode, setDarkMode }}>

              <div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                }}
              >
              <AppointmentAdd darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </AdminLayout>
          }
        />
        <Route
          path="/admin/appointments/edit"
          element={
            <AdminLayout {...{ expanded, setExpanded, darkMode, setDarkMode }}>

              <div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                }}
              >
              <AppointmentEdit darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </AdminLayout>
          }
        />

        {/* 💰 Wallet */}
        <Route
          path="/admin/wallet"
          element={
            <AdminLayout {...{ expanded, setExpanded, darkMode, setDarkMode }}>

              <div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                }}
              >
              <Wallet  darkMode={darkMode} setDarkMode={setDarkMode} />
              </div>
            </AdminLayout>
          }
        />

        {/* ⚙️ Settings */}
        <Route
          path="/admin/settings"
          element={
            <AdminLayout {...{ expanded, setExpanded, darkMode, setDarkMode }}>

              <div
                style={{
                  transform: "scale(0.75)",
                  transformOrigin: "top center",
                  width: "133.33%",
                  marginLeft: "-16.6%",
                  marginRight: "-15.6%",
                }}
              >
              <Settings />
              </div>
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
}

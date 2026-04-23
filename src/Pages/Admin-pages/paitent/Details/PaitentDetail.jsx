import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoreVertical, ChevronRight } from "lucide-react";
import API from "../../../../API/api";

export default function PatientDetails({ darkMode }) {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get(`/patients/${id}`)
      .then((res) => {
        setPatient(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching patient:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading patient details...</p>;

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-lg font-semibold">Patient Detail</h1>

        <div className="flex items-center gap-2 text-sm">
          <p className="flex items-center text-[rgb(213,151,71)] gap-1">
            TrendX <ChevronRight size={16} />
          </p>
          <p className="flex items-center gap-1">
            Admin <ChevronRight size={16} />
          </p>
          <p>Patient Detail</p>
        </div>
      </div>

      {/* 👩🏽‍⚕️ Profile + Report Overview */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Card */}
        <div
          className={`w-full md:w-full rounded-2xl shadow p-4 ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
          }`}
        >
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm font-semibold">Details</p>
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className={`p-1 rounded transition ${
                  darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                }`}
              >
                <MoreVertical
                  size={14}
                  className={`cursor-pointer ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                />
              </button>
            </div>

            {/* Dropdown Menu */}
            {openMenu && (
              <div
                className={`absolute right-0 top-8 w-32 rounded-lg shadow-lg border z-50 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-gray-200"
                    : "bg-white border-gray-100 text-gray-700"
                }`}
              >
                <ul className="text-sm">
                  {["CV", "Print", "PDF", "Excel"].map((item) => (
                    <li
                      key={item}
                      className={`px-4 py-2 cursor-pointer ${
                        darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Patient Info Section */}
          <div className="flex flex-col items-center text-center">
            <img
              src={patient?.image || "https://i.pravatar.cc/150?img=5"}
              alt={patient?.firstname || "Patient"}
              className="w-34 h-34 rounded-2xl border-2 mb-3"
            />

            <div className="mt-4 w-full">
              {[
                ["Name:", `${patient?.firstname || ""} ${patient?.lastname || ""}`],
                ["Date of birth:", patient?.date_of_birth || "—"],
                ["Gender:", patient?.gender || "—"],
                ["Address:", patient?.address || "—"],
                ["Phone:", patient?.phone || "—"],
                ["Email:", patient?.email || "—"],
              ].map(([label, value], i) => (
                <div key={i} className="flex justify-between text-sm py-1">
                  <span className="font-medium">{label}</span>
                  <span
                    className={`truncate ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div>
          {/* 🧾 Bio Section */}
          <div
            className={`rounded-2xl shadow p-4 mb-6 ${
              darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
            }`}
          >
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p
              className={`text-sm leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {patient?.firstname || "This patient"} is a patient under Dr. Christian. Her recent lab
              reports show normal blood pressure and improved glucose levels
              compared to last quarter. She has responded well to prescribed
              medication and lifestyle adjustments. Recommended for routine
              checkups every 3 months.
            </p>
          </div>

          {/* Health Metrics */}
          <div
            className={`w-full rounded-2xl shadow p-4 ${
              darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
            }`}
          >
            <h3 className="text-lg font-semibold mb-4">General Report</h3>
            <div className="space-y-3">
              {[
                { label: "Heart Rate", number: 34, width: "80%", color: "bg-red-500" },
                { label: "Blood Pressure", number: 93, width: "95%", color: "bg-orange-500" },
                { label: "Sugar", number: 55, width: "70%", color: "bg-blue-500" },
                { label: "Hemoglobin", number: 78, width: "90%", color: "bg-amber-500" },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm font-medium mb-1">
                    <div className="flex justify-between items-center w-full">
                      <span>{item.label}</span>
                      <span className="ml-auto font-sm">{item.number}</span>
                    </div>
                  </div>
                  <div
                    className={`w-full ${darkMode ? "bg-gray-700" : "bg-gray-200"} h-2 rounded-full`}
                  >
                    <div
                      className={`${item.color} h-2 rounded-full`}
                      style={{ width: item.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 📋 Tables Section (Static for now) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Doctor Visit Table */}
        <div
          className={`rounded-2xl shadow p-4 overflow-x-auto ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
          }`}
        >
          <h3 className="text-lg font-semibold mb-4">Doctor Visit</h3>
          <table
            className={`w-full border text-sm text-left ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <thead className={`${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
              <tr
                className={`border-b ${darkMode ? "border-gray-600" : "border-gray-300"}`}
              >
                <th className="p-2 border-r border-gray-300">Doctor</th>
                <th className="p-2 border-r border-gray-300">Date</th>
                <th className="p-2 border-r border-gray-300">Department</th>
                <th className="p-2">Report</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Dr. Christian", dept: "Dentist", date: "11/10/2024" },
                { name: "Dr. Leonard", dept: "Urologist", date: "12/12/2023" },
              ].map((doc, i) => (
                <tr
                  key={i}
                  className={`border-t transition ${
                    darkMode ? "border-gray-700 hover:bg-gray-700" : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <td className="flex items-center gap-2 px-3 py-2 border-r border-gray-200">
                    <img
                      src={`https://i.pravatar.cc/40?img=${i + 10}`}
                      alt={doc.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{doc.name}</span>
                  </td>
                  <td className="p-2 border-r border-gray-200">{doc.date}</td>
                  <td className="p-2 border-r border-gray-200">{doc.dept}</td>
                  <td className="p-2 text-center">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1 rounded">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Reports Table */}
        <div
          className={`rounded-2xl shadow p-4 overflow-x-auto ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
          }`}
        >
          <h3 className="text-lg font-semibold mb-4">Reports</h3>
          <table
            className={`w-full border text-sm text-left ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <thead className={`${darkMode ? "bg-gray-700" : "bg-gray-100"}`}>
              <tr
                className={`border-b ${darkMode ? "border-gray-600" : "border-gray-300"}`}
              >
                <th className="p-2 border-r border-gray-300">File</th>
                <th className="p-2 border-r border-gray-300">Report Link</th>
                <th className="p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                { link: "Report 1 clinical documentation", date: "12 Dec 2023" },
                { link: "Report 2 random files documentation", date: "13 Sep 2023" },
              ].map((report, i) => (
                <tr
                  key={i}
                  className={`border-t transition ${
                    darkMode ? "border-gray-700 hover:bg-gray-700" : "border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <td className="p-2 border-r border-gray-200">
                    <div className="flex items-center justify-center bg-orange-100 text-orange-600 rounded p-1 w-8 h-8">
                      <i className="fa fa-file-text"></i>
                    </div>
                  </td>
                  <td className="p-2 border-r border-gray-200">{report.link}</td>
                  <td className="p-2">{report.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

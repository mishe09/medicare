import React from "react";
import { useState } from "react";
import {
  MoreVertical,
  ChevronRight,
} from "lucide-react";

export default function PatientDetails() {
  const [openMenu, setOpenMenu] = useState(false);
  return (

    <div className="min-h-screen bg-gray-50">

      <div className="flex justify-between items-center mb-5">
        <h1 className="text-lg font-semibold">Paitent Detail</h1>

        <div className="flex items-center gap-2 text-sm">
          <p className="flex items-center text-[rgb(213,151,71)] gap-1">
            TrendX <ChevronRight size={16} />
          </p>
          <p className="flex items-center gap-1">
            Admin <ChevronRight size={16} />
          </p>
          <p>Paitent Detail</p>
        </div>
      </div>

      {/* 👩🏽‍⚕️ Profile + Report Overview */}
      <div className="flex flex-col md:flex-row gap-6">


        {/* Profile Card */}
        <div className="w-full md:w-full bg-white rounded-2xl shadow p-4">
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm font-semibold">Details</p>
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="p-1 rounded hover:bg-gray-100 transition"
              >
                <MoreVertical size={14} className="cursor-pointer text-gray-600" />
              </button>
            </div>

            {/* Dropdown Menu */}
            {openMenu && (
              <div className="absolute right-0 top-8 w-32 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
                <ul className="text-sm text-gray-700">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">CV</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Print</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">PDF</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Excel</li>
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://i.pravatar.cc/150?img=5"
              alt="Patient"
              className="w-34 h-34 rounded-2xl border-2 mb-3"
            />

            <div className="mt-4 w-full">

              <div className="flex justify-between text-sm py-2">
                <span className="font-medium">Name:</span>
                <span>Hadassah Joseph</span>
              </div>

              <div className="flex justify-between text-sm py-1">
                <span className="font-medium">Date of birth:</span>
                <span>12-12-1997</span>
              </div>
              <div className="flex justify-between text-sm py-1">
                <span className="font-medium">Gender:</span>
                <span>Female</span>
              </div>
              <div className="flex justify-between text-sm py-1">
                <span className="font-medium">Address:</span>
                <span>35 Afin Street, Ikeja...</span>
              </div>
              <div className="flex justify-between text-sm py-1">
                <span className="font-medium">Phone:</span>
                <span>+234 7014145106</span>
              </div>
              <div className="flex justify-between text-sm py-1">
                <span className="font-medium">Email:</span>
                <span className="truncate text-gray-600">
                  hadassah@example.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>

          {/* 🧾 Bio Section */}
          <div className="bg-white rounded-2xl shadow p-4 mb-6">
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Hadassah Joseph is a patient under Dr. Christian. Her recent lab reports
              show normal blood pressure and improved glucose levels compared to last
              quarter. She has responded well to prescribed medication and lifestyle
              adjustments. Recommended for routine checkups every 3 months.
            </p>
          </div>

          {/* Health Metrics */}
          <div className="w-full md:w-full bg-white rounded-2xl shadow p-4">
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
                      <span className="text-gray-700">{item.label}</span>
                      <span className="ml-auto font-sm text-gray-900">{item.number}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 h-2 rounded-full">
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

      {/* 📋 Tables Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Doctor Visit Table */}
        <div className="bg-white rounded-2xl shadow p-4 overflow-x-auto">
          <h3 className="text-lg font-semibold mb-4">Doctor Visit</h3>
          <table className="w-full border border-gray-200 text-sm text-left">
            <thead className="bg-gray-100">
              <tr className="border-b border-gray-300">
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
                { name: "Dr. Sebastian", dept: "Surgeon", date: "13/09/2023" },
                { name: "Dr. Thomas", dept: "Dentist", date: "14/05/2023" },
              ].map((doc, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-3 border-r border-gray-200">
                    <img
                      src={`https://i.pravatar.cc/40?img=${i + 10}`}
                      alt={doc.name}
                      className="w-8 h-8 rounded-full flex-shrink-0"
                    />
                    <span className="truncate text-sm sm:text-base">{doc.name}</span>
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
        <div className="bg-white rounded-2xl shadow p-4 overflow-x-auto">
          <h3 className="text-lg font-semibold mb-4">Reports</h3>
          <table className="w-full border border-gray-200 text-sm text-left">
            <thead className="bg-gray-100">
              <tr className="border-b border-gray-300">
                <th className="p-2 border-r border-gray-300">File</th>
                <th className="p-2 border-r border-gray-300">Report Link</th>
                <th className="p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  link: "Report 1 clinical documentation",
                  date: "12 Dec 2023",
                },
                {
                  link: "Report 2 random files documentation",
                  date: "13 Sep 2023",
                },
                {
                  link: "Report 3 glucose level complete report",
                  date: "14 May 2023",
                },
                {
                  link: "Report 4 clinical documentation",
                  date: "11 Oct 2024",
                },
              ].map((report, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-200 hover:bg-gray-50 transition"
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
    </div >
  );
}

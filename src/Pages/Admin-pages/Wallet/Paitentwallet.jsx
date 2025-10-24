// import React from "react";
// import { ArrowUp, ArrowDown } from "lucide-react";

// const Paitentwallet = () => {
//   const users = [
//     { name: "Dr. James Stone", type: "Consultation", date: "2025-10-01", status: "Completed", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
//     { name: "Dr. Amaka Benson", type: "Follow-up", date: "2025-09-28", status: "Pending", avatar: "https://randomuser.me/api/portraits/women/45.jpg" },
//     { name: "Dr. Emmanuel John", type: "Check-up", date: "2025-09-27", status: "Cancelled", avatar: "https://randomuser.me/api/portraits/men/21.jpg" },
//     { name: "Dr. Sarah Jones", type: "Consultation", date: "2025-09-25", status: "Completed", avatar: "https://randomuser.me/api/portraits/women/31.jpg" },
//     { name: "Dr. David Smith", type: "Therapy", date: "2025-09-22", status: "Pending", avatar: "https://randomuser.me/api/portraits/men/42.jpg" },
//     { name: "Dr. Laura Green", type: "Surgery", date: "2025-09-20", status: "Cancelled", avatar: "https://randomuser.me/api/portraits/women/26.jpg" },
//     { name: "Dr. Michael Lee", type: "Consultation", date: "2025-09-18", status: "Completed", avatar: "https://randomuser.me/api/portraits/men/15.jpg" },
//     { name: "Dr. Emily Brown", type: "Check-up", date: "2025-09-16", status: "Completed", avatar: "https://randomuser.me/api/portraits/women/48.jpg" },
//     { name: "Dr. Kelvin Grant", type: "Therapy", date: "2025-09-15", status: "Pending", avatar: "https://randomuser.me/api/portraits/men/53.jpg" },
//     { name: "Dr. Naomi West", type: "Follow-up", date: "2025-09-14", status: "Completed", avatar: "https://randomuser.me/api/portraits/women/40.jpg" },
//   ];

//   const statusColors = {
//     Completed: "bg-green-100 text-green-700",
//     Pending: "bg-yellow-100 text-yellow-700",
//     Cancelled: "bg-red-100 text-red-700",
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row gap-6 p-6">
//       {/* 📋 TABLE SECTION */}
//       <div className="bg-white rounded-2xl shadow-md p-6 w-full md:w-3/4 overflow-x-auto">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">Appointments</h2>

//         <table className="w-full border border-gray-200 border-collapse rounded-xl overflow-hidden">
//           <thead className="bg-[rgba(213,151,71,0.2)] text-gray-800">
//             <tr>
//               <th className="text-left py-3 px-4 border-r border-gray-200">Name</th>
//               <th className="text-left py-3 px-4 border-r border-gray-200">Type</th>
//               <th className="text-left py-3 px-4 border-r border-gray-200">Date</th>
//               <th className="text-left py-3 px-4">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, idx) => (
//               <tr key={idx} className="border-t border-gray-200 hover:bg-gray-50">
//                 <td className="py-3 px-4 flex items-center gap-3 border-r border-gray-200">
//                   <img
//                     src={user.avatar}
//                     alt={user.name}
//                     className="w-9 h-9 rounded-full object-cover border border-gray-300"
//                   />
//                   <span className="font-medium text-gray-800">{user.name}</span>
//                 </td>
//                 <td className="py-3 px-4 border-r border-gray-200 text-gray-600">
//                   {user.type}
//                 </td>
//                 <td className="py-3 px-4 border-r border-gray-200 text-gray-600">
//                   {user.date}
//                 </td>
//                 <td className="py-3 px-4">
//                   <span
//                     className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[user.status]}`}
//                   >
//                     {user.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* 💳 RIGHT SIDEBAR CARDS */}
//       <div className="flex flex-col gap-5 w-full md:w-1/4">
//         {/* 🟥 Current Balance Card */}
//         <div className="bg-red-500 text-white rounded-2xl shadow-md p-5 relative overflow-hidden">
//           <div className="absolute inset-0 bg-red-400 opacity-40 rounded-2xl"></div>
//           <div className="relative z-10">
//             <p className="text-sm opacity-90">Current Balance</p>
//             <h2 className="text-2xl font-bold mt-1">$78,000</h2>
//             <p className="text-xs mt-3 opacity-90">Card No: 9874 2345 9012 4567</p>
//           </div>
//         </div>

//         {/* 💵 Earning Card */}
//         <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 flex flex-col justify-between">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-sm text-gray-500">Earning</p>
//               <h2 className="text-xl font-semibold text-gray-800">$54,912</h2>
//             </div>
//             <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
//               <ArrowUp size={18} />
//             </div>
//           </div>
//           <p className="text-blue-600 font-medium text-sm mt-2">+23%</p>
//         </div>

//         {/* 📉 Selling Card */}
//         <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 flex flex-col justify-between">
//           <div className="flex justify-between items-center">
//             <div>
//               <p className="text-sm text-gray-500">Selling</p>
//               <h2 className="text-xl font-semibold text-gray-800">$12,312</h2>
//             </div>
//             <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600">
//               <ArrowDown size={18} />
//             </div>
//           </div>
//           <p className="text-red-600 font-medium text-sm mt-2">-12%</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Paitentwallet;


import React, { useState } from "react";
import { ArrowUp, ArrowDown, Moon, Sun } from "lucide-react";

const Paitentwallet = () => {
  const [darkMode, setDarkMode] = useState(false);

  const users = [
    { name: "Dr. James Stone", type: "Consultation", date: "2025-10-01", status: "Completed", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Dr. Amaka Benson", type: "Follow-up", date: "2025-09-28", status: "Pending", avatar: "https://randomuser.me/api/portraits/women/45.jpg" },
    { name: "Dr. Emmanuel John", type: "Check-up", date: "2025-09-27", status: "Cancelled", avatar: "https://randomuser.me/api/portraits/men/21.jpg" },
    { name: "Dr. Sarah Jones", type: "Consultation", date: "2025-09-25", status: "Completed", avatar: "https://randomuser.me/api/portraits/women/31.jpg" },
    { name: "Dr. David Smith", type: "Therapy", date: "2025-09-22", status: "Pending", avatar: "https://randomuser.me/api/portraits/men/42.jpg" },
    { name: "Dr. Laura Green", type: "Surgery", date: "2025-09-20", status: "Cancelled", avatar: "https://randomuser.me/api/portraits/women/26.jpg" },
    { name: "Dr. Michael Lee", type: "Consultation", date: "2025-09-18", status: "Completed", avatar: "https://randomuser.me/api/portraits/men/15.jpg" },
    { name: "Dr. Emily Brown", type: "Check-up", date: "2025-09-16", status: "Completed", avatar: "https://randomuser.me/api/portraits/women/48.jpg" },
    { name: "Dr. Kelvin Grant", type: "Therapy", date: "2025-09-15", status: "Pending", avatar: "https://randomuser.me/api/portraits/men/53.jpg" },
    { name: "Dr. Naomi West", type: "Follow-up", date: "2025-09-14", status: "Completed", avatar: "https://randomuser.me/api/portraits/women/40.jpg" },
  ];

  const statusColors = {
    Completed: darkMode ? "bg-green-900 text-green-300" : "bg-green-100 text-green-700",
    Pending: darkMode ? "bg-yellow-900 text-yellow-300" : "bg-yellow-100 text-yellow-700",
    Cancelled: darkMode ? "bg-red-900 text-red-300" : "bg-red-100 text-red-700",
  };

  return (
    <div
      className={`min-h-screen flex flex-col md:flex-row gap-6 p-6 transition-colors duration-300`}
    >
      {/* 🔘 Toggle Button */}
      <div className="absolute top-4 right-6">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full border transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-800"
        >
          {darkMode ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </div>

      {/* 📋 TABLE SECTION */}
      <div
        className={`rounded-2xl shadow-md p-6 w-full md:w-3/4 overflow-x-auto transition-colors duration-300 ${
          darkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-4">Appointments</h2>

        <table
          className={`w-full border-collapse rounded-xl overflow-hidden ${
            darkMode ? "border border-gray-700" : "border border-gray-200"
          }`}
        >
          <thead
            className={`${
              darkMode
                ? "bg-[rgba(213,151,71,0.15)] text-gray-200"
                : "bg-[rgba(213,151,71,0.2)] text-gray-800"
            }`}
          >
            <tr>
              <th className="text-left py-3 px-4 border-r border-gray-500">Name</th>
              <th className="text-left py-3 px-4 border-r border-gray-500">Type</th>
              <th className="text-left py-3 px-4 border-r border-gray-500">Date</th>
              <th className="text-left py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr
                key={idx}
                className={`border-t transition-colors duration-300 ${
                  darkMode
                    ? "border-gray-700 hover:bg-gray-700"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <td className="py-3 px-4 flex items-center gap-3 border-r border-gray-600">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-9 h-9 rounded-full object-cover border border-gray-500"
                  />
                  <span>{user.name}</span>
                </td>
                <td className="py-3 px-4 border-r border-gray-600">{user.type}</td>
                <td className="py-3 px-4 border-r border-gray-600">{user.date}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[user.status]}`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 💳 RIGHT SIDEBAR CARDS */}
      <div className="flex flex-col gap-5 w-full md:w-1/4">
        {/* 🟥 Current Balance Card */}
        <div className="bg-red-500 text-white rounded-2xl shadow-md p-5 relative overflow-hidden">
          <div className="absolute inset-0 bg-red-400 opacity-40 rounded-2xl"></div>
          <div className="relative z-10">
            <p className="text-sm opacity-90">Current Balance</p>
            <h2 className="text-2xl font-bold mt-1">$78,000</h2>
            <p className="text-xs mt-3 opacity-90">Card No: 9874 2345 9012 4567</p>
          </div>
        </div>

        {/* 💵 Earning Card */}
        <div
          className={`rounded-2xl shadow-sm p-5 flex flex-col justify-between border transition-colors duration-300 ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-80">Earning</p>
              <h2 className="text-xl font-semibold">$54,912</h2>
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600">
              <ArrowUp size={18} />
            </div>
          </div>
          <p className="text-blue-500 font-medium text-sm mt-2">+23%</p>
        </div>

        {/* 📉 Selling Card */}
        <div
          className={`rounded-2xl shadow-sm p-5 flex flex-col justify-between border transition-colors duration-300 ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-80">Selling</p>
              <h2 className="text-xl font-semibold">$12,312</h2>
            </div>
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-600">
              <ArrowDown size={18} />
            </div>
          </div>
          <p className="text-red-500 font-medium text-sm mt-2">-12%</p>
        </div>
      </div>
    </div>
  );
};

export default Paitentwallet;

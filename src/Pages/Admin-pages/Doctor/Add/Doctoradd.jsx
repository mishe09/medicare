
// // import { User, Phone, Calendar, Droplet, Activity, MapPin, Hash, Type, ChevronRight } from "lucide-react";

// // export default function Doctoradd() {
// //   return (
// //     <div className="min-h-screen px-4 md:px-8 py-6">

// //       {/* 🔹 Top Header Section (Outside Form) */}
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-lg font-semibold">Doctor Add</h1>

// //         <div className="flex items-center gap-2 text-sm text-gray-600">
// //           <p className="flex items-center text-[rgb(213,151,71)] gap-1">
// //             TrendX <ChevronRight size={14} />
// //           </p>
// //           <p className="flex items-center gap-1">
// //             Admin <ChevronRight size={14} />
// //           </p>
// //           <p className="font-medium text-gray-700">Doctor Add</p>
// //         </div>
// //       </div>

// //       {/* 🔹 Form Container */}
// //       <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
// //         <h2 className="text-md font-semibold mb-4 text-gray-700">
// //           Basic Information
// //         </h2>

// //         <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //           <div>
// //             <label className="text-sm">First Name</label>
// //             <div className="flex items-center border rounded-lg px-3 py-2">
// //               <User size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 placeholder="First Name"
// //                 className="w-full outline-none text-sm"
// //               />
// //             </div>
// //           </div>

// //           <div>
// //             <label className="text-sm">Mobile Number</label>
// //             <div className="flex items-center border rounded-lg px-3 py-2">
// //               <Phone size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 placeholder="Mobile Number"
// //                 className="w-full outline-none text-sm"
// //               />
// //             </div>
// //           </div>

// //           <div>
// //             <label className="text-sm">Last Name</label>
// //             <div className="flex items-center border rounded-lg px-3 py-2">
// //               <User size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 placeholder="Last Name"
// //                 className="w-full outline-none text-sm"
// //               />
// //             </div>
// //           </div>

// //           <div>
// //             <label className="text-sm">Email Address</label>
// //             <div className="flex items-center border rounded-lg px-3 py-2">
// //               <Hash size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="email"
// //                 placeholder="Email"
// //                 className="w-full outline-none text-sm"
// //               />
// //             </div>
// //           </div>

// //           <div>
// //             <label className="text-sm">User Name</label>
// //             <div className="flex items-center border rounded-lg px-3 py-2">
// //               <User size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 placeholder="User Name"
// //                 className="w-full outline-none text-sm"
// //               />
// //             </div>
// //           </div>

// //           <div>
// //             <label className="text-sm">Gender</label>
// //             <div className="flex items-center gap-3 mt-1">
// //               <label className="flex items-center gap-1">
// //                 <input type="radio" name="gender" /> Male
// //               </label>
// //               <label className="flex items-center gap-1">
// //                 <input type="radio" name="gender" /> Female
// //               </label>
// //             </div>
// //           </div>

// //           <div>
// //             <label className="text-sm">Education</label>
// //             <div className="flex items-center border rounded-lg px-3 py-2">
// //               <MapPin size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 placeholder="Education"
// //                 className="w-full outline-none text-sm"
// //               />
// //             </div>
// //           </div>

// //           <div>
// //             <label className="text-sm">Designation</label>
// //             <div className="flex items-center border rounded-lg px-3 py-2">
// //               <Calendar size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 placeholder="Designation"
// //                 className="w-full outline-none text-sm text-gray-500"
// //               />
// //             </div>
// //           </div>

// //           <div>
// //             <label className="text-sm">Select Department</label>
// //             <div className="flex items-center border rounded-lg px-3 py-2">
// //               <Droplet size={16} className="text-gray-400 mr-2" />
// //               <select className="w-full outline-none text-sm text-gray-500">
// //                 <option>Department</option>
// //                 <option>A+</option>
// //                 <option>A-</option>
// //                 <option>B+</option>
// //                 <option>B-</option>
// //                 <option>AB+</option>
// //                 <option>AB-</option>
// //                 <option>O+</option>
// //                 <option>O-</option>
// //               </select>
// //             </div>
// //           </div>

// //           <div>
// //             <label className="text-sm">Date of Birth</label>
// //            <div className="flex items-center border rounded-lg px-3 py-2">
// //               <Droplet size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="Calendar"
// //                 className="w-full outline-none text-sm"
// //               />
// //             </div>
// //           </div>

// //           <div>
// //             <label className="text-sm">City</label>
// //              <div className="flex items-center border rounded-lg px-3 py-2">
// //               <Droplet size={16} className="text-gray-400 mr-2" />
// //                <input
// //                 type="text"
// //                  placeholder="City"
// //                  className="w-full outline-none text-sm"
// //                />
// //              </div>
// //           </div>

// //           <div>
// //             <label className="text-sm">Country</label>
// //             <div className="flex items-center border rounded-lg px-3 py-2">
// //               <Activity size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 placeholder="Country"
// //                 className="w-full outline-none text-sm"
// //               />
// //             </div>
// //           </div>

// //            <div>
// //             <label className="text-sm">State/Province</label>
// //              <div className="flex items-center border rounded-lg px-3 py-2">
// //               <Droplet size={16} className="text-gray-400 mr-2" />
// //                <input
// //                 type="text"
// //                  placeholder="State/Province"
// //                  className="w-full outline-none text-sm"
// //                />
// //              </div>
// //           </div>

// //           <div>
// //             <label className="text-sm">Postal Code</label>
// //             <div className="flex items-center border rounded-lg px-3 py-2">
// //               <Activity size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 placeholder="Postal Code"
// //                 className="w-full outline-none text-sm"
// //               />
// //             </div>
// //           </div>

// //           <div>
// //             <label className="text-sm">Address</label>
// //              <div className="flex items-center border rounded-lg px-3 py-2">
// //               <Droplet size={16} className="text-gray-400 mr-2" />
// //                <input
// //                 type="text"
// //                  placeholder="Address"
// //                  className="w-full outline-none text-sm"
// //                />
// //              </div>
// //           </div>

// //           <div>
// //             <label className="text-sm">Start Biography</label>
// //             <div className="flex items-center border rounded-lg px-3 py-2">
// //               <Activity size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 placeholder="Start Biography"
// //                 className="w-full outline-none text-sm"
// //               />
// //             </div>
// //           </div>
// //         </form>

// //         <div className="flex justify-end mt-6 gap-3">
// //           <button
// //             type="submit"
// //             className="bg-[rgb(213,151,71)] text-white px-5 py-2 rounded-md hover:bg-[rgb(190,130,60)]"
// //           >
// //             Submit
// //           </button>
// //           <button className="border border-gray-300 px-5 py-2 rounded-md">
// //             Cancel
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import React from "react";
// import {
//   User,
//   Phone,
//   Calendar,
//   MapPin,
//   Mail,
//   Building,
//   GraduationCap,
//   Flag,
//   Home,
//   FileText,
//   ChevronRight,
// } from "lucide-react";

// export default function DoctorAdd() {
//   return (
//     <div className="min-h-screen px-4 md:px-8 py-6 bg-gray-50">
//       {/* 🔹 Top Header Section (Outside Form) */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-lg font-semibold">Doctor Add</h1>

//         <div className="flex items-center gap-2 text-sm text-gray-600">
//           <p className="flex items-center text-[rgb(213,151,71)] gap-1">
//             TrendX <ChevronRight size={14} />
//           </p>
//           <p className="flex items-center gap-1">
//             Admin <ChevronRight size={14} />
//           </p>
//           <p className="font-medium text-gray-700">Doctor Add</p>
//         </div>
//       </div>

//       {/* 🔹 Form Container */}
//       <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
//         <h2 className="text-md font-semibold mb-4 text-gray-700">
//           Basic Information
//         </h2>

//         <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {/* First Name */}
//           <div>
//             <label className="text-sm">First Name</label>
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <User size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="w-full outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* Last Name */}
//           <div>
//             <label className="text-sm">Last Name</label>
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <User size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="w-full outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* Mobile Number */}
//           <div>
//             <label className="text-sm">Mobile Number</label>
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <Phone size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="tel"
//                 placeholder="Mobile Number"
//                 className="w-full outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* Email */}
//           <div>
//             <label className="text-sm">Email Address</label>
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <Mail size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* Username */}
//           <div>
//             <label className="text-sm">Username</label>
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <User size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="Username"
//                 className="w-full outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* Gender */}
//           <div>
//             <label className="text-sm">Gender</label>
//             <div className="flex items-center gap-3 mt-1">
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="gender" /> Male
//               </label>
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="gender" /> Female
//               </label>
//             </div>
//           </div>

//           {/* Education */}
//           <div>
//             <label className="text-sm">Education</label>
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <GraduationCap size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="Education (e.g. MBBS, MD)"
//                 className="w-full outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* Designation */}
//           <div>
//             <label className="text-sm">Designation</label>
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <Building size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="Designation"
//                 className="w-full outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* Department */}
//           <div>
//             <label className="text-sm">Select Department</label>
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <Building size={16} className="text-gray-400 mr-2" />
//               <select className="w-full outline-none text-sm text-gray-500">
//                 <option>Select Department</option>
//                 <option>Cardiology</option>
//                 <option>Pediatrics</option>
//                 <option>Dermatology</option>
//                 <option>Neurology</option>
//                 <option>General Medicine</option>
//               </select>
//             </div>
//           </div>

//           {/* Date of Birth */}
//           <div>
//             <label className="text-sm">Date of Birth</label>
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <Calendar size={16} className="text-gray-400 mr-2" />
//               <input type="date" className="w-full outline-none text-sm" />
//             </div>
//           </div>

//           {/* City */}
//           <div>
//             <label className="text-sm">City</label>
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <MapPin size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="City"
//                 className="w-full outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* Country */}
//           <div>
//             <label className="text-sm">Country</label>
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <Flag size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="Country"
//                 className="w-full outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* State / Province */}
//           <div>
//             <label className="text-sm">State / Province</label>
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <MapPin size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="State or Province"
//                 className="w-full outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* Postal Code */}
//           <div>
//             <label className="text-sm">Postal Code</label>
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <MapPin size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="Postal Code"
//                 className="w-full outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* Address */}
//           <div>
//             <label className="text-sm">Address</label>
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <Home size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="Address"
//                 className="w-full outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* Biography */}
//           <div className="sm:col-span-2">
//             <label className="text-sm">Short Biography</label>
//             <div className="flex items-start border rounded-lg px-3 py-2">
//               <FileText size={16} className="text-gray-400 mr-2 mt-1" />
//               <textarea
//                 placeholder="Write a short biography..."
//                 rows="3"
//                 className="w-full outline-none text-sm resize-none"
//               ></textarea>
//             </div>
//           </div>
//         </form>

//         {/* Buttons */}
//         <div className="flex justify-end mt-6 gap-3">
//           <button
//             type="submit"
//             className="bg-[rgb(213,151,71)] text-white px-5 py-2 rounded-md hover:bg-[rgb(190,130,60)]"
//           >
//             Submit
//           </button>
//           <button className="border border-gray-300 px-5 py-2 rounded-md">
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import { 
  User, 
  Phone, 
  Calendar, 
  Droplet, 
  Activity,
  FileText, 
  MapPin, 
  Flag,
  Mail, 
  ChevronRight 
} from "lucide-react";

export default function DoctorAdd() {
  return (
    <div className="min-h-screen px-4 md:px-8 py-6 bg-gray-50">

      {/* 🔹 Top Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold">Doctor Add</h1>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <p className="flex items-center text-[rgb(213,151,71)] gap-1">
            TrendX <ChevronRight size={14} />
          </p>
          <p className="flex items-center gap-1">
            Admin <ChevronRight size={14} />
          </p>
          <p className="font-medium text-gray-700">Doctor Add</p>
        </div>
      </div>

      {/* 🔹 Form Container */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <h2 className="text-md font-semibold mb-4 text-gray-700">
          Basic Information
        </h2>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* First Name */}
          <div>
            <label className="text-sm">First Name</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <User size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="First Name"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm">Last Name</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <User size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="text-sm">Mobile Number</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Phone size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm">Email Address</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Mail size={16} className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Username */}
          <div>
            <label className="text-sm">User Name</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <User size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="User Name"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="text-sm">Gender</label>
            <div className="flex items-center gap-3 mt-1">
              <label className="flex items-center gap-1">
                <input type="radio" name="gender" /> Male
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="gender" /> Female
              </label>
            </div>
          </div>

          {/* Education */}
          <div>
            <label className="text-sm">Education</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <MapPin size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Education"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Designation */}
          <div>
            <label className="text-sm">Designation</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Calendar size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Designation"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Department */}
          <div>
            <label className="text-sm">Select Department</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Droplet size={16} className="text-gray-400 mr-2" />
              <select className="w-full outline-none text-sm text-gray-500">
                <option>Select Department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedic</option>
                <option>Dermatology</option>
                <option>Pediatrics</option>
              </select>
            </div>
          </div>

          {/* DOB */}
          <div>
            <label className="text-sm">Date of Birth</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Calendar size={16} className="text-gray-400 mr-2" />
              <input type="date" className="w-full outline-none text-sm" />
            </div>
          </div>

          {/* City */}
          <div>
            <label className="text-sm">City</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <MapPin size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="City"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Country */}
          <div>
            <label className="text-sm">Country</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Flag size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Country"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* State */}
          <div>
            <label className="text-sm">State/Province</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <MapPin size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="State/Province"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Postal Code */}
          <div>
            <label className="text-sm">Postal Code</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <MapPin  size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="text-sm">Address</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <MapPin size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Address"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Biography */}
          <div>
            <label className="text-sm">Short Biography</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FileText size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Short Biography"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>
        </form>

        {/* Buttons */}
        <div className="flex justify-end mt-6 gap-3">
          <button
            type="submit"
            className="bg-[rgb(213,151,71)] text-white px-5 py-2 rounded-md hover:bg-[rgb(190,130,60)]"
          >
            Submit
          </button>
          <button className="border border-gray-300 px-5 py-2 rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

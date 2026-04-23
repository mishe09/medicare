// // import { 
// //   User, 
// //   Phone, 
// //   Calendar, 
// //   Droplet, 
// //   MapPin, 
// //   FileText,
// //   Mail, 
// //   ChevronRight, 
// //   Flag,
// // } from "lucide-react";

// // export default function Doctoredit({ darkMode }) {
// //   return (
// //     <div
// //       className={`min-h-screen transition-colors duration-500 ${
// //         darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
// //       }`}
// //     >
// //       {/* 🔹 Top Header Section */}
// //       <div className="flex justify-between items-center mb-6">
// //         <h1 className="text-lg font-semibold">Doctor Edit</h1>

// //         <div
// //           className={`flex items-center gap-2 text-sm ${
// //             darkMode ? "text-gray-300" : "text-gray-600"
// //           }`}
// //         >
// //           <p className="flex items-center text-[rgb(213,151,71)] gap-1">
// //             TrendX <ChevronRight size={14} />
// //           </p>
// //           <p className="flex items-center gap-1">
// //             Admin <ChevronRight size={14} />
// //           </p>
// //           <p className={`font-medium ${darkMode ? "text-gray-100" : "text-gray-700"}`}>
// //             Doctor Edit
// //           </p>
// //         </div>
// //       </div>

// //       {/* 🔹 Form Container */}
// //       <div
// //         className={`p-4 md:p-6 rounded-lg shadow-md transition-colors duration-500 ${
// //           darkMode ? "bg-gray-800" : "bg-white"
// //         }`}
// //       >
// //         <h2
// //           className={`text-md font-semibold mb-4 ${
// //             darkMode ? "text-gray-100" : "text-gray-700"
// //           }`}
// //         >
// //           Basic Information
// //         </h2>

// //         <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">

// //           {/* First Name */}
// //           <div>
// //             <label className="text-sm">First Name</label>
// //             <div
// //               className={`flex items-center border rounded-lg px-3 py-2 ${
// //                 darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"
// //               }`}
// //             >
// //               <User size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 value="Hadassah"
// //                 className={`w-full outline-none text-sm ${
// //                   darkMode ? "bg-gray-700 text-gray-100" : "bg-transparent"
// //                 }`}
// //               />
// //             </div>
// //           </div>

// //           {/* Last Name */}
// //           <div>
// //             <label className="text-sm">Last Name</label>
// //             <div
// //               className={`flex items-center border rounded-lg px-3 py-2 ${
// //                 darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"
// //               }`}
// //             >
// //               <User size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 value="Joseph"
// //                 className={`w-full outline-none text-sm ${
// //                   darkMode ? "bg-gray-700 text-gray-100" : "bg-transparent"
// //                 }`}
// //               />
// //             </div>
// //           </div>

// //           {/* Mobile Number */}
// //           <div>
// //             <label className="text-sm">Mobile Number</label>
// //             <div
// //               className={`flex items-center border rounded-lg px-3 py-2 ${
// //                 darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"
// //               }`}
// //             >
// //               <Phone size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 value="0803-456-7890"
// //                 className={`w-full outline-none text-sm ${
// //                   darkMode ? "bg-gray-700 text-gray-100" : "bg-transparent"
// //                 }`}
// //               />
// //             </div>
// //           </div>

// //           {/* Email */}
// //           <div>
// //             <label className="text-sm">Email Address</label>
// //             <div
// //               className={`flex items-center border rounded-lg px-3 py-2 ${
// //                 darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"
// //               }`}
// //             >
// //               <Mail size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="email"
// //                 value="hadassah.joseph@trendxhealth.com"
// //                 className={`w-full outline-none text-sm ${
// //                   darkMode ? "bg-gray-700 text-gray-100" : "bg-transparent"
// //                 }`}
// //               />
// //             </div>
// //           </div>

// //           {/* Username */}
// //           <div>
// //             <label className="text-sm">User Name</label>
// //             <div
// //               className={`flex items-center border rounded-lg px-3 py-2 ${
// //                 darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"
// //               }`}
// //             >
// //               <User size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 value="drhadassah"
// //                 className={`w-full outline-none text-sm ${
// //                   darkMode ? "bg-gray-700 text-gray-100" : "bg-transparent"
// //                 }`}
// //               />
// //             </div>
// //           </div>

// //           {/* Gender */}
// //           <div>
// //             <label className="text-sm">Gender</label>
// //             <div className="flex items-center gap-3 mt-1">
// //               <label className="flex items-center gap-1">
// //                 <input type="radio" name="gender" checked readOnly /> Female
// //               </label>
// //               <label className="flex items-center gap-1">
// //                 <input type="radio" name="gender" /> Male
// //               </label>
// //             </div>
// //           </div>

// //           {/* Education */}
// //           <div>
// //             <label className="text-sm">Education</label>
// //             <div
// //               className={`flex items-center border rounded-lg px-3 py-2 ${
// //                 darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"
// //               }`}
// //             >
// //               <MapPin size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 value="MBBS, MS-General Surgery"
// //                 className={`w-full outline-none text-sm ${
// //                   darkMode ? "bg-gray-700 text-gray-100" : "bg-transparent"
// //                 }`}
// //               />
// //             </div>
// //           </div>

// //           {/* Designation */}
// //           <div>
// //             <label className="text-sm">Designation</label>
// //             <div
// //               className={`flex items-center border rounded-lg px-3 py-2 ${
// //                 darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"
// //               }`}
// //             >
// //               <Calendar size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 value="General Physician"
// //                 className={`w-full outline-none text-sm ${
// //                   darkMode ? "bg-gray-700 text-gray-100" : "bg-transparent"
// //                 }`}
// //               />
// //             </div>
// //           </div>

// //           {/* Department */}
// //           <div>
// //             <label className="text-sm">Select Department</label>
// //             <div
// //               className={`flex items-center border rounded-lg px-3 py-2 ${
// //                 darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"
// //               }`}
// //             >
// //               <Droplet size={16} className="text-gray-400 mr-2" />
// //               <select
// //                 className={`w-full outline-none text-sm ${
// //                   darkMode ? "bg-gray-700 text-gray-200" : "bg-transparent"
// //                 }`}
// //               >
// //                 <option>General Medicine</option>
// //                 <option>Pediatrics</option>
// //                 <option>Cardiology</option>
// //                 <option>Orthopedic</option>
// //                 <option>Dermatology</option>
// //               </select>
// //             </div>
// //           </div>

// //           {/* DOB */}
// //           <div>
// //             <label className="text-sm">Date of Birth</label>
// //             <div
// //               className={`flex items-center border rounded-lg px-3 py-2 ${
// //                 darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"
// //               }`}
// //             >
// //               <Calendar size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="date"
// //                 value="1986-05-14"
// //                 className={`w-full outline-none text-sm ${
// //                   darkMode ? "bg-gray-700 text-gray-100" : "bg-transparent"
// //                 }`}
// //               />
// //             </div>
// //           </div>

// //           {/* City */}
// //           <div>
// //             <label className="text-sm">City</label>
// //             <div
// //               className={`flex items-center border rounded-lg px-3 py-2 ${
// //                 darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"
// //               }`}
// //             >
// //               <MapPin size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 value="Abuja"
// //                 className={`w-full outline-none text-sm ${
// //                   darkMode ? "bg-gray-700 text-gray-100" : "bg-transparent"
// //                 }`}
// //               />
// //             </div>
// //           </div>

// //           {/* Country */}
// //           <div>
// //             <label className="text-sm">Country</label>
// //             <div
// //               className={`flex items-center border rounded-lg px-3 py-2 ${
// //                 darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"
// //               }`}
// //             >
// //               <Flag size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 value="Nigeria"
// //                 className={`w-full outline-none text-sm ${
// //                   darkMode ? "bg-gray-700 text-gray-100" : "bg-transparent"
// //                 }`}
// //               />
// //             </div>
// //           </div>

// //           {/* State */}
// //           <div>
// //             <label className="text-sm">State/Province</label>
// //             <div
// //               className={`flex items-center border rounded-lg px-3 py-2 ${
// //                 darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"
// //               }`}
// //             >
// //               <MapPin size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 value="FCT"
// //                 className={`w-full outline-none text-sm ${
// //                   darkMode ? "bg-gray-700 text-gray-100" : "bg-transparent"
// //                 }`}
// //               />
// //             </div>
// //           </div>

// //           {/* Postal Code */}
// //           <div>
// //             <label className="text-sm">Postal Code</label>
// //             <div
// //               className={`flex items-center border rounded-lg px-3 py-2 ${
// //                 darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"
// //               }`}
// //             >
// //               <MapPin size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 value="900211"
// //                 className={`w-full outline-none text-sm ${
// //                   darkMode ? "bg-gray-700 text-gray-100" : "bg-transparent"
// //                 }`}
// //               />
// //             </div>
// //           </div>

// //           {/* Address */}
// //           <div>
// //             <label className="text-sm">Address</label>
// //             <div
// //               className={`flex items-center border rounded-lg px-3 py-2 ${
// //                 darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"
// //               }`}
// //             >
// //               <MapPin size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 value="12 Crescent Avenue, Garki II"
// //                 className={`w-full outline-none text-sm ${
// //                   darkMode ? "bg-gray-700 text-gray-100" : "bg-transparent"
// //                 }`}
// //               />
// //             </div>
// //           </div>

// //           {/* Biography */}
// //           <div>
// //             <label className="text-sm">Short Biography</label>
// //             <div
// //               className={`flex items-center border rounded-lg px-3 py-2 ${
// //                 darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"
// //               }`}
// //             >
// //               <FileText size={16} className="text-gray-400 mr-2" />
// //               <input
// //                 type="text"
// //                 value="Dedicated physician with over 12 years of experience providing top-quality medical care in Nigeria."
// //                 className={`w-full outline-none text-sm ${
// //                   darkMode ? "bg-gray-700 text-gray-100" : "bg-transparent"
// //                 }`}
// //               />
// //             </div>
// //           </div>
// //         </form>

// //         {/* Buttons */}
// //         <div className="flex justify-end mt-6 gap-3">
// //           <button
// //             type="submit"
// //             className="bg-[rgb(213,151,71)] text-white px-5 py-2 rounded-md hover:bg-[rgb(190,130,60)]"
// //           >
// //             Submit
// //           </button>
// //           <button
// //             className={`px-5 py-2 rounded-md border ${
// //               darkMode
// //                 ? "border-gray-600 text-gray-300 hover:bg-gray-700"
// //                 : "border-gray-300 text-gray-700 hover:bg-gray-100"
// //             }`}
// //           >
// //             Cancel
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ChevronRight } from "lucide-react";

// export default function DoctorEdit({ darkMode }) {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [doctor, setDoctor] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     specialty: "",
//     gender: "",
//     address: "",
//   });

//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   // Fetch doctor details
//   useEffect(() => {
//     const fetchDoctor = async () => {
//       try {
//         const res = await axios.get(`/doctors/${id}`);
//         setDoctor(res.data);
//       } catch (error) {
//         console.error("Error fetching doctor details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDoctor();
//   }, [id]);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDoctor({ ...doctor, [name]: value });
//   };

//   // Handle submit (update)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSaving(true);
//     try {
//       await axios.put(`/doctors/${id}`, doctor);
//       navigate("/doctorlist");
//     } catch (error) {
//       console.error("Error updating doctor:", error);
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div
//         className={`flex justify-center items-center h-screen ${
//           darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
//         }`}
//       >
//         Loading doctor details...
//       </div>
//     );
//   }

//   return (
//     // <div
//     //   className={`min-h-screen p-6 ${
//     //     darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
//     //   }`}
//     // >
//     //   {/* Header */}
//     //   <div className="flex items-center gap-2 mb-6">
//     //     <h1 className="text-xl font-semibold">Edit Doctor</h1>
//     //     <ChevronRight className="text-gray-400" />
//     //     <span className="text-gray-500">{doctor.firstName}</span>
//     //   </div>

//     //   {/* Form */}
//     //   <form
//     //     onSubmit={handleSubmit}
//     //     className={`max-w-3xl mx-auto p-6 rounded-2xl shadow-md ${
//     //       darkMode ? "bg-gray-800" : "bg-white"
//     //     }`}
//     //   >
//     //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//     //       <div>
//     //         <label className="block mb-1 text-sm font-medium">First Name</label>
//     //         <input
//     //           type="text"
//     //           name="firstName"
//     //           value={doctor.firstName}
//     //           onChange={handleChange}
//     //           className={`w-full px-3 py-2 border rounded-lg outline-none ${
//     //             darkMode
//     //               ? "bg-gray-700 border-gray-600 text-white"
//     //               : "bg-gray-50 border-gray-300 text-gray-900"
//     //           }`}
//     //           required
//     //         />
//     //       </div>

//     //       <div>
//     //         <label className="block mb-1 text-sm font-medium">Last Name</label>
//     //         <input
//     //           type="text"
//     //           name="lastName"
//     //           value={doctor.lastName}
//     //           onChange={handleChange}
//     //           className={`w-full px-3 py-2 border rounded-lg outline-none ${
//     //             darkMode
//     //               ? "bg-gray-700 border-gray-600 text-white"
//     //               : "bg-gray-50 border-gray-300 text-gray-900"
//     //           }`}
//     //           required
//     //         />
//     //       </div>

//     //       <div>
//     //         <label className="block mb-1 text-sm font-medium">Email</label>
//     //         <input
//     //           type="email"
//     //           name="email"
//     //           value={doctor.email}
//     //           onChange={handleChange}
//     //           className={`w-full px-3 py-2 border rounded-lg outline-none ${
//     //             darkMode
//     //               ? "bg-gray-700 border-gray-600 text-white"
//     //               : "bg-gray-50 border-gray-300 text-gray-900"
//     //           }`}
//     //           required
//     //         />
//     //       </div>

//     //       <div>
//     //         <label className="block mb-1 text-sm font-medium">Phone</label>
//     //         <input
//     //           type="text"
//     //           name="phone"
//     //           value={doctor.phone}
//     //           onChange={handleChange}
//     //           className={`w-full px-3 py-2 border rounded-lg outline-none ${
//     //             darkMode
//     //               ? "bg-gray-700 border-gray-600 text-white"
//     //               : "bg-gray-50 border-gray-300 text-gray-900"
//     //           }`}
//     //           required
//     //         />
//     //       </div>

//     //       <div>
//     //         <label className="block mb-1 text-sm font-medium">Specialty</label>
//     //         <input
//     //           type="text"
//     //           name="specialty"
//     //           value={doctor.specialty}
//     //           onChange={handleChange}
//     //           className={`w-full px-3 py-2 border rounded-lg outline-none ${
//     //             darkMode
//     //               ? "bg-gray-700 border-gray-600 text-white"
//     //               : "bg-gray-50 border-gray-300 text-gray-900"
//     //           }`}
//     //           required
//     //         />
//     //       </div>

//     //       <div>
//     //         <label className="block mb-1 text-sm font-medium">Gender</label>
//     //         <select
//     //           name="gender"
//     //           value={doctor.gender}
//     //           onChange={handleChange}
//     //           className={`w-full px-3 py-2 border rounded-lg outline-none ${
//     //             darkMode
//     //               ? "bg-gray-700 border-gray-600 text-white"
//     //               : "bg-gray-50 border-gray-300 text-gray-900"
//     //           }`}
//     //           required
//     //         >
//     //           <option value="">Select gender</option>
//     //           <option value="Male">Male</option>
//     //           <option value="Female">Female</option>
//     //         </select>
//     //       </div>

//     //       <div className="sm:col-span-2">
//     //         <label className="block mb-1 text-sm font-medium">Address</label>
//     //         <textarea
//     //           name="address"
//     //           value={doctor.address}
//     //           onChange={handleChange}
//     //           rows="3"
//     //           className={`w-full px-3 py-2 border rounded-lg outline-none ${
//     //             darkMode
//     //               ? "bg-gray-700 border-gray-600 text-white"
//     //               : "bg-gray-50 border-gray-300 text-gray-900"
//     //           }`}
//     //         ></textarea>
//     //       </div>
//     //     </div>

//     //     <div className="mt-6 flex justify-end">
//     //       <button
//     //         type="submit"
//     //         disabled={saving}
//     //         className={`px-6 py-2 rounded-lg font-medium ${
//     //           saving
//     //             ? "opacity-50 cursor-not-allowed"
//     //             : darkMode
//     //             ? "bg-blue-600 hover:bg-blue-700 text-white"
//     //             : "bg-blue-500 hover:bg-blue-600 text-white"
//     //         }`}
//     //       >
//     //         {saving ? "Saving..." : "Save Changes"}
//     //       </button>
//     //     </div>
//     //   </form>
//     // </div>

//     <div
//       className={`min-h-screen transition-colors duration-500 ${
//         darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
//       }`}
//     >
//       <div className="w-[98%]">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-5">
//           <h1
//             className={`text-lg font-semibold ${
//               darkMode ? "text-white" : "text-gray-900"
//             }`}
//           >
//             Add Doctor
//           </h1>

//           <div
//             className={`flex items-center gap-2 text-sm ${
//               darkMode ? "text-gray-300" : "text-gray-600"
//             }`}
//           >
//             <p className="flex items-center text-[rgb(213,151,71)] gap-1">
//               TrendX <ChevronRight size={16} />
//             </p>
//             <p className="flex items-center gap-1">
//               Admin <ChevronRight size={16} />
//             </p>
//             <p>Add Doctor</p>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`rounded-2xl shadow-md p-6 transition-colors duration-500 ${
//           darkMode ? "bg-gray-800" : "bg-white"
//         }`}
//       >
//         <h2
//           className={`text-lg font-semibold mb-4 ${
//             darkMode ? "text-white" : "text-gray-900"
//           }`}
//         >
//           Doctor Information
//         </h2>

//         <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {/* Firstname */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">First Name</label>
//             <input
//               type="text"
//               name="firstname"
//               value={formData.firstname}
//               onChange={handleChange}
//               required
//               className={`w-full p-2 rounded border ${
//                 darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
//               }`}
//             />
//           </div>

//           {/* Lastname */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">Last Name</label>
//             <input
//               type="text"
//               name="lastname"
//               value={formData.lastname}
//               onChange={handleChange}
//               required
//               className={`w-full p-2 rounded border ${
//                 darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
//               }`}
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className={`w-full p-2 rounded border ${
//                 darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
//               }`}
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className={`w-full p-2 rounded border ${
//                 darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
//               }`}
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">Phone</label>
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className={`w-full p-2 rounded border ${
//                 darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
//               }`}
//             />
//           </div>

//           {/* Address */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               required
//               className={`w-full p-2 rounded border ${
//                 darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
//               }`}
//             />
//           </div>

//           {/* Specialization */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">Specialization</label>
//             <input
//               type="text"
//               name="specialization"
//               value={formData.specialization}
//               onChange={handleChange}
//               required
//               className={`w-full p-2 rounded border ${
//                 darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
//               }`}
//             />
//           </div>

//           {/* Experience */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">Experience</label>
//             <input
//               type="text"
//               name="experience"
//               value={formData.experience}
//               onChange={handleChange}
//               required
//               className={`w-full p-2 rounded border ${
//                 darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
//               }`}
//             />
//           </div>

//           {/* Education */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">Education</label>
//             <input
//               type="text"
//               name="education"
//               value={formData.education}
//               onChange={handleChange}
//               required
//               className={`w-full p-2 rounded border ${
//                 darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
//               }`}
//             />
//           </div>

//           {/* Gender */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">Gender</label>
//             <select
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               required
//               className={`w-full p-2 rounded border ${
//                 darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
//               }`}
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </select>
//           </div>

//           {/* City */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">City</label>
//             <input
//               type="text"
//               name="city"
//               value={formData.city}
//               onChange={handleChange}
//               className={`w-full p-2 rounded border ${
//                 darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
//               }`}
//             />
//           </div>

//           {/* State */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">State</label>
//             <input
//               type="text"
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               className={`w-full p-2 rounded border ${
//                 darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
//               }`}
//             />
//           </div>

//           {/* Country */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">Country</label>
//             <input
//               type="text"
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               className={`w-full p-2 rounded border ${
//                 darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
//               }`}
//             />
//           </div>

//           {/* Department */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">Department</label>
//             <input
//               type="text"
//               name="department"
//               value={formData.department}
//               onChange={handleChange}
//               className={`w-full p-2 rounded border ${
//                 darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
//               }`}
//             />
//           </div>

//           {/* Date of Birth */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">Date of Birth</label>
//             <input
//               type="date"
//               name="date_of_birth"
//               value={formData.date_of_birth}
//               onChange={handleChange}
//               required
//               className={`w-full p-2 rounded border ${
//                 darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
//               }`}
//             />
//           </div>

//           {/* Bio */}
//           <div className="sm:col-span-2">
//             <label className="block mb-1 text-sm font-medium">Bio</label>
//             <textarea
//               name="bio"
//               value={formData.bio}
//               onChange={handleChange}
//               rows="3"
//               className={`w-full p-2 rounded border ${
//                 darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
//               }`}
//             />
//           </div>

//           {/* Error */}
//           {error && (
//             <div className="sm:col-span-2 text-center text-red-500 text-sm">
//               {error}
//             </div>
//           )}

//           {/* Submit */}
//           <div className="sm:col-span-2 flex justify-center mt-4">
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-[rgb(213,151,71)] px-6 py-2 rounded text-white text-sm hover:bg-[rgb(190,130,60)] transition"
//             >
//               {loading ? "Saving..." : "Add Doctor"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   User,
//   Phone,
//   Calendar,
//   Droplet,
//   MapPin,
//   FileText,
//   Mail,
//   ChevronRight,
//   Flag,
// } from "lucide-react";
// import API from "../../../../API/api";

// export default function DoctorEdit({ darkMode }) {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [doctor, setDoctor] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     username: "",
//     gender: "",
//     education: "",
//     designation: "",
//     department: "",
//     dob: "",
//     city: "",
//     state: "",
//     country: "",
//     postalCode: "",
//     address: "",
//     bio: "",
//   });

//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   // 🔹 Fetch doctor details
//   useEffect(() => {
//     // const fetchDoctor = async () => {
//     //   try {
//     //     const res = await axios.get(`/doctors/${id}`);
//     //     setDoctor(res.data);
//     //   } catch (error) {
//     //     console.error("Error fetching doctor details:", error);
//     //   } finally {
//     //     setLoading(false);
//     //   }

//      const fetchDoctor = async () => {
//           console.log("🟡 Fetching doctor with ID:", id);
//           try {
//             setLoading(true);
//             const res = await API.get(`/doctors/${id}`);
//             const data = res.data.data || res.data;
//             console.log("✅ doctor fetched successfully:", data);
//             setForm({
//               ...form,
//               ...data,
//             });
//           } catch (err) {
//             console.error("❌ Error fetching doctor:", err);
//             alert("Failed to load doctor data.");
//           } finally {
//             setLoading(false);
//           }
//     };
//     if (id) fetchDoctor();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [id]);
  

//   // // 🔹 Handle input changes
//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setDoctor((prev) => ({ ...prev, [name]: value }));
//   // };

//   // // 🔹 Handle submit
//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setSaving(true);
//   //   try {
//   //     await axios.put(`/doctors/${id}`, doctor);
//   //     navigate("/doctorlist");
//   //   } catch (error) {
//   //     console.error("Error updating doctor:", error);
//   //   } finally {
//   //     setSaving(false);
//   //   }
//   // };

//   // if (loading) {
//   //   return (
//   //     <div
//   //       className={`flex justify-center items-center h-screen ${
//   //         darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"
//   //       }`}
//   //     >
//   //       Loading doctor details...
//   //     </div>
//   //   );
//   // }


//   // ✅ Update patient
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       try {
//         setLoading(true);
  
//         const payload = {
//           ...form,
//           date_of_birth: form.date_of_birth
//             ? new Date(form.date_of_birth).toISOString().split("T")[0]
//             : null,
//         };
  
//         console.log("🟢 Submitting update for doctor ID:", id);
//         console.log("🟢 Payload being sent to backend:", payload);
  
//         const res = await API.put(`/doctors/${id}`, payload);
  
//         console.log("✅ Doctor updated successfully. Response:", res.data);
//         alert("✅ Doctor updated successfully!");
  
//         // ✅ Navigate to patient list after successful update
//         navigate("/admin/doctors/list");
//       } catch (err) {
//         console.error("❌ Error updating doctor:", err);
  
//         if (err.response) {
//           console.log("🔍 Backend responded with status:", err.response.status);
//           console.log("🔍 Response headers:", err.response.headers);
//           console.log("🔍 Response data:", err.response.data);
//         } else if (err.request) {
//           console.log("📡 No response received from backend. Request details:", err.request);
//         } else {
//           console.log("⚠️ Request setup error:", err.message);
//         }
  
//         alert("Failed to update doctor. Check console for details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     const handleCancel = () => {
//     if (window.confirm("Discard all changes?")) {
//       setForm({
//         firstname: "",
//         lastname: "",
//         email: "",
//         password: "",
//         phone: "",
//         address: "",
//         occupation: "",
//         image: "",
//         gender: "",
//         city: "",
//         state: "",
//         country: "",
//         status: "active",
//         blood_group: "",
//         date_of_birth: "",
//         age: 0,
//         height: 0,
//         weight: 0,
//       });
//     }
//   };
  
//   return (
//     <div
//       className={`min-h-screen transition-colors duration-500 ${
//         darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
//       }`}
//     >
//       {/* 🔹 Top Header Section */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-lg font-semibold">Doctor Edit</h1>

//         <div
//           className={`flex items-center gap-2 text-sm ${
//             darkMode ? "text-gray-300" : "text-gray-600"
//           }`}
//         >
//           <p className="flex items-center text-[rgb(213,151,71)] gap-1">
//             TrendX <ChevronRight size={14} />
//           </p>
//           <p className="flex items-center gap-1">
//             Admin <ChevronRight size={14} />
//           </p>
//           <p
//             className={`font-medium ${
//               darkMode ? "text-gray-100" : "text-gray-700"
//             }`}
//           >
//             Doctor Edit
//           </p>
//         </div>
//       </div>

//       {/* 🔹 Form Container */}
//       <div
//         className={`p-4 md:p-6 rounded-lg shadow-md transition-colors duration-500 ${
//           darkMode ? "bg-gray-800" : "bg-white"
//         }`}
//       >
//         <h2
//           className={`text-md font-semibold mb-4 ${
//             darkMode ? "text-gray-100" : "text-gray-700"
//           }`}
//         >
//           Basic Information
//         </h2>

//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-1 sm:grid-cols-2 gap-4"
//         >
//           {/* First Name */}
//           <FormInput
//             label="First Name"
//             name="firstName"
//             icon={<User size={16} />}
//              value={form.firstname}
//             onChange={(e) => setForm({ ...form, firstname: e.target.value })}
//             darkMode={darkMode}
//           />

//           {/* Last Name */}
//           <FormInput
//             label="Last Name"
//             name="lastName"
//             icon={<User size={16} />}
//             value={form.lastname}
//             onChange={(e) => setForm({ ...form, lastname: e.target.value })}
//             darkMode={darkMode}
//           />

//           {/* Mobile Number */}
//           <FormInput
//             label="Mobile Number"
//             name="phone"
//             icon={<Phone size={16} />}
//             value={form.phone}
//             onChange={(e) => setForm({ ...form, phone: e.target.value })}
//             darkMode={darkMode}
//           />

//           {/* Email */}
//           <FormInput
//             label="Email Address"
//             name="email"
//             type="email"
//             icon={<Mail size={16} />}
//            value={form.email}
//             onChange={(e) => setForm({ ...form, email: e.target.value })}
//             darkMode={darkMode}
//           />


//           {/* Gender */}
//           <div>
//             <label className="text-sm">Gender</label>
//             <div className="flex items-center gap-3 mt-1">
//               <label className="flex items-center gap-1">
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Female"
//                     checked={form.gender === "Female"}
//                   onChange={(e) => setForm({ ...form, gender: e.target.value })}
//                 />{" "}
//                 Female
//               </label>
//               <label className="flex items-center gap-1">
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Male"
//                  checked={form.gender === "Male"}
//                   onChange={(e) => setForm({ ...form, gender: e.target.value })}
//                 />{" "}
//                 Male
//               </label>
//             </div>
//           </div>

//           {/* Education */}
//           <FormInput
//             label="Education"
//             name="education"
//             icon={<MapPin size={16} />}
//              value={form.education}
//             onChange={(e) => setForm({ ...form, education: e.target.value })}
//             darkMode={darkMode}
//           />

//           {/* Designation */}
//           <FormInput
//             label="Designation"
//             name="designation"
//             icon={<Calendar size={16} />}
//             // value={doctor.designation}
//             // onChange={handleChange}
//              value={form.designation}
//             onChange={(e) => setForm({ ...form, designation: e.target.value })}
//             darkMode={darkMode}
//           />

//           {/* Department */}
//           <div>
//             <label className="text-sm">Select Department</label>
//             <div
//               className={`flex items-center border rounded-lg px-3 py-2 ${
//                 darkMode
//                   ? "border-gray-600 bg-gray-700"
//                   : "border-gray-300 bg-white"
//               }`}
//             >
//               <Droplet size={16} className="text-gray-400 mr-2" />
//               <select
//                 name="department"
//                   value={form.department}
//             onChange={(e) => setForm({ ...form, department: e.target.value })}
//                 className={`w-full outline-none text-sm ${
//                   darkMode ? "bg-gray-700 text-gray-200" : "bg-transparent"
//                 }`}
//               >
//                 <option value="">Select Department</option>
//                 <option>General Medicine</option>
//                 <option>Pediatrics</option>
//                 <option>Cardiology</option>
//                 <option>Orthopedic</option>
//                 <option>Dermatology</option>
//               </select>
//             </div>
//           </div>

//           {/* DOB */}
//           <FormInput
//             label="Date of Birth"
//             name="dob"
//             type="date"
//             icon={<Calendar size={16} />}
//             value={form.date_of_birth}
//             onChange={(e) =>
//               setForm({ ...form, date_of_birth: e.target.value })
//             }
//             darkMode={darkMode}
//           />

//           {/* City */}
//           <FormInput
//             label="City"
//             name="city"
//             icon={<MapPin size={16} />}
//             // value={doctor.city}
//             // onChange={handleChange}
//             value={form.city}
//             onChange={(e) => setForm({ ...form, city: e.target.value })}
//             darkMode={darkMode}
//           />

//           {/* Country */}
//           <FormInput
//             label="Country"
//             name="country"
//             icon={<Flag size={16} />}
//             // value={doctor.country}
//             // onChange={handleChange}
//              value={form.country}
//             onChange={(e) => setForm({ ...form, country: e.target.value })}
//             darkMode={darkMode}
//           />

//           {/* State */}
//           <FormInput
//             label="State/Province"
//             name="state"
//             icon={<MapPin size={16} />}
//             // value={doctor.state}
//             // onChange={handleChange}
//             value={form.state}
//             onChange={(e) => setForm({ ...form, state: e.target.value })}
//             darkMode={darkMode}
//           />

//           {/* Postal Code */}
//           <FormInput
//             label="Postal Code"
//             name="postalCode"
//             icon={<MapPin size={16} />}
//             // value={doctor.postalCode}
//             // onChange={handleChange}
//             value={form.state}
//             onChange={(e) => setForm({ ...form, state: e.target.value })}
//             darkMode={darkMode}
//           />

//           {/* Address */}
//           <FormInput
//             label="Address"
//             name="address"
//             icon={<MapPin size={16} />}
//             // value={doctor.address}
//             // onChange={handleChange}
//               value={form.address}
//             onChange={(e) => setForm({ ...form, address: e.target.value })}
//             darkMode={darkMode}
//           />

//           {/* Biography */}
//           <FormInput
//             label="Short Biography"
//             name="bio"
//             icon={<FileText size={16} />}
//             // value={doctor.bio}
//             // onChange={handleChange}
//              value={form.bio}
//             onChange={(e) => setForm({ ...form, bio: e.target.value })}
//             darkMode={darkMode}
//           />
//         </form>

//         {/* Buttons */}
//         {/* <div className="flex justify-end mt-6 gap-3">
//           <button
//             type="submit"
//             onClick={handleSubmit}
//             disabled={saving}
//             className="bg-[rgb(213,151,71)] text-white px-5 py-2 rounded-md hover:bg-[rgb(190,130,60)]"
//           >
//             {saving ? "Saving..." : "Submit"}
//           </button>
//           <button
//             onClick={() => navigate("/doctorlist")}
//             className={`px-5 py-2 rounded-md border ${
//               darkMode
//                 ? "border-gray-600 text-gray-300 hover:bg-gray-700"
//                 : "border-gray-300 text-gray-700 hover:bg-gray-100"
//             }`}
//           >
//             Cancel
//           </button>
//         </div> */}

//          {/* Buttons */}
//         <div className="flex justify-end mt-6 gap-3">
//           <button
//             type="submit"
//             onClick={handleSubmit}
//             disabled={loading}
//             className={`bg-[rgb(213,151,71)] text-white px-5 py-2 rounded-md hover:bg-[rgb(190,130,60)] ${
//               loading ? "opacity-70 cursor-not-allowed" : ""
//             }`}
//           >
//             {loading ? "Updating..." : "Update"}
//           </button>
//           <button
//             onClick={handleCancel}
//             className={`px-5 py-2 rounded-md border transition-colors ${
//               darkMode
//                 ? "border-gray-600 text-gray-300 hover:bg-gray-700"
//                 : "border-gray-300 text-gray-700 hover:bg-gray-100"
//             }`}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // 🔹 Reusable Input Component
// function FormInput({
//   label,
//   name,
//   type = "text",
//   icon,
//   value,
//   onChange,
//   darkMode,
// }) {
//   return (
//     <div>
//       <label className="text-sm">{label}</label>
//       <div
//         className={`flex items-center border rounded-lg px-3 py-2 ${
//           darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"
//         }`}
//       >
//         <span className="text-gray-400 mr-2">{icon}</span>
//         <input
//           type={type}
//           name={name}
//           value={value || ""}
//           onChange={onChange}
//           className={`w-full outline-none text-sm ${
//             darkMode ? "bg-gray-700 text-gray-100" : "bg-transparent"
//           }`}
//         />
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  User,
  Phone,
  Calendar,
  Droplet,
  MapPin,
  FileText,
  Mail,
  ChevronRight,
  Flag,
} from "lucide-react";
import API from "../../../../API/api";

export default function DoctorEdit({ darkMode }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // 🔹 FORM STATE (replaces doctor state)
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    username: "",
    gender: "",
    education: "",
    designation: "",
    department: "",
    date_of_birth: "",
    city: "",
    state: "",
    country: "",
    postal_code: "",
    address: "",
    bio: "",
  });

  const [loading, setLoading] = useState(true);

  // 🔹 Fetch doctor details
  useEffect(() => {
    const fetchDoctor = async () => {
      console.log("🟡 Fetching doctor with ID:", id);
      try {
        setLoading(true);
        const res = await API.get(`/doctors/${id}`);
        const data = res.data.data || res.data;
        console.log("✅ Doctor fetched:", data);

        setForm({
          ...form,
          ...data,
        });
      } catch (err) {
        console.error("❌ Error fetching doctor:", err);
        alert("Failed to load doctor data.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchDoctor();
    // eslint-disable-next-line
  }, [id]);

  // 🔹 Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const payload = {
        ...form,
        date_of_birth: form.date_of_birth
          ? new Date(form.date_of_birth).toISOString().split("T")[0]
          : null,
      };

      console.log("🟢 Updating doctor:", payload);

      const res = await API.put(`/doctors/${id}`, payload);

      console.log("✅ Doctor updated:", res.data);
      alert("Doctor updated successfully!");

      navigate("/admin/doctors/list");
    } catch (err) {
      console.error("❌ Error updating doctor:", err);
      alert("Failed to update doctor.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    if (window.confirm("Discard all changes?")) {
      setForm({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        username: "",
        gender: "",
        education: "",
        designation: "",
        department: "",
        date_of_birth: "",
        city: "",
        state: "",
        country: "",
        postal_code: "",
        address: "",
        bio: "",
      });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold">Doctor Edit</h1>

        <div
          className={`flex items-center gap-2 text-sm ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <p className="flex items-center text-[rgb(213,151,71)] gap-1">
            TrendX <ChevronRight size={14} />
          </p>
          <p className="flex items-center gap-1">
            Admin <ChevronRight size={14} />
          </p>
          <p
            className={`font-medium ${
              darkMode ? "text-gray-100" : "text-gray-700"
            }`}
          >
            Doctor Edit
          </p>
        </div>
      </div>

      {/* Form Container */}
      <div
        className={`p-4 md:p-6 rounded-lg shadow-md transition-colors duration-500 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2
          className={`text-md font-semibold mb-4 ${
            darkMode ? "text-gray-100" : "text-gray-700"
          }`}
        >
          Basic Information
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* First Name */}
          <FormInput
            label="First Name"
            name="firstname"
            icon={<User size={16} />}
            value={form.firstname}
            onChange={(e) => setForm({ ...form, firstname: e.target.value })}
            darkMode={darkMode}
          />

          {/* Last Name */}
          <FormInput
            label="Last Name"
            name="lastname"
            icon={<User size={16} />}
            value={form.lastname}
            onChange={(e) => setForm({ ...form, lastname: e.target.value })}
            darkMode={darkMode}
          />

          {/* Phone */}
          <FormInput
            label="Mobile Number"
            name="phone"
            icon={<Phone size={16} />}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            darkMode={darkMode}
          />

          {/* Email */}
          <FormInput
            label="Email Address"
            name="email"
            type="email"
            icon={<Mail size={16} />}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            darkMode={darkMode}
          />

          {/* Gender */}
          <div>
            <label className="text-sm">Gender</label>
            <div className="flex items-center gap-3 mt-1">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={form.gender === "Female"}
                  onChange={(e) => setForm({ ...form, gender: e.target.value })}
                />
                Female
              </label>

              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={form.gender === "Male"}
                  onChange={(e) => setForm({ ...form, gender: e.target.value })}
                />
                Male
              </label>
            </div>
          </div>

          {/* Education */}
          <FormInput
            label="Education"
            name="education"
            icon={<MapPin size={16} />}
            value={form.education}
            onChange={(e) => setForm({ ...form, education: e.target.value })}
            darkMode={darkMode}
          />

          {/* Designation */}
          <FormInput
            label="Designation"
            name="designation"
            icon={<Calendar size={16} />}
            value={form.designation}
            onChange={(e) => setForm({ ...form, designation: e.target.value })}
            darkMode={darkMode}
          />

          {/* Department */}
          <div>
            <label className="text-sm">Select Department</label>
            <div
              className={`flex items-center border rounded-lg px-3 py-2 ${
                darkMode
                  ? "border-gray-600 bg-gray-700"
                  : "border-gray-300 bg-white"
              }`}
            >
              <Droplet size={16} className="text-gray-400 mr-2" />
              <select
                name="department"
                value={form.department}
                onChange={(e) =>
                  setForm({ ...form, department: e.target.value })
                }
                className={`w-full outline-none text-sm ${
                  darkMode ? "bg-gray-700 text-gray-200" : "bg-transparent"
                }`}
              >
                <option value="">Select Department</option>
                <option>General Medicine</option>
                <option>Pediatrics</option>
                <option>Cardiology</option>
                <option>Orthopedic</option>
                <option>Dermatology</option>
              </select>
            </div>
          </div>

          {/* DOB */}
          <FormInput
            label="Date of Birth"
            name="date_of_birth"
            type="date"
            icon={<Calendar size={16} />}
            value={form.date_of_birth}
            onChange={(e) =>
              setForm({ ...form, date_of_birth: e.target.value })
            }
            darkMode={darkMode}
          />

          {/* City */}
          <FormInput
            label="City"
            name="city"
            icon={<MapPin size={16} />}
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            darkMode={darkMode}
          />

          {/* Country */}
          <FormInput
            label="Country"
            name="country"
            icon={<Flag size={16} />}
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
            darkMode={darkMode}
          />

          {/* State */}
          <FormInput
            label="State/Province"
            name="state"
            icon={<MapPin size={16} />}
            value={form.state}
            onChange={(e) => setForm({ ...form, state: e.target.value })}
            darkMode={darkMode}
          />

          {/* Postal Code */}
          <FormInput
            label="Postal Code"
            name="postal_code"
            icon={<MapPin size={16} />}
            value={form.postal_code}
            onChange={(e) =>
              setForm({ ...form, postal_code: e.target.value })
            }
            darkMode={darkMode}
          />

          {/* Address */}
          <FormInput
            label="Address"
            name="address"
            icon={<MapPin size={16} />}
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            darkMode={darkMode}
          />

          {/* Bio */}
          <FormInput
            label="Short Biography"
            name="bio"
            icon={<FileText size={16} />}
            value={form.bio}
            onChange={(e) => setForm({ ...form, bio: e.target.value })}
            darkMode={darkMode}
          />
        </form>

        {/* Buttons */}
        <div className="flex justify-end mt-6 gap-3">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={loading}
            className={`bg-[rgb(213,151,71)] text-white px-5 py-2 rounded-md hover:bg-[rgb(190,130,60)] ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Updating..." : "Update"}
          </button>

          <button
            onClick={handleCancel}
            className={`px-5 py-2 rounded-md border ${
              darkMode
                ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

// 🔹 Reusable Input Component
function FormInput({
  label,
  name,
  type = "text",
  icon,
  value,
  onChange,
  darkMode,
}) {
  return (
    <div>
      <label className="text-sm">{label}</label>
      <div
        className={`flex items-center border rounded-lg px-3 py-2 ${
          darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300 bg-white"
        }`}
      >
        <span className="text-gray-400 mr-2">{icon}</span>
        <input
          type={type}
          name={name}
          value={value || ""}
          onChange={onChange}
          className={`w-full outline-none text-sm ${
            darkMode ? "bg-gray-700 text-gray-100" : "bg-transparent"
          }`}
        />
      </div>
    </div>
  );
}

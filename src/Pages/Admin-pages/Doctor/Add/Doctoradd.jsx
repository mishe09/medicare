
// import {
//   User,
//   Phone,
//   Calendar,
//   Droplet,
//   Activity,
//   FileText,
//   MapPin,
//   Flag,
//   Mail,
//   ChevronRight,
// } from "lucide-react";

// export default function DoctorAdd({ darkMode }) {
//   return (
//     <div
//       className={`min-h-screen px-4 md:px-8 py-6 transition-colors duration-500 ${
//         darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
//       }`}
//     >
//       {/* 🔹 Top Header Section */}
//       <div
//         className={`flex justify-between items-center mb-6 ${
//           darkMode ? "text-gray-300" : "text-gray-600"
//         }`}
//       >
//         <h1 className="text-lg font-semibold">Doctor Add</h1>

//         <div className="flex items-center gap-2 text-sm">
//           <p className="flex items-center text-[rgb(213,151,71)] gap-1">
//             TrendX <ChevronRight size={14} />
//           </p>
//           <p
//             className={`flex items-center gap-1 ${
//               darkMode ? "text-gray-200" : "text-gray-700"
//             }`}
//           >
//             Admin <ChevronRight size={14} />
//           </p>
//           <p
//             className={`font-medium ${
//               darkMode ? "text-gray-200" : "text-gray-700"
//             }`}
//           >
//             Doctor Add
//           </p>
//         </div>
//       </div>

//       {/* 🔹 Form Container */}
//       <div
//         className={`p-4 md:p-6 rounded-lg shadow-md transition-colors duration-500 ${
//           darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
//         }`}
//       >
//         <h2
//           className={`text-md font-semibold mb-4 ${
//             darkMode ? "text-gray-200" : "text-gray-700"
//           }`}
//         >
//           Basic Information
//         </h2>

//         <form
//           className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-colors duration-500 ${
//             darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
//           }`}
//         >
//           {/* First Name */}
//           <div>
//             <label className="text-sm">First Name</label>
//             <div
//               className={`flex items-center border rounded-lg px-3 py-2 ${
//                 darkMode ? "border-gray-700" : "border-gray-300"
//               }`}
//             >
//               <User size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className={`w-full outline-none text-sm ${
//                   darkMode ? "bg-gray-800" : "bg-white"
//                 }`}
//               />
//             </div>
//           </div>

//           {/* Last Name */}
//           <div>
//             <label className="text-sm">Last Name</label>
//             <div
//               className={`flex items-center border rounded-lg px-3 py-2 ${
//                 darkMode ? "border-gray-700" : "border-gray-300"
//               }`}
//             >
//               <User size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className={`w-full outline-none text-sm ${
//                   darkMode ? "bg-gray-800" : "bg-white"
//                 }`}
//               />
//             </div>
//           </div>

//           {/* Mobile Number */}
//           <div>
//             <label className="text-sm">Mobile Number</label>
//             <div
//               className={`flex items-center border rounded-lg px-3 py-2 ${
//                 darkMode ? "border-gray-700" : "border-gray-300"
//               }`}
//             >
//               <Phone size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="Mobile Number"
//                 className={`w-full outline-none text-sm ${
//                   darkMode ? "bg-gray-800" : "bg-white"
//                 }`}
//               />
//             </div>
//           </div>

//           {/* Email */}
//           <div>
//             <label className="text-sm">Email Address</label>
//             <div
//               className={`flex items-center border rounded-lg px-3 py-2 ${
//                 darkMode ? "border-gray-700" : "border-gray-300"
//               }`}
//             >
//               <Mail size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className={`w-full outline-none text-sm ${
//                   darkMode ? "bg-gray-800" : "bg-white"
//                 }`}
//               />
//             </div>
//           </div>

//           {/* Username */}
//           <div>
//             <label className="text-sm">User Name</label>
//             <div
//               className={`flex items-center border rounded-lg px-3 py-2 ${
//                 darkMode ? "border-gray-700" : "border-gray-300"
//               }`}
//             >
//               <User size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="User Name"
//                 className={`w-full outline-none text-sm ${
//                   darkMode ? "bg-gray-800" : "bg-white"
//                 }`}
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
//             <div
//               className={`flex items-center border rounded-lg px-3 py-2 ${
//                 darkMode ? "border-gray-700" : "border-gray-300"
//               }`}
//             >
//               <MapPin size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="Education"
//                 className={`w-full outline-none text-sm ${
//                   darkMode ? "bg-gray-800" : "bg-white"
//                 }`}
//               />
//             </div>
//           </div>

//           {/* Designation */}
//           <div>
//             <label className="text-sm">Designation</label>
//             <div
//               className={`flex items-center border rounded-lg px-3 py-2 ${
//                 darkMode ? "border-gray-700" : "border-gray-300"
//               }`}
//             >
//               <Calendar size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="Designation"
//                 className={`w-full outline-none text-sm ${
//                   darkMode ? "bg-gray-800" : "bg-white"
//                 }`}
//               />
//             </div>
//           </div>

//           {/* Department */}
//           <div>
//             <label className="text-sm">Select Department</label>
//             <div
//               className={`flex items-center border rounded-lg px-3 py-2 ${
//                 darkMode ? "border-gray-700" : "border-gray-300"
//               }`}
//             >
//               <Droplet size={16} className="text-gray-400 mr-2" />
//               <select
//                 className={`w-full outline-none text-sm ${
//                   darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-700"
//                 }`}
//               >
//                 <option>Select Department</option>
//                 <option>Cardiology</option>
//                 <option>Neurology</option>
//                 <option>Orthopedic</option>
//                 <option>Dermatology</option>
//                 <option>Pediatrics</option>
//               </select>
//             </div>
//           </div>

//           {/* Other Fields (DOB, City, Country, etc.) */}
//           {/* -- Keep your remaining fields here -- */}

//         </form>

//         {/* Buttons */}
//         <div className="flex justify-end mt-6 gap-3">
//           <button
//             type="submit"
//             className="bg-[rgb(213,151,71)] text-white px-5 py-2 rounded-md hover:bg-[rgb(190,130,60)]"
//           >
//             Submit
//           </button>
//           <button
//             className={`px-5 py-2 rounded-md border ${
//               darkMode
//                 ? "border-gray-600 text-gray-200"
//                 : "border-gray-300 text-gray-700"
//             }`}
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import API from "../../../../API/api";

export default function DoctorAdd({ darkMode }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    specialization: "",
    experience: "",
    education: "",
    gender: "",
    city: "",
    state: "",
    country: "",
    status: "active",
    bio: "",
    date_of_birth: "",
    department: "",
  });

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    console.log("🧾 Sending doctor data:", formData);

    try {
      const res = await API.post("/doctors", formData);
      if (res.status === 200 || res.status === 201) {
        alert("Doctor added successfully!");
        navigate("/admin/doctors/list");
      }
    } catch (err) {
      // console.error("Error adding doctor:", err);
      // setError("Failed to add doctor. Please check your input.");
      console.error("Error adding doctor:", err.response?.data);
setError(
  err.response?.data?.message ||
  JSON.stringify(err.response?.data) ||
  "Failed to add doctor. Please check your input."
);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="w-[98%]">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h1
            className={`text-lg font-semibold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Add Doctor
          </h1>

          <div
            className={`flex items-center gap-2 text-sm ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <p className="flex items-center text-[rgb(213,151,71)] gap-1">
              TrendX <ChevronRight size={16} />
            </p>
            <p className="flex items-center gap-1">
              Admin <ChevronRight size={16} />
            </p>
            <p>Add Doctor</p>
          </div>
        </div>
      </div>

      <div
        className={`rounded-2xl shadow-md p-6 transition-colors duration-500 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2
          className={`text-lg font-semibold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Doctor Information
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Firstname */}
          <div>
            <label className="block mb-1 text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
              className={`w-full p-2 rounded border ${
                darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
              }`}
            />
          </div>

          {/* Lastname */}
          <div>
            <label className="block mb-1 text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
              className={`w-full p-2 rounded border ${
                darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
              }`}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full p-2 rounded border ${
                darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
              }`}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className={`w-full p-2 rounded border ${
                darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
              }`}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 text-sm font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`w-full p-2 rounded border ${
                darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
              }`}
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 text-sm font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className={`w-full p-2 rounded border ${
                darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
              }`}
            />
          </div>

          {/* Specialization */}
          <div>
            <label className="block mb-1 text-sm font-medium">Specialization</label>
            <input
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              required
              className={`w-full p-2 rounded border ${
                darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
              }`}
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block mb-1 text-sm font-medium">Experience</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className={`w-full p-2 rounded border ${
                darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
              }`}
            />
          </div>

          {/* Education */}
          <div>
            <label className="block mb-1 text-sm font-medium">Education</label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              required
              className={`w-full p-2 rounded border ${
                darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
              }`}
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-1 text-sm font-medium">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className={`w-full p-2 rounded border ${
                darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
              }`}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block mb-1 text-sm font-medium">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full p-2 rounded border ${
                darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
              }`}
            />
          </div>

          {/* State */}
          <div>
            <label className="block mb-1 text-sm font-medium">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={`w-full p-2 rounded border ${
                darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
              }`}
            />
          </div>

          {/* Country */}
          <div>
            <label className="block mb-1 text-sm font-medium">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`w-full p-2 rounded border ${
                darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
              }`}
            />
          </div>

          {/* Department */}
          <div>
            <label className="block mb-1 text-sm font-medium">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className={`w-full p-2 rounded border ${
                darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
              }`}
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block mb-1 text-sm font-medium">Date of Birth</label>
            <input
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              required
              className={`w-full p-2 rounded border ${
                darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
              }`}
            />
          </div>

          {/* Bio */}
          <div className="sm:col-span-2">
            <label className="block mb-1 text-sm font-medium">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows="3"
              className={`w-full p-2 rounded border ${
                darkMode ? "bg-gray-700 border-gray-600 text-gray-100" : "border-gray-300"
              }`}
            />
          </div>

          {/* Error */}
          {error && (
            <div className="sm:col-span-2 text-center text-red-500 text-sm">
              {error}
            </div>
          )}

          {/* Submit */}
          <div className="sm:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-[rgb(213,151,71)] px-6 py-2 rounded text-white text-sm hover:bg-[rgb(190,130,60)] transition"
            >
              {loading ? "Saving..." : "Add Doctor"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

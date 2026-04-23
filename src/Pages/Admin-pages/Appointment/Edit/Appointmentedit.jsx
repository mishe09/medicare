// import {
//   User,
//   Phone,
//   Calendar,
//   Stethoscope,
//   ClipboardList,
//   MapPin,
//   Mail,
//   ChevronRight,
// } from "lucide-react";

// export default function PatientDetail({darkMode}) {
//   return (
//     <div className="min-h-screen px-4 md:px-8 py-6">
//       {/* 🔹 Top Header Section */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-lg font-semibold">Appointment Book</h1>

//         <div className="flex items-center gap-2 text-sm text-gray-600">
//           <p className="flex items-center text-[rgb(213,151,71)] gap-1">
//             TrendX <ChevronRight size={14} />
//           </p>
//           <p className="flex items-center gap-1">
//             Appointment <ChevronRight size={14} />
//           </p>
//           <p className="font-medium text-gray-700">Book</p>
//         </div>
//       </div>

//       {/* 🔹 Form Container */}
//       <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
//         <h2 className="text-md font-semibold mb-4 text-gray-700">
//           Basic Information
//         </h2>

//         <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {/* 🔸 First Name */}
//           <div>
//             <label className="text-sm">First Name</label>
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <User size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 defaultValue="John"
//                 className="w-full outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* 🔸 Last Name */}
//           <div>
//             <label className="text-sm">Last Name</label>
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <User size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 defaultValue="Doe"
//                 className="w-full outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* 🔸 Mobile */}
//           <div>
//             <label className="text-sm">Mobile Number</label>
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <Phone size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="Mobile Number"
//                 defaultValue="+234 801 234 5678"
//                 className="w-full outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* 🔸 Email */}
//           <div>
//             <label className="text-sm">Email Address</label>
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <Mail size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 defaultValue="john.doe@example.com"
//                 className="w-full outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* 🔸 Address */}
//           <div>
//             <label className="text-sm">Address</label>
//             <div className="flex items-center border rounded-lg px-3 py-2">
//               <MapPin size={16} className="text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="Patient Address"
//                 defaultValue="23 Broad Street, Lagos"
//                 className="w-full outline-none text-sm"
//               />
//             </div>
//           </div>

//           {/* 🔸 Gender */}
//           <div>
//             <label className="text-sm">Gender</label>
//             <div className="flex items-center gap-3 mt-1">
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="gender" defaultChecked /> Male
//               </label>
//               <label className="flex items-center gap-1">
//                 <input type="radio" name="gender" /> Female
//               </label>
//             </div>
//           </div>
//         </form>

//         {/* 🔹 Appointment Details Section */}
//         <div className="mt-8 pt-6">
//           <h2 className="text-md font-semibold mb-4 text-gray-700">
//             Appointment Details
//           </h2>

//           <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {/* 🔸 Date of Appointment */}
//             <div>
//               <label className="text-sm">Date of Appointment</label>
//               <div className="flex items-center border rounded-lg px-3 py-2">
//                 <Calendar size={16} className="text-gray-400 mr-2" />
//                 <input
//                   type="date"
//                   defaultValue="2025-10-15"
//                   className="w-full outline-none text-sm text-gray-500"
//                 />
//               </div>
//             </div>

//             {/* 🔸 From + To */}
//             <div className="flex gap-3">
//               <div className="w-1/2">
//                 <label className="text-sm">From</label>
//                 <div className="flex items-center border rounded-lg px-3 py-2">
//                   <Calendar size={16} className="text-gray-400 mr-2" />
//                   <input
//                     type="time"
//                     defaultValue="09:00"
//                     className="w-full outline-none text-sm text-gray-500"
//                   />
//                 </div>
//               </div>

//               <div className="w-1/2">
//                 <label className="text-sm">To</label>
//                 <div className="flex items-center border rounded-lg px-3 py-2">
//                   <Calendar size={16} className="text-gray-400 mr-2" />
//                   <input
//                     type="time"
//                     defaultValue="09:45"
//                     className="w-full outline-none text-sm text-gray-500"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* 🔸 Consulting Doctor */}
//             <div>
//               <label className="text-sm">Consulting Doctor</label>
//               <div className="flex items-center border rounded-lg px-3 py-2">
//                 <Stethoscope size={16} className="text-gray-400 mr-2" />
//                 <select
//                   className="w-full outline-none text-sm text-gray-700 bg-transparent"
//                   defaultValue="dr-joseph"
//                 >
//                   <option value="">Select Doctor</option>
//                   <option value="dr-smith">Dr. Michael Smith (Cardiologist)</option>
//                   <option value="dr-rose">Dr. Emily Rose (Dermatologist)</option>
//                   <option value="dr-joseph">Dr. Hadassah Joseph (General Physician)</option>
//                   <option value="dr-kumar">Dr. Rakesh Kumar (Pediatrician)</option>
//                   <option value="dr-lee">Dr. Sarah Lee (Neurologist)</option>
//                 </select>
//               </div>
//             </div>

//             {/* 🔸 Treatment */}
//             <div>
//               <label className="text-sm">Treatment</label>
//               <div className="flex items-center border rounded-lg px-3 py-2">
//                 <ClipboardList size={16} className="text-gray-400 mr-2" />
//                 <input
//                   type="text"
//                   placeholder="Treatment Details"
//                   defaultValue="General Health Checkup"
//                   className="w-full outline-none text-sm"
//                 />
//               </div>
//             </div>
//           </form>
//         </div>

//         {/* 🔹 Submit Buttons */}
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
  Stethoscope,
  ClipboardList,
  MapPin,
  Mail,
  ChevronRight,
} from "lucide-react";

export default function PatientDetail({ darkMode }) {
  return (
    <div
      className={`min-h-screen px-4 md:px-8 py-6 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {/* 🔹 Top Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1
          className={`text-lg font-semibold ${
            darkMode ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Appointment Book
        </h1>

        <div
          className={`flex items-center gap-2 text-sm ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <p className="flex items-center text-[rgb(213,151,71)] gap-1">
            TrendX <ChevronRight size={14} />
          </p>
          <p className="flex items-center gap-1">
            Appointment <ChevronRight size={14} />
          </p>
          <p
            className={`font-medium ${
              darkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Book
          </p>
        </div>
      </div>

      {/* 🔹 Form Container */}
      <div
        className={`p-4 md:p-6 rounded-lg shadow-md transition-colors duration-500 ${
          darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
        }`}
      >
        <h2
          className={`text-md font-semibold mb-4 ${
            darkMode ? "text-gray-100" : "text-gray-700"
          }`}
        >
          Basic Information
        </h2>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* 🔸 First Name */}
          <div>
            <label className="text-sm">First Name</label>
            <div
              className={`flex items-center border rounded-lg px-3 py-2 ${
                darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300"
              }`}
            >
              <User size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="First Name"
                defaultValue="John"
                className={`w-full outline-none text-sm bg-transparent ${
                  darkMode ? "text-gray-100" : "text-gray-900"
                }`}
              />
            </div>
          </div>

          {/* 🔸 Last Name */}
          <div>
            <label className="text-sm">Last Name</label>
            <div
              className={`flex items-center border rounded-lg px-3 py-2 ${
                darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300"
              }`}
            >
              <User size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Last Name"
                defaultValue="Doe"
                className={`w-full outline-none text-sm bg-transparent ${
                  darkMode ? "text-gray-100" : "text-gray-900"
                }`}
              />
            </div>
          </div>

          {/* 🔸 Mobile */}
          <div>
            <label className="text-sm">Mobile Number</label>
            <div
              className={`flex items-center border rounded-lg px-3 py-2 ${
                darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300"
              }`}
            >
              <Phone size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Mobile Number"
                defaultValue="+234 801 234 5678"
                className={`w-full outline-none text-sm bg-transparent ${
                  darkMode ? "text-gray-100" : "text-gray-900"
                }`}
              />
            </div>
          </div>

          {/* 🔸 Email */}
          <div>
            <label className="text-sm">Email Address</label>
            <div
              className={`flex items-center border rounded-lg px-3 py-2 ${
                darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300"
              }`}
            >
              <Mail size={16} className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Email Address"
                defaultValue="john.doe@example.com"
                className={`w-full outline-none text-sm bg-transparent ${
                  darkMode ? "text-gray-100" : "text-gray-900"
                }`}
              />
            </div>
          </div>

          {/* 🔸 Address */}
          <div>
            <label className="text-sm">Address</label>
            <div
              className={`flex items-center border rounded-lg px-3 py-2 ${
                darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300"
              }`}
            >
              <MapPin size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Patient Address"
                defaultValue="23 Broad Street, Lagos"
                className={`w-full outline-none text-sm bg-transparent ${
                  darkMode ? "text-gray-100" : "text-gray-900"
                }`}
              />
            </div>
          </div>

          {/* 🔸 Gender */}
          <div>
            <label className="text-sm">Gender</label>
            <div className="flex items-center gap-3 mt-1">
              <label className="flex items-center gap-1">
                <input type="radio" name="gender" defaultChecked /> Male
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="gender" /> Female
              </label>
            </div>
          </div>
        </form>

        {/* 🔹 Appointment Details Section */}
        <div className="mt-8 pt-6">
          <h2
            className={`text-md font-semibold mb-4 ${
              darkMode ? "text-gray-100" : "text-gray-700"
            }`}
          >
            Appointment Details
          </h2>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 🔸 Date of Appointment */}
            <div>
              <label className="text-sm">Date of Appointment</label>
              <div
                className={`flex items-center border rounded-lg px-3 py-2 ${
                  darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300"
                }`}
              >
                <Calendar size={16} className="text-gray-400 mr-2" />
                <input
                  type="date"
                  defaultValue="2025-10-15"
                  className={`w-full outline-none text-sm bg-transparent ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                />
              </div>
            </div>

            {/* 🔸 From + To */}
            <div className="flex gap-3">
              <div className="w-1/2">
                <label className="text-sm">From</label>
                <div
                  className={`flex items-center border rounded-lg px-3 py-2 ${
                    darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300"
                  }`}
                >
                  <Calendar size={16} className="text-gray-400 mr-2" />
                  <input
                    type="time"
                    defaultValue="09:00"
                    className={`w-full outline-none text-sm bg-transparent ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  />
                </div>
              </div>

              <div className="w-1/2">
                <label className="text-sm">To</label>
                <div
                  className={`flex items-center border rounded-lg px-3 py-2 ${
                    darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300"
                  }`}
                >
                  <Calendar size={16} className="text-gray-400 mr-2" />
                  <input
                    type="time"
                    defaultValue="09:45"
                    className={`w-full outline-none text-sm bg-transparent ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* 🔸 Consulting Doctor */}
            <div>
              <label className="text-sm">Consulting Doctor</label>
              <div
                className={`flex items-center border rounded-lg px-3 py-2 ${
                  darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300"
                }`}
              >
                <Stethoscope size={16} className="text-gray-400 mr-2" />
                <select
                  className={`w-full outline-none text-sm bg-transparent ${
                    darkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                  defaultValue="dr-joseph"
                >
                  <option value="">Select Doctor</option>
                  <option value="dr-smith">Dr. Michael Smith (Cardiologist)</option>
                  <option value="dr-rose">Dr. Emily Rose (Dermatologist)</option>
                  <option value="dr-joseph">
                    Dr. Hadassah Joseph (General Physician)
                  </option>
                  <option value="dr-kumar">Dr. Rakesh Kumar (Pediatrician)</option>
                  <option value="dr-lee">Dr. Sarah Lee (Neurologist)</option>
                </select>
              </div>
            </div>

            {/* 🔸 Treatment */}
            <div>
              <label className="text-sm">Treatment</label>
              <div
                className={`flex items-center border rounded-lg px-3 py-2 ${
                  darkMode ? "border-gray-600 bg-gray-700" : "border-gray-300"
                }`}
              >
                <ClipboardList size={16} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Treatment Details"
                  defaultValue="General Health Checkup"
                  className={`w-full outline-none text-sm bg-transparent ${
                    darkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                />
              </div>
            </div>
          </form>
        </div>

        {/* 🔹 Submit Buttons */}
        <div className="flex justify-end mt-6 gap-3">
          <button
            type="submit"
            className="bg-[rgb(213,151,71)] text-white px-5 py-2 rounded-md hover:bg-[rgb(190,130,60)]"
          >
            Submit
          </button>
          <button
            className={`px-5 py-2 rounded-md ${
              darkMode
                ? "border border-gray-500 text-gray-200"
                : "border border-gray-300 text-gray-700"
            }`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

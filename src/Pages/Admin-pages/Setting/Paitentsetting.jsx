// import React from "react";

// const Paitentsetting = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row gap-6 p-6">
//       {/* 🧍‍♂️ USER INFO BOX */}
//       <div className="bg-white rounded-2xl shadow-md p-6 w-full md:w-2/3 flex flex-col">
//         {/* Avatar */}
//         <div className="mb-5">
//           <img
//             src="https://randomuser.me/api/portraits/men/45.jpg"
//             alt="User Avatar"
//             className="w-24 h-24 rounded-full object-cover"
//           />
//         </div>

//         {/* Form */}
//         <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
//           <div className="flex flex-col">
//             <label className="text-gray-600 text-sm mb-1">First Name</label>
//             <input
//               type="text"
//               placeholder="Enter first name"
//               className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgba(213,151,71,0.6)]"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-gray-600 text-sm mb-1">Last Name</label>
//             <input
//               type="text"
//               placeholder="Enter last name"
//               className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgba(213,151,71,0.6)]"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-gray-600 text-sm mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="example@email.com"
//               className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgba(213,151,71,0.6)]"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-gray-600 text-sm mb-1">Contact Number</label>
//             <input
//               type="tel"
//               placeholder="+234 800 000 0000"
//               className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgba(213,151,71,0.6)]"
//             />
//           </div>
//           <div className="flex flex-col md:col-span-2">
//             <label className="text-gray-600 text-sm mb-1">Address</label>
//             <input
//               type="text"
//               placeholder="Enter your address"
//               className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgba(213,151,71,0.6)]"
//             />
//           </div>
//         </form>

//         {/* Save Button */}
//         <div className="w-full flex justify-start mt-6">
//           <button className="bg-[rgba(213,151,71,1)] text-white font-medium py-2 px-6 rounded-md hover:bg-[rgba(213,151,71,0.9)] transition">
//             Save Changes
//           </button>
//         </div>
//       </div>

//       {/* 🔐 CHANGE PASSWORD BOX */}
//       <div className="bg-white rounded-2xl shadow-md p-6 w-full md:w-1/3 h-fit">
//         <h2 className="text-lg font-semibold text-gray-800 mb-5">
//           Change Password
//         </h2>
//         <form className="flex flex-col gap-4">
//           <div className="flex flex-col">
//             <label className="text-gray-600 text-sm mb-1">
//               Current Password
//             </label>
//             <input
//               type="password"
//               placeholder="Enter current password"
//               className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgba(213,151,71,0.6)]"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-gray-600 text-sm mb-1">New Password</label>
//             <input
//               type="password"
//               placeholder="Enter new password"
//               className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgba(213,151,71,0.6)]"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-gray-600 text-sm mb-1">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               placeholder="Confirm new password"
//               className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[rgba(213,151,71,0.6)]"
//             />
//           </div>
//           <button className="bg-[rgba(213,151,71,1)] text-white font-medium py-2 px-6 rounded-md mt-3 hover:bg-[rgba(213,151,71,0.9)] transition">
//             Confirm Password
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Paitentsetting;



// import { User, Mail, Phone, MapPin, Lock, ChevronRight } from "lucide-react";

// export default function ProfileSetting({ darkMode}) {
//   return (
//     <div
//       className={`min-h-screen px-4 md:px-8 py-6 transition-colors duration-300 ${
//         darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
//       }`}
//     >
//       {/* 🔹 Top Header Section */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-lg font-semibold">Profile Settings</h1>

//         <div
//           className={`flex items-center gap-2 text-sm ${
//             darkMode ? "text-gray-300" : "text-gray-600"
//           }`}
//         >
//           <p className="flex items-center text-[rgb(213,151,71)] gap-1">
//             TrendX <ChevronRight size={14} />
//           </p>
//           <p className="flex items-center gap-1">
//             Settings <ChevronRight size={14} />
//           </p>
//           <p
//             className={`font-medium ${
//               darkMode ? "text-gray-100" : "text-gray-700"
//             }`}
//           >
//             Profile
//           </p>
//         </div>
//       </div>

//       {/* 🔹 Main Container */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Left Box — Profile Info */}
//         <div
//           className={`rounded-lg shadow-md p-6 border transition-all duration-300 ${
//             darkMode
//               ? "bg-gray-800/80 border-gray-700/60"
//               : "bg-white/80 border-gray-200"
//           }`}
//         >
//           <div className="flex flex-col mb-6">
//             <img
//               src="/Home-assets/avatar-1.jpg"
//               alt="Profile Avatar"
//               className="w-20 h-20 rounded-full object-cover"
//             />
//             <h3 className="mt-3 text-md font-semibold">John Doe</h3>
//             <p
//               className={`text-sm ${
//                 darkMode ? "text-gray-400" : "text-gray-500"
//               }`}
//             >
//               Patient
//             </p>
//           </div>

//           <form className="space-y-4">
//             {/* First Name */}
//             <div>
//               <label className="text-sm">First Name</label>
//               <div
//                 className={`flex items-center border rounded-lg px-3 py-2 ${
//                   darkMode ? "border-gray-600 bg-gray-900/40" : "border-gray-300"
//                 }`}
//               >
//                 <User size={16} className="text-gray-400 mr-2" />
//                 <input
//                   type="text"
//                   defaultValue="John"
//                   placeholder="First Name"
//                   className={`w-full outline-none text-sm bg-transparent ${
//                     darkMode ? "text-white" : "text-black"
//                   }`}
//                 />
//               </div>
//             </div>

//             {/* Last Name */}
//             <div>
//               <label className="text-sm">Last Name</label>
//               <div
//                 className={`flex items-center border rounded-lg px-3 py-2 ${
//                   darkMode ? "border-gray-600 bg-gray-900/40" : "border-gray-300"
//                 }`}
//               >
//                 <User size={16} className="text-gray-400 mr-2" />
//                 <input
//                   type="text"
//                   defaultValue="Doe"
//                   placeholder="Last Name"
//                   className={`w-full outline-none text-sm bg-transparent ${
//                     darkMode ? "text-white" : "text-black"
//                   }`}
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label className="text-sm">Email</label>
//               <div
//                 className={`flex items-center border rounded-lg px-3 py-2 ${
//                   darkMode ? "border-gray-600 bg-gray-900/40" : "border-gray-300"
//                 }`}
//               >
//                 <Mail size={16} className="text-gray-400 mr-2" />
//                 <input
//                   type="email"
//                   defaultValue="john.doe@example.com"
//                   placeholder="Email Address"
//                   className={`w-full outline-none text-sm bg-transparent ${
//                     darkMode ? "text-white" : "text-black"
//                   }`}
//                 />
//               </div>
//             </div>

//             {/* Contact Number */}
//             <div>
//               <label className="text-sm">Contact Number</label>
//               <div
//                 className={`flex items-center border rounded-lg px-3 py-2 ${
//                   darkMode ? "border-gray-600 bg-gray-900/40" : "border-gray-300"
//                 }`}
//               >
//                 <Phone size={16} className="text-gray-400 mr-2" />
//                 <input
//                   type="text"
//                   defaultValue="+234 801 234 5678"
//                   placeholder="Contact Number"
//                   className={`w-full outline-none text-sm bg-transparent ${
//                     darkMode ? "text-white" : "text-black"
//                   }`}
//                 />
//               </div>
//             </div>

//             {/* Address */}
//             <div>
//               <label className="text-sm">Address</label>
//               <div
//                 className={`flex items-center border rounded-lg px-3 py-2 ${
//                   darkMode ? "border-gray-600 bg-gray-900/40" : "border-gray-300"
//                 }`}
//               >
//                 <MapPin size={16} className="text-gray-400 mr-2" />
//                 <input
//                   type="text"
//                   defaultValue="23 Broad Street, Lagos"
//                   placeholder="Address"
//                   className={`w-full outline-none text-sm bg-transparent ${
//                     darkMode ? "text-white" : "text-black"
//                   }`}
//                 />
//               </div>
//             </div>

//             {/* Save Button */}
//             <button
//               type="submit"
//               className="w-full bg-[rgb(213,151,71)] text-white py-2 rounded-md hover:bg-[rgb(190,130,60)] transition"
//             >
//               Save Changes
//             </button>
//           </form>
//         </div>

//         {/* Right Box — Change Password */}
//         <div
//           className={`rounded-lg shadow-md p-6 border transition-all duration-300 ${
//             darkMode
//               ? "bg-gray-800/80 border-gray-700/60"
//               : "bg-white/80 border-gray-200"
//           }`}
//         >
//           <h2
//             className={`text-md font-semibold mb-4 ${
//               darkMode ? "text-gray-100" : "text-gray-700"
//             }`}
//           >
//             Change Password
//           </h2>

//           <form className="space-y-4">
//             {/* Current Password */}
//             <div>
//               <label className="text-sm">Current Password</label>
//               <div
//                 className={`flex items-center border rounded-lg px-3 py-2 ${
//                   darkMode ? "border-gray-600 bg-gray-900/40" : "border-gray-300"
//                 }`}
//               >
//                 <Lock size={16} className="text-gray-400 mr-2" />
//                 <input
//                   type="password"
//                   placeholder="Enter Current Password"
//                   className={`w-full outline-none text-sm bg-transparent ${
//                     darkMode ? "text-white" : "text-black"
//                   }`}
//                 />
//               </div>
//             </div>

//             {/* New Password */}
//             <div>
//               <label className="text-sm">New Password</label>
//               <div
//                 className={`flex items-center border rounded-lg px-3 py-2 ${
//                   darkMode ? "border-gray-600 bg-gray-900/40" : "border-gray-300"
//                 }`}
//               >
//                 <Lock size={16} className="text-gray-400 mr-2" />
//                 <input
//                   type="password"
//                   placeholder="Enter New Password"
//                   className={`w-full outline-none text-sm bg-transparent ${
//                     darkMode ? "text-white" : "text-black"
//                   }`}
//                 />
//               </div>
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label className="text-sm">Confirm Password</label>
//               <div
//                 className={`flex items-center border rounded-lg px-3 py-2 ${
//                   darkMode ? "border-gray-600 bg-gray-900/40" : "border-gray-300"
//                 }`}
//               >
//                 <Lock size={16} className="text-gray-400 mr-2" />
//                 <input
//                   type="password"
//                   placeholder="Confirm Password"
//                   className={`w-full outline-none text-sm bg-transparent ${
//                     darkMode ? "text-white" : "text-black"
//                   }`}
//                 />
//               </div>
//             </div>

//             {/* Confirm Button */}
//             <button
//               type="submit"
//               className="w-full bg-[rgb(213,151,71)] text-white py-2 rounded-md hover:bg-[rgb(190,130,60)] transition"
//             >
//               Confirm Password
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }



import { User, Mail, Phone, MapPin, Lock, ChevronRight } from "lucide-react";

export default function ProfileSetting({ darkMode }) {
  return (
    <div
      className={`min-h-screen px-4 md:px-8 py-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
    >
      {/* 🔹 Top Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold">Profile Settings</h1>

        <div
          className={`flex items-center gap-2 text-sm ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <p className="flex items-center text-[rgb(213,151,71)] gap-1">
            TrendX <ChevronRight size={14} />
          </p>
          <p className="flex items-center gap-1">
            Settings <ChevronRight size={14} />
          </p>
          <p
            className={`font-medium ${
              darkMode ? "text-gray-100" : "text-gray-700"
            }`}
          >
            Profile
          </p>
        </div>
      </div>

      {/* 🔹 Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Box — Profile Info */}
        <div
          className={`rounded-lg shadow-md p-6 border transition-all duration-300 ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex flex-col mb-6">
            <img
              src="/Home-assets/avatar-1.jpg"
              alt="Profile Avatar"
              className="w-20 h-20 rounded-full object-cover"
            />
            <h3 className="mt-3 text-md font-semibold">John Doe</h3>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Patient
            </p>
          </div>

          <form className="space-y-4">
            {/* First Name */}
            <div>
              <label className="text-sm">First Name</label>
              <div
                className={`flex items-center border rounded-lg px-3 py-2 ${
                  darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
                }`}
              >
                <User size={16} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  defaultValue="John"
                  placeholder="First Name"
                  className={`w-full outline-none text-sm bg-transparent ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label className="text-sm">Last Name</label>
              <div
                className={`flex items-center border rounded-lg px-3 py-2 ${
                  darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
                }`}
              >
                <User size={16} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  defaultValue="Doe"
                  placeholder="Last Name"
                  className={`w-full outline-none text-sm bg-transparent ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm">Email</label>
              <div
                className={`flex items-center border rounded-lg px-3 py-2 ${
                  darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
                }`}
              >
                <Mail size={16} className="text-gray-400 mr-2" />
                <input
                  type="email"
                  defaultValue="john.doe@example.com"
                  placeholder="Email Address"
                  className={`w-full outline-none text-sm bg-transparent ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                />
              </div>
            </div>

            {/* Contact Number */}
            <div>
              <label className="text-sm">Contact Number</label>
              <div
                className={`flex items-center border rounded-lg px-3 py-2 ${
                  darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
                }`}
              >
                <Phone size={16} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  defaultValue="+234 801 234 5678"
                  placeholder="Contact Number"
                  className={`w-full outline-none text-sm bg-transparent ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="text-sm">Address</label>
              <div
                className={`flex items-center border rounded-lg px-3 py-2 ${
                  darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
                }`}
              >
                <MapPin size={16} className="text-gray-400 mr-2" />
                <input
                  type="text"
                  defaultValue="23 Broad Street, Lagos"
                  placeholder="Address"
                  className={`w-full outline-none text-sm bg-transparent ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                />
              </div>
            </div>

            {/* Save Button */}
            <button
              type="submit"
              className="w-full bg-[rgb(213,151,71)] text-white py-2 rounded-md hover:bg-[rgb(190,130,60)] transition"
            >
              Save Changes
            </button>
          </form>
        </div>

        {/* Right Box — Change Password */}
        <div
          className={`rounded-lg shadow-md p-6 border transition-all duration-300 ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          <h2
            className={`text-md font-semibold mb-4 ${
              darkMode ? "text-gray-100" : "text-gray-700"
            }`}
          >
            Change Password
          </h2>

          <form className="space-y-4">
            {/* Current Password */}
            <div>
              <label className="text-sm">Current Password</label>
              <div
                className={`flex items-center border rounded-lg px-3 py-2 ${
                  darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
                }`}
              >
                <Lock size={16} className="text-gray-400 mr-2" />
                <input
                  type="password"
                  placeholder="Enter Current Password"
                  className={`w-full outline-none text-sm bg-transparent ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                />
              </div>
            </div>

            {/* New Password */}
            <div>
              <label className="text-sm">New Password</label>
              <div
                className={`flex items-center border rounded-lg px-3 py-2 ${
                  darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
                }`}
              >
                <Lock size={16} className="text-gray-400 mr-2" />
                <input
                  type="password"
                  placeholder="Enter New Password"
                  className={`w-full outline-none text-sm bg-transparent ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm">Confirm Password</label>
              <div
                className={`flex items-center border rounded-lg px-3 py-2 ${
                  darkMode ? "border-gray-600 bg-gray-900" : "border-gray-300"
                }`}
              >
                <Lock size={16} className="text-gray-400 mr-2" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className={`w-full outline-none text-sm bg-transparent ${
                    darkMode ? "text-white" : "text-black"
                  }`}
                />
              </div>
            </div>

            {/* Confirm Button */}
            <button
              type="submit"
              className="w-full bg-[rgb(213,151,71)] text-white py-2 rounded-md hover:bg-[rgb(190,130,60)] transition"
            >
              Confirm Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import { ChevronRight, Star } from "lucide-react";

// export default function DoctorDetails({darkMode}) {
//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
//       {/* 🧭 Breadcrumb Header */}
//       <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
//         <h1 className="text-lg md:text-xl font-semibold text-gray-800">
//           Doctor Detail
//         </h1>
//         <div className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
//           <p className="flex items-center text-[rgb(213,151,71)] gap-1">
//             TrendX <ChevronRight size={16} />
//           </p>
//           <p className="flex items-center gap-1">
//             Admin <ChevronRight size={16} />
//           </p>
//           <p>Doctor Detail</p>
//         </div>
//       </div>

//       {/* 👩🏽‍⚕️ Doctor Overview Section */}
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* ===================== 🩺 Profile Card ===================== */}
//         <div className="flex-1 flex flex-col gap-6">
//           <div className="bg-white rounded-2xl shadow p-5 flex flex-col sm:flex-row items-center gap-6">
//             <img
//               src="https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
//               alt="Doctor portrait"
//               className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl object-cover border-2"
//             />
//             <div className="mt-4 w-full">

//               <div className="flex justify-between text-sm py-2">
//                 <span>Dr. Hadassah Joseph</span>
//               </div>
//               <div className="flex justify-between text-sm py-1">
//                 <span>MBBS, MS-General Surgery, General physican</span>
//               </div>
//               <div className="flex justify-between text-sm py-1">
//                 <span>12 Years Experiences</span>
//               </div>
//               <div className="flex items-center gap-2 text-sm py-1">  
//                 <div className="flex text-yellow-500">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} size={14} fill="currentColor" />
//                   ))}
//                 </div>
//                 <span>3736 Reviews</span>
//               </div>
//             </div>
//           </div>

//           {/* ===================== 🧍🏽 About Me ===================== */}
//           <div className="bg-white rounded-2xl shadow p-5">
//             <h3 className="text-lg font-semibold mb-2 text-gray-800">
//               About Me
//             </h3>
//             <p className="text-sm text-gray-700 leading-relaxed">
//               Dr. Hadassah Joseph is a renowned physician based in Lagos,
//               Nigeria. She has over 12 years of experience in internal medicine
//               and general surgery. Her approach combines evidence-based care
//               with empathy, focusing on long-term patient wellness.
//             </p>

//            <div className="mt-4">
//              <h3 className="text-lg font-semibold mb-2 text-gray-800">Email</h3>
//             <p  className="text-sm text-gray-700 leading-relaxed">josehp@gmail.com</p>
//            </div>

//            <div className="mt-4">
//              <h3 className="text-lg font-semibold mb-2 text-gray-800">Phone</h3>
//             <p  className="text-sm text-gray-700 leading-relaxed">+234 701 171 789</p>
//            </div>
//           </div>

//           {/* ===================== 📊 Working Expertise ===================== */}
//           <div className="bg-white rounded-2xl shadow p-5">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">
//               Working Expertise
//             </h3>
//             <div className="space-y-4">
//               {[
//                 {
//                   label: "OPD",
//                   number: 50,
//                   width: "50%",
//                   color: "bg-red-500",
//                 },
                
//                 { label: "Operation",
//                    number: 85, 
//                    width: "85%", 
//                    color: "bg-blue-500" 
//                   },

//                 {
//                   label: "Piatent visit",
//                   number: 20,
//                   width: "20%",
//                   color: "bg-amber-500",
//                 },
//               ].map((item, index) => (
//                 <div key={index}>
//                   <div className="flex justify-between text-sm font-medium mb-1">
//                     <span className="text-gray-700">{item.label}</span>
//                     <span className="text-gray-900">{item.number}%</span>
//                   </div>
//                   <div className="w-full bg-gray-200 h-2 rounded-full">
//                     <div
//                       className={`${item.color} h-2 rounded-full`}
//                       style={{ width: item.width }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ===================== 📍 Additional Info ===================== */}
//         <div className="flex-1 flex flex-col gap-6">
//           {/* 🏠 Address & Location */}
//           <div className="bg-white rounded-2xl shadow p-5">
//             <h3 className="text-lg font-semibold mb-2 text-gray-800">
//               Address
//             </h3>
//             <p className="text-sm text-gray-700 leading-relaxed">
//               24B, Admiralty Way, Lekki Phase 1, Lagos, Nigeria.
//               Open for consultations from Monday to Saturday, 9 AM – 5 PM.
//             </p>
//           </div>

//           {/* 🎓 Education (5 bullet points) */}
//           <div className="bg-white rounded-2xl shadow p-5">
//             <h3 className="text-lg font-semibold mb-2 text-gray-800">
//               Education
//             </h3>
//             <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
//               <li>MBBS - University of Lagos (2008)</li>
//               <li>MS - General Surgery, UNN (2012)</li>
//               <li>Residency - Lagos State Teaching Hospital</li>
//               <li>Advanced Cardiac Life Support (ACLS) Certification</li>
//               <li>Ongoing Research: Minimally Invasive Surgery Techniques</li>
//             </ul>
//           </div>

//           {/* 💼 Experience (5 bullet points) */}
//           <div className="bg-white rounded-2xl shadow p-5">
//             <h3 className="text-lg font-semibold mb-2 text-gray-800">
//               Experience
//             </h3>
//             <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
//               <li>Consultant at Lagos State University Teaching Hospital</li>
//               <li>Chief Surgeon - Dove Specialist Hospital</li>
//               <li>Medical Advisor at HealthBridge Nigeria</li>
//               <li>Visiting Lecturer - University of Lagos Medical School</li>
//               <li>12+ years of hands-on clinical experience</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from "react";
// import { ChevronRight, Star } from "lucide-react";

// export default function DoctorDetails({ darkMode }) {
//   return (
//     <div
//       className={`min-h-screen p-4 sm:p-6 md:p-8 transition-colors duration-500 ${
//         darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
//       }`}
//     >
//       {/* 🧭 Breadcrumb Header */}
//       <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
//         <h1
//           className={`text-lg md:text-xl font-semibold ${
//             darkMode ? "text-gray-100" : "text-gray-800"
//           }`}
//         >
//           Doctor Detail
//         </h1>
//         <div
//           className={`flex items-center gap-2 text-sm flex-wrap ${
//             darkMode ? "text-gray-400" : "text-gray-600"
//           }`}
//         >
//           <p className="flex items-center text-[rgb(213,151,71)] gap-1">
//             TrendX <ChevronRight size={16} />
//           </p>
//           <p className="flex items-center gap-1">
//             Admin <ChevronRight size={16} />
//           </p>
//           <p className={`${darkMode ? "text-gray-200" : ""}`}>Doctor Detail</p>
//         </div>
//       </div>

//       {/* 👩🏽‍⚕️ Doctor Overview Section */}
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* ===================== 🩺 Profile Card ===================== */}
//         <div className="flex-1 flex flex-col gap-6">
//           <div
//             className={`rounded-2xl shadow p-5 flex flex-col sm:flex-row items-center gap-6 transition-colors duration-500 ${
//               darkMode ? "bg-gray-800" : "bg-white"
//             }`}
//           >
//             <img
//               src="https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
//               alt="Doctor portrait"
//               className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl object-cover border-2"
//             />
//             <div className="mt-4 w-full">
//               <div className="flex justify-between text-sm py-2">
//                 <span
//                   className={`${darkMode ? "text-gray-100" : "text-gray-900"}`}
//                 >
//                   Dr. Hadassah Joseph
//                 </span>
//               </div>
//               <div className="flex justify-between text-sm py-1">
//                 <span
//                   className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
//                 >
//                   MBBS, MS-General Surgery, General physician
//                 </span>
//               </div>
//               <div className="flex justify-between text-sm py-1">
//                 <span
//                   className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
//                 >
//                   12 Years Experiences
//                 </span>
//               </div>
//               <div className="flex items-center gap-2 text-sm py-1">
//                 <div className="flex text-yellow-500">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} size={14} fill="currentColor" />
//                   ))}
//                 </div>
//                 <span
//                   className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
//                 >
//                   3736 Reviews
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* ===================== 🧍🏽 About Me ===================== */}
//           <div
//             className={`rounded-2xl shadow p-5 transition-colors duration-500 ${
//               darkMode ? "bg-gray-800" : "bg-white"
//             }`}
//           >
//             <h3
//               className={`text-lg font-semibold mb-2 ${
//                 darkMode ? "text-gray-100" : "text-gray-800"
//               }`}
//             >
//               About Me
//             </h3>
//             <p
//               className={`text-sm leading-relaxed ${
//                 darkMode ? "text-gray-300" : "text-gray-700"
//               }`}
//             >
//               Dr. Hadassah Joseph is a renowned physician based in Lagos,
//               Nigeria. She has over 12 years of experience in internal medicine
//               and general surgery. Her approach combines evidence-based care
//               with empathy, focusing on long-term patient wellness.
//             </p>

//             <div className="mt-4">
//               <h3
//                 className={`text-lg font-semibold mb-2 ${
//                   darkMode ? "text-gray-100" : "text-gray-800"
//                 }`}
//               >
//                 Email
//               </h3>
//               <p
//                 className={`text-sm leading-relaxed ${
//                   darkMode ? "text-gray-300" : "text-gray-700"
//                 }`}
//               >
//                 josehp@gmail.com
//               </p>
//             </div>

//             <div className="mt-4">
//               <h3
//                 className={`text-lg font-semibold mb-2 ${
//                   darkMode ? "text-gray-100" : "text-gray-800"
//                 }`}
//               >
//                 Phone
//               </h3>
//               <p
//                 className={`text-sm leading-relaxed ${
//                   darkMode ? "text-gray-300" : "text-gray-700"
//                 }`}
//               >
//                 +234 701 171 789
//               </p>
//             </div>
//           </div>

//           {/* ===================== 📊 Working Expertise ===================== */}
//           <div
//             className={`rounded-2xl shadow p-5 transition-colors duration-500 ${
//               darkMode ? "bg-gray-800" : "bg-white"
//             }`}
//           >
//             <h3
//               className={`text-lg font-semibold mb-4 ${
//                 darkMode ? "text-gray-100" : "text-gray-800"
//               }`}
//             >
//               Working Expertise
//             </h3>
//             <div className="space-y-4">
//               {[
//                 {
//                   label: "OPD",
//                   number: 50,
//                   width: "50%",
//                   color: "bg-red-500",
//                 },
//                 {
//                   label: "Operation",
//                   number: 85,
//                   width: "85%",
//                   color: "bg-blue-500",
//                 },
//                 {
//                   label: "Piatent visit",
//                   number: 20,
//                   width: "20%",
//                   color: "bg-amber-500",
//                 },
//               ].map((item, index) => (
//                 <div key={index}>
//                   <div className="flex justify-between text-sm font-medium mb-1">
//                     <span
//                       className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
//                     >
//                       {item.label}
//                     </span>
//                     <span
//                       className={`${darkMode ? "text-gray-100" : "text-gray-900"}`}
//                     >
//                       {item.number}%
//                     </span>
//                   </div>
//                   <div
//                     className={`w-full h-2 rounded-full ${
//                       darkMode ? "bg-gray-700" : "bg-gray-200"
//                     }`}
//                   >
//                     <div
//                       className={`${item.color} h-2 rounded-full`}
//                       style={{ width: item.width }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ===================== 📍 Additional Info ===================== */}
//         <div className="flex-1 flex flex-col gap-6">
//           {/* 🏠 Address & Location */}
//           <div
//             className={`rounded-2xl shadow p-5 transition-colors duration-500 ${
//               darkMode ? "bg-gray-800" : "bg-white"
//             }`}
//           >
//             <h3
//               className={`text-lg font-semibold mb-2 ${
//                 darkMode ? "text-gray-100" : "text-gray-800"
//               }`}
//             >
//               Address
//             </h3>
//             <p
//               className={`text-sm leading-relaxed ${
//                 darkMode ? "text-gray-300" : "text-gray-700"
//               }`}
//             >
//               24B, Admiralty Way, Lekki Phase 1, Lagos, Nigeria.
//               Open for consultations from Monday to Saturday, 9 AM – 5 PM.
//             </p>
//           </div>

//           {/* 🎓 Education */}
//           <div
//             className={`rounded-2xl shadow p-5 transition-colors duration-500 ${
//               darkMode ? "bg-gray-800" : "bg-white"
//             }`}
//           >
//             <h3
//               className={`text-lg font-semibold mb-2 ${
//                 darkMode ? "text-gray-100" : "text-gray-800"
//               }`}
//             >
//               Education
//             </h3>
//             <ul
//               className={`list-disc list-inside text-sm space-y-1 ${
//                 darkMode ? "text-gray-300" : "text-gray-700"
//               }`}
//             >
//               <li>MBBS - University of Lagos (2008)</li>
//               <li>MS - General Surgery, UNN (2012)</li>
//               <li>Residency - Lagos State Teaching Hospital</li>
//               <li>Advanced Cardiac Life Support (ACLS) Certification</li>
//               <li>Ongoing Research: Minimally Invasive Surgery Techniques</li>
//             </ul>
//           </div>

//           {/* 💼 Experience */}
//           <div
//             className={`rounded-2xl shadow p-5 transition-colors duration-500 ${
//               darkMode ? "bg-gray-800" : "bg-white"
//             }`}
//           >
//             <h3
//               className={`text-lg font-semibold mb-2 ${
//                 darkMode ? "text-gray-100" : "text-gray-800"
//               }`}
//             >
//               Experience
//             </h3>
//             <ul
//               className={`list-disc list-inside text-sm space-y-1 ${
//                 darkMode ? "text-gray-300" : "text-gray-700"
//               }`}
//             >
//               <li>Consultant at Lagos State University Teaching Hospital</li>
//               <li>Chief Surgeon - Dove Specialist Hospital</li>
//               <li>Medical Advisor at HealthBridge Nigeria</li>
//               <li>Visiting Lecturer - University of Lagos Medical School</li>
//               <li>12+ years of hands-on clinical experience</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ChevronRight, Star } from "lucide-react";

export default function DoctorDetails({ darkMode }) {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const res = await axios.get(
          `http://173.212.193.239:8004/api/doctors/${id}`
        );
        setDoctor(res.data);
      } catch (error) {
        console.error("Error fetching doctor:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  if (loading) {
    return (
      <div
        className={`p-10 text-center ${
          darkMode ? "text-gray-200" : "text-gray-800"
        }`}
      >
        Loading doctor details...
      </div>
    );
  }

  if (!doctor) {
    return (
      <div
        className={`p-10 text-center ${
          darkMode ? "text-gray-200" : "text-gray-800"
        }`}
      >
        Doctor not found.
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen p-4 sm:p-6 md:p-8 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* 🧭 Breadcrumb Header */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
        <h1
          className={`text-lg md:text-xl font-semibold ${
            darkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Doctor Detail
        </h1>
        <div
          className={`flex items-center gap-2 text-sm flex-wrap ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <p className="flex items-center text-[rgb(213,151,71)] gap-1">
            TrendX <ChevronRight size={16} />
          </p>
          <p className="flex items-center gap-1">
            Admin <ChevronRight size={16} />
          </p>
          <p className={`${darkMode ? "text-gray-200" : ""}`}>Doctor Detail</p>
        </div>
      </div>

      {/* ===================== PROFILE SECTION ===================== */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-6">
          <div
            className={`rounded-2xl shadow p-5 flex flex-col sm:flex-row items-center gap-6 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <img
              src={doctor?.image || "https://via.placeholder.com/150"}
              alt="Doctor portrait"
              className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl object-cover border-2"
            />

            <div className="mt-4 w-full">
              <div className="flex justify-between text-sm py-2">
                <span
                  className={`${darkMode ? "text-gray-100" : "text-gray-900"}`}
                >
                  Dr. {doctor.firstname} {doctor.lastname}
                </span>
              </div>

              <div className="flex justify-between text-sm py-1">
                <span
                  className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  {doctor.education ? doctor.education : "No education info"}
                </span>
              </div>

              <div className="flex justify-between text-sm py-1">
                <span
                  className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  {doctor.experience || "Experience not provided"}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm py-1">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <span
                  className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  0 Reviews
                </span>
              </div>
            </div>
          </div>

          {/* ===================== ABOUT ME ===================== */}
          <div
            className={`rounded-2xl shadow p-5 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3 className={`text-lg font-semibold mb-2`}>About Me</h3>
            <p
              className={`text-sm leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {doctor.bio}
            </p>

            {/* Email */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-sm">{doctor.email}</p>
            </div>

            {/* Phone */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-sm">{doctor.phone}</p>
            </div>
          </div>
        </div>

        {/* ===================== RIGHT-SIDE INFO ===================== */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Address */}
          <div
            className={`rounded-2xl shadow p-5 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-sm">{doctor.address}</p>
            <p className="text-sm mt-2">
              {doctor.city}, {doctor.state}, {doctor.country}
            </p>
          </div>

          {/* Education */}
          <div
            className={`rounded-2xl shadow p-5 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3 className="text-lg font-semibold mb-2">Education</h3>
            <p className="text-sm whitespace-pre-line">{doctor.education}</p>
          </div>

          {/* Experience */}
          <div
            className={`rounded-2xl shadow p-5 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h3 className="text-lg font-semibold mb-2">Experience</h3>
            <p className="text-sm whitespace-pre-line">{doctor.experience}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

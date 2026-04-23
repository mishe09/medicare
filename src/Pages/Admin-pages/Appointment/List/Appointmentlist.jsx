
// import { ChevronRight, Eye, Pen } from "lucide-react";

// export default function Appointmentlist() {
//   const patients = [
//     {
//       id: 1,
//       name: "Chidi Okafor",
//       Designation: "Oncologist",
//       Email: "chidi.okafor@healthplus.com",
//       Degree: "MBBS",
//       MobileNumber: "0701-451-717-89",
//       JoiningDate: "12/03/2017",
//       Action: (
//         <div className="flex items-center gap-2">
//           <Pen size={16} className="cursor-pointer text-gray-600 hover:text-yellow-600" />
//           <Eye size={16} className="cursor-pointer text-gray-600 hover:text-blue-600" />
//         </div>
//       ),
//     },
//     {
//       id: 2,
//       name: "Amina Bello",
//       Designation: "Pediatrian",
//       Email: "amina.bello@lifecare.com",
//       Degree: "MD",
//       MobileNumber: "0812-334-556-77",
//       JoiningDate: "22/07/2019",
//       Action: (
//         <div className="flex items-center gap-2">
//           <Pen size={16} className="cursor-pointer text-gray-600 hover:text-yellow-600" />
//           <Eye size={16} className="cursor-pointer text-gray-600 hover:text-blue-600" />
//         </div>
//       ),
//     },
//     {
//       id: 3,
//       name: "Emeka Uzo",
//       Designation: "Nuerologist",
//       Email: "emeka.uzo@medlink.com",
//       Degree: "MBChB",
//       MobileNumber: "0706-987-221-45",
//       JoiningDate: "05/01/2020",
//       Action: (
//         <div className="flex items-center gap-2">
//           <Pen size={16} className="cursor-pointer text-gray-600 hover:text-yellow-600" />
//           <Eye size={16} className="cursor-pointer text-gray-600 hover:text-blue-600" />
//         </div>
//       ),
//     },
//     {
//       id: 4,
//       name: "Kemi Johnson",
//       Designation: "Consultant",
//       Email: "kemi.johnson@healthcity.com",
//       Degree: "MBBS",
//       MobileNumber: "0903-551-782-90",
//       JoiningDate: "15/06/2021",
//       Action: (
//         <div className="flex items-center gap-2">
//           <Pen size={16} className="cursor-pointer text-gray-600 hover:text-yellow-600" />
//           <Eye size={16} className="cursor-pointer text-gray-600 hover:text-blue-600" />
//         </div>
//       ),
//     },
//     {
//       id: 5,
//       name: "Musa Abdullahi",
//       Designation: "Radiologist",
//       Email: "musa.abdullahi@caremed.com",
//       Degree: "MD",
//       MobileNumber: "0802-764-888-34",
//       JoiningDate: "09/09/2018",
//       Action: (
//         <div className="flex items-center gap-2">
//           <Pen size={16} className="cursor-pointer text-gray-600 hover:text-yellow-600" />
//           <Eye size={16} className="cursor-pointer text-gray-600 hover:text-blue-600" />
//         </div>
//       ),
//     },
//     {
//       id: 6,
//       name: "Grace Eze",
//       Designation: "Therapist",
//       Email: "grace.eze@vitalpoint.com",
//       Degree: "MBBS",
//       MobileNumber: "0813-225-678-91",
//       JoiningDate: "11/02/2022",
//       Action: (
//         <div className="flex items-center gap-2">
//           <Pen size={16} className="cursor-pointer text-gray-600 hover:text-yellow-600" />
//           <Eye size={16} className="cursor-pointer text-gray-600 hover:text-blue-600" />
//         </div>
//       ),
//     },
//     {
//       id: 7,
//       name: "Bamidele Ayo",
//       Designation: "Dentist",
//       Email: "bamidele.ayo@medprime.com",
//       Degree: "MBBS",
//       MobileNumber: "0901-665-779-22",
//       JoiningDate: "03/11/2016",
//       Action: (
//         <div className="flex items-center gap-2">
//           <Pen size={16} className="cursor-pointer text-gray-600 hover:text-yellow-600" />
//           <Eye size={16} className="cursor-pointer text-gray-600 hover:text-blue-600" />
//         </div>
//       ),
//     },
//     {
//       id: 8,
//       name: "Ifeoma Nwosu",
//       Designation: "Gynecologist",
//       Email: "ifeoma.nwosu@citymed.com",
//       Degree: "MD",
//       MobileNumber: "0814-234-909-00",
//       JoiningDate: "25/08/2020",
//       Action: (
//         <div className="flex items-center gap-2">
//           <Pen size={16} className="cursor-pointer text-gray-600 hover:text-yellow-600" />
//           <Eye size={16} className="cursor-pointer text-gray-600 hover:text-blue-600" />
//         </div>
//       ),
//     },
//     {
//       id: 9,
//       name: "Chuka Nnamdi",
//       Designation: "Surgon",
//       Email: "chuka.nnamdi@healthmax.com",
//       Degree: "MBBS",
//       MobileNumber: "0708-112-334-55",
//       JoiningDate: "13/10/2019",
//       Action: (
//         <div className="flex items-center gap-2">
//           <Pen size={16} className="cursor-pointer text-gray-600 hover:text-yellow-600" />
//           <Eye size={16} className="cursor-pointer text-gray-600 hover:text-blue-600" />
//         </div>
//       ),
//     },
//     {
//       id: 10,
//       name: "Halima Yusuf",
//       Designation: "Therapist",
//       Email: "halima.yusuf@medtrust.com",
//       Degree: "MD",
//       MobileNumber: "0810-556-778-99",
//       JoiningDate: "07/04/2023",
//       Action: (
//         <div className="flex items-center gap-2">
//           <Pen size={16} className="cursor-pointer text-gray-600 hover:text-yellow-600" />
//           <Eye size={16} className="cursor-pointer text-gray-600 hover:text-blue-600" />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <>
//       <div className="w-[98%]">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-5">
//           <h1 className="text-lg font-semibold">Doctor List</h1>

//           <div className="flex items-center gap-2 text-sm">
//             <p className="flex items-center text-[rgb(213,151,71)] gap-1">
//               TrendX <ChevronRight size={16} />
//             </p>
//             <p className="flex items-center gap-1">
//               Admin <ChevronRight size={16} />
//             </p>
//             <p>Doctor List</p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white dark:bg-gray-800 rounded-2xl  shadow-md p-4 overflow-hidden">
//         <div className="flex justify-between items-center mb-5">
//           <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
//             Doctor List
//           </h2>

//           <button className="bg-[rgb(213,151,71)] px-3 py-1.5 rounded text-white text-sm font-light hover:bg-[rgb(190,130,60)] transition">
//             Add Doctor
//           </button>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full rounded-2xl  border-collapse border border-gray-300 dark:border-gray-700 rounded-lg text-xs sm:text-sm">
//             <thead className=" rounded-2xl  bg-[rgba(213,151,71,0.2)] text-[rgb(213,151,71)]">
//               <tr className="divide-x divide-gray-300 dark:divide-gray-700 text-center sm:text-left">
//                 <th className="p-3 sm:p-4 md:p-5">Name</th>
//                 <th className="p-3 sm:p-4 md:p-5 w-20">Designation</th>
//                 <th className="p-3 sm:p-4 md:p-5">Email</th>
//                 <th className="p-3 sm:p-4 md:p-5">Degree</th>
//                 <th className="p-3 sm:p-4 md:p-5">Mobile Number</th>
//                 <th className="p-3 sm:p-4 md:p-5 w-16">Joining Date</th>
//                 <th className="p-3 sm:p-4 md:p-5">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {patients.map((p, index) => (
//                 <tr
//                   key={p.id}
//                   className="border-t border-gray-200 dark:border-gray-700 divide-x divide-gray-200 dark:divide-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-center sm:text-left"
//                 >
//                   {/* Avatar and Name */}
//                   <td className="p-3 sm:p-4 md:p-5 flex items-center justify-center sm:justify-start gap-3">
//                     <img
//                       src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? "men" : "women"}/${index + 20}.jpg`}
//                       alt={p.name}
//                       className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-gray-300"
//                     />
//                     <span className="font-medium text-gray-800 dark:text-gray-100">
//                       {p.name.split(" ")[0]}
//                     </span>
//                   </td>

//                   {/* Gender */}
//                   <td className="p-3 sm:p-4 md:p-5 text-gray-700 dark:text-gray-200">{p.Designation}</td>

//                   {/* Address */}
//                   <td className="p-3 sm:p-4 md:p-5 text-gray-700 dark:text-gray-200">{p.Email}</td>

//                   {/* Phone */}
//                   <td className="p-3 sm:p-4 md:p-5 text-gray-700 dark:text-gray-200">{p.Degree}</td>

//                   {/* DOB */}
//                   <td className="p-3 sm:p-4 md:p-5 text-gray-700 dark:text-gray-200">{p.MobileNumber}</td>

//                   {/* Age */}
//                   <td className="p-3 sm:p-4 md:p-5 text-gray-700 dark:text-gray-200">{p.JoiningDate}</td>

//                   {/* Blood */}
//                   <td className="p-3 sm:p-4 md:p-5 text-gray-700 dark:text-gray-200">{p.Action}</td>
//                 </tr>
//               ))}
//             </tbody>

//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// import { ChevronRight, Eye, Pen } from "lucide-react";

// export default function AppointmentList() {
//   const appointments = [
//     {
//       id: 1,
//       name: "Chika Okoro",
//       doctor: "Dr. Ella",
//       treatment: "Infertility",
//       mobile: "0812-334-5567",
//       email: "chika.okoro@example.com",
//       date: "12/09/2025",
//       time: "10:30 AM",
     
//     },
//     {
//       id: 2,
//       name: "Tunde Balogun",
//       doctor: "Dr. Ella",
//       treatment: "Dental Checkup",
//       mobile: "0802-556-8899",
//       email: "tunde.balogun@example.com",
//       date: "13/09/2025",
//       time: "02:15 PM",
     
//     },
//     {
//       id: 3,
//       name: "Aisha Suleiman",
//       doctor: "Dr. Ella",
//       treatment: "Prenatal Care",
//       mobile: "0701-445-9900",
//       email: "aisha.suleiman@example.com",
//       date: "14/09/2025",
//       time: "09:00 AM",
//     },
//     {
//       id: 4,
//       name: "Emmanuel Ojo",
//       doctor: "Dr. Ella",
//       treatment: "Cardiac Checkup",
//       mobile: "0813-224-7711",
//       email: "emmanuel.ojo@example.com",
//       date: "15/09/2025",
//       time: "03:45 PM",
//     },
//     {
//       id: 5,
//       name: "Ngozi Nwachukwu",
//       doctor: "Dr. Ella",
//       treatment: "Fertility Consultation",
//       mobile: "0809-882-1122",
//       email: "ngozi.nwachukwu@example.com",
//       date: "16/09/2025",
//       time: "11:00 AM",
//     },
//     {
//       id: 6,
//       name: "David Okon",
//       doctor: "Dr. Ella",
//       treatment: "Therapy Session",
//       mobile: "0708-554-2233",
//       email: "david.okon@example.com",
//       date: "17/09/2025",
//       time: "01:20 PM",
//     },
//     {
//       id: 7,
//       name: "Fatima Abdullahi",
//       doctor: "Dr. Ella",
//       treatment: "Postnatal Checkup",
//       mobile: "0810-778-5566",
//       email: "fatima.abdullahi@example.com",
//       date: "18/09/2025",
//       time: "09:45 AM",
//     },
//     {
//       id: 8,
//       name: "Ibrahim Yusuf",
//       doctor: "Dr. Ella",
//       treatment: "General Consultation",
//       mobile: "0814-990-2234",
//       email: "ibrahim.yusuf@example.com",
//       date: "19/09/2025",
//       time: "12:00 PM",
//     },
//     {
//       id: 9,
//       name: "Blessing Edet",
//       doctor: "Dr. Ella",
//       treatment: "Skin Therapy",
//       mobile: "0816-778-8899",
//       email: "blessing.edet@example.com",
//       date: "20/09/2025",
//       time: "04:30 PM",
//     },
//     {
//       id: 10,
//       name: "Josephine Eze",
//       doctor: "Dr. Ella",
//       treatment: "Counseling",
//       mobile: "0812-667-9901",
//       email: "josephine.eze@example.com",
//       date: "21/09/2025",
//       time: "08:15 AM",
//     },
//   ];

//   return (
//     <>
//       <div className="w-[98%]">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-5">
//           <h1 className="text-lg font-semibold">Appointment List</h1>

//           <div className="flex items-center gap-2 text-sm">
//             <p className="flex items-center text-[rgb(213,151,71)] gap-1">
//               TrendX <ChevronRight size={16} />
//             </p>
//             <p className="flex items-center gap-1">
//               Admin <ChevronRight size={16} />
//             </p>
//             <p>Appointment List</p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 overflow-hidden">
//         <div className="flex justify-between items-center mb-5">
//           <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
//             Appointment List
//           </h2>

//           <button className="bg-[rgb(213,151,71)] px-3 py-1.5 rounded text-white text-sm font-light hover:bg-[rgb(190,130,60)] transition">
//             Add Appointment
//           </button>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full rounded-2xl border-collapse border border-gray-300 dark:border-gray-700 text-xs sm:text-sm">
//             <thead className="bg-[rgba(213,151,71,0.2)] text-[rgb(213,151,71)]">
//               <tr className="divide-x divide-gray-300 dark:divide-gray-700 text-center sm:text-left">
//                 <th className="p-3 sm:p-4 md:p-5">Patient Name</th>
//                 <th className="p-3 sm:p-4 md:p-5">Consulting Doctor</th>
//                 <th className="p-3 sm:p-4 md:p-5">Treatment</th>
//                 <th className="p-3 sm:p-4 md:p-5">Mobile</th>
//                 <th className="p-3 sm:p-4 md:p-5">Email</th>
//                 <th className="p-3 sm:p-4 md:p-5">Date</th>
//                 <th className="p-3 sm:p-4 md:p-5">Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {appointments.map((a) => (
//                 <tr
//                   key={a.id}
//                   className="border-t border-gray-200 dark:border-gray-700 divide-x divide-gray-200 dark:divide-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-center sm:text-left"
//                 >
//                   <td className="p-3 sm:p-4 md:p-5 font-medium text-gray-800 dark:text-gray-100">
//                     {a.name}
//                   </td>
//                   <td className="p-3 sm:p-4 md:p-5 text-gray-700 dark:text-gray-200">{a.doctor}</td>
//                   <td className="p-3 sm:p-4 md:p-5 text-gray-700 dark:text-gray-200">{a.treatment}</td>
//                   <td className="p-3 sm:p-4 md:p-5 text-gray-700 dark:text-gray-200">{a.mobile}</td>
//                   <td className="p-3 sm:p-4 md:p-5 text-gray-700 dark:text-gray-200">{a.email}</td>
//                   <td className="p-3 sm:p-4 md:p-5 text-gray-700 dark:text-gray-200">{a.date}</td>
//                   <td className="p-3 sm:p-4 md:p-5 text-gray-700 dark:text-gray-200">{a.time}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// import { ChevronRight } from "lucide-react";

// export default function AppointmentList() {
//   const appointments = [
//     { id: 1, name: "Chika Okoro", doctor: "Dr. Ella", treatment: "Infertility", mobile: "0812-334-5567", email: "chika.okoro@example.com", date: "12/09/2025", time: "10:30 AM" },
//     { id: 2, name: "Tunde Balogun", doctor: "Dr. Ella", treatment: "Dental Checkup", mobile: "0802-556-8899", email: "tunde.balogun@example.com", date: "13/09/2025", time: "02:15 PM" },
//     { id: 3, name: "Aisha Suleiman", doctor: "Dr. Ella", treatment: "Prenatal Care", mobile: "0701-445-9900", email: "aisha.suleiman@example.com", date: "14/09/2025", time: "09:00 AM" },
//     { id: 4, name: "Emmanuel Ojo", doctor: "Dr. Ella", treatment: "Cardiac Checkup", mobile: "0813-224-7711", email: "emmanuel.ojo@example.com", date: "15/09/2025", time: "03:45 PM" },
//     { id: 5, name: "Ngozi Nwachukwu", doctor: "Dr. Ella", treatment: "Fertility Consultation", mobile: "0809-882-1122", email: "ngozi.nwachukwu@example.com", date: "16/09/2025", time: "11:00 AM" },
//     { id: 6, name: "David Okon", doctor: "Dr. Ella", treatment: "Therapy Session", mobile: "0708-554-2233", email: "david.okon@example.com", date: "17/09/2025", time: "01:20 PM" },
//     { id: 7, name: "Fatima Abdullahi", doctor: "Dr. Ella", treatment: "Postnatal Checkup", mobile: "0810-778-5566", email: "fatima.abdullahi@example.com", date: "18/09/2025", time: "09:45 AM" },
//     { id: 8, name: "Ibrahim Yusuf", doctor: "Dr. Ella", treatment: "General Consultation", mobile: "0814-990-2234", email: "ibrahim.yusuf@example.com", date: "19/09/2025", time: "12:00 PM" },
//     { id: 9, name: "Blessing Edet", doctor: "Dr. Ella", treatment: "Skin Therapy", mobile: "0816-778-8899", email: "blessing.edet@example.com", date: "20/09/2025", time: "04:30 PM" },
//     { id: 10, name: "Josephine Eze", doctor: "Dr. Ella", treatment: "Counseling", mobile: "0812-667-9901", email: "josephine.eze@example.com", date: "21/09/2025", time: "08:15 AM" },
//   ];

//   return (
//     <>
//       <div className="w-[98%] mx-auto">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-2">
//           <h1 className="text-lg font-semibold">Appointment List</h1>

//           <div className="flex items-center gap-2 text-sm flex-wrap">
//             <p className="flex items-center text-[rgb(213,151,71)] gap-1">
//               TrendX <ChevronRight size={16} />
//             </p>
//             <p className="flex items-center gap-1">
//               Admin <ChevronRight size={16} />
//             </p>
//             <p>Appointment List</p>
//           </div>
//         </div>
//       </div>

//       {/* Table Card */}
//       <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 overflow-hidden">
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-3">
//           <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
//             Appointment List
//           </h2>

//           <button className="bg-[rgb(213,151,71)] px-4 py-2 rounded text-white text-sm font-light hover:bg-[rgb(190,130,60)] transition w-full sm:w-auto">
//             Add Appointment
//           </button>
//         </div>

//         {/* Scrollable Table */}
//         <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
//           <table className="min-w-[700px] sm:min-w-full rounded-2xl border-collapse border border-gray-300 dark:border-gray-700 text-xs sm:text-sm">
//             <thead className="bg-[rgba(213,151,71,0.2)] text-[rgb(213,151,71)]">
//               <tr className="divide-x divide-gray-300 dark:divide-gray-700 text-center sm:text-left">
//                 <th className="p-3 sm:p-4">Patient Name</th>
//                 <th className="p-3 sm:p-4">Consulting Doctor</th>
//                 <th className="p-3 sm:p-4">Treatment</th>
//                 <th className="p-3 sm:p-4">Mobile</th>
//                 <th className="p-3 sm:p-4">Email</th>
//                 <th className="p-3 sm:p-4">Date</th>
//                 <th className="p-3 sm:p-4">Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {appointments.map((a) => (
//                 <tr
//                   key={a.id}
//                   className="border-t border-gray-200 dark:border-gray-700 divide-x divide-gray-200 dark:divide-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-center sm:text-left"
//                 >
//                   <td className="p-3 sm:p-4 font-medium text-gray-800 dark:text-gray-100 whitespace-nowrap">
//                     {a.name}
//                   </td>
//                   <td className="p-3 sm:p-4 text-gray-700 dark:text-gray-200 whitespace-nowrap">
//                     {a.doctor}
//                   </td>
//                   <td className="p-3 sm:p-4 text-gray-700 dark:text-gray-200 whitespace-nowrap">
//                     {a.treatment}
//                   </td>
//                   <td className="p-3 sm:p-4 text-gray-700 dark:text-gray-200 whitespace-nowrap">
//                     {a.mobile}
//                   </td>
//                   <td className="p-3 sm:p-4 text-gray-700 dark:text-gray-200 whitespace-nowrap">
//                     {a.email}
//                   </td>
//                   <td className="p-3 sm:p-4 text-gray-700 dark:text-gray-200 whitespace-nowrap">
//                     {a.date}
//                   </td>
//                   <td className="p-3 sm:p-4 text-gray-700 dark:text-gray-200 whitespace-nowrap">
//                     {a.time}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }


// import { ChevronRight } from "lucide-react";

// export default function AppointmentList() {
//   const appointments = [
//     { id: 1, name: "Chika Okoro", doctor: "Dr. Ella", treatment: "Infertility", mobile: "0812-334-5567", email: "chika.okoro@example.com", date: "12/09/2025", time: "10:30 AM" },
//     { id: 2, name: "Tunde Balogun", doctor: "Dr. Ella", treatment: "Dental Checkup", mobile: "0802-556-8899", email: "tunde.balogun@example.com", date: "13/09/2025", time: "02:15 PM" },
//     { id: 3, name: "Aisha Suleiman", doctor: "Dr. Ella", treatment: "Prenatal Care", mobile: "0701-445-9900", email: "aisha.suleiman@example.com", date: "14/09/2025", time: "09:00 AM" },
//     { id: 4, name: "Emmanuel Ojo", doctor: "Dr. Ella", treatment: "Cardiac Checkup", mobile: "0813-224-7711", email: "emmanuel.ojo@example.com", date: "15/09/2025", time: "03:45 PM" },
//     { id: 5, name: "Ngozi Nwachukwu", doctor: "Dr. Ella", treatment: "Fertility Consultation", mobile: "0809-882-1122", email: "ngozi.nwachukwu@example.com", date: "16/09/2025", time: "11:00 AM" },
//     { id: 6, name: "David Okon", doctor: "Dr. Ella", treatment: "Therapy Session", mobile: "0708-554-2233", email: "david.okon@example.com", date: "17/09/2025", time: "01:20 PM" },
//     { id: 7, name: "Fatima Abdullahi", doctor: "Dr. Ella", treatment: "Postnatal Checkup", mobile: "0810-778-5566", email: "fatima.abdullahi@example.com", date: "18/09/2025", time: "09:45 AM" },
//     { id: 8, name: "Ibrahim Yusuf", doctor: "Dr. Ella", treatment: "General Consultation", mobile: "0814-990-2234", email: "ibrahim.yusuf@example.com", date: "19/09/2025", time: "12:00 PM" },
//     { id: 9, name: "Blessing Edet", doctor: "Dr. Ella", treatment: "Skin Therapy", mobile: "0816-778-8899", email: "blessing.edet@example.com", date: "20/09/2025", time: "04:30 PM" },
//     { id: 10, name: "Josephine Eze", doctor: "Dr. Ella", treatment: "Counseling", mobile: "0812-667-9901", email: "josephine.eze@example.com", date: "21/09/2025", time: "08:15 AM" },
//   ];

//   return (
//     <>
//       <div className="w-[98%] mx-auto  bg-[green]">
//         {/* Header */}
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-2">
//           <h1 className="text-lg font-semibold">Appointment List</h1>

//           <div className="flex items-center gap-2 text-sm flex-wrap">
//             <p className="flex items-center text-[rgb(213,151,71)] gap-1">
//               TrendX <ChevronRight size={16} />
//             </p>
//             <p className="flex items-center gap-1">
//               Admin <ChevronRight size={16} />
//             </p>
//             <p>Appointment List</p>
//           </div>
//         </div>
//       </div>

//       {/* Table Card */}
//       <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4">
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-3">
//           <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
//             Appointment List
//           </h2>

//           <button className="bg-[rgb(213,151,71)] px-4 py-2 rounded text-white text-sm font-light hover:bg-[rgb(190,130,60)] transition w-full sm:w-auto">
//             Add Appointment
//           </button>
//         </div>

//         {/* Scrollable + Responsive Table */}
//         <div className="w-full overflow-x-auto">
//           <table className="w-full min-w-[700px] border-collapse border border-gray-300 dark:border-gray-700 text-xs sm:text-sm">
//             <thead className="bg-[rgba(213,151,71,0.2)] text-[rgb(213,151,71)]">
//               <tr className="divide-x divide-gray-300 dark:divide-gray-700 text-center sm:text-left">
//                 <th className="p-3 sm:p-4 whitespace-nowrap">Patient Name</th>
//                 <th className="p-3 sm:p-4 whitespace-nowrap">Consulting Doctor</th>
//                 <th className="p-3 sm:p-4 whitespace-nowrap">Treatment</th>
//                 <th className="p-3 sm:p-4 whitespace-nowrap">Mobile</th>
//                 <th className="p-3 sm:p-4 whitespace-nowrap">Email</th>
//                 <th className="p-3 sm:p-4 whitespace-nowrap">Date</th>
//                 <th className="p-3 sm:p-4 whitespace-nowrap">Time</th>
//               </tr>
//             </thead>
//             <tbody>
//               {appointments.map((a) => (
//                 <tr
//                   key={a.id}
//                   className="border-t border-gray-200 dark:border-gray-700 divide-x divide-gray-200 dark:divide-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-center sm:text-left"
//                 >
//                   <td className="p-3 sm:p-4 font-medium text-gray-800 dark:text-gray-100 whitespace-nowrap">{a.name}</td>
//                   <td className="p-3 sm:p-4 text-gray-700 dark:text-gray-200 whitespace-nowrap">{a.doctor}</td>
//                   <td className="p-3 sm:p-4 text-gray-700 dark:text-gray-200 whitespace-nowrap">{a.treatment}</td>
//                   <td className="p-3 sm:p-4 text-gray-700 dark:text-gray-200 whitespace-nowrap">{a.mobile}</td>
//                   <td className="p-3 sm:p-4 text-gray-700 dark:text-gray-200 whitespace-nowrap">{a.email}</td>
//                   <td className="p-3 sm:p-4 text-gray-700 dark:text-gray-200 whitespace-nowrap">{a.date}</td>
//                   <td className="p-3 sm:p-4 text-gray-700 dark:text-gray-200 whitespace-nowrap">{a.time}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }


import { ChevronRight } from "lucide-react";

export default function AppointmentList({ darkMode }) {
  const appointments = [
    { id: 1, name: "Chika Okoro", doctor: "Dr. Ella", treatment: "Infertility", mobile: "0812-334-5567", email: "chika.okoro@example.com", date: "12/09/2025", time: "10:30 AM" },
    { id: 2, name: "Tunde Balogun", doctor: "Dr. Ella", treatment: "Dental Checkup", mobile: "0802-556-8899", email: "tunde.balogun@example.com", date: "13/09/2025", time: "02:15 PM" },
    { id: 3, name: "Aisha Suleiman", doctor: "Dr. Ella", treatment: "Prenatal Care", mobile: "0701-445-9900", email: "aisha.suleiman@example.com", date: "14/09/2025", time: "09:00 AM" },
    { id: 4, name: "Emmanuel Ojo", doctor: "Dr. Ella", treatment: "Cardiac Checkup", mobile: "0813-224-7711", email: "emmanuel.ojo@example.com", date: "15/09/2025", time: "03:45 PM" },
    { id: 5, name: "Ngozi Nwachukwu", doctor: "Dr. Ella", treatment: "Fertility Consultation", mobile: "0809-882-1122", email: "ngozi.nwachukwu@example.com", date: "16/09/2025", time: "11:00 AM" },
    { id: 6, name: "David Okon", doctor: "Dr. Ella", treatment: "Therapy Session", mobile: "0708-554-2233", email: "david.okon@example.com", date: "17/09/2025", time: "01:20 PM" },
    { id: 7, name: "Fatima Abdullahi", doctor: "Dr. Ella", treatment: "Postnatal Checkup", mobile: "0810-778-5566", email: "fatima.abdullahi@example.com", date: "18/09/2025", time: "09:45 AM" },
    { id: 8, name: "Ibrahim Yusuf", doctor: "Dr. Ella", treatment: "General Consultation", mobile: "0814-990-2234", email: "ibrahim.yusuf@example.com", date: "19/09/2025", time: "12:00 PM" },
    { id: 9, name: "Blessing Edet", doctor: "Dr. Ella", treatment: "Skin Therapy", mobile: "0816-778-8899", email: "blessing.edet@example.com", date: "20/09/2025", time: "04:30 PM" },
    { id: 10, name: "Josephine Eze", doctor: "Dr. Ella", treatment: "Counseling", mobile: "0812-667-9901", email: "josephine.eze@example.com", date: "21/09/2025", time: "08:15 AM" },
  ];

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="w-[98%] mx-auto py-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-2">
          <h1 className="text-lg font-semibold">Appointment List</h1>

          <div className="flex items-center gap-2 text-sm flex-wrap">
            <p className="flex items-center text-[rgb(213,151,71)] gap-1">
              TrendX <ChevronRight size={16} />
            </p>
            <p className="flex items-center gap-1">
              Admin <ChevronRight size={16} />
            </p>
            <p>Appointment List</p>
          </div>
        </div>

        {/* Table Card */}
        <div
          className={`rounded-2xl shadow-md p-4 transition-colors duration-500 ${
            darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
          }`}
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-3">
            <h2 className="text-lg font-semibold">Appointment List</h2>

            <button className="bg-[rgb(213,151,71)] px-4 py-2 rounded text-white text-sm font-light hover:bg-[rgb(190,130,60)] transition w-full sm:w-auto">
              Add Appointment
            </button>
          </div>

          {/* Scrollable + Responsive Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse border border-gray-300 dark:border-gray-700 text-xs sm:text-sm">
              <thead
                className={`${
                  darkMode
                    ? "bg-[rgba(213,151,71,0.1)] text-[rgb(213,151,71)]"
                    : "bg-[rgba(213,151,71,0.2)] text-[rgb(213,151,71)]"
                }`}
              >
                <tr className="divide-x divide-gray-300 dark:divide-gray-700 text-center sm:text-left">
                  <th className="p-3 sm:p-4 whitespace-nowrap">Patient Name</th>
                  <th className="p-3 sm:p-4 whitespace-nowrap">Consulting Doctor</th>
                  <th className="p-3 sm:p-4 whitespace-nowrap">Treatment</th>
                  <th className="p-3 sm:p-4 whitespace-nowrap">Mobile</th>
                  <th className="p-3 sm:p-4 whitespace-nowrap">Email</th>
                  <th className="p-3 sm:p-4 whitespace-nowrap">Date</th>
                  <th className="p-3 sm:p-4 whitespace-nowrap">Time</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((a) => (
                  <tr
                    key={a.id}
                    className="border-t border-gray-200 dark:border-gray-700 divide-x divide-gray-200 dark:divide-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-center sm:text-left"
                  >
                    <td className="p-3 sm:p-4 font-medium whitespace-nowrap">{a.name}</td>
                    <td className="p-3 sm:p-4 whitespace-nowrap">{a.doctor}</td>
                    <td className="p-3 sm:p-4 whitespace-nowrap">{a.treatment}</td>
                    <td className="p-3 sm:p-4 whitespace-nowrap">{a.mobile}</td>
                    <td className="p-3 sm:p-4 whitespace-nowrap">{a.email}</td>
                    <td className="p-3 sm:p-4 whitespace-nowrap">{a.date}</td>
                    <td className="p-3 sm:p-4 whitespace-nowrap">{a.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

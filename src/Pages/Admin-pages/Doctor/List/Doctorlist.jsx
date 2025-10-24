
import { ChevronRight, Eye, Pen } from "lucide-react";

export default function DoctorList() {
  const patients = [
    {
      id: 1,
      name: "Chidi Okafor",
      Designation: "Oncologist",
      Email: "chidi.okafor@healthplus.com",
      Degree: "MBBS",
      MobileNumber: "0701-451-717-89",
      JoiningDate: "12/03/2017",
      Action: (
        <div className="flex items-center gap-2">
          <Pen size={16} className="cursor-pointer text-gray-600 hover:text-yellow-600" />
          <Eye size={16} className="cursor-pointer text-gray-600 hover:text-blue-600" />
        </div>
      ),
    },
    {
      id: 2,
      name: "Amina Bello",
      Designation: "Pediatrian",
      Email: "amina.bello@lifecare.com",
      Degree: "MD",
      MobileNumber: "0812-334-556-77",
      JoiningDate: "22/07/2019",
      Action: (
        <div className="flex items-center gap-2">
          <Pen size={16} className="cursor-pointer text-gray-600 hover:text-yellow-600" />
          <Eye size={16} className="cursor-pointer text-gray-600 hover:text-blue-600" />
        </div>
      ),
    },
    {
      id: 3,
      name: "Emeka Uzo",
      Designation: "Nuerologist",
      Email: "emeka.uzo@medlink.com",
      Degree: "MBChB",
      MobileNumber: "0706-987-221-45",
      JoiningDate: "05/01/2020",
      Action: (
        <div className="flex items-center gap-2">
          <Pen size={16} className="cursor-pointer text-gray-600 hover:text-yellow-600" />
          <Eye size={16} className="cursor-pointer text-gray-600 hover:text-blue-600" />
        </div>
      ),
    },
    {
      id: 4,
      name: "Kemi Johnson",
      Designation: "Consultant",
      Email: "kemi.johnson@healthcity.com",
      Degree: "MBBS",
      MobileNumber: "0903-551-782-90",
      JoiningDate: "15/06/2021",
      Action: (
        <div className="flex items-center gap-2">
          <Pen size={16} className="cursor-pointer text-gray-600 hover:text-yellow-600" />
          <Eye size={16} className="cursor-pointer text-gray-600 hover:text-blue-600" />
        </div>
      ),
    },
    {
      id: 5,
      name: "Musa Abdullahi",
      Designation: "Radiologist",
      Email: "musa.abdullahi@caremed.com",
      Degree: "MD",
      MobileNumber: "0802-764-888-34",
      JoiningDate: "09/09/2018",
      Action: (
        <div className="flex items-center gap-2">
          <Pen size={16} className="cursor-pointer text-gray-600 hover:text-yellow-600" />
          <Eye size={16} className="cursor-pointer text-gray-600 hover:text-blue-600" />
        </div>
      ),
    },
    {
      id: 6,
      name: "Grace Eze",
      Designation: "Therapist",
      Email: "grace.eze@vitalpoint.com",
      Degree: "MBBS",
      MobileNumber: "0813-225-678-91",
      JoiningDate: "11/02/2022",
      Action: (
        <div className="flex items-center gap-2">
          <Pen size={16} className="cursor-pointer text-gray-600 hover:text-yellow-600" />
          <Eye size={16} className="cursor-pointer text-gray-600 hover:text-blue-600" />
        </div>
      ),
    },
    {
      id: 7,
      name: "Bamidele Ayo",
      Designation: "Dentist",
      Email: "bamidele.ayo@medprime.com",
      Degree: "MBBS",
      MobileNumber: "0901-665-779-22",
      JoiningDate: "03/11/2016",
      Action: (
        <div className="flex items-center gap-2">
          <Pen size={16} className="cursor-pointer text-gray-600 hover:text-yellow-600" />
          <Eye size={16} className="cursor-pointer text-gray-600 hover:text-blue-600" />
        </div>
      ),
    },
    {
      id: 8,
      name: "Ifeoma Nwosu",
      Designation: "Gynecologist",
      Email: "ifeoma.nwosu@citymed.com",
      Degree: "MD",
      MobileNumber: "0814-234-909-00",
      JoiningDate: "25/08/2020",
      Action: (
        <div className="flex items-center gap-2">
          <Pen size={16} className="cursor-pointer text-gray-600 hover:text-yellow-600" />
          <Eye size={16} className="cursor-pointer text-gray-600 hover:text-blue-600" />
        </div>
      ),
    },
    {
      id: 9,
      name: "Chuka Nnamdi",
      Designation: "Surgon",
      Email: "chuka.nnamdi@healthmax.com",
      Degree: "MBBS",
      MobileNumber: "0708-112-334-55",
      JoiningDate: "13/10/2019",
      Action: (
        <div className="flex items-center gap-2">
          <Pen size={16} className="cursor-pointer text-gray-600 hover:text-yellow-600" />
          <Eye size={16} className="cursor-pointer text-gray-600 hover:text-blue-600" />
        </div>
      ),
    },
    {
      id: 10,
      name: "Halima Yusuf",
      Designation: "Therapist",
      Email: "halima.yusuf@medtrust.com",
      Degree: "MD",
      MobileNumber: "0810-556-778-99",
      JoiningDate: "07/04/2023",
      Action: (
        <div className="flex items-center gap-2">
          <Pen size={16} className="cursor-pointer text-gray-600 hover:text-yellow-600" />
          <Eye size={16} className="cursor-pointer text-gray-600 hover:text-blue-600" />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="w-[98%]">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-lg font-semibold">Doctor List</h1>

          <div className="flex items-center gap-2 text-sm">
            <p className="flex items-center text-[rgb(213,151,71)] gap-1">
              TrendX <ChevronRight size={16} />
            </p>
            <p className="flex items-center gap-1">
              Admin <ChevronRight size={16} />
            </p>
            <p>Doctor List</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl  shadow-md p-4 overflow-hidden">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Doctor List
          </h2>

          <button className="bg-[rgb(213,151,71)] px-3 py-1.5 rounded text-white text-sm font-light hover:bg-[rgb(190,130,60)] transition">
            Add Doctor
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full rounded-2xl  border-collapse border border-gray-300 dark:border-gray-700 rounded-lg text-xs sm:text-sm">
            <thead className=" rounded-2xl  bg-[rgba(213,151,71,0.2)] text-[rgb(213,151,71)]">
              <tr className="divide-x divide-gray-300 dark:divide-gray-700 text-center sm:text-left">
                <th className="p-3 sm:p-4 md:p-5">Name</th>
                <th className="p-3 sm:p-4 md:p-5 w-20">Designation</th>
                <th className="p-3 sm:p-4 md:p-5">Email</th>
                <th className="p-3 sm:p-4 md:p-5">Degree</th>
                <th className="p-3 sm:p-4 md:p-5">Mobile Number</th>
                <th className="p-3 sm:p-4 md:p-5 w-16">Joining Date</th>
                <th className="p-3 sm:p-4 md:p-5">Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((p, index) => (
                <tr
                  key={p.id}
                  className="border-t border-gray-200 dark:border-gray-700 divide-x divide-gray-200 dark:divide-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-center sm:text-left"
                >
                  {/* Avatar and Name */}
                  <td className="p-3 sm:p-4 md:p-5 flex items-center justify-center sm:justify-start gap-3">
                    <img
                      src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? "men" : "women"}/${index + 20}.jpg`}
                      alt={p.name}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-gray-300"
                    />
                    <span className="font-medium text-gray-800 dark:text-gray-100">
                      {p.name.split(" ")[0]}
                    </span>
                  </td>

                  {/* Gender */}
                  <td className="p-3 sm:p-4 md:p-5 text-gray-700 dark:text-gray-200">{p.Designation}</td>

                  {/* Address */}
                  <td className="p-3 sm:p-4 md:p-5 text-gray-700 dark:text-gray-200">{p.Email}</td>

                  {/* Phone */}
                  <td className="p-3 sm:p-4 md:p-5 text-gray-700 dark:text-gray-200">{p.Degree}</td>

                  {/* DOB */}
                  <td className="p-3 sm:p-4 md:p-5 text-gray-700 dark:text-gray-200">{p.MobileNumber}</td>

                  {/* Age */}
                  <td className="p-3 sm:p-4 md:p-5 text-gray-700 dark:text-gray-200">{p.JoiningDate}</td>

                  {/* Blood */}
                  <td className="p-3 sm:p-4 md:p-5 text-gray-700 dark:text-gray-200">{p.Action}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </>
  );
}



import { ChevronRight } from "lucide-react";

export default function PatientList() {
  const patients = [
    {
      id: 1,
      name: "John Doe",
      gender: "Male",
      address: "12 Palm St, Ikeja",
      phone: "090-123-4567",
      dob: "02/03/1996",
      age: 29,
      blood: "A+",
      status: "Recovered",
    },
    {
      id: 2,
      name: "Sarah Adams",
      gender: "Female",
      address: "5 Unity Ave, Lekki",
      phone: "081-987-6543",
      dob: "11/07/1994",
      age: 31,
      blood: "O-",
      status: "Checkup",
    },
    {
      id: 3,
      name: "Ben Lee",
      gender: "Male",
      address: "7 Broad Rd, Yaba",
      phone: "070-222-7788",
      dob: "21/01/1992",
      age: 33,
      blood: "B+",
      status: "Operation",
    },
    {
      id: 4,
      name: "Kim Son",
      gender: "Female",
      address: "4 Silver Ln, Gwarinpa",
      phone: "091-543-1122",
      dob: "15/05/1998",
      age: 27,
      blood: "AB+",
      status: "Recovered",
    },
    {
      id: 5,
      name: "David Brown",
      gender: "Male",
      address: "18 Maple Ave, Surulere",
      phone: "080-332-1199",
      dob: "08/02/1995",
      age: 30,
      blood: "O+",
      status: "Checkup",
    },
    {
      id: 6,
      name: "Linda Park",
      gender: "Female",
      address: "9 Hill St, Maitama",
      phone: "090-765-4432",
      dob: "27/08/1999",
      age: 26,
      blood: "B-",
      status: "Recovered",
    },
    {
      id: 7,
      name: "Daniel Cruz",
      gender: "Male",
      address: "20 Bay Rd, Victoria Island",
      phone: "081-567-3344",
      dob: "02/12/1990",
      age: 35,
      blood: "A-",
      status: "Operation",
    },
    {
      id: 8,
      name: "Maria Gomez",
      gender: "Female",
      address: "6 Pearl Ct, Ajah",
      phone: "090-223-4455",
      dob: "19/03/1993",
      age: 32,
      blood: "AB-",
      status: "Checkup",
    },
    {
      id: 9,
      name: "James Smith",
      gender: "Male",
      address: "14 Rose Blvd, Ikoyi",
      phone: "070-888-9990",
      dob: "30/10/1997",
      age: 28,
      blood: "O+",
      status: "Recovered",
    },
    {
      id: 10,
      name: "Emily Stone",
      gender: "Female",
      address: "3 Vine Dr, Asokoro",
      phone: "081-119-7788",
      dob: "04/09/2000",
      age: 25,
      blood: "B+",
      status: "Checkup",
    },
  ];

  return (
    <>
      <div className="w-[98%]">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-lg font-semibold">Patient List</h1>

          <div className="flex items-center gap-2 text-sm">
            <p className="flex items-center text-[rgb(213,151,71)] gap-1">
              TrendX <ChevronRight size={16} />
            </p>
            <p className="flex items-center gap-1">
              Admin <ChevronRight size={16} />
            </p>
            <p>Patient List</p>
          </div>
        </div>
      </div>

     <div className="bg-white dark:bg-gray-800 rounded-2xl  shadow-md p-4 overflow-hidden">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Patient List
          </h2>

          <button className="bg-[rgb(213,151,71)] px-3 py-1.5 rounded text-white text-sm font-light hover:bg-[rgb(190,130,60)] transition">
            Add Patient
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full rounded-2xl  border-collapse border border-gray-300 dark:border-gray-700 rounded-lg text-xs sm:text-sm">
            <thead className=" rounded-2xl  bg-[rgba(213,151,71,0.2)] text-[rgb(213,151,71)]">
              <tr className="divide-x divide-gray-300 dark:divide-gray-700 text-center sm:text-left">
                <th className="p-3 sm:p-4 md:p-5">Name</th>
                <th className="p-3 sm:p-4 md:p-5 w-20">Sex</th>
                <th className="p-3 sm:p-4 md:p-5">Address</th>
                <th className="p-3 sm:p-4 md:p-5">Mobile number</th>
                <th className="p-3 sm:p-4 md:p-5">Birth Date</th>
                <th className="p-3 sm:p-4 md:p-5 w-16">Age</th>
                <th className="p-3 sm:p-4 md:p-5">Blood group</th>
                <th className="p-3 sm:p-4 md:p-5">Status</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((p) => (
                <tr
                  key={p.id}
                  className="border-t border-gray-200 dark:border-gray-700 divide-x divide-gray-200 dark:divide-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-center sm:text-left"
                >
                  <td className="p-3 sm:p-4 md:p-5 flex items-center justify-center sm:justify-start gap-2">
                    <img
                      src={`https://i.pravatar.cc/40?img=${p.id + 10}`}
                      alt={p.name}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
                    />
                    <span>{p.name.split(" ")[0]}</span>
                  </td>
                  <td className="p-3 sm:p-4 md:p-5">{p.gender}</td>
                  <td className="p-3 sm:p-4 md:p-5">{p.address}</td>
                  <td className="p-3 sm:p-4 md:p-5">{p.phone}</td>
                  <td className="p-3 sm:p-4 md:p-5">{p.dob}</td>
                  <td className="p-3 sm:p-4 md:p-5">{p.age}</td>
                  <td className="p-3 sm:p-4 md:p-5">{p.blood}</td>
                  <td className="p-3 sm:p-4 md:p-5">{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

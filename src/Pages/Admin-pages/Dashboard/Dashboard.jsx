import {
  ChevronRight,
  User,
  Stethoscope,
  TestTube,
  DollarSign,
  CheckCircle,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard({ darkMode }) {
  const cards = [
    { label: "Appointment", number: 639 },
    { label: "Doctor", number: 83 },
    { label: "Staff", number: 296 },
    { label: "Operations", number: 44 },
    { label: "Admitted", number: 372 },
    { label: "Discharge", number: 253 },
  ];

  const barData = [
    { month: "Jan", Male: 14, Female: 12 },
    { month: "Feb", Male: 13, Female: 11 },
    { month: "Mar", Male: 15, Female: 14 },
    { month: "Apr", Male: 12, Female: 10 },
    { month: "May", Male: 16, Female: 15 },
    { month: "Jun", Male: 14, Female: 13 },
    { month: "Jul", Male: 15, Female: 14 },
    { month: "Aug", Male: 16, Female: 15 },
    { month: "Sep", Male: 13, Female: 12 },
    { month: "Oct", Male: 14, Female: 13 },
    { month: "Nov", Male: 12, Female: 11 },
    { month: "Dec", Male: 13, Female: 12 },
  ];

  const lineData = [
    { month: "Jan", General: 40, ICU: 20 },
    { month: "Feb", General: 50, ICU: 25 },
    { month: "Mar", General: 60, ICU: 35 },
    { month: "Apr", General: 70, ICU: 40 },
    { month: "May", General: 80, ICU: 50 },
    { month: "Jun", General: 85, ICU: 55 },
    { month: "Jul", General: 90, ICU: 60 },
    { month: "Aug", General: 85, ICU: 55 },
    { month: "Sep", General: 70, ICU: 45 },
    { month: "Oct", General: 60, ICU: 35 },
    { month: "Nov", General: 50, ICU: 25 },
    { month: "Dec", General: 40, ICU: 20 },
  ];


  const appointments = [
    {
      id: 1,
      patient: "Candie",
      gender: "Female",
      appointmentFor: "Dr. Candie Son",
      date: "25 Dec 2023",
      img: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      patient: "Katherine",
      gender: "Female",
      appointmentFor: "Dr. Katherine Elverstone",
      date: "15 Jun 2024",
      img: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      patient: "Sean",
      gender: "Male",
      appointmentFor: "Dr. See Orritt",
      date: "18 Nov 2023",
      img: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      patient: "Salaidh",
      gender: "Female",
      appointmentFor: "Dr. Salaidh Blune",
      date: "03 Apr 2024",
      img: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: 5,
      patient: "Raffaello",
      gender: "Male",
      appointmentFor: "Dr. Raffaello Blas",
      date: "21 Feb 2024",
      img: "https://i.pravatar.cc/150?img=5",
    },
  ];

  const doctors = [
    { name: "Dr. Gabrielle Boris", title: "MBBS", img: "https://i.pravatar.cc/150?img=6" },
    { name: "Dr. Heather Allan", title: "Neurology", img: "https://i.pravatar.cc/150?img=7" },
    { name: "Dr. Penelope Greene", title: "MBBS", img: "https://i.pravatar.cc/150?img=8" },
    { name: "Dr. Madeleine Hodges", title: "MS, DLO", img: "https://i.pravatar.cc/150?img=9" },
    { name: "Dr. Melanie Cameron", title: "MD, Neurology", img: "https://i.pravatar.cc/150?img=10" },
  ];


  return (
    <div
      className={`min-h-screen w-full transition-colors duration-500 ${darkMode ? "text-white" : "text-gray-900"
        }`}
    >
      <div className="w-full flex justify-center">
        <div className="w-[98%]">
          {/* Header */}
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-lg font-semibold">Dashboard</h1>

            <div className="flex items-center gap-2 text-sm">
              <p className="flex items-center text-[rgb(213,151,71)] gap-1">
                TrendX <ChevronRight size={16} />
              </p>
              <p className="flex items-center gap-1">
                Admin <ChevronRight size={16} />
              </p>
              <p>Dashboard</p>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <User size={22} className="text-white" />,
                label: "New Patients",
                value: "890",
                color: "bg-[rgb(213,151,71)]",
              },
              {
                icon: <Stethoscope size={22} className="text-white" />,
                label: "OPD Patients",
                value: "360",
                color: "bg-blue-500",
              },
              {
                icon: <TestTube size={22} className="text-white" />,
                label: "Lab Tests",
                value: "272",
                color: "bg-green-500",
              },
              {
                icon: <DollarSign size={22} className="text-white" />,
                label: "Total Earnings",
                value: "$12,000",
                color: "bg-yellow-400",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl shadow-md p-4 flex items-center gap-3 justify-start ${darkMode ? "bg-[#0a1a2f]" : "bg-white"
                  }`}
              >
                <div className="relative flex items-center justify-center w-14 h-14">
                  <div className="absolute inset-0 rounded-full border-2 border-[rgba(213,151,71,0.3)]"></div>
                  <div
                    className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center z-10`}
                  >
                    {item.icon}
                  </div>
                </div>
                <div>
                  <p className="text-xl font-bold">{item.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Status Cards */}
          <div className="w-full px-2 sm:px-4 lg:px-6 mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 w-full">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`rounded-2xl shadow-md p-5 flex flex-col items-center justify-center text-center w-full ${darkMode ? "bg-[#0a1a2f]" : "bg-white"
                    }`}
                >
                  <div className="relative flex items-center justify-center w-10 h-10 mb-3">
                    <div className="absolute inset-0 rounded-full bg-[rgb(213,151,71)]"></div>
                    <CheckCircle size={20} className="text-white z-10" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-light">
                    {card.label}
                  </p>
                  <p className="text-lg font-bold text-[rgb(213,151,71)] mt-1">
                    {card.number}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Charts Section */}
          <div className="w-full flex flex-col lg:flex-row-reverse gap-6 mt-6">
            {/* Bar Chart */}
            <div
              className={`rounded-2xl shadow-md p-4 flex-1 min-w-[300px] h-[350px] ${darkMode ? "bg-[#0a1a2f]" : "bg-white"
                }`}
            >
              <h2 className="text-lg font-semibold mb-3">Patient by Age</h2>
              <div className="w-full h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="Male"
                      fill="rgb(213,151,71)"
                      barSize={18}
                      animationDuration={1200}
                    />
                    <Bar
                      dataKey="Female"
                      fill="#8884d8"
                      barSize={18}
                      animationDuration={1200}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Line Chart */}
            <div
              className={`rounded-2xl shadow-md p-4 flex-1 min-w-[300px] h-[350px] ${darkMode ? "bg-[#0a1a2f]" : "bg-white"
                }`}
            >
              <h2 className="text-lg font-semibold mb-3">Treatment Type</h2>
              <div className="w-full h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="General"
                      stroke="rgb(213,151,71)"
                      strokeWidth={3}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="ICU"
                      stroke="#8884d8"
                      strokeWidth={3}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>

        <div className="flex flex-col md:flex-row gap-6 mt-6">
            {/* Appointment Table */}
            <div className={`flex-1 rounded-2xl shadow-md p-4 overflow-x-auto ${darkMode ? "bg-[#0a1a2f]" : "bg-white"}`}>
              <h2 className="text-lg font-semibold mb-4">Appointment</h2>
              <table className="min-w-full text-sm border-collapse">
                <thead className="bg-[rgba(213,151,71,0.2)] text-[rgb(213,151,71)]">
                  <tr>
                    <th className="p-3 text-left">Patient</th>
                    <th className="p-3 text-left">Gender</th>
                    <th className="p-3 text-left">Appointment for</th>
                    <th className="p-3 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((a) => (
                    <tr
                      key={a.id}
                      className={`border-t ${darkMode ? "border-gray-700 hover:bg-gray-700" : "border-gray-200 hover:bg-gray-50"}`}
                    >
                      <td className="p-3 flex items-center gap-2">
                        <img src={a.img} alt={a.patient} className="w-8 h-8 rounded-full" />
                        <span>{a.patient}</span>
                      </td>
                      <td className="p-3">{a.gender}</td>
                      <td className="p-3">{a.appointmentFor}</td>
                      <td className="p-3">{a.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Doctor List */}
            <div className={`w-full md:w-[35%] rounded-2xl shadow-md p-4 ${darkMode ? "bg-[#0a1a2f]" : "bg-white"}`}>
              <h2 className="text-lg font-semibold mb-4">Doctor List</h2>
              <ul className="space-y-4">
                {doctors.map((doc, index) => (
                  <li key={index} className={`flex items-center justify-between border-b pb-3 ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
                    <div className="flex items-center gap-3">
                      <img src={doc.img} alt={doc.name} className="w-10 h-10 rounded-full" />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-xs text-gray-400">{doc.title}</p>
                      </div>
                    </div>
                    <span className="text-green-500 text-xs md:text-sm">● Available</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
    </div>
  );
}
 

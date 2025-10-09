import { ChevronRight, User, Stethoscope, TestTube, DollarSign, CheckCircle } from "lucide-react";
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

  // Data for Line Chart
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
  return (
    <>
      <div className="w-full flex justify-center">
        <div className={`w-[98%] ${darkMode ? "text-white" : "text-gray-900"}`}>
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

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* 1️⃣ New Patients */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 flex items-center gap-3 justify-start">
              <div className="relative flex items-center justify-center w-14 h-14">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[rgba(213,151,71,0.3)]"></div>

                {/* Inner Circle */}
                <div className="w-10 h-10 rounded-full bg-[rgb(213,151,71)] flex items-center justify-center z-10">
                  <User size={22} className="text-white" />
                </div>
              </div>

              {/* Text Section */}
              <div>
                <p className="text-xl font-bold text-gray-900 dark:text-white">890</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">New Patients</p>
              </div>
            </div>


            {/* 2️⃣ OPD Patients */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 flex items-center gap-3 justify-start">
              <div className="relative flex items-center justify-center w-14 h-14">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-200"></div>

                {/* Inner Circle */}
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center z-10">
                  <Stethoscope size={22} className="text-white" />
                </div>
              </div>

              {/* Text Section */}
              <div>
                <p className="text-xl font-bold text-gray-900 dark:text-white">360</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">OPD Patients</p>
              </div>
            </div>


            {/* 3️⃣ Lab Tests */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 flex items-center gap-3 justify-start">
              <div className="relative flex items-center justify-center w-14 h-14">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-green-200"></div>

                {/* Inner Circle */}
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center z-10">
                  <TestTube size={22} className="text-white" />
                </div>
              </div>

              {/* Text Section */}
              <div>
                <p className="text-xl font-bold text-gray-900 dark:text-white">272</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Lab Tests</p>
              </div>
            </div>


            {/* 4️⃣ Total Earnings */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 flex items-center gap-3 justify-start">
              <div className="relative flex items-center justify-center w-14 h-14">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-yellow-200"></div>

                {/* Inner Circle */}
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center z-10">
                  <DollarSign size={22} className="text-white" />
                </div>
              </div>

              {/* Text Section */}
              <div>
                <p className="text-xl font-bold text-gray-900 dark:text-white">$12,000</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Earnings</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* 🟤 Six Status Cards */}
      <div className="w-full px-2 sm:px-4 lg:px-6 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 w-full">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-5 flex flex-col items-center justify-center text-center w-full"
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

      {/* 📊 Charts Section */}
<div className="w-full flex flex-col lg:flex-row-reverse gap-6 mt-6">
  {/* 🟣 Bar Chart — on right for lg screen */}
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 flex-1 h-[350px]">
    <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
      Patient by Age
    </h2>
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

  {/* 🟠 Line Chart — on left for lg screen */}
  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-4 flex-1 h-[350px]">
    <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
      Treatment Type
    </h2>
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
          activeDot={{ r: 6 }}
          animationDuration={1800}
        />
        <Line
          type="monotone"
          dataKey="ICU"
          stroke="#8884d8"
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 6 }}
          animationDuration={1800}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>

    </>
  );
}


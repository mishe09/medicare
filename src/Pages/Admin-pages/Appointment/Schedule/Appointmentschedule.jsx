export default function AppointmentSchedule() {

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const times = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];


  return (
    
   <div className="bg-white shadow-lg rounded-lg p-4 w-full h-[80vh] overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 mb-4">
        <h2 className="text-lg font-semibold text-gray-700">
          Appointment Scheduling – October 2025
        </h2>
        <div className="flex space-x-2">
          {["Day", "Week", "Month", "Work Week", "Timeline Workweek"].map((view) => (
            <button
              key={view}
              className="px-3 py-1 border rounded-md text-sm text-gray-700 hover:bg-gray-100"
            >
              {view}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-[100px_repeat(5,1fr)] h-full border-t border-l">
        {/* Time Column */}
        <div className="flex flex-col">
          {times.map((time) => (
            <div
              key={time}
              className="h-[60px] flex items-start justify-center text-xs text-gray-500 p-1"
            >
              {time}
            </div>
          ))}
        </div>

        {/* Day Columns */}
        {days.map((day) => (
          <div key={day} className="border-r">
            <div className="text-center font-medium text-gray-600 py-2 border-b bg-gray-50">
              {day}
            </div>
            {times.map((_, index) => (
              <div
                key={index}
                className="border-b h-[60px] hover:bg-blue-50 transition cursor-pointer relative"
              >
                {/* Example of input slot or activity */}
                 <input
                  type="text"
                  className="absolute inset-0 w-full h-full p-1 text-xs text-gray-700 outline-none bg-transparent"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

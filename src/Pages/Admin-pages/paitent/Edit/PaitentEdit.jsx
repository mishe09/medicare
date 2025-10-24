import { User, Phone, Calendar, Droplet, Activity, MapPin, Hash, ChevronRight } from "lucide-react";

export default function PatientEdit() {
  return (
    <div className="min-h-screen px-4 md:px-8 py-6 bg-gray-50">

      {/* 🔹 Top Header Section (Outside Form) */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold">Patient Add</h1>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <p className="flex items-center text-[rgb(213,151,71)] gap-1">
            TrendX <ChevronRight size={14} />
          </p>
          <p className="flex items-center gap-1">
            Admin <ChevronRight size={14} />
          </p>
          <p className="font-medium text-gray-700">Patient Edit</p>
        </div>
      </div>

      {/* 🔹 Form Container */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <h2 className="text-md font-semibold mb-4 text-gray-700">
          Basic Information
        </h2>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="text-sm">First Name</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <User size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                value="Chinedu"
                className="w-full outline-none text-sm"
                readOnly
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="text-sm">Mobile Number</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Phone size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                value="+234 803 456 7890"
                className="w-full outline-none text-sm"
                readOnly
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm">Last Name</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <User size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                value="Okafor"
                className="w-full outline-none text-sm"
                readOnly
              />
            </div>
          </div>

          {/* Age */}
          <div>
            <label className="text-sm">Age</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Hash size={16} className="text-gray-400 mr-2" />
              <input
                type="number"
                value="32"
                className="w-full outline-none text-sm"
                readOnly
              />
            </div>
          </div>

          {/* Username */}
          <div>
            <label className="text-sm">User Name</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <User size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                value="chinedu_okafor"
                className="w-full outline-none text-sm"
                readOnly
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="text-sm">Gender</label>
            <div className="flex items-center gap-3 mt-1">
              <label className="flex items-center gap-1">
                <input type="radio" name="gender" checked readOnly /> Male
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="gender" disabled /> Female
              </label>
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="text-sm">Address</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <MapPin size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                value="12 Opebi Road, Ikeja, Lagos"
                className="w-full outline-none text-sm"
                readOnly
              />
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="text-sm">Date Of Birth</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Calendar size={16} className="text-gray-400 mr-2" />
              <input
                type="date"
                value="1993-06-25"
                className="w-full outline-none text-sm text-gray-500"
                readOnly
              />
            </div>
          </div>

          {/* Blood Group */}
          <div>
            <label className="text-sm">Blood Group</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Droplet size={16} className="text-gray-400 mr-2" />
              <select
                className="w-full outline-none text-sm text-gray-500"
                value="O+"
                readOnly
              >
                <option>O+</option>
              </select>
            </div>
          </div>

          {/* Blood Pressure */}
          <div>
            <label className="text-sm">Blood Pressure</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Droplet size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                value="120/80 mmHg"
                className="w-full outline-none text-sm"
                readOnly
              />
            </div>
          </div>

          {/* Sugar */}
          <div>
            <label className="text-sm">Sugar</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Droplet size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                value="Normal (5.2 mmol/L)"
                className="w-full outline-none text-sm"
                readOnly
              />
            </div>
          </div>

          {/* Injury / Condition */}
          <div>
            <label className="text-sm">Injury/Condition</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Activity size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                value="Minor leg fracture (healing)"
                className="w-full outline-none text-sm"
                readOnly
              />
            </div>
          </div>
        </form>

        {/* Buttons */}
        <div className="flex justify-end mt-6 gap-3">
          <button
            type="submit"
            className="bg-[rgb(213,151,71)] text-white px-5 py-2 rounded-md hover:bg-[rgb(190,130,60)]"
          >
            Submit
          </button>
          <button className="border border-gray-300 px-5 py-2 rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

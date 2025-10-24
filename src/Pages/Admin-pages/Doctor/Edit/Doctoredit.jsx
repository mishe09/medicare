import { 
  User, 
  Phone, 
  Calendar, 
  Droplet, 
  MapPin, 
  FileText,
  Mail, 
  ChevronRight, 
  Flag
} from "lucide-react";

export default function DoctorAdd() {
  return (
    <div className="min-h-screen px-4 md:px-8 py-6 bg-gray-50">

      {/* 🔹 Top Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold">Doctor Edit</h1>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <p className="flex items-center text-[rgb(213,151,71)] gap-1">
            TrendX <ChevronRight size={14} />
          </p>
          <p className="flex items-center gap-1">
            Admin <ChevronRight size={14} />
          </p>
          <p className="font-medium text-gray-700">Doctor Edit</p>
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
                value="Hadassah"
                className="w-full outline-none text-sm"
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
                value="Joseph"
                className="w-full outline-none text-sm"
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
                value="0803-456-7890"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm">Email Address</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Mail size={16} className="text-gray-400 mr-2" />
              <input
                type="email"
                value="hadassah.joseph@trendxhealth.com"
                className="w-full outline-none text-sm"
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
                value="drhadassah"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="text-sm">Gender</label>
            <div className="flex items-center gap-3 mt-1">
              <label className="flex items-center gap-1">
                <input type="radio" name="gender" checked readOnly /> Female
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="gender" /> Male
              </label>
            </div>
          </div>

          {/* Education */}
          <div>
            <label className="text-sm">Education</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <MapPin size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                value="MBBS, MS-General Surgery"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Designation */}
          <div>
            <label className="text-sm">Designation</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Calendar size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                value="General Physician"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Department */}
          <div>
            <label className="text-sm">Select Department</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Droplet size={16} className="text-gray-400 mr-2" />
              <select className="w-full outline-none text-sm text-gray-500">
                <option>General Medicine</option>
                <option>Pediatrics</option>
                <option>Cardiology</option>
                <option>Orthopedic</option>
                <option>Dermatology</option>
              </select>
            </div>
          </div>

          {/* DOB */}
          <div>
            <label className="text-sm">Date of Birth</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Calendar size={16} className="text-gray-400 mr-2" />
              <input
                type="date"
                value="1986-05-14"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* City */}
          <div>
            <label className="text-sm">City</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <MapPin size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                value="Abuja"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Country */}
          <div>
            <label className="text-sm">Country</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <Flag size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                value="Nigeria"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* State */}
          <div>
            <label className="text-sm">State/Province</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <MapPin size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                value="FCT"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Postal Code */}
          <div>
            <label className="text-sm">Postal Code</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <MapPin size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                value="900211"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="text-sm">Address</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <MapPin size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                value="12 Crescent Avenue, Garki II"
                className="w-full outline-none text-sm"
              />
            </div>
          </div>

          {/* Biography */}
          <div>
            <label className="text-sm">Short Biography</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FileText size={16} className="text-gray-400 mr-2" />
              <input
                type="text"
                value="Dedicated physician with over 12 years of experience providing top-quality medical care in Nigeria."
                className="w-full outline-none text-sm"
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

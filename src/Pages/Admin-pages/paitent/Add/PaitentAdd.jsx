
import { useState } from "react";
import {
  User,
  Phone,
  Calendar,
  Droplet,
  Activity,
  MapPin,
  Hash,
  ChevronRight,
  Lock,
  Mail,
  Scale,
} from "lucide-react";
import API from "../../../../API/api";

export default function PatientAdd({ darkMode, onPatientAdded }) {
  const initialForm = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    occupation: "",
    image: "",
    gender: "",
    city: "",
    state: "",
    country: "",
    status: "active",
    blood_group: "",
    date_of_birth: "",
    age: 0,
    height: 0,
    weight: 0,
  };

  const [form, setForm] = useState(initialForm);

  // ✅ Submit Patient Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...form,
        date_of_birth: form.date_of_birth
          ? new Date(form.date_of_birth).toISOString().split("T")[0]
          : null,
      };

      const response = await API.post("/patients", payload);
      alert("✅ Patient added successfully!");
      console.log("Response:", response.data);
      setForm(initialForm);
      if (onPatientAdded) onPatientAdded();
    } catch (err) {
      console.error("❌ Error adding patient:", err.response?.data || err);
      alert("Failed to add patient. Check console for details.");
    }
  };

  // ✅ Cancel and reset form
  const handleCancel = () => {
    if (window.confirm("Are you sure you want to clear the form?")) {
      setForm(initialForm);
    }
  };

  return (
    <div
      className={`min-h-screen px-3 sm:px-6 md:px-8 py-6 transition-colors duration-500 ${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
        }`}
    >
      {/* 🔹 Header */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
        <h1 className="text-lg font-semibold">Add Patient</h1>
        <div
          className={`flex items-center gap-1 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"
            }`}
        >
          <p className="flex items-center text-[rgb(213,151,71)] gap-1">
            TrendX <ChevronRight size={14} />
          </p>
          <p className="flex items-center gap-1">
            Admin <ChevronRight size={14} />
          </p>
          <p
            className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-700"
              }`}
          >
            Patient Add
          </p>
        </div>
      </div>

      {/* 🔹 Form Card */}
      <div
        className={`p-4 md:p-6 rounded-lg shadow-md transition-colors duration-500 ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
          }`}
      >
        <h2
          className={`text-md font-semibold mb-4 ${darkMode ? "text-gray-200" : "text-gray-700"
            }`}
        >
          Basic Information
        </h2>

        <form
          onSubmit={handleSubmit}
          className={`grid grid-cols-1 sm:grid-cols-2 gap-4`}
        >
          {/* First Name */}
          <InputField
            label="First Name"
            icon={<User size={16} />}
            value={form.firstname}
            onChange={(e) => setForm({ ...form, firstname: e.target.value })}
            placeholder="Enter first name"
            darkMode={darkMode}
          />

          {/* Last Name */}
          <InputField
            label="Last Name"
            icon={<User size={16} />}
            value={form.lastname}
            onChange={(e) => setForm({ ...form, lastname: e.target.value })}
            placeholder="Enter last name"
            darkMode={darkMode}
          />

          {/* Email */}
          <InputField
            label="Email"
            icon={<Mail size={16} />}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="user@example.com"
            type="email"
            darkMode={darkMode}
          />

          {/* password */}
          <InputField
            label="password"
            icon={<Lock size={16} />}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Enter password"
            type="password"
            darkMode={darkMode}
          />

          {/* Mobile Number */}
          <InputField
            label="Mobile Number"
            icon={<Phone size={16} />}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="Enter phone number"
            darkMode={darkMode}
          />

          {/* Gender */}
          <div>
            <label className="text-sm">Gender</label>
            <div className="flex items-center gap-3 mt-1">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={form.gender === "Male"}
                  onChange={(e) => setForm({ ...form, gender: e.target.value })}
                />
                Male
              </label>

              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={form.gender === "Female"}
                  onChange={(e) => setForm({ ...form, gender: e.target.value })}
                />
                Female
              </label>
            </div>
          </div>


          {/* Age */}
          <InputField
            label="Age"
            icon={<Hash size={16} />}
            type="number"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
            placeholder="Enter age"
            darkMode={darkMode}
          />

          {/* Address */}
          <InputField
            label="Address"
            icon={<MapPin size={16} />}
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            placeholder="Enter address"
            darkMode={darkMode}
          />

          {/* Date of Birth */}
          <div>
            <label className="text-sm">Date of Birth</label>
            <div
              className={`flex items-center border rounded-lg px-3 py-2 ${darkMode
                  ? "border-gray-700 bg-gray-900"
                  : "border-gray-300 bg-white"
                }`}
            >
              <Calendar size={16} className="text-gray-400 mr-2" />
              <input
                type="date"
                value={form.date_of_birth}
                onChange={(e) =>
                  setForm({ ...form, date_of_birth: e.target.value })
                }
                className={`w-full outline-none text-sm ${darkMode ? "bg-gray-900 text-gray-100" : "text-gray-900"
                  }`}
              />
            </div>
          </div>

          {/* Blood Group */}
          <div>
            <label className="text-sm">Blood Group</label>
            <div
              className={`flex items-center border rounded-lg px-3 py-2 ${darkMode
                  ? "border-gray-700 bg-gray-900"
                  : "border-gray-300 bg-white"
                }`}
            >
              <Droplet size={16} className="text-gray-400 mr-2" />
              <select
                value={form.blood_group}
                onChange={(e) =>
                  setForm({ ...form, blood_group: e.target.value })
                }
                className={`w-full outline-none text-sm ${darkMode
                    ? "bg-gray-900 text-gray-400"
                    : "text-gray-500 bg-white"
                  }`}
              >
                <option>Blood Group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>
          </div>

          {/* Weight */}
          <InputField
            label="Weight (kg)"
            icon={<Scale size={16} />}
            type="number"
            value={form.weight}
            onChange={(e) => setForm({ ...form, weight: e.target.value })}
            placeholder="Enter weight"
            darkMode={darkMode}
          />

          {/* Height */}
          <InputField
            label="Height (cm)"
            icon={<Activity size={16} />}
            type="number"
            value={form.height}
            onChange={(e) => setForm({ ...form, height: e.target.value })}
            placeholder="Enter height"
            darkMode={darkMode}
          />
        </form>

        {/* Buttons */}
        <div className="flex justify-end mt-6 gap-3">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[rgb(213,151,71)] text-white px-5 py-2 rounded-md hover:bg-[rgb(190,130,60)]"
          >
            Submit
          </button>
          <button
            onClick={handleCancel}
            className={`px-5 py-2 rounded-md border transition-colors ${darkMode
                ? "border-gray-600 text-gray-300 hover:bg-gray-700"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

/* 🔹 Reusable Input Component */
const InputField = ({
  label,
  icon,
  value,
  onChange,
  placeholder,
  type = "text",
  darkMode,
}) => (
  <div className="w-full min-w-[250px]">
    <label className="text-sm">{label}</label>
    <div
      className={`flex items-center border rounded-lg px-3 py-2 ${darkMode
          ? "border-gray-700 bg-gray-900"
          : "border-gray-300 bg-white"
        }`}
    >
      <span className="text-gray-400 mr-2">{icon}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full outline-none text-sm ${darkMode ? "bg-gray-900 text-gray-100" : "text-gray-900"
          }`}
      />
    </div>
  </div>
);

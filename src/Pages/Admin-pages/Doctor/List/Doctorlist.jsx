
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Pen, Eye, Trash2 } from "lucide-react";
import API from "../../../../API/api";

export default function DoctorList({ darkMode }) {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Fetch all doctors
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await API.get("/doctors");
        const data = res.data.data || res.data;
        setDoctors(data);
      } catch (err) {
        console.error("Error fetching doctors:", err);
        setError("Failed to load doctor list.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  // ✅ Delete Doctor
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this doctor?")) return;

    try {
      await API.delete(`/doctors/${id}`);
      setDoctors((prev) => prev.filter((d) => d.id !== id));
      alert("Doctor deleted successfully!");
    } catch (err) {
      console.error("Error deleting doctor:", err);
      alert("Failed to delete doctor.");
    }
  };

  // ✅ Navigation Handlers
  const handleView = (id) => navigate(`/admin/doctors/details/${id}`);
  const handleEdit = (id) => navigate(`/admin/doctors/edit/${id}`);

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
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

      <div
        className={`rounded-2xl shadow-md p-4 transition-colors duration-500 ${
          darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold mb-4">Doctor List</h2>

          <button
            onClick={() => navigate("/admin/doctors/add")}
            className="bg-[rgb(213,151,71)] px-3 py-1.5 rounded text-white text-sm font-light hover:bg-[rgb(190,130,60)] transition"
          >
            Add Doctor
          </button>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading doctors...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 rounded-lg text-xs sm:text-sm">
              <thead className="bg-[rgba(213,151,71,0.2)] text-[rgb(213,151,71)]">
                <tr className="divide-x divide-gray-300 dark:divide-gray-700 text-center sm:text-left">
                  <th className="p-3 sm:p-4 md:p-5">Name</th>
                  <th className="p-3 sm:p-4 md:p-5">Email</th>
                  <th className="p-3 sm:p-4 md:p-5">Phone</th>
                  <th className="p-3 sm:p-4 md:p-5">Specialization</th>
                  <th className="p-3 sm:p-4 md:p-5">Experience</th>
                  <th className="p-3 sm:p-4 md:p-5">Status</th>
                  <th className="p-3 sm:p-4 md:p-5">Action</th>
                </tr>
              </thead>

              <tbody>
                {doctors.length > 0 ? (
                  doctors.map((d, i) => (
                    <tr
                      key={d.id || i}
                      className="border-t border-gray-200 dark:border-gray-700 divide-x divide-gray-200 dark:divide-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-center sm:text-left"
                    >
                      {/* Name + Avatar */}
                      <td className="p-3 sm:p-4 md:p-5 flex items-center justify-center sm:justify-start gap-2">
                        <img
                          src={
                            d.image ||
                            `https://i.pravatar.cc/40?img=${i + 20}`
                          }
                          alt={d.firstname || "Doctor"}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
                        />
                        <span>{`${d.firstname || ""} ${d.lastname || ""}`}</span>
                      </td>

                      <td className="p-3 sm:p-4 md:p-5">{d.email}</td>
                      <td className="p-3 sm:p-4 md:p-5">{d.phone}</td>
                      <td className="p-3 sm:p-4 md:p-5">{d.specialization}</td>
                      <td className="p-3 sm:p-4 md:p-5">{d.experience}</td>
                      <td className="p-3 sm:p-4 md:p-5 capitalize">
                        {d.status || "active"}
                      </td>

                      {/* ✅ Actions */}
                      <td className="p-3 sm:p-4 md:p-5 flex items-center justify-center gap-3">
                        <Eye
                          size={16}
                          className="cursor-pointer text-gray-600 hover:text-blue-600"
                          title="View Details"
                          onClick={() => handleView(d.id)}
                        />
                        <Pen
                          size={16}
                          className="cursor-pointer text-gray-600 hover:text-yellow-600"
                          title="Edit Doctor"
                          onClick={() => handleEdit(d.id)}
                        />
                        <Trash2
                          size={16}
                          className="cursor-pointer text-gray-600 hover:text-red-600"
                          title="Delete"
                          onClick={() => handleDelete(d.id)}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center p-4 text-gray-500">
                      No doctors found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
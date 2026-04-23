
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Pen, Eye, Trash2 } from "lucide-react";
import API from "../../../../API/api";

export default function PatientList({ darkMode }) {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // ✅ Fetch all patients
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await API.get("/patients");
        const data = res.data.data || res.data;
        setPatients(data);
      } catch (err) {
        console.error("Error fetching patients:", err);
        setError("Failed to load patient list.");
      } finally {
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  // ✅ Delete Patient
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this patient?")) return;

    try {
      await API.delete(`/patients/${id}`);
      setPatients((prev) => prev.filter((p) => p.id !== id));
      alert("Patient deleted successfully!");
    } catch (err) {
      console.error("Error deleting patient:", err);
      alert("Failed to delete patient.");
    }
  };

  // ✅ Navigation Handlers
  const handleView = (id) => navigate(`/admin/patients/details/${id}`);
  const handleEdit = (id) => navigate(`/admin/patients/edit/${id}`);

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden transition-colors duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
    >
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

      <div
        className={`rounded-2xl shadow-md p-4 transition-colors duration-500 ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
          }`}
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-semibold mb-4">Patient List</h2>

          <button
            onClick={() => navigate("/admin/patients/add")}
            className="bg-[rgb(213,151,71)] px-3 py-1.5 rounded text-white text-sm font-light hover:bg-[rgb(190,130,60)] transition"
          >
            Add Patient
          </button>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading patients...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 rounded-lg text-xs sm:text-sm">
              <thead className="bg-[rgba(213,151,71,0.2)] text-[rgb(213,151,71)]">
                <tr className="divide-x divide-gray-300 dark:divide-gray-700 text-center sm:text-left">
                  <th className="p-3 sm:p-4 md:p-5">Name</th>
                  <th className="p-3 sm:p-4 md:p-5 w-20">Sex</th>
                  <th className="p-3 sm:p-4 md:p-5">Address</th>
                  <th className="p-3 sm:p-4 md:p-5">Mobile number</th>
                  <th className="p-3 sm:p-4 md:p-5">Birth Date</th>
                  <th className="p-3 sm:p-4 md:p-5 w-16">Age</th>
                  <th className="p-3 sm:p-4 md:p-5">Blood group</th>
                  <th className="p-3 sm:p-4 md:p-5">Status</th>
                  <th className="p-3 sm:p-4 md:p-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {patients.length > 0 ? (
                  patients.map((p, i) => (
                    <tr
                      key={p.id || i}
                      className="border-t border-gray-200 dark:border-gray-700 divide-x divide-gray-200 dark:divide-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition text-center sm:text-left"
                    >
                      <td className="p-3 sm:p-4 md:p-5 flex items-center justify-center sm:justify-start gap-2">
                        <img
                          src={p.image || `https://i.pravatar.cc/40?img=${i + 10}`}
                          alt={p.firstname || "User"}
                          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
                        />
                        <span>{`${p.firstname || ""} ${p.lastname || ""}`}</span>
                      </td>
                      <td className="p-3 sm:p-4 md:p-5">{p.gender}</td>
                      <td className="p-3 sm:p-4 md:p-5">{p.address}</td>
                      <td className="p-3 sm:p-4 md:p-5">{p.phone}</td>
                      <td className="p-3 sm:p-4 md:p-5">{p.date_of_birth}</td>
                      <td className="p-3 sm:p-4 md:p-5">{p.age}</td>
                      <td className="p-3 sm:p-4 md:p-5">{p.blood_group}</td>
                      <td className="p-3 sm:p-4 md:p-5">{p.status}</td>

                      {/* ✅ Actions */}
                      <td className="p-3 sm:p-4 md:p-5 flex items-center justify-center gap-3">
                        <Eye
                          size={16}
                          className="cursor-pointer text-gray-600 hover:text-blue-600"
                          title="View Details"
                          onClick={() => handleView(p.id)}
                        />
                        <Pen
                          size={16}
                          className="cursor-pointer text-gray-600 hover:text-yellow-600"
                          title="Edit Patient"
                          onClick={() => handleEdit(p.id)}
                        />
                        <Trash2
                          size={16}
                          className="cursor-pointer text-gray-600 hover:text-red-600"
                          title="Delete"
                          onClick={() => handleDelete(p.id)}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center p-4 text-gray-500">
                      No patients found
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






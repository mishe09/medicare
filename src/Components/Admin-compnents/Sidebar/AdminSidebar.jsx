import {
  LayoutDashboard,
  Users,
  Stethoscope,
  Wallet,
  Settings,
  MoreVertical,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function AdminSidebar({ expanded, setExpanded, darkMode }) {
  const [active, setActive] = useState("Dashboard");
  const [openMenus, setOpenMenus] = useState({
    Paitents: false,
    Doctors: false,
    Appointments: false,
  });
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
    setActive(menu);
  };

  const isActiveParent = (menu) => active === menu || active.startsWith(menu + "-");

  return (
    <aside
      className={`sticky top-4 m-4 shadow-sm rounded-xl transition-all duration-300
      ${expanded ? "w-60" : "w-16"}
      h-[calc(100vh-2rem)]
      hidden sm:block
      ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
    >
      <nav className="h-full flex flex-col min-h-0">
        {/* Header */}
        <div className="flex items-center justify-center p-4">
          {expanded ? (
            <div className="text-2xl font-black text-[rgb(213,151,71)] text-center w-full">
              Medicare
            </div>
          ) : (
            <img src="/splash.png" alt="Logo" className="w-8 h-8" />
          )}
        </div>

        {/* Sidebar Items */}
        <ul className="flex-1 px-2 space-y-2 overflow-y-auto">
          {expanded && (
            <p
              className={`text-xs font-semibold px-3 mb-2 ${darkMode ? "text-gray-300" : "text-gray-400"
                }`}
            >
              Admin Portal
            </p>
          )}

          {/* Dashboard */}
          <li
            onClick={() => setActive("Dashboard")}
            className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${active === "Dashboard"
                ? "bg-[rgba(213,151,71,0.15)] text-[rgb(213,151,71)] font-semibold"
                : darkMode
                  ? "hover:bg-gray-700 text-white"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
          >
            <LayoutDashboard size={20} />
            {expanded && (
              <Link to="/dashboard">
                <span>Dashboard</span>
              </Link>
            )}
          </li>

          {/* Patients */}
          <li>
            <div
              onClick={() => toggleMenu("Paitents")}
              className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-colors ${isActiveParent("Paitents")
                  ? "bg-[rgba(213,151,71,0.15)] text-[rgb(213,151,71)] font-semibold"
                  : darkMode
                    ? "hover:bg-gray-700 text-white"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
            >
              <div className="flex items-center gap-3">
                <Users size={20} />
                {expanded && <span>Patients</span>}
              </div>
              {expanded &&
                (openMenus.Paitents ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                ))}
            </div>
            {expanded && openMenus.Paitents && (
              <ul className="ml-10 mt-1 space-y-1 text-sm">
                {["List", "Details", "Add", "Edit"].map((sub) => {
                  const key = `Paitents-${sub}`;
                  return (
                    <li key={key}>
                      <Link
                        to={`/admin/patients/${sub.toLowerCase()}`}
                        onClick={() => setActive(key)}
                        className={`block px-2 py-1 rounded-md ${active === key
                            ? "bg-[rgba(213,151,71,0.2)] text-[rgb(213,151,71)] font-semibold"
                            : darkMode
                              ? "hover:bg-gray-700 text-gray-200"
                              : "hover:bg-gray-100 text-gray-600"
                          }`}
                      >
                        {sub}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>

          {/* Doctors */}
          <li>
            <div
              onClick={() => toggleMenu("Doctors")}
              className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-colors ${isActiveParent("Doctors")
                  ? "bg-[rgba(213,151,71,0.15)] text-[rgb(213,151,71)] font-semibold"
                  : darkMode
                    ? "hover:bg-gray-700 text-white"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
            >
              <div className="flex items-center gap-3">
                <Stethoscope size={20} />
                {expanded && <span>Doctors</span>}
              </div>
              {expanded &&
                (openMenus.Doctors ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                ))}
            </div>
            {expanded && openMenus.Doctors && (
              <ul className="ml-10 mt-1 space-y-1 text-sm">
                {["List", "Details", "Add", "Edit"].map((sub) => {
                  const key = `Doctors-${sub}`;
                  return (
                    <li key={key}>
                      <Link
                        to={`/admin/doctors/${sub.toLowerCase()}`}
                        onClick={() => setActive(key)}
                        className={`block px-2 py-1 rounded-md ${active === key
                            ? "bg-[rgba(213,151,71,0.2)] text-[rgb(213,151,71)] font-semibold"
                            : darkMode
                              ? "hover:bg-gray-700 text-gray-200"
                              : "hover:bg-gray-100 text-gray-600"
                          }`}
                      >
                        {sub}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>

          {/* Appointments */}
          <li>
            <div
              onClick={() => toggleMenu("Appointments")}
              className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-colors ${isActiveParent("Appointments")
                  ? "bg-[rgba(213,151,71,0.15)] text-[rgb(213,151,71)] font-semibold"
                  : darkMode
                    ? "hover:bg-gray-700 text-white"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
            >
              <div className="flex items-center gap-3">
                <LayoutDashboard size={20} />
                {expanded && <span>Appointments</span>}
              </div>
              {expanded &&
                (openMenus.Appointments ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                ))}
            </div>
            {expanded && openMenus.Appointments && (
              <ul className="ml-10 mt-1 space-y-1 text-sm">
                {["List", "Schedule", "Add", "Edit"].map((sub) => {
                  const key = `Appointments-${sub}`;
                  return (
                    <li key={key}>
                      <Link
                        to={`/admin/appointments/${sub.toLowerCase()}`}
                        onClick={() => setActive(key)}
                        className={`block px-2 py-1 rounded-md ${active === key
                            ? "bg-[rgba(213,151,71,0.2)] text-[rgb(213,151,71)] font-semibold"
                            : darkMode
                              ? "hover:bg-gray-700 text-gray-200"
                              : "hover:bg-gray-100 text-gray-600"
                          }`}
                      >
                        {sub}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>

          {/* Wallet */}
          <li
            onClick={() => setActive("Wallet")}
            className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${active === "Wallet"
                ? "bg-[rgba(213,151,71,0.15)] text-[rgb(213,151,71)] font-semibold"
                : darkMode
                  ? "hover:bg-gray-700 text-white"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
          >
            <Wallet size={20} />
            {expanded && (
              <Link to="/admin/wallet">
                <span>Wallet</span>
              </Link>
            )}
          </li>

          {/* Settings */}
          <li
            onClick={() => setActive("Settings")}
            className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${active === "Settings"
                ? "bg-[rgba(213,151,71,0.15)] text-[rgb(213,151,71)] font-semibold"
                : darkMode
                  ? "hover:bg-gray-700 text-white"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
          >
            <Settings size={20} />
            {expanded && (
              <Link to="/admin/settings">
                <span>Settings</span>
              </Link>
            )}
          </li>
        </ul>

        {/* Profile Section */}
        <div className={`border-t p-3 flex-shrink-0 ${darkMode ? "border-gray-700" : ""}`}>
          {expanded ? (
            <div className="flex items-center justify-between relative">
              <div className="flex items-center gap-3">
                <img
                  src="https://ui-avatars.com/api/?background=D59747&color=FFE5B4&bold=true"
                  className="w-10 h-10 rounded-md"
                  alt="User"
                />
                <div className="leading-4">
                  <h4 className="font-semibold text-[rgb(213,151,71)]">John Doe</h4>
                  <span className="text-xs text-[rgb(213,151,71)]">johndoe@gmail.com</span>
                </div>
              </div>

              <div className="relative">
                <MoreVertical
                  size={20}
                  className="cursor-pointer"
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                />
                {showProfileMenu && (
                  <div
                    className={`absolute right-0 bottom-full mb-2 w-24 rounded-md shadow-lg z-50 ${darkMode
                        ? "bg-gray-700 text-white"
                        : "bg-white text-[rgb(213,151,71)]"
                      }`}
                  >

                    <Link
                      to="/"
                      className="block w-full text-left px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
                    >
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <img
              src="https://ui-avatars.com/api/?background=D59747&color=FFE5B4&bold=true"
              className="w-10 h-10 rounded-md"
              alt="User"
            />
          )}
        </div>
      </nav>
    </aside>
  );
}

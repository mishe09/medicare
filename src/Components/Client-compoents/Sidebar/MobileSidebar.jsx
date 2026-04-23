
import {
  Home,
  ClipboardList,
  Tablets,
  MessagesSquare,
  MoreVertical,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileSidebar({ expanded, setExpanded, darkMode }) {
  const [active, setActive] = useState("Home");
  const [openMenus, setOpenMenus] = useState({
    Appointments: false,
    Medication: false,
  });
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const isActiveParent = (menu) => {
    if (active === menu) return true;
    if (menu === "Appointments" && ["- Book", "- Edit"].includes(active))
      return true;
    if (
      menu === "Medication" &&
      ["- List", "- Details", "- Cart", "- Checkout"].includes(active)
    )
      return true;
    return false;
  };

  if (!expanded) return null;

  return (
    <aside
      className={`fixed top-14 left-0 h-full w-60 m-4 shadow-sm rounded-xl z-50 transition-transform ${
        darkMode
          ? "bg-gray-800 text-white"
          : "bg-white text-black"
      }`}
    >
      <nav className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          <div className="text-2xl font-black text-[rgb(213,151,71)] text-center w-full">
            Medicare
          </div>
          <button onClick={() => setExpanded(false)} className="p-1">
            <X className="w-4 h-4 text-gray-600 dark:text-gray-200" />
          </button>
        </div>

        {/* Sidebar Items */}
        <ul className="flex-1 px-2 space-y-2">
          <p
            className={`text-xs font-semibold px-3 mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-400"
            }`}
          >
            Client App
          </p>

          {/* Home */}
          <li
            onClick={() => setActive("Home")}
            className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${
              active === "Home"
                ? "bg-[rgba(213,151,71,0.15)] text-[rgb(213,151,71)] font-semibold"
                : darkMode
                ? "hover:bg-gray-700 text-white"
                : "hover:bg-gray-100 text-gray-600"
            }`}
          >
            <Home size={20} />
            <Link to="/home">
              <span>Home</span>
            </Link>
          </li>

          {/* Appointments */}
          <li>
            <div
              onClick={() => toggleMenu("Appointments")}
              className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-colors ${
                active.startsWith("Appointments")
                  ? "bg-[rgba(213,151,71,0.15)] text-[rgb(213,151,71)] font-semibold"
                  : darkMode
                  ? "hover:bg-gray-700 text-white"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <div className="flex items-center gap-3">
                <ClipboardList size={20} />
                <span>Appointments</span>
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
                <li>
                  <Link
                    to="/Appointmentbooking"
                    onClick={() => setActive("Appointments-Book")}
                    className={`block px-2 py-1 rounded-md ${
                      active === "Appointments-Book"
                        ? "bg-[rgba(213,151,71,0.2)] text-[rgb(213,151,71)] font-semibold"
                        : darkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-gray-100 text-gray-600"
                    }`}
                  >
                    Book Appointment
                  </Link>
                </li>

                <li>
                  <Link
                    to="/Appointmentediting"
                    onClick={() => setActive("Appointments-Edit")}
                    className={`block px-2 py-1 rounded-md ${
                      active === "Appointments-Edit"
                        ? "bg-[rgba(213,151,71,0.2)] text-[rgb(213,151,71)] font-semibold"
                        : darkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-gray-100 text-gray-600"
                    }`}
                  >
                    Edit Appointment
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Medication */}
          <li>
            <div
              onClick={() => toggleMenu("Medication")}
              className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-colors ${
                isActiveParent("Medication")
                  ? "bg-[rgba(213,151,71,0.15)] text-[rgb(213,151,71)] font-semibold"
                  : darkMode
                  ? "hover:bg-gray-700 text-white"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <div className="flex items-center gap-3">
                <Tablets size={20} />
                {expanded && <span>Pharmacy</span>}
              </div>
              {expanded &&
                (openMenus.Medication ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                ))}
            </div>

            {expanded && openMenus.Medication && (
              <ul className="ml-10 mt-1 space-y-1 text-sm">
                <li>
                  <Link
                    to="/Pharmacylisting"
                    onClick={() => setActive("Medication-List")}
                    className={`block px-2 py-1 rounded-md ${
                      active === "Medication-List"
                        ? "bg-[rgba(213,151,71,0.2)] text-[rgb(213,151,71)] font-semibold"
                        : darkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-gray-100 text-gray-600"
                    }`}
                  >
                    Medication List
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Pharmacydetailing"
                    onClick={() => setActive("Medication-Details")}
                    className={`block px-2 py-1 rounded-md ${
                      active === "Medication-Details"
                        ? "bg-[rgba(213,151,71,0.2)] text-[rgb(213,151,71)] font-semibold"
                        : darkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-gray-100 text-gray-600"
                    }`}
                  >
                    Medication Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Pharmacycart"
                    onClick={() => setActive("Medication-Cart")}
                    className={`block px-2 py-1 rounded-md ${
                      active === "Medication-Cart"
                        ? "bg-[rgba(213,151,71,0.2)] text-[rgb(213,151,71)] font-semibold"
                        : darkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-gray-100 text-gray-600"
                    }`}
                  >
                    Cart
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Pharmacycheckingout"
                    onClick={() => setActive("Medication-Checkout")}
                    className={`block px-2 py-1 rounded-md ${
                      active === "Medication-Checkout"
                        ? "bg-[rgba(213,151,71,0.2)] text-[rgb(213,151,71)] font-semibold"
                        : darkMode
                        ? "hover:bg-gray-700 text-gray-200"
                        : "hover:bg-gray-100 text-gray-600"
                    }`}
                  >
                    Checkout
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Chat */}
          <li
            onClick={() => setActive("Chat")}
            className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${
              active === "Chat"
                ? "bg-[rgba(213,151,71,0.15)] text-[rgb(213,151,71)] font-semibold"
                : darkMode
                ? "hover:bg-gray-700 text-white"
                : "hover:bg-gray-100 text-gray-600"
            }`}
          >
            <MessagesSquare size={20} />
            {expanded && (
              <Link to="/Chat">
                <span>Chat</span>
              </Link>
            )}
          </li>
        </ul>

        {/* Profile Section */}
        <div
          className={`border-t p-3 relative ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="flex items-center justify-between relative">
            <div className="flex items-center gap-3">
              <img
                src="https://ui-avatars.com/api/?background=D59747&color=FFE5B4&bold=true"
                className="w-10 h-10 rounded-md"
                alt="User"
              />
              <div className="leading-4">
                <h4 className="font-semibold text-[rgb(213,151,71)]">
                  John Doe
                </h4>
                <span className="text-xs text-[rgb(213,151,71)]">
                  johndoe@gmail.com
                </span>
              </div>
            </div>

            {/* MoreVertical Dropdown */}
            <div className="relative">
              <MoreVertical
                size={20}
                className="cursor-pointer"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              />
              {showProfileMenu && (
                <div
                  className={`absolute right-0 bottom-full mb-2 w-24 rounded-md shadow-lg z-50 ${
                    darkMode
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
        </div>
      </nav>
    </aside>
  );
}

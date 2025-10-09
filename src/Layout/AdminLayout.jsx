import AdminNavbar from "../Components/Admin-compnents/Navbar/AdminNavbar";
import AdminSidebar from "../Components/Admin-compnents/Sidebar/AdminSidebar";
import AdminMobileSidebar from "../Components/Admin-compnents/Sidebar/AdminMobilesidebar";

export default function AdminLayout({
  children,
  expanded,
  setExpanded,
  darkMode,
  setDarkMode,
}) {
  return (
    <div
      className={`flex min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
    >
      {/* 🖥 Desktop Sidebar */}
      <div className="hidden sm:block">
        <AdminSidebar
          expanded={expanded}
          setExpanded={setExpanded}
          darkMode={darkMode}
        />
      </div>

      {/* 📱 Mobile Sidebar */}
      <div className="sm:hidden">
        <AdminMobileSidebar expanded={expanded} setExpanded={setExpanded} />
      </div>

      {/* 🌐 Main Content */}
      <div className="flex-1 flex flex-col">
        <AdminNavbar
          expanded={expanded}
          setExpanded={setExpanded}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}

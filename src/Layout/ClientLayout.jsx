import Navbar from "../Components/Client-compoents/Navbar/Navbar";
import Sidebar from "../Components/Client-compoents/Sidebar/Sidebar";
import MobileSidebar from "../Components/Client-compoents/Sidebar/MobileSidebar";

export default function ClientLayout({
  children,
  expanded,
  setExpanded,
  darkMode,
  setDarkMode,
}) {
  return (
    <div
      className={`flex min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* 🖥 Desktop Sidebar */}
      <div className="hidden sm:block">
        <Sidebar
          expanded={expanded}
          setExpanded={setExpanded}
          darkMode={darkMode}
        />
      </div>

      {/* 📱 Mobile Sidebar */}
      <div className="sm:hidden">
        <MobileSidebar expanded={expanded} setExpanded={setExpanded} />
      </div>

      {/* 🌐 Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar
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


// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./Components/Client-compoents/Navbar/Navbar";
// import Sidebar from "./Components/Client-compoents/Sidebar/Sidebar";
// import MobileSidebar from "./Components/Client-compoents/Sidebar/MobileSidebar";
// import Home from "./Pages/Client-pages/Home/Home";
// import Login from "./Pages/Login/Login";
// import { useState } from "react";
// import "./App.css";

// function Layout({ children, expanded, setExpanded, darkMode, setDarkMode }) {
//   return (
//     <div
//       className={`flex min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
//     >
//       {/* Desktop Sidebar */}
//       <div className="hidden sm:block">
//         <Sidebar
//           expanded={expanded}
//           setExpanded={setExpanded}
//           darkMode={darkMode}
//         />
//       </div>

//       {/* Mobile Sidebar */}
//       <div className="sm:hidden">
//         <MobileSidebar expanded={expanded} setExpanded={setExpanded} />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         <Navbar
//           expanded={expanded}
//           setExpanded={setExpanded}
//           darkMode={darkMode}
//           setDarkMode={setDarkMode}
//         />
//         {/* ✅ Render page content here */}
//         {children}
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [expanded, setExpanded] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <Router>
//       <AppRoutes
//         expanded={expanded}
//         setExpanded={setExpanded}
//         darkMode={darkMode}
//         setDarkMode={setDarkMode}
//       />
//     </Router>
//   );
// }

// function AppRoutes({ expanded, setExpanded, darkMode, setDarkMode }) {
//   const location = useLocation();

//   return (
//     <Routes>
//       {/* Login page */}
//       <Route path="/" element={<Login />} />

//       {/* Protected/Layout pages */}
//       <Route
//         path="/home"
//         element={
//           <Layout
//             expanded={expanded}
//             setExpanded={setExpanded}
//             darkMode={darkMode}
//             setDarkMode={setDarkMode}
//           >
//             {/* ✅ Render Home directly */}
//             <Home darkMode={darkMode} setDarkMode={setDarkMode} />
//           </Layout>
//         }
//       />
//     </Routes>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Client-pages/Home/Home";
import Dashboard from "./Pages/Admin-pages/Dashboard/Dashboard";

import ClientLayout from "./Layout/ClientLayout";
import AdminLayout from "./Layout/AdminLayout";

import "./App.css";

export default function App() {
  const [expanded, setExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <Routes>
        {/* 🔑 Login page (no layout) */}
        <Route path="/" element={<Login />} />

        {/* 👤 Client pages */}
        <Route
          path="/home"
          element={
            <ClientLayout
              expanded={expanded}
              setExpanded={setExpanded}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            >

                <div
                  style={{
                    transform: "scale(0.75)",          // or 0.67 for 67%
                    transformOrigin: "top center",
                    width: "133.33%",                  // inverse of 0.75 to keep full span
                    marginLeft: "-16.6%",              // centers after scaling
                    marginRight: "-15.6%",
                    marginBottom: "-50%",               // reduces bottom gap
                  }}
                >
                  <Home darkMode={darkMode} setDarkMode={setDarkMode} />
                </div>
            </ClientLayout>
          }
        />

        {/* 🧩 Admin pages */}
        <Route
          path="/dashboard"
          element={
            <AdminLayout
              expanded={expanded}
              setExpanded={setExpanded}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            >
              <Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />
            </AdminLayout>
          }
        />
      </Routes>
    </Router>
  );
}

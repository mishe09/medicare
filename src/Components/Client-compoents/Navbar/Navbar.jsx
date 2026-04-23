// Navbar.jsx
import { Menu, Moon, Sun, Bell, User, ShoppingCart, MapPin, ShoppingBag, Percent }
    from "lucide-react";

export default function Navbar({ expanded, setExpanded, darkMode, setDarkMode }) {
    return (
        <header
  className={`sticky top-4 z-50 m-4 px-4 py-2 rounded-xl backdrop-blur-md transition-colors duration-300
    ${darkMode
      ? "bg-gray-800/80 text-white border border-gray-700/50"
      : "bg-white/70 text-black border border-gray-200/50 shadow-sm"
    }`}
>

            {/* Desktop Navbar */}
            <nav className="hidden md:flex items-center justify-between">
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="p-2 rounded-lg hover:bg-gray-100 bg-transparent"
                >
                    <Menu size={20} color={darkMode ? "white" : "black"} />
                </button>

                {/* Right icons */}
                <div className="flex items-center gap-4">
                    {darkMode ? (
                        <Sun
                            size={20}
                            className="cursor-pointer"
                            color="whitesmoke" // icon color in dark mode
                            onClick={() => setDarkMode(!darkMode)}
                        />
                    ) : (
                        <Moon
                            size={20}
                            className="cursor-pointer"
                            color="black" // icon color in light mode
                            onClick={() => setDarkMode(!darkMode)}
                        />
                    )}

                    <img src="https://flagcdn.com/us.svg" alt="US Flag" className="w-6 h-4 rounded" />
                    <Bell size={20} className="cursor-pointer" />
                    <div className="flex items-center gap-2">
                        <img
                            src="/Navbar-assets/pic-2.jpg"
                            alt="Profile"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="font-medium">Alison</span>
                    </div>
                </div>
            </nav>

            {/* Mobile Navbar */}
            <nav className="flex md:hidden items-center justify-between">
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="p-2 rounded-lg hover:bg-gray-100 bg-transparent"
                >
                    <Menu size={20} />
                </button>
                {/* middle icons */}
                <div className="flex items-center gap-4">
                    <MapPin size={20} className="text-green-500" />
                    <ShoppingBag size={20} className="text-yellow-400" />
                    <Percent size={20} className="text-red-400" />
                </div>

                <div className="flex items-center gap-5">
                    {darkMode ? (
                        <Sun
                            size={20}
                            className="cursor-pointer"
                            color="whitesmoke" // icon color in dark mode
                            onClick={() => setDarkMode(!darkMode)}
                        />
                    ) : (
                        <Moon
                            size={20}
                            className="cursor-pointer"
                            color="black" // icon color in light mode
                            onClick={() => setDarkMode(!darkMode)}
                        />
                    )}
                </div>
                
                {/* right icons */}
                <div className="flex items-center gap-3">
                    <button
                        className={`p-2 rounded-full transition-colors duration-300 ${darkMode
                                ? "bg-gray-800 text-white hover:bg-gray-700"
                                : "bg-gray-100 text-black hover:bg-gray-200"
                            }`}
                    >
                        <ShoppingCart size={20} color={darkMode ? "white" : "black"} />
                    </button>

                    <button
                        className={`p-2 rounded-full transition-colors duration-300 ${darkMode
                                ? "bg-gray-800 text-white hover:bg-gray-700"
                                : "bg-gray-100 text-black hover:bg-gray-200"
                            }`}
                    >
                        <User size={20} color={darkMode ? "white" : "black"} />
                    </button>
                </div>
            </nav>
        </header>
    );
}

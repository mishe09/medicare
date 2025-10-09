import {
    ChevronRight,
    Activity,
    Settings,
    Trophy,
    User,
    ShoppingCart,
    Tag,
    ShoppingBag,
    Shield,
    Ticket,
    Truck
} from "lucide-react";

// src/Components/Home/Home.jsx
export default function Home({ darkMode, setDarkMode }) {
    const categories = [
        { name: "Health care", icon: <Activity size={16} /> },
        { name: "First Aid", icon: <Settings size={16} /> },
        { name: "Surgical Product", icon: <Trophy size={16} /> },
        { name: "Diagnostic Product", icon: <User size={16} /> },
        { name: "Laboratory Product", icon: <ShoppingCart size={16} /> },
        { name: "Hospital Product", icon: <Tag size={16} /> },
        { name: "Service & Setup", icon: <ShoppingBag size={16} /> },
        { name: "Food & Nutrition", icon: <Settings size={16} /> },
    ];

    return (
        <>
            <div className="w-[98%]">
                <div className="flex justify-between items-center mb-5">

                    <h1 className="text-lg font-semibold">Home</h1>

                    <div className="flex items-center gap-2">
                        <p className="flex items-center text-[rgb(213,151,71)] gap-1">
                            TrendX <ChevronRight size={16} />
                        </p>
                        <p>Home</p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-2.5 m-0">

                    <div className="relative flex-1 rounded-2xl overflow-visible">
                        {/* Background Image */}
                        <div
                            className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl bg-cover bg-center"
                            style={{
                                backgroundImage: `url('/Home-assets/home-bg-6.jpg')`,
                            }}
                        >
                            {/* White box on top of the image */}
                            <div
                                className={`absolute top-4 sm:top-6 md:top-8 right-2 sm:right-6 
    rounded-2xl p-4 sm:p-5 md:p-6 max-w-xs sm:max-w-sm shadow-lg 
    ${darkMode
                                        ? "bg-gray-800/80 text-white border border-gray-700/50"
                                        : "bg-white/70 text-black border border-gray-200/50 shadow-sm"
                                    }`}
                            >
                                <h1 className="text-sm sm:text-base md:text-lg font-bold mb-2 sm:mb-3">
                                    Online doctors available<br />24/7.
                                </h1>
                                <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
                                    Get convenient, high-quality virtual care including everyday urgent,
                                    mental health care. Your visit could be $0 depending on your insurance
                                    or employment benefits.
                                </p>
                                <button className="bg-[rgb(213,151,71)] text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-4 md:py-2 rounded flex items-center gap-2 text-xs sm:text-sm md:text-base">
                                    See a doctor now <ChevronRight size={14} sm={16} />
                                </button>
                            </div>
                        </div>

                        {/* Stats Box Half Inside/Outside */}
                        <div
                            className={`absolute left-1/2 transform -translate-x-1/2 bottom-8 relative 
                                        flex flex-row md:bottom-4 rounded-2xl justify-between items-center 
                                        px-2 sm:px-10 py-2 sm:py-4 gap-2 sm:gap-6 shadow-md w-11/12 max-w-4xl 
    ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700"}`}
                        >

                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-[rgb(213,151,71)] font-bold text-xl sm:text-3xl">130+</h1>
                                <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-xs sm:text-sm`}>Best Doctor</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-[rgb(213,151,71)] font-bold text-xl sm:text-3xl">250+</h1>
                                <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-xs sm:text-sm`}>Professional Nurse</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-[rgb(213,151,71)] font-bold text-xl sm:text-3xl">1200+</h1>
                                <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-xs sm:text-sm`}>Patient Capacity</p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-[rgb(213,151,71)] font-bold text-xl sm:text-3xl">24/7</h1>
                                <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} text-xs sm:text-sm`}>Available Doctor</p>
                            </div>
                        </div>

                        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2 relative 
                flex flex-col lg:flex-row md:bottom-0 
                bg-[rgba(213,151,71,0.1)] rounded-2xl 
                justify-between items-center 
                px-0 sm:px-5 py-2 sm:py-4 gap-4 lg:gap-6 
                shadow-md w-11/12 max-w-4xl">

                            <div className="flex gap-2 px-4 py-2 items-center text-center rounded-xl cursor-pointer 
                    transition-transform duration-300 hover:bg-[rgba(213,151,71,0.2)] hover:scale-105">
                                <Truck size={40} color="rgb(213,151,71)" />
                                <p className="text-[rgb(213,151,71)] text-xs sm:text-sm"><span className="text-lg font-semibold">Free shipp...</span><br />
                                    on all orders ov...</p>
                            </div>
                            <div className="flex gap-2 px-4 py-2 items-center text-center rounded-xl cursor-pointer 
                    transition-transform duration-300 hover:bg-[rgba(213,151,71,0.2)] hover:scale-105">
                                <div className="w-8 h-8 border-4 border-[rgb(213,151,71)] rounded-full flex items-center justify-center ">
                                    <p className="text-[rgb(213,151,71)] font-bold">$</p>
                                </div>
                                <p className="text-[rgb(213,151,71)] text-xs sm:text-sm"><span className="text-lg font-semibold">15 Days t...</span><br />
                                    Terms and condi...</p>
                            </div>
                            <div className="flex gap-2 px-4 py-2 items-center text-center rounded-xl cursor-pointer 
                    transition-transform duration-300 hover:bg-[rgba(213,151,71,0.2)] hover:scale-105">
                                <Shield size={40} color="rgb(213,151,71)" />
                                <p className="text-[rgb(213,151,71)] text-xs sm:text-sm"><span className="text-lg font-semibold">Secure C...</span><br />
                                    all orders on...</p>
                            </div>
                            <div className="flex gap-2 px-4 py-2 items-center text-center rounded-xl cursor-pointer 
                    transition-transform duration-300 hover:bg-[rgba(213,151,71,0.2)] hover:scale-105">
                                < Ticket size={40} color="rgb(213,151,71)" />
                                <p className="text-[rgb(213,151,71)] text-xs sm:text-sm"><span className="text-lg font-semibold">Offers & Gifts</span><br />
                                    Coupe code</p>
                            </div>
                        </div>
                    </div>

                    <div className={`flex-shrink-0 w-80 bg-white rounded-2xl shadow-md sm:mb-5 mx-auto lg:ml-0 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700"}`}>

                        <h2 className="bg-[rgb(213,151,71)] text-white text-lg font-bold p-4 rounded-t-2xl w-full">
                            Categories
                        </h2>
                        <ul className="flex flex-col divide-y divide-gray-200 rounded-b-2xl overflow-hidden">

                            {categories.map((item, index) => (
                                <li key={index} className={`py-5 p-6 flex items-center gap-4 text-gray-700 hover:bg-[rgba(213,151,71,0.1)] cursor-pointer transition-colors ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-700"}`}>
                                    {item.icon}
                                    {item.name}
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>

            <div className="px-6 md:px-0 mt-5">
                <p className="text-2xl font-semibold">Book an appointment for ab in-clinic consultation</p>
                <div className="text-gray-700 flex flex-col md:flex-row flex-wrap gap-3 mt-7">
                    {["Orthopedist", "Obesity", "Neck pain", "Neurology", "Headache", "Shoulder", "Eye care"].map((item) => (
                        <div
                            key={item}
                            className={`w-[100%] md:w-auto text-center p-3 px-5 rounded-xl shadow-sm border border-transparent 
    transition-all duration-300 cursor-pointer
    ${darkMode
                                    ? "bg-gray-800 text-white hover:bg-[rgb(213,151,71)] hover:text-white"
                                    : "bg-white text-gray-700 hover:bg-[rgb(213,151,71)] hover:text-white"
                                }`}
                        >

                            {item}
                        </div>
                    ))}
                </div>

                <div className="text-gray-700 w-[98%] mt-7 px-4 sm:px-8 lg:px-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { img: "/Home-assets/doctor-1.jpg", name: "Dr. Olivia Adams", role: "Cardiologist" },
                            { img: "/Home-assets/doctor-2.jpg", name: "Dr. Liam Parker", role: "Orthopedist" },
                            { img: "/Home-assets/doctor-3.jpg", name: "Dr. Sophia Brown", role: "Neurologist" },
                            { img: "/Home-assets/doctor-4.jpg", name: "Dr. Ethan Johnson", role: "Pediatrician" },
                            { img: "/Home-assets/doctor-5.jpg", name: "Dr. Ava Wilson", role: "Dermatologist" },
                        ].map((card, index) => (
                            <div
                                key={index}
                                className={`rounded-xl shadow-md p-4 flex flex-col transition-all duration-300 
    ${darkMode
                                        ? "bg-gray-800 text-white hover:bg-[rgb(213,151,71)] hover:text-white"
                                        : "bg-white text-gray-700 hover:bg-[rgb(213,151,71)] hover:text-white"
                                    }`}
                            >

                                <img
                                    src={card.img}
                                    alt={card.name}
                                    className="w-full h-60 object-cover rounded-lg mb-3"
                                />
                                <h3 className="font-semibold text-lg">{card.name}</h3>
                                <p className="text-sm opacity-80">{card.role}</p>
                            </div>
                        ))}
                    </div>
                </div>



                <div className="text-gray-700 w-[98%]  mt-20 mb-10">
                    {/* Header Section */}
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-semibold text-gray-700">Today's Best Deals for You</h2>
                        <a
                            href="#"
                            className="flex items-center text-[rgb(213,151,71)] font-medium hover:underline transition-all"
                        >
                            See Products <ChevronRight className="ml-1 w-4 h-4" />
                        </a>
                    </div>

                    {/* Product Cards */}
                    <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                            { img: "/Home-assets/product-1.jpg", name: "Dettol", price: "$40.00" },
                            { img: "/Home-assets/product-2.jpg", name: "Nicotex", price: "$10.00" },
                            { img: "/Home-assets/product-3.jpg", name: "Pulse Oximeter", price: "$12.00" },
                            { img: "/Home-assets/product-4.jpg", name: "Sanitizer", price: "$20.00" },
                            { img: "/Home-assets/product-5.jpg", name: "Stethoscope", price: "$50.00" },
                            { img: "/Home-assets/product-6.jpg", name: "Thermometer", price: "$40.00" },
                        ].map((product, index) => (
                            <div
                                key={index}
                                className={`rounded-xl shadow-md p-4 flex flex-col transition-all duration-300 
                                        ${darkMode
                                        ? "bg-gray-800 text-white hover:bg-[rgb(213,151,71)] hover:text-white"
                                        : "bg-white text-gray-700 hover:bg-[rgb(213,151,71)] hover:text-white"
                                    }`}
                            >

                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-60 object-contain rounded-md mb-3"
                                />
                                <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                                <p className="text-[rgb(213,151,71)] font-bold text-sm">{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
}


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Linkedin, Twitter, Instagram } from "lucide-react";

export default function LoginPage({ darkMode = false }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isAdmin) {
            if (!email.trim()) {
                alert("Please enter your Admin ID");
                return;
            }
            if (password.length < 6) {
                alert("Password must be at least 6 characters long");
                return;
            }
            console.log("✅ Admin Login Successful");
            alert("Admin login successful!");
            navigate("/dashboard");
           
        } else {
           
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address");
                return;
            }
            if (password.length < 6) {
                alert("Password must be at least 6 characters long");
                return;
            }
            navigate("/home"); 
        }
    };


    return (
        <div
            className={`relative w-full min-h-screen overflow-hidden flex items-center justify-center 
                }`}
        >
            
            <div
                className="absolute rounded-full -top-[10%] right-[48%] z-0 md:block"
                style={{
                    width: "2000px",
                    height: "2000px",
                    background: "linear-gradient(-45deg, rgb(213,151,71), rgb(213,151,71))",
                    transform: "translateY(-50%)",
                }}
            ></div>

            
            <div
                className="absolute inset-0 z-0 md:hidden"
                style={{
                    background:"linear-gradient(180deg, rgb(213,151,71) 30%, white 70%)",
                }}
            ></div>

           
            <div className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-end px-6 md:px-0">

                {/* LEFT SECTION */}
                <div
                    className={`relative z-20 text-left md:text-left text-white max-w-md mb-8 md:mb-0 md:absolute md:top-1/3 md:left-5 md:text-sm`}
                >
                    <p className="text-lg leading-relaxed mb-4 font-medium text-center md:text-left md:w-[18rem] lg:w-auto">
                        {isAdmin ? (
                            <>
                                This portal provides secure access to your personal records.{" "}
                                Clients should use the Client Login option below to view professional details and hospital information.
                            </>
                        ) : (
                            <>
                                This portal provides secure access to your account. <br />
                                <span className="font-semibold">Administrators and Staff</span>{" "}
                                should use the Official Login option below to manage records and internal tools.
                            </>
                        )}
                    </p>

                    <div className="flex justify-center md:justify-start">
                        <button
                            onClick={() => setIsAdmin(!isAdmin)}
                            className="mt-3 bg-[rgb(250,181,101)] text-white font-semibold px-6 py-2 rounded-md shadow hover:bg-[rgb(190,130,60)] transition"
                        >
                            {isAdmin ? "Client Portal" : "Admin Portal"}
                        </button>
                    </div>
                </div>

                {/* LOGIN FORM */}
                <form
                    onSubmit={handleSubmit}
                    className="relative z-10 bg-white shadow-md rounded-2xl p-8 w-full max-w-sm md:mr-10 mb-10"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                        {isAdmin ? "Admin Login" : "Client's Login"}
                    </h2>

                    <input
                        type="text"
                        placeholder={isAdmin ? "Admin ID" : "Email"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(213,151,71)] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mb-6 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(213,151,71)] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />

                    <button
                        type="submit"
                        className="w-full bg-[rgb(213,151,71)] hover:bg-[rgb(190,130,60)] text-white font-semibold py-2 rounded-md transition-colors"
                    >
                        {isAdmin ? "Login as Admin" : "Login as Client"}
                    </button>

                    {/* Social Login */}
                    {!isAdmin && (
                        <div className="text-center mt-6">
                            <p className="text-gray-600 mb-3">
                                Or sign in with social platforms
                            </p>
                            <div className="flex justify-center gap-4">
                                <a
                                    href="#"
                                    className="p-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                                >
                                    <Mail size={20} />
                                </a>
                                <a
                                    href="#"
                                    className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="#"
                                    className="p-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition"
                                >
                                    <Twitter size={20} />
                                </a>
                                <a
                                    href="#"
                                    className="p-3 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white rounded-full hover:opacity-90 transition"
                                >
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

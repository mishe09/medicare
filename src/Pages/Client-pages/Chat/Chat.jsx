
// import React, { useState } from "react";
// import { Send, ChevronRight, Phone, Video, MoreVertical } from "lucide-react";

// const Chat = () => {
//   const [selectedChat, setSelectedChat] = useState(0);
//   const [message, setMessage] = useState("");
//   const [search, setSearch] = useState("");

//   const [chats, setChats] = useState([
//     {
//       doctor: "Dr. James Stone",
//       profile:
//         "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
//       lastTime: "2:45 PM",
//       messages: [
//         { sender: "doctor", text: "Good morning! How are you feeling today?" },
//         {
//           sender: "patient",
//           text: "Good morning, Doctor. Feeling a bit better, thank you!",
//         },
//       ],
//     },
//     {
//       doctor: "Dr. Amaka Benson",
//       profile:
//         "https://images.pexels.com/photos/5327919/pexels-photo-5327919.jpeg",
//       lastTime: "9:12 AM",
//       messages: [
//         { sender: "doctor", text: "Did you take your medication this morning?" },
//         { sender: "patient", text: "Yes, I did around 8:00 AM." },
//       ],
//     },
//     {
//       doctor: "Dr. Emmanuel Johnson",
//       profile:
//         "https://images.pexels.com/photos/8460152/pexels-photo-8460152.jpeg",
//       lastTime: "Yesterday",
//       messages: [
//         { sender: "doctor", text: "Hope your therapy session went well?" },
//         {
//           sender: "patient",
//           text: "Yes, it was helpful. Thank you for checking in!",
//         },
//       ],
//     },
//   ]);

//   const handleSend = () => {
//     if (message.trim() === "") return;
//     const updatedChats = [...chats];
//     updatedChats[selectedChat].messages.push({
//       sender: "patient",
//       text: message,
//     });
//     setChats(updatedChats);
//     setMessage("");
//   };

//   const filteredChats = chats.filter((chat) =>
//     chat.doctor.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <>

//       <div
//         className={`min-h-screen p-4 sm:p-1 transition-colors duration-300 ${darkMode ? "text-gray-200" : "text-gray-800"
//           }`}
//       >

//         <div className="flex justify-between items-center mb-5">

//           <h1 className="text-lg font-semibold">Checkout</h1>

//           <div className="flex items-center gap-2">
//             <p className="flex items-center text-[rgb(213,151,71)] gap-1">
//               TrendX <ChevronRight size={16} />
//             </p>
//             <p>Checkout</p>
//           </div>
//         </div>
//         {/* 📥 Left Sidebar - Inbox */}
//         <div className="w-full md:w-1/4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-y-auto">
//           {/* Header with search */}
//           <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800 z-10">
//             <h2 className="font-semibold text-gray-700 dark:text-gray-200 text-lg">
//               Inbox
//             </h2>
//             <input
//               type="text"
//               placeholder="Search..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg px-3 py-1 text-sm w-24 md:w-32 focus:outline-none focus:ring-1 focus:ring-[rgb(213,151,71)]"
//             />
//           </div>

//           <ul>
//             {filteredChats.map((chat, index) => (
//               <li
//                 key={index}
//                 onClick={() => setSelectedChat(index)}
//                 className={`flex items-center gap-3 p-4 cursor-pointer border-b border-gray-200 dark:border-gray-700 transition ${selectedChat === index
//                     ? "bg-[rgb(213,151,71)] text-white"
//                     : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
//                   }`}
//               >
//                 <img
//                   src={chat.profile}
//                   alt={chat.doctor}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <div className="flex-1">
//                   <p className="font-semibold text-sm">{chat.doctor}</p>
//                   <p className="text-xs truncate opacity-80">
//                     {chat.messages[chat.messages.length - 1].text}
//                   </p>
//                   <p className="text-[10px] opacity-70">{chat.lastTime}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* 💬 Chat Area */}
//         <div className="flex-1 flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden">
//           {/* Header */}
//           <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center sticky top-0 bg-white dark:bg-gray-800 z-10">
//             <div className="flex items-center gap-3">
//               <img
//                 src={chats[selectedChat].profile}
//                 alt="doctor"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div>
//                 <h2 className="font-semibold text-gray-800 dark:text-gray-100">
//                   {chats[selectedChat].doctor}
//                 </h2>
//                 <p className="text-xs text-green-500 font-medium">Active Now</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
//               <Phone className="cursor-pointer hover:text-[rgb(213,151,71)]" />
//               <Video className="cursor-pointer hover:text-[rgb(213,151,71)]" />
//               <MoreVertical className="cursor-pointer hover:text-[rgb(213,151,71)]" />
//             </div>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//             {chats[selectedChat].messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex ${msg.sender === "patient"
//                     ? "justify-end"
//                     : "justify-start"
//                   }`}
//               >
//                 <div
//                   className={`p-3 rounded-xl max-w-xs md:max-w-md text-sm ${msg.sender === "patient"
//                       ? "bg-[rgb(213,151,71)] text-white"
//                       : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border dark:border-gray-600"
//                     }`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Input */}
//           <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center space-x-3 bg-white dark:bg-gray-800 sticky bottom-0">
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//               placeholder="Type your message..."
//               className="flex-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[rgb(213,151,71)]"
//             />
//             <button
//               onClick={handleSend}
//               className="bg-[rgb(213,151,71)] hover:bg-[rgb(190,130,60)] text-white p-2 rounded-full transition"
//             >
//               <Send size={18} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Chat;

// import React, { useState } from "react";
// import { Send, ChevronRight, Phone, Video, MoreVertical } from "lucide-react";

// const Chat = ({ darkMode }) => {
//   const [selectedChat, setSelectedChat] = useState(0);
//   const [message, setMessage] = useState("");
//   const [search, setSearch] = useState("");

//   const [chats, setChats] = useState([
//     {
//       doctor: "Dr. James Stone",
//       profile:
//         "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
//       lastTime: "2:45 PM",
//       messages: [
//         { sender: "doctor", text: "Good morning! How are you feeling today?" },
//         {
//           sender: "patient",
//           text: "Good morning, Doctor. Feeling a bit better, thank you!",
//         },
//       ],
//     },
//     {
//       doctor: "Dr. Amaka Benson",
//       profile:
//         "https://images.pexels.com/photos/5327919/pexels-photo-5327919.jpeg",
//       lastTime: "9:12 AM",
//       messages: [
//         { sender: "doctor", text: "Did you take your medication this morning?" },
//         { sender: "patient", text: "Yes, I did around 8:00 AM." },
//       ],
//     },
//     {
//       doctor: "Dr. Emmanuel Johnson",
//       profile:
//         "https://images.pexels.com/photos/8460152/pexels-photo-8460152.jpeg",
//       lastTime: "Yesterday",
//       messages: [
//         { sender: "doctor", text: "Hope your therapy session went well?" },
//         {
//           sender: "patient",
//           text: "Yes, it was helpful. Thank you for checking in!",
//         },
//       ],
//     },
//   ]);

//   const handleSend = () => {
//     if (message.trim() === "") return;
//     const updatedChats = [...chats];
//     updatedChats[selectedChat].messages.push({
//       sender: "patient",
//       text: message,
//     });
//     setChats(updatedChats);
//     setMessage("");
//   };

//   const filteredChats = chats.filter((chat) =>
//     chat.doctor.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div
//       className={`min-h-screen p-4 md:p-6 transition-colors duration-300 ${
//         darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-800"
//       }`}
//     >
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-5">
//         <h1 className="text-lg font-semibold">Messages</h1>

//         <div className="flex items-center gap-2">
//           <p className="flex items-center text-[rgb(213,151,71)] gap-1">
//             TrendX <ChevronRight size={16} />
//           </p>
//           <p>Chat</p>
//         </div>
//       </div>

//       {/* Main Chat Layout */}
//       <div className="flex flex-col md:flex-row gap-6">
//         {/* 📥 Sidebar */}
//         <div
//           className={`w-full md:w-1/4 rounded-xl border overflow-y-auto ${
//             darkMode
//               ? "bg-gray-800 border-gray-700"
//               : "bg-white border-gray-200"
//           }`}
//         >
//           {/* Search Header */}
//           <div
//             className={`flex items-center justify-between p-4 border-b sticky top-0 z-10 ${
//               darkMode
//                 ? "bg-gray-800 border-gray-700"
//                 : "bg-white border-gray-200"
//             }`}
//           >
//             <h2
//               className={`font-semibold text-lg ${
//                 darkMode ? "text-gray-200" : "text-gray-800"
//               }`}
//             >
//               Inbox
//             </h2>
//             <input
//               type="text"
//               placeholder="Search..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className={`rounded-lg px-3 py-1 text-sm w-28 md:w-36 focus:outline-none focus:ring-1 focus:ring-[rgb(213,151,71)] ${
//                 darkMode
//                   ? "bg-gray-700 border border-gray-600 text-gray-100"
//                   : "bg-white border border-gray-300 text-gray-800"
//               }`}
//             />
//           </div>

//           {/* Chats List */}
//           <ul>
//             {filteredChats.map((chat, index) => (
//               <li
//                 key={index}
//                 onClick={() => setSelectedChat(index)}
//                 className={`flex items-center gap-3 p-4 cursor-pointer border-b transition ${
//                   selectedChat === index
//                     ? "bg-[rgb(213,151,71)] text-white"
//                     : darkMode
//                     ? "hover:bg-gray-700 border-gray-700"
//                     : "hover:bg-gray-100 border-gray-200"
//                 }`}
//               >
//                 <img
//                   src={chat.profile}
//                   alt={chat.doctor}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <div className="flex-1">
//                   <p className="font-semibold text-sm">{chat.doctor}</p>
//                   <p className="text-xs truncate opacity-80">
//                     {chat.messages[chat.messages.length - 1].text}
//                   </p>
//                   <p className="text-[10px] opacity-70">{chat.lastTime}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* 💬 Chat Section */}
//         <div
//           className={`flex-1 flex flex-col rounded-xl overflow-hidden ${
//             darkMode ? "bg-gray-800" : "bg-white"
//           }`}
//         >
//           {/* Chat Header */}
//           <div
//             className={`p-4 border-b flex justify-between items-center sticky top-0 z-10 ${
//               darkMode
//                 ? "bg-gray-800 border-gray-700"
//                 : "bg-white border-gray-200"
//             }`}
//           >
//             <div className="flex items-center gap-3">
//               <img
//                 src={chats[selectedChat].profile}
//                 alt="doctor"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div>
//                 <h2
//                   className={`font-semibold ${
//                     darkMode ? "text-gray-100" : "text-gray-800"
//                   }`}
//                 >
//                   {chats[selectedChat].doctor}
//                 </h2>
//                 <p className="text-xs text-green-500 font-medium">Active Now</p>
//               </div>
//             </div>

//             <div
//               className={`flex items-center gap-4 ${
//                 darkMode ? "text-gray-300" : "text-gray-600"
//               }`}
//             >
//               <Phone className="cursor-pointer hover:text-[rgb(213,151,71)]" />
//               <Video className="cursor-pointer hover:text-[rgb(213,151,71)]" />
//               <MoreVertical className="cursor-pointer hover:text-[rgb(213,151,71)]" />
//             </div>
//           </div>

//           {/* Messages */}
//           <div
//             className={`flex-1 overflow-y-auto p-4 space-y-3 transition-colors duration-300 ${
//               darkMode ? "bg-gray-900" : "bg-gray-50"
//             }`}
//           >
//             {chats[selectedChat].messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex ${
//                   msg.sender === "patient"
//                     ? "justify-end"
//                     : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`p-3 rounded-xl max-w-xs md:max-w-md text-sm ${
//                     msg.sender === "patient"
//                       ? "bg-[rgb(213,151,71)] text-white"
//                       : darkMode
//                       ? "bg-gray-700 text-gray-100 border border-gray-600"
//                       : "bg-white text-gray-800 border border-gray-200"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Input Box */}
//           <div
//             className={`p-4 border-t flex items-center space-x-3 sticky bottom-0 ${
//               darkMode
//                 ? "bg-gray-800 border-gray-700"
//                 : "bg-white border-gray-200"
//             }`}
//           >
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//               placeholder="Type your message..."
//               className={`flex-1 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[rgb(213,151,71)] ${
//                 darkMode
//                   ? "bg-gray-700 border border-gray-600 text-gray-100"
//                   : "bg-white border border-gray-300 text-gray-800"
//               }`}
//             />
//             <button
//               onClick={handleSend}
//               className="bg-[rgb(213,151,71)] hover:bg-[rgb(190,130,60)] text-white p-2 rounded-full transition"
//             >
//               <Send size={18} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;


// import React, { useState } from "react";
// import { Send, ChevronRight, Phone, Video, MoreVertical } from "lucide-react";

// const Chat = ({ darkMode }) => {
//   const [selectedChat, setSelectedChat] = useState(0);
//   const [message, setMessage] = useState("");
//   const [search, setSearch] = useState("");

//   const [chats, setChats] = useState([
//     {
//       doctor: "Dr. James Stone",
//       profile: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
//       lastTime: "2:45 PM",
//       messages: [
//         { sender: "doctor", text: "Good morning! How are you feeling today?" },
//         { sender: "patient", text: "Good morning, Doctor. A little better today." },
//         { sender: "doctor", text: "That’s great! Did you sleep well?" },
//         { sender: "patient", text: "Yes, better than the last few nights!" },
//       ],
//     },
//     {
//       doctor: "Dr. Amaka Benson",
//       profile: "https://images.pexels.com/photos/5327919/pexels-photo-5327919.jpeg",
//       lastTime: "9:12 AM",
//       messages: [
//         { sender: "doctor", text: "Did you take your medication this morning?" },
//         { sender: "patient", text: "Yes, I did around 8:00 AM." },
//         { sender: "doctor", text: "Good. Keep it consistent daily." },
//         { sender: "patient", text: "Sure, thank you." },
//       ],
//     },
//     {
//       doctor: "Dr. Emmanuel Johnson",
//       profile: "https://images.pexels.com/photos/8460152/pexels-photo-8460152.jpeg",
//       lastTime: "Yesterday",
//       messages: [
//         { sender: "doctor", text: "Hope your therapy session went well?" },
//         { sender: "patient", text: "Yes, it was very helpful!" },
//         { sender: "doctor", text: "Excellent. Any side effects?" },
//         { sender: "patient", text: "None so far, thank you." },
//       ],
//     },
//     {
//       doctor: "Dr. Linda Okafor",
//       profile: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
//       lastTime: "Monday",
//       messages: [
//         { sender: "doctor", text: "How are your sugar levels this week?" },
//         { sender: "patient", text: "They’re more stable now, Doctor." },
//         { sender: "doctor", text: "Fantastic progress! Keep monitoring daily." },
//       ],
//     },
//     {
//       doctor: "Dr. Kelvin Ade",
//       profile: "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg",
//       lastTime: "Sunday",
//       messages: [
//         { sender: "doctor", text: "Remember your appointment tomorrow?" },
//         { sender: "patient", text: "Yes, 10 AM sharp!" },
//         { sender: "doctor", text: "Perfect. See you then." },
//       ],
//     },
//     {
//       doctor: "Dr. Sophia Blake",
//       profile: "https://images.pexels.com/photos/5452202/pexels-photo-5452202.jpeg",
//       lastTime: "Saturday",
//       messages: [
//         { sender: "doctor", text: "Drink enough water today?" },
//         { sender: "patient", text: "Haha, trying to! Already on my third bottle." },
//         { sender: "doctor", text: "Good job! Stay hydrated." },
//       ],
//     },
//   ]);

//   const handleSend = () => {
//     if (message.trim() === "") return;
//     const updatedChats = [...chats];
//     updatedChats[selectedChat].messages.push({
//       sender: "patient",
//       text: message,
//     });
//     setChats(updatedChats);
//     setMessage("");
//   };

//   const filteredChats = chats.filter((chat) =>
//     chat.doctor.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div
//       className={`min-h-screen p-4 transition-colors duration-300 ${
//         darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
//       }`}
//     >
//       {/* Header */}
//       <div className="flex justify-between items-center mb-5">
//         <h1 className="text-lg font-semibold">Chat</h1>
//         <div className="flex items-center gap-2">
//           <p className="flex items-center text-[rgb(213,151,71)] gap-1">
//             TrendX <ChevronRight size={16} />
//           </p>
//           <p>Chat</p>
//         </div>
//       </div>

//       {/* Main Chat Container */}
//       <div className="flex flex-col md:flex-row gap-6 h-[85vh]">
//         {/* Inbox */}
//         <div className="w-full md:w-1/4 flex flex-col bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
//           {/* Search Box (on its own row) */}
//           <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
//             <h2 className="font-semibold mb-2 text-gray-700 dark:text-gray-200 text-lg">Inbox</h2>
//             <input
//               type="text"
//               placeholder="Search..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[rgb(213,151,71)]"
//             />
//           </div>

//           {/* Chat List */}
//           <ul className="overflow-y-auto flex-1">
//             {filteredChats.map((chat, index) => (
//               <li
//                 key={index}
//                 onClick={() => setSelectedChat(index)}
//                 className={`flex items-center gap-3 p-4 cursor-pointer border-b border-gray-200 dark:border-gray-700 transition ${
//                   selectedChat === index
//                     ? "bg-[rgb(213,151,71)] text-white"
//                     : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
//                 }`}
//               >
//                 <img
//                   src={chat.profile}
//                   alt={chat.doctor}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <div className="flex-1">
//                   <p className="font-semibold text-sm">{chat.doctor}</p>
//                   <p className="text-xs truncate opacity-80">
//                     {chat.messages[chat.messages.length - 1].text}
//                   </p>
//                   <p className="text-[10px] opacity-70">{chat.lastTime}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Chat Area */}
//         <div className="flex-1 flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
//           {/* Header */}
//           <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center sticky top-0 bg-white dark:bg-gray-800 z-10">
//             <div className="flex items-center gap-3">
//               <img
//                 src={chats[selectedChat].profile}
//                 alt="doctor"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div>
//                 <h2 className="font-semibold text-gray-800 dark:text-gray-100">
//                   {chats[selectedChat].doctor}
//                 </h2>
//                 <p className="text-xs text-green-500 font-medium">Active Now</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
//               <Phone className="cursor-pointer hover:text-[rgb(213,151,71)]" />
//               <Video className="cursor-pointer hover:text-[rgb(213,151,71)]" />
//               <MoreVertical className="cursor-pointer hover:text-[rgb(213,151,71)]" />
//             </div>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-6 space-y-3 bg-gray-50 dark:bg-gray-900">
//             {chats[selectedChat].messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex ${
//                   msg.sender === "patient" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`p-3 rounded-xl max-w-xs md:max-w-md text-sm ${
//                     msg.sender === "patient"
//                       ? "bg-[rgb(213,151,71)] text-white"
//                       : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border dark:border-gray-600"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Input */}
//           <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center space-x-3 bg-white dark:bg-gray-800">
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//               placeholder="Type your message..."
//               className="flex-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[rgb(213,151,71)]"
//             />
//             <button
//               onClick={handleSend}
//               className="bg-[rgb(213,151,71)] hover:bg-[rgb(190,130,60)] text-white p-2 rounded-full transition"
//             >
//               <Send size={18} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;



// import React, { useState } from "react";
// import { Send, ChevronRight, Phone, Video, MoreVertical } from "lucide-react";

// const Chat = ({ darkMode }) => {
//   const [selectedChat, setSelectedChat] = useState(0);
//   const [message, setMessage] = useState("");
//   const [search, setSearch] = useState("");

//   const [chats, setChats] = useState([
//     {
//       doctor: "Dr. James Stone",
//       profile: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
//       lastTime: "2:45 PM",
//       messages: [
//         { sender: "doctor", text: "Good morning! How are you feeling today?" },
//         { sender: "patient", text: "A little better today, Doctor." },
//         { sender: "doctor", text: "That’s great. Keep resting!" },
//         { sender: "patient", text: "I will. Thanks!" },
//       ],
//     },
//     {
//       doctor: "Dr. Amaka Benson",
//       profile: "https://images.pexels.com/photos/5327919/pexels-photo-5327919.jpeg",
//       lastTime: "9:12 AM",
//       messages: [
//         { sender: "doctor", text: "Did you take your medication this morning?" },
//         { sender: "patient", text: "Yes, around 8:00 AM." },
//         { sender: "doctor", text: "Excellent! Keep up the consistency." },
//       ],
//     },
//     {
//       doctor: "Dr. Emmanuel Johnson",
//       profile: "https://images.pexels.com/photos/8460152/pexels-photo-8460152.jpeg",
//       lastTime: "Yesterday",
//       messages: [
//         { sender: "doctor", text: "How did your therapy session go?" },
//         { sender: "patient", text: "It went great, thanks for checking!" },
//       ],
//     },
//     {
//       doctor: "Dr. Linda Okafor",
//       profile: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
//       lastTime: "Monday",
//       messages: [
//         { sender: "doctor", text: "Are you monitoring your sugar levels daily?" },
//         { sender: "patient", text: "Yes, they’ve been stable this week!" },
//       ],
//     },
//     {
//       doctor: "Dr. Kelvin Ade",
//       profile: "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg",
//       lastTime: "Sunday",
//       messages: [
//         { sender: "doctor", text: "Remember your appointment tomorrow?" },
//         { sender: "patient", text: "Yes, 10 AM sharp!" },
//       ],
//     },
//     {
//       doctor: "Dr. Sophia Blake",
//       profile: "https://images.pexels.com/photos/5452202/pexels-photo-5452202.jpeg",
//       lastTime: "Saturday",
//       messages: [
//         { sender: "doctor", text: "Did you stay hydrated today?" },
//         { sender: "patient", text: "On my third bottle already!" },
//       ],
//     },
//   ]);

//   const handleSend = () => {
//     if (message.trim() === "") return;
//     const updatedChats = [...chats];
//     updatedChats[selectedChat].messages.push({
//       sender: "patient",
//       text: message,
//     });
//     setChats(updatedChats);
//     setMessage("");
//   };

//   const filteredChats = chats.filter((chat) =>
//     chat.doctor.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//      <>
    
//       {/* Header */}
//       <div className="flex justify-between items-center mb-5">
//         <h1 className="text-lg font-semibold">Chat</h1>
//         <div className="flex items-center gap-2">
//           <p className="flex items-center text-[rgb(213,151,71)] gap-1">
//             TrendX <ChevronRight size={16} />
//           </p>
//           <p>Chat</p>
//         </div>
//       </div>

//       {/* Main Chat Container */}
//       <div className={`flex flex-col md:flex-row gap-6 h-auto md:h-[85vh] ${
//         darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
//       }`}>
//         {/* Inbox */}
//         <div className="w-full md:w-1/4 flex flex-col bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
//           {/* Search Box */}
//           <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
//             <h2 className="font-semibold mb-2 text-gray-700 dark:text-gray-200 text-lg">Inbox</h2>
//             <input
//               type="text"
//               placeholder="Search..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[rgb(213,151,71)]"
//             />
//           </div>

//           {/* Chat List */}
//           <ul className="overflow-y-auto flex-1 max-h-[250px] md:max-h-full">
//             {filteredChats.map((chat, index) => (
//               <li
//                 key={index}
//                 onClick={() => setSelectedChat(index)}
//                 className={`flex items-center gap-3 p-4 cursor-pointer border-b border-gray-200 dark:border-gray-700 transition ${
//                   selectedChat === index
//                     ? "bg-[rgb(213,151,71)] text-white"
//                     : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
//                 }`}
//               >
//                 <img
//                   src={chat.profile}
//                   alt={chat.doctor}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <div className="flex-1">
//                   <p className="font-semibold text-sm">{chat.doctor}</p>
//                   <p className="text-xs truncate opacity-80">
//                     {chat.messages[chat.messages.length - 1].text}
//                   </p>
//                   <p className="text-[10px] opacity-70">{chat.lastTime}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Chat Area */}
//         <div className="w-full flex-1 flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
//           {/* Header */}
//           <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center sticky top-0 bg-white dark:bg-gray-800 z-10">
//             <div className="flex items-center gap-3">
//               <img
//                 src={chats[selectedChat].profile}
//                 alt="doctor"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div>
//                 <h2 className="font-semibold text-gray-800 dark:text-gray-100">
//                   {chats[selectedChat].doctor}
//                 </h2>
//                 <p className="text-xs text-green-500 font-medium">Active Now</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
//               <Phone className="cursor-pointer hover:text-[rgb(213,151,71)]" />
//               <Video className="cursor-pointer hover:text-[rgb(213,151,71)]" />
//               <MoreVertical className="cursor-pointer hover:text-[rgb(213,151,71)]" />
//             </div>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-6 space-y-3 bg-gray-50 dark:bg-gray-900">
//             {chats[selectedChat].messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex ${
//                   msg.sender === "patient" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`p-3 rounded-xl max-w-xs md:max-w-md text-sm ${
//                     msg.sender === "patient"
//                       ? "bg-[rgb(213,151,71)] text-white"
//                       : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border dark:border-gray-600"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Input */}
//           <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center space-x-3 bg-white dark:bg-gray-800">
//             <input
//               type="text"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//               placeholder="Type your message..."
//               className="flex-1 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[rgb(213,151,71)]"
//             />
//             <button
//               onClick={handleSend}
//               className="bg-[rgb(213,151,71)] hover:bg-[rgb(190,130,60)] text-white p-2 rounded-full transition"
//             >
//               <Send size={18} />
//             </button>
//           </div>
//         </div>
//       </div>
//      </>
//   );
// };

// export default Chat;



import React, { useState } from "react";
import { Send, ChevronRight, Phone, Video, MoreVertical } from "lucide-react";

const Chat = ({ darkMode }) => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  const [chats, setChats] = useState([
    {
      doctor: "Dr. James Stone",
      profile: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
      lastTime: "2:45 PM",
      messages: [
        { sender: "doctor", text: "Good morning! How are you feeling today?" },
        { sender: "patient", text: "A little better today, Doctor." },
        { sender: "doctor", text: "That’s great. Keep resting!" },
        { sender: "patient", text: "I will. Thanks!" },
      ],
    },
    {
      doctor: "Dr. Amaka Benson",
      profile: "https://images.pexels.com/photos/5327919/pexels-photo-5327919.jpeg",
      lastTime: "9:12 AM",
      messages: [
        { sender: "doctor", text: "Did you take your medication this morning?" },
        { sender: "patient", text: "Yes, around 8:00 AM." },
        { sender: "doctor", text: "Excellent! Keep up the consistency." },
      ],
    },
    {
      doctor: "Dr. Emmanuel Johnson",
      profile: "https://images.pexels.com/photos/8460152/pexels-photo-8460152.jpeg",
      lastTime: "Yesterday",
      messages: [
        { sender: "doctor", text: "How did your therapy session go?" },
        { sender: "patient", text: "It went great, thanks for checking!" },
      ],
    },
    {
      doctor: "Dr. Linda Okafor",
      profile: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      lastTime: "Monday",
      messages: [
        { sender: "doctor", text: "Are you monitoring your sugar levels daily?" },
        { sender: "patient", text: "Yes, they’ve been stable this week!" },
      ],
    },
    {
      doctor: "Dr. Kelvin Ade",
      profile: "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg",
      lastTime: "Sunday",
      messages: [
        { sender: "doctor", text: "Remember your appointment tomorrow?" },
        { sender: "patient", text: "Yes, 10 AM sharp!" },
      ],
    },
    {
      doctor: "Dr. Sophia Blake",
      profile: "https://images.pexels.com/photos/5452202/pexels-photo-5452202.jpeg",
      lastTime: "Saturday",
      messages: [
        { sender: "doctor", text: "Did you stay hydrated today?" },
        { sender: "patient", text: "On my third bottle already!" },
      ],
    },
  ]);

  const handleSend = () => {
    if (message.trim() === "") return;
    const updatedChats = [...chats];
    updatedChats[selectedChat].messages.push({
      sender: "patient",
      text: message,
    });
    setChats(updatedChats);
    setMessage("");
  };

  const filteredChats = chats.filter((chat) =>
    chat.doctor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-lg font-semibold">Chat</h1>
        <div className="flex items-center gap-2">
          <p className="flex items-center text-[rgb(213,151,71)] gap-1">
            TrendX <ChevronRight size={16} />
          </p>
          <p>Chat</p>
        </div>
      </div>

      {/* Main Chat Container */}
      <div
        className={`flex flex-col md:flex-row gap-6 h-auto md:h-[85vh] transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
        }`}
      >
        {/* Inbox */}
        <div
          className={`w-full md:w-1/4 flex flex-col rounded-xl border overflow-hidden transition-colors duration-300 ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Search Box */}
          <div
            className={`p-4 border-b transition-colors duration-300 ${
              darkMode
                ? "border-gray-700 bg-gray-800 text-gray-200"
                : "border-gray-200 bg-white text-gray-700"
            }`}
          >
            <h2 className="font-semibold mb-2 text-lg">Inbox</h2>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[rgb(213,151,71)] transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-800"
              }`}
            />
          </div>

          {/* Chat List */}
          <ul className="overflow-y-auto flex-1 max-h-[250px] md:max-h-full">
            {filteredChats.map((chat, index) => (
              <li
                key={index}
                onClick={() => setSelectedChat(index)}
                className={`flex items-center gap-3 p-4 cursor-pointer border-b transition-colors duration-300 ${
                  selectedChat === index
                    ? "bg-[rgb(213,151,71)] text-white"
                    : darkMode
                    ? "border-gray-700 hover:bg-gray-700 text-gray-200"
                    : "border-gray-200 hover:bg-gray-100 text-gray-800"
                }`}
              >
                <img
                  src={chat.profile}
                  alt={chat.doctor}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-semibold text-sm">{chat.doctor}</p>
                  <p className="text-xs truncate opacity-80">
                    {chat.messages[chat.messages.length - 1].text}
                  </p>
                  <p className="text-[10px] opacity-70">{chat.lastTime}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Chat Area */}
        <div
          className={`w-full flex-1 flex flex-col rounded-xl overflow-hidden border transition-colors duration-300 ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }`}
        >
          {/* Header */}
          <div
            className={`p-4 border-b flex justify-between items-center sticky top-0 z-10 transition-colors duration-300 ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-gray-100"
                : "bg-white border-gray-200 text-gray-800"
            }`}
          >
            <div className="flex items-center gap-3">
              <img
                src={chats[selectedChat].profile}
                alt="doctor"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h2 className="font-semibold">
                  {chats[selectedChat].doctor}
                </h2>
                <p className="text-xs text-green-500 font-medium">Active Now</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
              <Phone className="cursor-pointer hover:text-[rgb(213,151,71)]" />
              <Video className="cursor-pointer hover:text-[rgb(213,151,71)]" />
              <MoreVertical className="cursor-pointer hover:text-[rgb(213,151,71)]" />
            </div>
          </div>

          {/* Messages */}
          <div
            className={`flex-1 overflow-y-auto p-6 space-y-3 transition-colors duration-300 ${
              darkMode ? "bg-gray-900" : "bg-gray-50"
            }`}
          >
            {chats[selectedChat].messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "patient" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-xl max-w-xs md:max-w-md text-sm transition-colors duration-300 ${
                    msg.sender === "patient"
                      ? "bg-[rgb(213,151,71)] text-white"
                      : darkMode
                      ? "bg-gray-700 text-gray-100 border border-gray-600"
                      : "bg-white text-gray-800 border border-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div
            className={`p-4 border-t flex items-center space-x-3 transition-colors duration-300 ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className={`flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[rgb(213,151,71)] transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                  : "bg-white border-gray-300 text-gray-800"
              }`}
            />
            <button
              onClick={handleSend}
              className="bg-[rgb(213,151,71)] hover:bg-[rgb(190,130,60)] text-white p-2 rounded-full transition"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;

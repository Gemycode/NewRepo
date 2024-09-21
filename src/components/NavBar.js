// import React from "react";
// import Homepage from './Homepage'
// import Aboutme from "./Aboutme";
// import Services from "./Services";
// import Contact from "./Contact";
// import Portfolio from "./Portfolio";
// import { Routes, Route, Link } from "react-router-dom";
// export default function NavBar() {
//   return (
//     <>
//       <div className="nav-bar flex items-center fixed  opacity-2 bg-gray-300 justify-between px-4 py-2 mt-0 w-full top-0  rounded-3xl">
//         {/* <div className="Logo font-extrabold">Gemy</div> */}
//         <Link to="/" className="nav-item font-bold">
//           Gemy
//         </Link>
//         <nav className="nav flex gap-2">
//           <Link to="/" className="nav-item ">
//             Home
//           </Link>
//           <Link to="/about-me" className="nav-item">
//             About
//           </Link>
//           <Link to="/portfolio" className="nav-item">
//             Portfolio
//           </Link>
//           <Link to="/services" className="nav-item">
//             Services
//           </Link>
//           <Link to="/contact" className="nav-item bg-white px-1 rounded-full">
//             Contact
//           </Link>
//         </nav>
//       </div>

//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/about-me" element={<Aboutme />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   );
// }

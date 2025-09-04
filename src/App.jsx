import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import About from "./pages/About"; 
// import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}

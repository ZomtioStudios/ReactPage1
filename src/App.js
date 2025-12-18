import "./styles.css";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/contact";
import Help from "./components/help";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="page-content" style={{}}>
        <Routes>
          <Route path="/home/*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </>
  );
}

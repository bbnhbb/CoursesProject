import React from "react";
import "./App.css";
import Courses from "./Courses";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="Container">
      <Navbar />
      <MobileNavbar />
      <Courses />
    </div>
  );
}

export default App;

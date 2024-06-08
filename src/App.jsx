import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Main from "./components/Main";
import Certificates from "./components/Certificate/certificate";
import Gallery from "./components/Gallery/gallery";
import Dashboard from "./components/Dashboard/dashboard";
import  "./App.css";
function App() {
  return (
    <Router>
      {/* <Dashboard /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;

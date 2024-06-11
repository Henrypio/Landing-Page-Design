import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Certificates from "./components/Certificate/certificate";
import Gallery from "./components/Gallery/gallery";
import Dashboard from "./components/Dashboard/dashboard";
import  "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;

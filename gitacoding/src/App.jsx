import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import StudentDashboard from "./pages/studentDashboard";
import Calendar from "./pages/Calendar";
import Applyleave from "./pages/Applyleave";
import Events from "./components/Events"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/Applyleave" element={<Applyleave />} />
      <Route path="/Event" element={<Events />} />

    </Routes>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking from "../src/components/Booking/Booking-seats";
import Login from "../src/components/Login/Login-page";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
};
export default App;

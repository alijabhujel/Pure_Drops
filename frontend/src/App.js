import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/ui/Home";
import Games from "./components/ui/Games";

import Clayvessel from "./components/ui/Clayvessel";
import Clothfilter from "./components/ui/Clothfilter";
import Header from "./components/shared/Header";
import WorkshopForm from "./components/ui/WorkshopForm";
import AdminDashboard from "./components/auth/AdminDashboard";
import QuizHolder from "./components/context/QuizHolder";

function App() {
  const location = useLocation();
  const isAdminRoute =
    location.pathname.startsWith("/AdminDashboard") ||
    location.pathname.startsWith("/admindashboard");

  return (
    <>
      {!isAdminRoute && <Header />}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Games" element={<Games />} />
        <Route exact path="/Quizholder" element={<QuizHolder />} />
        <Route path="/Clayvessel" element={<Clayvessel />} />
        <Route path="/Clothfilter" element={<Clothfilter />} />
        <Route path="/WorkShop" element={<WorkshopForm />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;

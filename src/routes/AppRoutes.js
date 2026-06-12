import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.js";
import AboutPage from "../pages/AboutPage.js";
import BlogPage from "../pages/BlogPage.js";
import LoginPage from "../pages/LoginPage.js";
import ContactUs from "../pages/ContactUs.js";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;




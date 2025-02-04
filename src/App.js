import React from "react";
import "./App.css";
import Home from "./features/pages/Home";
import LoginPage from "./features/pages/LoginPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./features/auth/components/Signup";
import Login from "./features/auth/components/Login";
import SignupPage from "./features/pages/SignupPage";
import Cart from "./features/cart/Cart";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cart" element={<Cart />} />



        </Routes>
      </Router>
    </>
  );
}

export default App;

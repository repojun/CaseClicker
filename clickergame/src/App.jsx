import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/dashboard/dashboard";
import Investments from "./Pages/dashboard/investments/investments";
import Tracker from "./Pages/dashboard/tracker/tracker";
import Inventory from "./Pages/dashboard/inventory/inventory";

import MainPage from "./Pages/dashboard/main/mainpage";
import Login from "./Pages/login/login";
import Register from "./Pages/register/register";
import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TestingGrounds />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<RouteAuthenticated> <Dashboard /> </RouteAuthenticated>} />
          <Route path="/dashboard/investments" element={<RouteAuthenticated> <Investments /> </RouteAuthenticated>} />
          <Route path="/dashboard/inventory" element={<RouteAuthenticated> <Inventory /> </RouteAuthenticated>} />
          <Route path="/dashboard/tracker" element={<RouteAuthenticated> <Tracker /> </RouteAuthenticated>} />
          <Route path="/dashboard/mainpage" element={<RouteAuthenticated> <MainPage /> </RouteAuthenticated>} />
        <Route path="/dashboard/test" element={<Test />} />
      </Routes>
    </>

  );
}

export default App;

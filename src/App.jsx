import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/dashboard/dashboard";
import Investments from "./Pages/dashboard/investments/investments";
import Inventory from "./Pages/dashboard/inventory/inventory";
import MainPage from "./Pages/dashboard/main/mainpage";
import Login from "./Pages/login/login";
import Register from "./Pages/register/register";
import React from "react";
import Store from "./Pages/dashboard/store/store";
import RouteAuthenticated from "./routes/authenticated";
import PremiumStore from "./Pages/dashboard/premiumstore/premiumstore";
import Profile from "./Pages/profile/profile";
import Leaderboard from "./Pages/dashboard/leaderboard/leaderboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard/leaderboard"
          element={
            <RouteAuthenticated>
              <Leaderboard />
            </RouteAuthenticated>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RouteAuthenticated>
              <Dashboard />
            </RouteAuthenticated>
          }
        />
        <Route
          path="/dashboard/investments"
          element={
            <RouteAuthenticated>
              <Investments />
            </RouteAuthenticated>
          }
        />
        <Route
          path="/dashboard/inventory"
          element={
            <RouteAuthenticated>
              <Inventory />
            </RouteAuthenticated>
          }
        />
        <Route
          path="/dashboard/mainpage"
          element={
            <RouteAuthenticated>
              <MainPage />
            </RouteAuthenticated>
          }
        />
        <Route
          path="/dashboard/store"
          element={
            <RouteAuthenticated>
              <Store />
            </RouteAuthenticated>
          }
        />
        <Route
          path="/dashboard/premiumstore"
          element={
            <RouteAuthenticated>
              <PremiumStore />
            </RouteAuthenticated>
          }
        />
        <Route
          path="/profile/:username"
          element={
            <RouteAuthenticated>
              <Profile />
            </RouteAuthenticated>
          }
        />
      </Routes>
    </>
  );
}

export default App;

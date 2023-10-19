import { Routes, Route } from "react-router-dom";
import MainContainer from "./components/maincontainer/maincontainer";
import Dashboard from "./Pages/dashboard/dashboard";
import Login from "./Pages/login/login";
import Inventory from "./Pages/dashboard/inventory/inventory";
import Register from "./Pages/register/register";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainContainer />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/inventory" element={<Inventory />} />
    </Routes>
  );
}

export default App;

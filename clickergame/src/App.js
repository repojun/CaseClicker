import { Routes, Route } from "react-router-dom";
import MainContainer from "./components/maincontainer/maincontainer";
import Dashboard from "./Pages/dashboard/dashboard";
import Login from "./Pages/login/login";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainContainer />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;

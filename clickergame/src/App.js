import { Routes, Route } from "react-router-dom";
import MainContainer from "./components/maincontainer/maincontainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainContainer />} ></Route>
    </Routes>

  );
}

export default App;

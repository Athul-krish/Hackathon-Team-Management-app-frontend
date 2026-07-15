import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddTeam from "./components/AddTeam";
import ViewTeam from "./components/ViewTeam";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<ViewTeam />} />
        <Route path="/add" element={<AddTeam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
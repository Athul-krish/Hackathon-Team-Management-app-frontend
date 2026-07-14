import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddTeam from "./components/AddTeam";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTeam />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
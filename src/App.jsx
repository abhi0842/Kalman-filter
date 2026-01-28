import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Simulation from "./pages/Simulation.jsx";
import Simulation1 from "./pages/Simulation1.jsx";
import Simulation2 from "./pages/Simulation2.jsx";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/simulation" />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/simulation/1" element={<Simulation1 />} />
        <Route path="/simulation/2" element={<Simulation2 />} />
        
      </Routes>
    </Router>
  );
};

export default App;

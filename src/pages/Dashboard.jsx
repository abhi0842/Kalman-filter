import { Routes, Route, Navigate } from "react-router-dom";
import Simulation from "./Simulation";


function Dashboard() {
  return (
    <Routes>
      {/* Default route */}
      <Route index element={<Navigate to="simulation/lms" />} />

      {/* Simulation routes */}
      <Route path="simulation">
       
      </Route>
    </Routes>
  );
}

export default Dashboard;

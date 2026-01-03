import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Documents from "./pages/Documents";
import Dashboard from "./pages/Dashboard";
import Budget from "./pages/Budget";

import "./App.css";

function App() {
  // Global ward state
  const [selectedWard, setSelectedWard] = useState("Ward No. 5 – Lalitpur");

  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <nav className="navbar">
          <div className="app-brand">
            जनसूचना
          </div>

          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/documents" className="nav-link">
            Documents
          </NavLink>

          <NavLink to="/dashboard" className="nav-link">
            Dashboard
          </NavLink>

          <NavLink to="/budget" className="nav-link">
            Budget
          </NavLink>
        </nav>

        {/* Main content */}
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  selectedWard={selectedWard}
                  setSelectedWard={setSelectedWard}
                />
              }
            />
            <Route path="/documents" element={<Documents />} />
            <Route
              path="/dashboard"
              element={<Dashboard selectedWard={selectedWard} />}
            />
            <Route
              path="/budget"
              element={<Budget selectedWard={selectedWard} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home({ selectedWard, setSelectedWard }) {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-content">
        {/* Logo */}
        <div className="home-logo">🏛️</div>

        {/* Title */}
        <h1 className="home-title">जनसूचना</h1>
        <p className="home-tagline">
          Citizen Information & Transparency Portal
        </p>

        {/* Description */}
        <p className="home-description">
          जनसूचना is a digital platform designed to make ward-level
          public services more transparent, accessible, and efficient.
        </p>

        <p className="home-description light">
          Citizens can check document requirements, stay updated with ward
          programs, and understand how public budgets are utilized.
        </p>

        {/* Action buttons */}
        <div className="home-actions">
          <button
            className="home-btn primary"
            onClick={() => navigate("/documents")}
          >
            Document Guidelines
          </button>

          <button
            className="home-btn secondary"
            onClick={() => navigate("/dashboard")}
          >
            Ward Dashboard
          </button>

          <button
            className="home-btn budget-btn"
            onClick={() => navigate("/budget")}
          >
            💰 Budget Transparency
          </button>
        </div>

        {/* 🔽 Ward selector at the END */}
        <div className="ward-selector">
          <label>Select Your Ward</label>
          <select
            value={selectedWard}
            onChange={(e) => setSelectedWard(e.target.value)}
          >
            <option>Ward 5, Kathmandu</option>
            <option>Ward 10, Lalitpur</option>
            <option>Ward 3, Pokhara</option>
            <option disabled>More wards coming soon…</option>
          </select>

          <p className="ward-note">
            Currently showing demo data for one ward.
            More wards will be added after MVP.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

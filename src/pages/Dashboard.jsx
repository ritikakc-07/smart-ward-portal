import { useEffect, useState } from "react";
import "./Dashboard.css";

function Dashboard({ selectedWard }) {
  // State to store backend data
  const [announcements, setAnnouncements] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [community, setCommunity] = useState([]);

  useEffect(() => {
    // Fetch all dashboard data from backend
    fetch("http://localhost:5000/api/dashboard")
      .then((res) => res.json())
      .then((data) => {
        setAnnouncements(data.announcements || []);
        setTrainings(data.trainings || []);
        setCommunity(data.communityActivities || []);
      })
      .catch((err) => console.error("Error fetching dashboard data:", err));
  }, []);

  return (
    <div className="dashboard-page">
      <h1 className="dashboard-title">📊 Citizen Dashboard – {selectedWard}</h1>

      {/* Announcements */}
      <section className="dashboard-section">
        <h2>📢 Latest Announcements</h2>
        {announcements.length === 0 ? (
          <p className="empty">No announcements available.</p>
        ) : (
          announcements.map((a) => (
            <div key={a.id} className="dashboard-card">
              <h3>{a.title}</h3>
              <p>{a.description}</p>
              <div className="card-footer">
                <span className={`tag ${a.status.toLowerCase()}`}>
                  {a.status}
                </span>
                <span className="date">📅 {a.date}</span>
              </div>
            </div>
          ))
        )}
      </section>

      {/* Trainings */}
      <section className="dashboard-section">
        <h2>🧑‍🏫 Skill & Training Programs</h2>
        {trainings.length === 0 ? (
          <p className="empty">No training programs available.</p>
        ) : (
          trainings.map((t) => (
            <div key={t.id} className="dashboard-card">
              <h3>{t.title}</h3>
              <p>{t.description}</p>
              <div className="card-footer">
                <span className={`tag ${t.status.toLowerCase()}`}>
                  {t.status}
                </span>
                <span className="date">📅 {t.date}</span>
              </div>
            </div>
          ))
        )}
      </section>

      {/* Community Activities */}
      <section className="dashboard-section">
        <h2>🤝 Community & Empowerment Activities</h2>
        {community.length === 0 ? (
          <p className="empty">No community activities available.</p>
        ) : (
          community.map((c) => (
            <div key={c.id} className="dashboard-card">
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <div className="card-footer">
                <span className={`tag ${c.status.toLowerCase()}`}>
                  {c.status}
                </span>
                <span className="date">📅 {c.date}</span>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default Dashboard;

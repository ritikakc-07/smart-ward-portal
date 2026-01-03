import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // State for backend data
  const [documents, setDocuments] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [budget, setBudget] = useState([]);

  // State for admin form
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    description: "",
    wardNo: "",
    date: "",
  });

  // Fetch backend data on load
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/documents")
      .then((res) => setDocuments(res.data))
      .catch((err) => console.error(err));

    axios
      .get("http://localhost:5000/api/v1/announcements")
      .then((res) => setAnnouncements(res.data))
      .catch((err) => console.error(err));

    axios
      .get("http://localhost:5000/api/v1/budget")
      .then((res) => setBudget(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Admin form submit
  const handleAddAnnouncement = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/announcements", newAnnouncement)
      .then((res) => {
        alert("Announcement added!");
        setAnnouncements([...announcements, newAnnouncement]);
        setNewAnnouncement({ title: "", description: "", wardNo: "", date: "" });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <h1>Smart Ward Portal</h1>

      {/* Documents Section */}
      <section>
        <h2>Documents</h2>
        <ul>
          {documents.map((doc) => (
            <li key={doc.id}>
              <strong>{doc.title}</strong> - {doc.office} ({doc.processingTime})
            </li>
          ))}
        </ul>
      </section>

      {/* Announcements Section */}
      <section>
        <h2>Announcements</h2>
        <ul>
          {announcements.map((ann) => (
            <li key={ann.id}>
              <strong>{ann.title}</strong> - {ann.description} (Ward {ann.wardNo}) on {ann.date}
            </li>
          ))}
        </ul>
      </section>

      {/* Budget Section */}
      <section>
        <h2>Budget</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Category</th>
              <th>Allocated Amount</th>
              <th>Spent Amount</th>
            </tr>
          </thead>
          <tbody>
            {budget.map((b) => (
              <tr key={b.id}>
                <td>{b.category}</td>
                <td>{b.allocated_amount}</td>
                <td>{b.spent_amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Admin Section */}
      <section>
        <h2>Admin: Add Announcement</h2>
        <form onSubmit={handleAddAnnouncement}>
          <input
            type="text"
            placeholder="Title"
            value={newAnnouncement.title}
            onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={newAnnouncement.description}
            onChange={(e) => setNewAnnouncement({ ...newAnnouncement, description: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Ward No"
            value={newAnnouncement.wardNo}
            onChange={(e) => setNewAnnouncement({ ...newAnnouncement, wardNo: e.target.value })}
            required
          />
          <input
            type="date"
            value={newAnnouncement.date}
            onChange={(e) => setNewAnnouncement({ ...newAnnouncement, date: e.target.value })}
            required
          />
          <button type="submit">Add Announcement</button>
        </form>
      </section>
    </div>
  );
}

export default App;

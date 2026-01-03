import { useState, useEffect } from "react";
import "./Documents.css";

export default function Documents() {
  const [documentsData, setDocumentsData] = useState({});
  const [selectedService, setSelectedService] = useState("");
  const [checkedDocs, setCheckedDocs] = useState([]);

  // Fetch documents from backend 
  useEffect(() => {
    fetch("http://localhost:5000/api/documents")
      .then((res) => res.json())
      .then((data) => {
        setDocumentsData(data); // set API data
      })
      .catch((err) => console.error("Error fetching documents:", err));
  }, []);

  const handleCheckboxChange = (doc) => {
    setCheckedDocs((prev) =>
      prev.includes(doc) ? prev.filter((d) => d !== doc) : [...prev, doc]
    );
  };

  const currentService = documentsData[selectedService];
  const currentDocs = currentService ? currentService.requirements : [];
  const allReady =
    currentService && checkedDocs.length === currentDocs.length;

  return (
    <div className="documents-page">

      {/* 🔴 TOP BANNER */}
      <div className="documents-banner">
        <h2>Smart Ward Document Assistant</h2>
        <p>Prepare required documents in advance and save time at your ward office.</p>
      </div>

      <h1>📄 Document Guidelines</h1>
      <p className="documents-intro">
        This section helps citizens understand which documents are required
        before visiting the ward office.
      </p>

      {/* SERVICE DROPDOWN */}
      <div className="service-dropdown">
        <select
          value={selectedService}
          onChange={(e) => {
            setSelectedService(e.target.value);
            setCheckedDocs([]);
          }}
        >
          <option value="">— Select a Government Service —</option>
          {Object.keys(documentsData).map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* DETAILS CARD */}
      {currentService && (
        <div className="documents-card">
          <h2>{selectedService}</h2>
          <p className="service-description">{currentService.description}</p>

          <div className="service-meta">
            <span>
              <strong>Office:</strong> {currentService.office}
            </span>
            <span>
              <strong>Processing Time:</strong> {currentService.processingTime}
            </span>
          </div>

          <h3>Required Documents</h3>
          <ul className="documents-list">
            {currentDocs.map((doc) => (
              <li key={doc}>
                <label>
                  <input
                    type="checkbox"
                    checked={checkedDocs.includes(doc)}
                    onChange={() => handleCheckboxChange(doc)}
                  />
                  {doc}
                </label>
              </li>
            ))}
          </ul>

          {allReady ? (
            <div className="status success">
              ✅ You have all required documents. You’re ready to apply!
            </div>
          ) : (
            <div className="status warning">
              ⚠️ Please ensure all documents are prepared.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

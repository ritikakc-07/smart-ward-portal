import { useState, useEffect } from "react";
import "./Documents.css";

export default function Documents() {
  const [documentsData, setDocumentsData] = useState([]); // <-- array, not object
  const [selectedService, setSelectedService] = useState("");
  const [checkedDocs, setCheckedDocs] = useState([]);

  // Fetch documents from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/documents") // make sure URL matches backend
      .then((res) => res.json())
      .then((data) => setDocumentsData(data))
      .catch((err) => console.error("Error fetching documents:", err));
  }, []);

  const handleCheckboxChange = (doc) => {
    setCheckedDocs((prev) =>
      prev.includes(doc) ? prev.filter((d) => d !== doc) : [...prev, doc]
    );
  };

  // Find the currently selected service object
  const currentService = documentsData.find(
    (d) => d.service === selectedService
  );

  const currentDocs = currentService?.requiredDocuments || [];
  const allReady =
    currentService && checkedDocs.length === currentDocs.length;

  return (
    <div className="documents-page">

      {/* TOP BANNER */}
      <div className="documents-banner">
        <h2>Smart Ward Document Assistant</h2>
        <p>Prepare required documents in advance and save time at your ward office.</p>
      </div>

      <h1>📄 Document Guidelines</h1>
      <p className="documents-intro">
        This section helps citizens understand which documents are required before visiting the ward office.
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
          {documentsData.map((doc) => (
            <option key={doc.id} value={doc.service}>
              {doc.service}
            </option>
          ))}
        </select>
      </div>

      {/* DETAILS CARD */}
      {currentService && (
        <div className="documents-card">
          <h2>{currentService.service}</h2>

          <div className="service-meta">
            <span><strong>Office:</strong> {currentService.office}</span>
            <span><strong>Processing Time:</strong> {currentService.processingTime}</span>
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

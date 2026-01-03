import { useEffect, useState } from "react";
import "./Budget.css";

export default function Budget({ selectedWard }) {
  const [budgets, setBudgets] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/budgets")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch budget");
        }
        return res.json();
      })
      .then((data) => {
        setBudgets(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching budgets:", err);
        setError("Could not load budget info");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="budget-page"><p>Loading budget info…</p></div>;
  }

  if (error) {
    return <div className="budget-page"><p className="error">{error}</p></div>;
  }

  const { totalBudget, items } = budgets || {};

  return (
    <div className="budget-page">
      <h1 className="budget-title">💰 Budget Transparency – {selectedWard}</h1>

      <p className="budget-subtitle">
        Transparent overview of ward-level budget allocation and utilization
        for the current fiscal year.
      </p>

      {/* Budget Summary */}
      <div className="budget-summary">
        <h2>Total Ward Budget (FY 2080/81)</h2>
        <p className="amount">
          NPR {totalBudget?.toLocaleString() ?? "N/A"}
        </p>
        <p className="summary-note">
          Allocated for development, social welfare, and essential public services.
        </p>
      </div>

      {/* Budget Chart */}
      <div className="budget-chart">
        <h2>📊 Budget Utilization Breakdown</h2>

        {items && items.map((b) => (
          <div key={b.category} className="bar-item">
            <span className="label">{b.category}</span>
            <div className="bar">
              <div className="fill" style={{ width: `${b.percent}%` }}></div>
            </div>
            <span className="percent">{b.percent}%</span>
          </div>
        ))}
      </div>

      <p className="note">
        *Budget figures shown are indicative and for public transparency.
        Final allocations may vary based on ward meetings and policy decisions.
      </p>
    </div>
  );
}

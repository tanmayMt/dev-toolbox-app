import React, { useEffect, useState } from "react";
import axios from "axios";

const JsonHistory = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/json/history")
      .then((res) => setEntries(res.data.data))
      .catch(() => alert("⚠️ Failed to load history"));
  }, []);

  return (
    <div>
      <h4 className="mb-3">📜 JSON History</h4>
      {entries.length === 0 ? (
        <div className="alert alert-info">No history found.</div>
      ) : (
        entries.map((item, i) => (
          <div
            key={i}
            className="card mb-4 shadow-sm"
            style={{ backgroundColor: "var(--bs-light-bg-subtle)" }}
          >
            <div className="card-header d-flex justify-content-between">
              <span>Entry #{entries.length - i}</span>
              <small className="text-muted">{new Date(item.createdAt).toLocaleString()}</small>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <strong>Raw JSON:</strong>
                <pre className="bg-dark-subtle p-2 rounded small">
                  {item.raw}
                </pre>
              </div>
              <div>
                <strong>Formatted:</strong>
                <pre className="bg-success-subtle p-2 rounded small">
                  {item.formatted}
                </pre>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default JsonHistory;

import React, { useEffect, useState } from "react";
import axios from "axios";

const JsonHistory = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/json/history")
      .then(res => setEntries(res.data.data))
      .catch(() => alert("Failed to load history"));
  }, []);

  return (
    <div>
      <h4>JSON History</h4>
      {entries.map((item, i) => (
        <div key={i} className="bg-white border p-3 mb-2">
          <strong>Raw:</strong>
          <pre>{item.raw}</pre>
          <strong>Formatted:</strong>
          <pre>{item.formatted}</pre>
        </div>
      ))}
    </div>
  );
};

export default JsonHistory;

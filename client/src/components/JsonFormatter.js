import React, { useState } from "react";
import axios from "axios";

const JsonFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const backendurl = process.env.REACT_APP_BACKEND_URL;

  const formatJson = async () => {
    try {
      const res = await axios.post(`http://localhost:8080/api/json/format`, {
        jsonText: input,
      });
      setOutput(res.data.formatted);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Error parsing JSON");
      setOutput("");
    }
  };

  return (
    <div className="card shadow-sm border-0 p-4 bg-white dark-card">
      <h3 className="text-primary mb-3">🧾 JSON Formatter</h3>

      <label className="form-label fw-bold">Enter JSON:</label>
      <textarea
        className="form-control bg-light border-1"
        rows="6"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='{"name": "John", "age": 30}'
      ></textarea>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <button className="btn btn-success px-4" onClick={formatJson}>
          Format JSON
        </button>
        <small className="text-muted">Paste raw JSON above & click format</small>
      </div>

      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          ❌ {error}
        </div>
      )}

      {output && (
        <div className="mt-4">
          <h5 className="text-success">✅ Formatted Output</h5>
          <pre className="bg-dark text-light p-3 rounded small border">
            {output}
          </pre>
          <button
            className="btn btn-outline-primary btn-sm mt-2"
            onClick={() => navigator.clipboard.writeText(output)}
          >
            📋 Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
};

export default JsonFormatter;

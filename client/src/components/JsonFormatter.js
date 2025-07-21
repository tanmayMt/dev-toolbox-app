import React, { useState } from "react";
import axios from "axios";

const JsonFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const formatJson = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/json/format", { jsonText: input });
      setOutput(res.data.formatted);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Error parsing JSON");
      setOutput("");
    }
  };

  return (
    <div>
      <h4>JSON Input</h4>
      <textarea className="form-control" rows="6" value={input} onChange={(e) => setInput(e.target.value)}></textarea>
      <button className="btn btn-success mt-2" onClick={formatJson}>Format</button>

      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {output && (
        <div className="mt-4">
          <h5>Formatted Output</h5>
          <pre className="bg-light p-3 rounded">{output}</pre>
          <button className="btn btn-outline-secondary btn-sm" onClick={() => navigator.clipboard.writeText(output)}>Copy</button>
        </div>
      )}
    </div>
  );
};

export default JsonFormatter;

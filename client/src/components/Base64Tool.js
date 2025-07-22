import React, { useState } from "react";
import axios from "axios";

const Base64Tool = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("encode");
  const [copied, setCopied] = useState(false);

  const backendurl = process.env.REACT_APP_BACKEND_URL;

  const handleConvert = async () => {
    const endpoint = mode === "encode" ? "encode" : "decode";
    try {
      const res = await axios.post(`http://localhost:8080/api/base64/${endpoint}`, {
        text: input,
      });
      const data = mode === "encode" ? res.data.encoded : res.data.decoded;
      setOutput(data);
      setCopied(false);
    } catch (err) {
      setOutput("");
      alert("❌ Conversion failed. Please check your input.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-5">
      <h4 className="mb-3">🔐 Base64 {mode === "encode" ? "Encoder" : "Decoder"}</h4>

      <div className="mb-3">
        <label className="form-label fw-bold">Select Mode</label>
        <select
          className="form-select"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="encode">Encode</option>
          <option value="decode">Decode</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">
          {mode === "encode" ? "Text to Encode" : "Base64 to Decode"}
        </label>
        <textarea
          className="form-control"
          rows="5"
          placeholder={`Enter text to ${mode}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleConvert}>
        🔁 {mode === "encode" ? "Encode" : "Decode"}
      </button>

      {output && (
        <div className="mt-4">
          <h5 className="mb-2">📋 Output</h5>
          <pre
            className="bg-dark text-white p-3 rounded"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {output}
          </pre>
          <button className="btn btn-outline-light btn-sm" onClick={handleCopy}>
            📋 Copy
          </button>
          {copied && <span className="text-success ms-2">Copied!</span>}
        </div>
      )}
    </div>
  );
};

export default Base64Tool;

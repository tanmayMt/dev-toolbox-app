import React, { useState } from "react";
import axios from "axios";

const Base64Tool = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("encode");

  const handleConvert = async () => {
    const endpoint = mode === "encode" ? "encode" : "decode";
    try {
      const res = await axios.post(`http://localhost:8080/api/base64/${endpoint}`, { text: input });
      const data = mode === "encode" ? res.data.encoded : res.data.decoded;
      setOutput(data);
    } catch (err) {
      alert("Conversion error");
    }
  };

  return (
    <div>
      <div className="mb-2">
        <select className="form-select" value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="encode">Encode</option>
          <option value="decode">Decode</option>
        </select>
      </div>

      <textarea className="form-control" rows="5" value={input} onChange={(e) => setInput(e.target.value)}></textarea>
      <button className="btn btn-success mt-2" onClick={handleConvert}>{mode === "encode" ? "Encode" : "Decode"}</button>

      {output && (
        <div className="mt-4">
          <h5>Output</h5>
          <pre className="bg-light p-3 rounded">{output}</pre>
          <button className="btn btn-outline-secondary btn-sm" onClick={() => navigator.clipboard.writeText(output)}>Copy</button>
        </div>
      )}
    </div>
  );
};

export default Base64Tool;

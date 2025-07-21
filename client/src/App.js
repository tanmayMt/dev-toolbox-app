import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import JsonFormatter from "./components/JsonFormatter";
import Base64Tool from "./components/Base64Tool";
import JsonHistory from "./components/JsonHistory";

function App() {
  const [tab, setTab] = useState("json");

  return (
    <div className="container">
      <h1 className="text-center mb-4">🧰 Dev Toolbox</h1>

      <div className="btn-group mb-4">
        <button className={`btn btn-${tab === "json" ? "primary" : "outline-primary"}`} onClick={() => setTab("json")}>JSON Formatter</button>
        <button className={`btn btn-${tab === "base64" ? "primary" : "outline-primary"}`} onClick={() => setTab("base64")}>Base64 Encode/Decode</button>
        <button className={`btn btn-${tab === "history" ? "primary" : "outline-primary"}`} onClick={() => setTab("history")}>History (Bonus)</button>
      </div>

      {tab === "json" && <JsonFormatter />}
      {tab === "base64" && <Base64Tool />}
      {tab === "history" && <JsonHistory />}
    </div>
  );
}

export default App;

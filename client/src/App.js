import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import JsonFormatter from "./components/JsonFormatter";
import Base64Tool from "./components/Base64Tool";
import JsonHistory from "./components/JsonHistory";
import "./styles.css";

function App() {
  const [tab, setTab] = useState("json");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  return (
    <div className="main-wrapper">
      <header className="app-header text-white py-3 px-4 d-flex justify-content-between align-items-center">
        <h2 className="m-0">🧰 Dev Toolbox</h2>
        <button
          className="btn btn-outline-light btn-sm"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <div className="container py-4">
        <div className="btn-group w-100 mb-4" role="group">
          <button className={`btn ${tab === "json" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setTab("json")}>JSON Formatter</button>
          <button className={`btn ${tab === "base64" ? "btn-success" : "btn-outline-success"}`} onClick={() => setTab("base64")}>Base64 Tool</button>
          <button className={`btn ${tab === "history" ? "btn-info text-white" : "btn-outline-info"}`} onClick={() => setTab("history")}>History</button>
        </div>

        <div className="toolbox-content">
          {tab === "json" && <JsonFormatter />}
          {tab === "base64" && <Base64Tool />}
          {tab === "history" && <JsonHistory />}
        </div>
      </div>

      <footer className="text-center py-3 footer mt-4">
        <small>© {new Date().getFullYear()} Dev Toolbox | Built by Tanmay Samanta</small>
      </footer>
    </div>
  );
}

export default App;

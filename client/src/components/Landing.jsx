import React from "react";
import { Link } from "react-router-dom";
import "../styles/Landing.css";

export default function Landing() {
  return (
    <div className="container">
      <h1 className="App">Santi's Countries</h1>
      <Link to="/countries">
        <button autoFocus>DISCOVER</button>
      </Link>
    </div>
  );
}

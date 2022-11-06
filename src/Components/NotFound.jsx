import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NotFound.css";

export default function Home() {
  return (
    <div className="notFound-container">
      <h2>404</h2>
      <p>Page not found</p>
      <Link to="/">Back to home</Link>
    </div>
  );
}
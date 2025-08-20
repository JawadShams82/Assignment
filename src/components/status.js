import React from "react";
import "./status.css";

function Status({ type }) {
  return <span className={`status-pill ${type}`}>{type}</span>;
}

export default Status;

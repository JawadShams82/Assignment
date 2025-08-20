import React from "react";
import "./button.css";

function ToggleButton({ toggle }) {
  return (
    <button className="toggle-btn" onClick={toggle}>
      ☰
    </button>
  );
}

export default ToggleButton;

import React from "react";
import "./sidebar.css";
import profile from "../asset/shams.jpg";

function Sidebar({ isOpen, onSelect }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <div className="sidebar-header">
        <img
          src={profile}
          alt="profile"
          className="sidebar-avatar"
        />
        {isOpen && <span className="sidebar-username">Jawad Shams</span>}
      </div>
      <ul className="sidebar-menu">
        <li onClick={() => onSelect("profile")}>
          <span>👤</span> {isOpen && "Profile"}
        </li>
        <li onClick={() => onSelect("articles")}>
          <span>📄</span> {isOpen && "My Articles"}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

import React from "react";
import "./profile.css";
import profile from "../asset/shams.jpg";

function Profile() {
  return (
    <div className="profile-container">
      <img
        src={profile}
        alt="Profile"
        className="profile-pic"
      />
      <h2>Jawad Al Nasrum Shams</h2>
      <p><strong>Email:</strong> jawad.cse.20230104145@aust.edu</p>
      <p><strong>Section:</strong> C2</p>
      <p><strong>Id:</strong> 20230104145</p>
    </div>
  );
}

export default Profile;

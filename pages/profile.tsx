import { useState } from "react";

export default function Profile() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>User Profile</h1>
      <p>Enter your name:</p>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        style={{ padding: "5px", marginRight: "10px" }}
      />

      <p style={{ marginTop: "20px" }}>Current Name: {name}</p>
    </div>
  );
}

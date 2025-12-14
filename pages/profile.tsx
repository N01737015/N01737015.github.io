import { useEffect, useState } from "react";

export default function Profile() {
  const [name, setName] = useState(""); // State to store the username
  const [message, setMessage] = useState(""); // State for success/error messages

  // Load saved username from localStorage when the Profile page opens
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedName = window.localStorage.getItem("homeSyncUserName");
      if (savedName) {
        setName(savedName); // Set the username if it exists
      }
    }
  }, []);

  // Save the username to localStorage
  function saveName() {
    if (!name) {
      setMessage("Please enter a name first.");
      return;
    }

    if (typeof window !== "undefined") {
      window.localStorage.setItem("homeSyncUserName", name); // Save the username
      setMessage("Name saved! The Home page will greet you with this name.");
    }
  }

  return (
    <div>
      <h1>User Profile</h1>
      {/* Space below the header */}
      <p>
        Set and save a personalized username to use throughout the app.
      </p>

      {/* Input for the username */}
      <p style={{ marginTop: "15px" }}>Enter your name:</p>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        style={{ padding: "5px", marginRight: "10px" }}
      />

      <button onClick={saveName}>Save Name</button>

      <p style={{ marginTop: "20px" }}>Current Name: {name}</p>

      {message && (
        <p style={{ marginTop: "10px", color: "green" }}>{message}</p>
      )}
    </div>
  );
}

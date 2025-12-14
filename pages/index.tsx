import { useEffect, useState } from "react";
import DailyQuote from "../components/DailyQuote";

export default function Home() {
  // Store username from Profile page
  const [name, setName] = useState("");

  // Load saved username when Home page loads
  useEffect(() => {
    const savedName = localStorage.getItem("homeSyncUserName");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  return (
    <div>
      {/* Main heading with larger font and bold text */}
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "15px",
        }}
      >
        Welcome to HomeSync{name ? `, ${name}` : ""}
      </h1>

      {/* Short description of what the app does */}
      <p style={{ marginBottom: "10px", fontSize: "16px" }}>
        HomeSync is a simple household management web application designed to
        help users stay organized and updated. It allows household members to
        manage groceries, pantry items, chores, bills, and notes in one place.
      </p>

      <p style={{ marginBottom: "10px", fontSize: "16px" }}>
        All data is saved in the browser using localStorage, so information
        remains available even after refreshing the page or reopening the app.
        Each item also displays who added it, making collaboration clear and
        easy for everyone in the household.
      </p>

      {/* App features list for final phase clarity */}
      <ul style={{ marginBottom: "20px", paddingLeft: "20px" }}>
      <li>- Persistent data storage using browser localStorage</li>
      <li>- User-based tracking showing who added each item</li>
      <li>- Multiple pages implemented using Next.js routing</li>
      <li>- Clean and consistent user interface design</li>
      </ul>


      {/* Credits section */}
      <p style={{ marginBottom: "30px", fontStyle: "italic" }}>
        Created by Prince Patel, Udit Desai, and Rudra Patel
      </p>

      {/* Daily Quote component (unchanged position) */}
      <DailyQuote />
    </div>
  );
}

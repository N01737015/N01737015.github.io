export default function Home() {
  return (
    <div>
      <h1>Welcome to HomeSync</h1>

      <p style={{ marginTop: "10px" }}>
        This is our Phase 1 basic dashboard. In this phase, we have only created the
        simple structure of the app, basic pages, basic routing, and small interactive
        features like adding grocery items, chores, notes, etc.
      </p>

      <p style={{ marginTop: "10px" }}>
        In Phase 2, we will make this dashboard fully functional based on our group
        proposal. We will add features like saving data, using username across the
        app, daily quote from API, better layout, and connecting all modules together.
      </p>

      {/* Temporary placeholder for the quote section (Phase 2 will replace this) */}
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          background: "#f9f9f9",
          border: "1px solid #ddd",
          borderRadius: "6px",
        }}
      >
        <strong>Daily Quote (Phase 2 Feature):</strong>
        <p>Quote API integration will be added in the next phase.</p>
      </div>
    </div>
  );
}

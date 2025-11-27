import { useState } from "react";

export default function Chores() {
  const [text, setText] = useState<string>("");
  const [chores, setChores] = useState<string[]>([]);

  function addChore() {
    if (!text) return;
    setChores([...chores, text]);
    setText("");
  }

  return (
    <div>
      <h1>Chore Schedule</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a chore"
        style={{ padding: "5px", marginRight: "10px" }}
      />

      <button onClick={addChore}>Add</button>

      <ul style={{ marginTop: "20px" }}>
        {chores.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

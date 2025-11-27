import { useState } from "react";

export default function Grocery() {
  const [item, setItem] = useState<string>("");       // string
  const [list, setList] = useState<string[]>([]);     // array of strings

  function addItem() {
    if (!item) return;
    setList([...list, item]);
    setItem("");
  }

  return (
    <div>
      <h1>Grocery List</h1>

      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter grocery item"
        style={{ padding: "5px", marginRight: "10px" }}
      />

      <button onClick={addItem}>Add</button>

      <ul style={{ marginTop: "20px" }}>
        {list.map((g, i) => (
          <li key={i}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

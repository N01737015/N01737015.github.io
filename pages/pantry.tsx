import { useState } from "react";

interface PantryItem {
  name: string;
  qty: number;
}

export default function Pantry() {
  const [item, setItem] = useState<string>("");
  const [pantry, setPantry] = useState<PantryItem[]>([]);

  function addPantry() {
    if (!item) return;
    setPantry([...pantry, { name: item, qty: 1 }]);
    setItem("");
  }

  function increaseQty(index: number) {
    const copy = [...pantry];
    copy[index].qty++;
    setPantry(copy);
  }

  return (
    <div>
      <h1>Pantry Inventory</h1>

      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Add pantry item"
        style={{ padding: "5px", marginRight: "10px" }}
      />

      <button onClick={addPantry}>Add Item</button>

      <div style={{ marginTop: "20px" }}>
        {pantry.map((p, i) => (
          <div key={i}>
            {p.name} - Qty: {p.qty}
            <button style={{ marginLeft: "10px" }} onClick={() => increaseQty(i)}>
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

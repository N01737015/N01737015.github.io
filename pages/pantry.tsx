import { useEffect, useState } from "react";

// Interface that describes one pantry item
interface PantryItem {
  name: string;      // name of the pantry item
  qty: number;       // quantity of the item
  addedBy: string;   // username who added the item
}

export default function Pantry() {
  // Input field value
  const [item, setItem] = useState("");

  // Pantry list state
  const [pantry, setPantry] = useState<PantryItem[]>([]);

  // Username loaded from Profile page
  const [username, setUsername] = useState("");

  // Flag to make sure data is loaded before saving
  const [loaded, setLoaded] = useState(false);

  // Load saved username and pantry list when page opens
  useEffect(() => {
    const u = localStorage.getItem("homeSyncUserName");
    const saved = localStorage.getItem("pantryList");

    if (u) setUsername(u);
    if (saved) setPantry(JSON.parse(saved));

    setLoaded(true);
  }, []);

  // Save pantry list to localStorage whenever it changes
  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("pantryList", JSON.stringify(pantry));
  }, [pantry, loaded]);

  // Add a new pantry item
  function addItem() {
    // User must set name first
    if (!username) {
      alert("Set your name in Profile first.");
      return;
    }

    // Do not add empty item
    if (!item) return;

    setPantry([...pantry, { name: item, qty: 1, addedBy: username }]);
    setItem("");
  }

  // Increase quantity of an item
  function incQty(i: number) {
    const copy = [...pantry];
    copy[i].qty++;
    setPantry(copy);
  }

  return (
    <div>
      <h1>Pantry</h1>

      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Add a pantry item"
      />

      <button onClick={addItem}>Add</button>

      {pantry.map((p, i) => (
        <div key={i}>
          {p.name} (added by {p.addedBy}) – Qty {p.qty}
          <button onClick={() => incQty(i)}>+</button>
        </div>
      ))}
    </div>
  );
}

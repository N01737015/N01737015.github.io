import { useEffect, useState } from "react";

// Interface for grocery item
interface GroceryItem {
  name: string;
  addedBy: string;
}

export default function Grocery() {
  // Input value
  const [item, setItem] = useState("");

  // Grocery list
  const [list, setList] = useState<GroceryItem[]>([]);

  // Username from Profile
  const [username, setUsername] = useState("");

  // Used to avoid saving before data loads
  const [loaded, setLoaded] = useState(false);

  // Load saved user and grocery list on page load
  useEffect(() => {
    const u = localStorage.getItem("homeSyncUserName");
    const saved = localStorage.getItem("groceryList");

    if (u) setUsername(u);
    if (saved) setList(JSON.parse(saved));

    setLoaded(true);
  }, []);

  // Save grocery list to localStorage whenever it changes
  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("groceryList", JSON.stringify(list));
  }, [list, loaded]);

  function addItem() {
    if (!username) {
      alert("Set your name in Profile first.");
      return;
    }
    if (!item) return;

    setList([...list, { name: item, addedBy: username }]);
    setItem("");
  }

  return (
    <div>
      <h1>Grocery List</h1>

      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Add a grocery item"
      />

      <button onClick={addItem}>Add</button>

      <ul>
        {list.map((g, i) => (
          <li key={i}>
            {g.name} (added by {g.addedBy})
          </li>
        ))}
      </ul>
    </div>
  );
}

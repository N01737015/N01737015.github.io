import { useEffect, useState } from "react";

// Interface for chores
interface Chore {
  task: string;
  addedBy: string;
}

export default function Chores() {
  const [text, setText] = useState("");
  const [chores, setChores] = useState<Chore[]>([]);
  const [username, setUsername] = useState("");
  const [loaded, setLoaded] = useState(false);

  // Load saved data
  useEffect(() => {
    const u = localStorage.getItem("homeSyncUserName");
    const saved = localStorage.getItem("choreList");

    if (u) setUsername(u);
    if (saved) setChores(JSON.parse(saved));

    setLoaded(true);
  }, []);

  // Save chores to localStorage
  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("choreList", JSON.stringify(chores));
  }, [chores, loaded]);

  function addChore() {
    if (!username) {
      alert("Set your name in Profile first.");
      return;
    }
    if (!text) return;

    setChores([...chores, { task: text, addedBy: username }]);
    setText("");
  }

  return (
    <div>
      <h1>Chores</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a chore"
      />

      <button onClick={addChore}>Add</button>

      <ul>
        {chores.map((c, i) => (
          <li key={i}>
            {c.task} (added by {c.addedBy})
          </li>
        ))}
      </ul>
    </div>
  );
}

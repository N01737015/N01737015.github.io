import { useEffect, useState } from "react";

// Interface for note item
interface Note {
  text: string;
  addedBy: string;
}

export default function Notes() {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [username, setUsername] = useState("");
  const [loaded, setLoaded] = useState(false);

  // Load user and notes
  useEffect(() => {
    const u = localStorage.getItem("homeSyncUserName");
    const saved = localStorage.getItem("notesList");

    if (u) setUsername(u);
    if (saved) setNotes(JSON.parse(saved));

    setLoaded(true);
  }, []);

  // Save notes on change
  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem("notesList", JSON.stringify(notes));
  }, [notes, loaded]);

  function addNote() {
    if (!username) {
      alert("Set your name in Profile first.");
      return;
    }
    if (!text) return;

    setNotes([...notes, { text, addedBy: username }]);
    setText("");
  }

  return (
    <div>
      <h1>Notes</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a note"
      />

      <button onClick={addNote}>Add</button>

      <ul>
        {notes.map((n, i) => (
          <li key={i}>
            {n.text} (added by {n.addedBy})
          </li>
        ))}
      </ul>
    </div>
  );
}

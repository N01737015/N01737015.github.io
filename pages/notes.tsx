import { useState } from "react";

export default function Notes() {
  const [text, setText] = useState<string>("");
  const [notes, setNotes] = useState<string[]>([]);

  function addNote() {
    if (!text) return;
    setNotes([...notes, text]);
    setText("");
  }

  function deleteNote(index: number) {
    setNotes(notes.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>Notes Board</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a note"
        style={{ padding: "5px", marginRight: "10px" }}
      />

      <button onClick={addNote}>Add</button>

      <ul style={{ marginTop: "20px" }}>
        {notes.map((n, i) => (
          <li key={i}>
            {n}
            <button style={{ marginLeft: "10px" }} onClick={() => deleteNote(i)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

import { useState } from "react";

function AddNote({ onAdd, onClose }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !text.trim()) return;

    onAdd({
      id: Date.now(),
      title,
      text
    });

    onClose();
  };

  return (
    <div className="add-note-modal">
      <form className="add-note-form" onSubmit={handleSubmit}>
        <h2>Add Note</h2>

        <input
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write your note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="actions">
          <button type="submit">Add</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddNote;

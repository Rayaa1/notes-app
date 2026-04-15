import { useState } from "react";

function EditNote({ note, onSave, onClose }) {
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...note,
      title,
      text
    });

    onClose();
  };

  return (
    <div className="add-note-modal">
      <form className="add-note-form" onSubmit={handleSubmit}>
        <h2>Edit Note</h2>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="actions">
          <button type="submit">Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditNote;

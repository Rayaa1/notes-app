function NoteCard({ note, onDelete, onEdit }) {
  return (
    <div className="note-card">
      <h2>{note.title}</h2>
      <p>{note.text}</p>

      <div className="note-actions">
        <button className="edit-btn" onClick={() => onEdit(note)}>
          Edit
        </button>

        <button className="delete-btn" onClick={() => onDelete(note.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteCard;

function NoteCard({ note, onDelete }) {
  return (
    <div className="note-card">
      <h2>{note.title}</h2>
      <p>{note.text}</p>

      <button className="delete-btn" onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}

export default NoteCard;

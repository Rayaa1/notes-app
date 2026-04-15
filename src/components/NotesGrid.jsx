import NoteCard from "./NoteCard";

function NotesGrid({ notes, onDelete }) {
  return (
    <div className="notes-grid">
      {notes.map(note => (
        <NoteCard key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default NotesGrid;

import NoteCard from "./NoteCard";

function NotesGrid({ notes, onDelete, onEdit }) {
  return (
    <div className="notes-grid">
      {notes.map(note => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default NotesGrid;

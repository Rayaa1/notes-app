import { useState } from "react";
import initialNotes from "./notes.json";

import NotesGrid from "./components/NotesGrid";
import AddNote from "./components/AddNote";
import EditNote from "./components/EditNote";

function App() {
  const [notes, setNotes] = useState(initialNotes);

  const [showAdd, setShowAdd] = useState(false);
  const [editingNote, setEditingNote] = useState(null);

  const addNote = (newNote) => {
    setNotes(prev => [...prev, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  const saveNote = (updatedNote) => {
    setNotes(prev =>
      prev.map(n => (n.id === updatedNote.id ? updatedNote : n))
    );
  };

  return (
    <div className="app">
      <header>
        <h1>Notes App</h1>
      </header>

      <main>
        <button className="add-btn" onClick={() => setShowAdd(true)}>
          + Add Note
        </button>

        {showAdd && (
          <AddNote
            onAdd={addNote}
            onClose={() => setShowAdd(false)}
          />
        )}

        {editingNote && (
          <EditNote
            note={editingNote}
            onSave={saveNote}
            onClose={() => setEditingNote(null)}
          />
        )}

        <NotesGrid
          notes={notes}
          onDelete={deleteNote}
          onEdit={(note) => setEditingNote(note)}
        />
      </main>
    </div>
  );
}

export default App;

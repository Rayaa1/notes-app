import { useState } from "react";
import initialNotes from "./notes.json";
import NotesGrid from "./components/NotesGrid";
import AddNote from "./components/AddNote";

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [showAdd, setShowAdd] = useState(false);

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  const addNote = (newNote) => {
    setNotes(prev => [...prev, newNote]);
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

        <NotesGrid notes={notes} onDelete={deleteNote} />
      </main>
    </div>
  );
}

export default App;

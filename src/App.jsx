import { useState } from "react";
import initialNotes from "./notes.json";
import NotesGrid from "./components/NotesGrid";

function App() {
  const [notes, setNotes] = useState(initialNotes);

  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  return (
    <div className="app">
      <header>
        <h1>Notes App</h1>
      </header>

      <main>
        <button className="add-btn">+ Add Note</button>

        <NotesGrid notes={notes} onDelete={deleteNote} />
      </main>
    </div>
  );
}

export default App;

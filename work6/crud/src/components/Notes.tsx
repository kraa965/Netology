import { useState, useEffect } from "react";
import axios from "axios";
import { NoteProps } from "../interface/interface.ts";
import { NoteForm } from "./NoteForm.tsx";
import { NoteCard } from "./NoteCard.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

export const Notes: FileCallback = () => {
  const [notes, setNotes] = useState<NoteProps[]>([]);

  const fetchNotes = async () => {
    const response = await axios.get("http://localhost:7070/notes");
    setNotes(response.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleAddNote = async (content: string) => {
    await axios.post("http://localhost:7070/notes", {
      id: 0,
      content,
    });
    fetchNotes();
  };

  const handleDeleteNote = async (id: number) => {
    await axios.delete(`http://localhost:7070/notes/${id}`);
    fetchNotes();
  };

  const handleRefresh = () => {
    fetchNotes();
  };

  return (
    <div className="notes-container">
      <NoteForm onAdd={handleAddNote} />
      <button className="refresh-btn" onClick={handleRefresh}>
        ↻
      </button>
      <div className="card-container">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            id={note.id}
            content={note.content}
            onDelete={handleDeleteNote}
          />
        ))}
      </div>
    </div>
  );
};

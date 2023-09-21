import React from "react";
import "./Sidebar.css";

function Sidebar({
  onAddNote,
  notes,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Note Book</h1>
        <button onClick={onAddNote}>Add New</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            key={note.id}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button
                className="delete-btn"
                onClick={() => onDeleteNote(note.id)}
              >
                Delete
              </button>
            </div>
            <p>{note.content}</p>
            <small className="note-meta">
              Last Modified:{" "}
              {new Date(note.modDate).toLocaleDateString("ja-JP", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

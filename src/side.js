import React from "react";

function Side({notes, addNote, currentNote, setCurrentNote}) {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };

    return <div className="app-side">
        <div className="app-side-header">
            <h1 class="header">Notes</h1>
            <button onClick={addNote} class="header">&#43;</button>
        </div>
        <div className="app-side-notes">
            {notes.map((note) => ( //outputs the following div and its content for each note page created
                <div 
                    className={`app-side-note ${note.id === currentNote && "active"}`}
                    onClick ={() => setCurrentNote(note.id)}
                >
                <div className="side-note-title">
                    <strong>{note.title}</strong>
                </div>
                <small className="side-note-date">{new Date(note.date).toLocaleString("en-US", options)}</small>
                <p>{note.body.replace(/(<([^>]+)>)/gi, "") && note.body.replace(/(<([^>]+)>)/gi, "").substr(0,50) + "..."}</p>
                </div>
            ))}
        </div>
    </div>;
    
};

export default Side;
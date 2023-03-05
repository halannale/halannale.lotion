import ReactQuill from "react-quill";

function Editor({deleteNote, currentNote, onUpdate}) {
    
    const onEditor = (key,value) => {
        onUpdate({ //reconstructed currentNote
            id: currentNote.id,
            [key]: value,
            date: Date.now()
        }
        )
    };

    if(!currentNote) return <div className="no-active-note">Select a note, or create a new one</div>

    return <div className="app-main">
        <div className="app-main-note">
            <div className="app-main-title-date">
                <input 
                    type="text" 
                    id="title" 
                    value={currentNote.title} 
                    onChange={(e) => onEditor("title", e.target.value)}
                />
                <input 
                type="datetime-local"
                id="date"
                value={currentNote.date}
                />
            </div>

            <div className="app-main-buttons">
                <button>Save</button>
                <button>Delete</button>
            </div>
        </div>

        <div className="app-main-editor">
            <ReactQuill
                value={currentNote.body}
                id="body"
                onChange={(e) => onEditor("body", e.target.value)}
            />
        </div>
    </div>;
}

export default Editor;
//<button onClick={{} => deleteNote(note.id)}>Delete</button>
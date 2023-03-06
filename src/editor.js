import ReactQuill from "react-quill";
//import {useOutletContext} from "react-router-dom";


function Editor({deleteNote, currentNote, onUpdate}) {
    const onEditor = (key,value) => {
        if (key === "title") {
            onUpdate({ //reconstructed currentNote
                id: currentNote.id,
                title: value,
                body: currentNote.body,
                date: currentNote.date
            });
        }
        else {
            onUpdate({ //reconstructed currentNote
                id: currentNote.id,
                title: currentNote.title,
                body: currentNote.body,
                date: value
            });
        }
    };

    const onUpdateBody = (value)  => {
        onUpdate({ //reconstructed currentNote
            id: currentNote.id,
            title: currentNote.title,
            body: value,
            date: currentNote.date
        })
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
                value={new Date(currentNote.date).toISOString().substr(0,16)}
                onChange={(e) => onEditor("date", e.target.value)}
                />
            </div>

            <div className="app-main-buttons">
                <button className="saveButton">Save</button>
                <button 
                className="deleteButton" 
                onClick={() => deleteNote(currentNote.id)}>
                Delete
                </button>
            </div>
        </div>

        <div className="app-main-editor">
                <ReactQuill
                value={currentNote.body}
                id="body"
                onChange={onUpdateBody}
                />
        </div>
    </div>;
}

export default Editor;
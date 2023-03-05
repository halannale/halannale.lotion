function Editor({deleteNote, currentNote}) {
    if(!currentNote) return <div className="no-active-note">Select a note, or create a new one</div>

    return <div className="app-main">
        <div className="app-main-note">
            <div className="app-main-title-date">
                <div id="title">{currentNote.title}</div>
                <div id="date">{currentNote.date}</div>
            </div>

            <div className="app-main-buttons">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>

        <div className="app-main-editor">{currentNote.body}</div>
    </div>;
}
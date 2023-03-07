import {useNavigate} from "react-router-dom";

function Viewer({deleteNote, currentNote}) {
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };

    const navigate = useNavigate();
    const goToEdit = () => {
        navigate(`/notes/edit`);
    }
    
    if(!currentNote) return <div className="no-active-note">Select a note, or create a new one</div>

    return <div className="app-main">
        <div className="app-main-note">
            <div className="app-main-title-date">
                <h1 id="title">{currentNote.title}</h1>
                <div id="date">{new Date(currentNote.date).toLocaleString("en-US", options)}</div>
            </div>

            <div className="app-main-buttons">
                <button onClick={goToEdit}>Edit</button>
                <button 
                className="deleteButton" 
                onClick={(e) => deleteNote(currentNote.id)}>
                Delete
                </button>
            </div>
        </div>

        <div className="app-main-editor" id="body">{currentNote.body.replace(/(<([^>]+)>)/gi, "")}</div>
    </div>;
}

export default Viewer;
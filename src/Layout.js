import {Outlet} from "react-router-dom";
import "./App.css";
import Side from "./side";

function Layout({notes, addNote, currentNote, setCurrentNote}) {
    return (
        <>
        <div className="top">
        <div className="top-button"><button onClick="Menu()">&#9776;</button></div>
        <div className="top-header">
            <h1>Lotion</h1>
            <p>Like Notion, but worse.</p>
        </div>
        <div className="container">
            <Side 
                notes={notes} 
                addNote={addNote} 
                currentNote={currentNote}
                setCurrentNote={setCurrentNote}
            />
            <Outlet/>
        </div>
    </div>
        </>
    )
}

export default Layout;
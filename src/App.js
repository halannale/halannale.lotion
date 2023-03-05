import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useParams } from "react-router-dom";
import {useState} from "react";
import uuid from "react-uuid";
import Side from './side';
//import Layout from './Layout';
import Editor from "./editor";
import './App.css';


function App() {
  const[notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(false);

  const addNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled",
      body: "",
      date: Date.now()
    };

    setNotes([newNote,...notes]);
  };

  const deleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getCurrentNote = () => { //helps retrieve current note from its id
    return notes.find((note) => note.id === currentNote);
  };

  const onUpdate = (updatedNote) => {
    const updatedNotes = notes.map((note)=> {
      if(note.id === currentNote) { //finds the right note to modify
          return updatedNote;
      }
      return note;
    });

    setNotes(updatedNotes);
  };

  return <div className="App">
    <Side 
      notes={notes} 
      addNote={addNote} 
      currentNote={currentNote}
      setCurrentNote={setCurrentNote}
    />
    <Editor
      deleteNote={deleteNote}
      currentNote={getCurrentNote()}
      onUpdate={onUpdate}
    />
  </div>
}

export default App;
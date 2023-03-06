import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
//import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import uuid from "react-uuid";
import Side from './side';
//import Layout from './Layout';
import Editor from "./editor";
//import Viewer from "./viewer";
import './App.css';


function App() {
  const[notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [currentNote, setCurrentNote] = useState(false);

  const addNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled",
      body: "",
      date: Date.now()
    };

    setNotes([newNote,...notes]);
    setCurrentNote(newNote.id);
  };

  const deleteNote = (idToDelete) => {
    const answer = window.confirm("Are you sure?");
    if (answer) {
      setNotes(notes.filter((note) => note.id !== idToDelete));
    }
  };

  const getCurrentNote = () => { //helps retrieve current note from its id
    return notes.find((note) => note.id === currentNote);
  };

  const onUpdate = (updatedNote) => {
    const updatedNotes = notes.map((note)=> {
      if(note.id === updatedNote.id) { //finds the right note to modify
          return updatedNote;
      }
      return note;
    });

    setNotes(updatedNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes]);

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
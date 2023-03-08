import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Layout';
import './App.css';
import Editing from "./Editing";
import Viewing from "./Viewing";

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Viewing />} />
        <Route path="/notes" element={<Viewing />} />
        <Route path="/notes/edit" element={<Editing />} />
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

/*
return (<div className="App">
    <Layout />
    <div className="content">
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
    </div>
  );
*/
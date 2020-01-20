import React from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import notes from "./notes";



function App() {
  return (
    <div>
      <main>
        <Header />
        {notes.map(note => <Note key={note.key} title={note.title} content={note.content} /> )}
        <Footer />
      </main>
    </div>
  );
}

export default App;


// function createNote(note) {
//   return <Note key={note.key} title={note.title} content={note.content} />;
// }
import React, {useState} from "react";
import Heading from "./Heading";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App(){

    const [notes, setNotes] = useState([]);

    function addNote(note){
        setNotes(prevNotes => {
            return [...prevNotes, note]
        });
    }

    function deleteNote(id){
        setNotes(prevNotes => {
           return prevNotes.filter((noteItem, index) => {
            return index !== id;
           })
        })
    }

    return <div>
    <Heading />
    <CreateArea onAdd={addNote}/>
    {notes.map((noteItem, index) => {
        return <Note
            key = {index}
            id={index}
            title = {noteItem.title}
            content = {noteItem.content}
            onDelete={deleteNote}
             />
    })}
    <Footer />
</div>
}

export default App;
import React from "react";
import { useState } from "react";


function CreateArea(props) {
const [note, setNote] = useState({
    title: "",
    content: ""
})

function handlesChange(e) {
    const {name, value} = e.target;


    setNote((prevNote) =>{
        return {
            ...prevNote,
            [name]: value 
        }
    })

}

function submitNote(e) {
    e.preventDefault();
    props.onAdd(note);

    setNote({
        title: "",
        content: ""
    })
    
}

    return (
    <div >
        <form>
            <input
             onChange={handlesChange} 
             type="text" value={note.title}
             name="title"
             placeholder="Title"/>
            <textarea
             onChange={handlesChange}
             type="text"
             value={note.content} 
             name="content" 
             id="content" 
             placeholder="Take a note..." cols="5" rows="3">
            </textarea>
            <button onClick={submitNote} >Add</button>
        </form>
    </div>)
}


export default CreateArea;
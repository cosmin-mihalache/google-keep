import React from "react";

function Note(props) {
  function handlesClick() {
    props.onDelete(props.id)
  }

  return (
    <div className="note-box">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button onClick={handlesClick} >Delete</button>
    </div>
  );
}

export default Note;

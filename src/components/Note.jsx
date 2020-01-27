import React from "react";
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

function Note(props) {
  function handlesClick() {
    props.onDelete(props.id)
  }

  return (
    <div className="note-box">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button onClick={handlesClick}>
        <DeleteSweepIcon />
      </button>
    </div>
  );
}

export default Note;

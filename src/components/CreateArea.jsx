import React from "react";
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handlesChange(e) {
    const { name, value } = e.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(e) {
    e.preventDefault();
    props.onAdd(note);

    setNote({
      title: "",
      content: ""
    });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="new-note">
        {isExpanded ? (
          <input
            onChange={handlesChange}
            type="text"
            value={note.title}
            name="title"
            placeholder="Title"
          />
        ) : null}
        <textarea
          onClick={expand}
          onChange={handlesChange}
          type="text"
          value={note.content}
          name="content"
          id="content"
          placeholder="Take a note..."
          cols="5"
          rows={isExpanded ? 3 : 1}
        ></textarea>
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

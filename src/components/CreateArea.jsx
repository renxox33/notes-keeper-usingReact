import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {

  const [showContent, setshowContent] = useState(false)

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note" >
        <input
          name="title"
          onClick={() => setshowContent(true)}
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          autoComplete='off'
        />
      { showContent && <textarea
        name="content"
        onChange={handleChange}
        value={note.content}
        placeholder="Take a note..."
        rows="3"
      />}
        { showContent && <Fab in={true} onClick={submitNote}> <AddIcon /> </Fab>}
      </form>
    </div>
  );
}

export default CreateArea;

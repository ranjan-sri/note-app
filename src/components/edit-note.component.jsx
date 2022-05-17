import React, { useState, useContext } from "react";
import { NoteContext } from "../note.provider";
import saveLogo from "../assets/save-img.png";
import deleteLogo from "../assets/delete-img.png";

const EditNote = () => {
  // const temp = noteToEdit.text
  const {noteToEdit, handleDeleteNote,handleUpdateNote } = useContext(NoteContext);
  const [value, setValue] = useState(noteToEdit.text);
  const[isValueEmpty, setIsValueEmpty] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    setIsValueEmpty(false);
  };

  const localHandleUpdateNote = () => {
    if(value.length === 0) {
      setIsValueEmpty(true);
      return;
    } else {
      handleUpdateNote({...noteToEdit, text: value});
    }
  }
  return (
    <div className="add-note-div">
      <textarea value={value} onChange={handleChange} />
      <div className="btn-div">
        <button className="add-btn btn btn-success" onClick={localHandleUpdateNote}>
        <i className="bi bi-save"></i>
        </button>
        <button className="delete-btn btn btn-danger" onClick={() => handleDeleteNote(noteToEdit)}>
        <i className="bi bi-x"></i>
        </button>
      </div>
      {
          isValueEmpty ? <div> Note cannot be empty. Delete instead</div> : <></>
       }
    </div>
  );
};



export default EditNote;

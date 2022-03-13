import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { saveEditNote, deleteNote } from "../actions";
import saveLogo from "../assets/save-img.png";
import deleteLogo from "../assets/delete-img.png";

const EditNote = ({ noteToEdit }) => {
  // const temp = noteToEdit.text
  const [value, setValue] = useState(noteToEdit.text);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSave = (e) => {
    value === ""
      ? alert("Cannot add a blank note. Instead, delete the note")
      : dispatch(saveEditNote({ ...noteToEdit, text: value }));
  };

  const handleDelete = () => {
    dispatch(deleteNote(noteToEdit.id));
  };
  return (
    <div className="edit-div">
      <textarea value={value} onChange={handleChange} />
      <div className="btn-div">
        <button className="add-btn" onClick={handleSave}>
          <img src={saveLogo} width="20px" height="20px" alt="" />
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          <img src={deleteLogo} width="20px" height="20px" alt="" />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { noteToEdit: state.noteToEdit };
};

export default connect(mapStateToProps)(EditNote);

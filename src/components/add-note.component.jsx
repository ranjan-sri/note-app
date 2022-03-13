import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { insertNote } from "../actions";
import saveLogo from "../assets/save-img.png";
const AddNote = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAdd = (e) => {
    value === ""
      ? alert("Cannot add a blank note")
      : dispatch(insertNote(value));

    setValue("");
  };

  return (
    <>
      <div className="add-note-div">
        <textarea
          onChange={handleChange}
          value={value}
          placeholder="Enter note.."
        />
       <div className="btn-div"> 
        <button className="add-btn" onClick={handleAdd}>
          <img src={saveLogo} width="20px" height="20px" alt="" />
        </button>
        </div> 
      </div>
    </>
  );
};

export default AddNote;

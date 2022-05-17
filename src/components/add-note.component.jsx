import React, { useState, useContext } from "react";

import { NoteContext} from '../note.provider';

import saveLogo from "../assets/save-img.png";
const AddNote = () => {
  const [value, setValue] = useState('');
  const[isValueEmpty, setIsValueEmpty] = useState(false);
   const {handleAddNote} = useContext(NoteContext);

  const handleChange = (e) => {
    setIsValueEmpty(false);
    setValue(e.target.value);

  };
  
  const localHandleAddNote = () => {
    if(value.length === 0) {
      setIsValueEmpty(true);
      return;
    } else {
      setValue('');
      handleAddNote(value);
    }
  }
  

  return (
    <>
      <div className="add-note-div">
        <textarea
          onChange={handleChange}
          value={value}
          placeholder="Enter note.."
        />
       <div className="btn-div"> 
        <button className="btn btn-success add-btn" onClick={localHandleAddNote}>
        <i className="bi bi-save"></i>
        </button>
        </div> 
       {
          isValueEmpty ? <div> Note cannot be empty</div> : <></>
       }
      </div>
    </>
  );
};

export default AddNote;

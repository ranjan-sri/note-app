import React,{useContext} from "react";
import { NoteContext } from "../note.provider";


export const Note = ({ note }) => {
  const { handleDeleteNote, handleEditNote } = useContext(NoteContext);

  
  <a href="https://www.flaticon.com/free-icons/trash" title="trash icons">
  </a>;
  return (
    <div className="note-div">
      <p>{note.text} </p>
      <div className="btn-div">
        <button className="delete-btn btn btn-danger" onClick={() => handleDeleteNote(note)}>
        <i className="bi bi-x"></i>
        </button>
        <button className="edit-btn btn btn-primary" onClick={() => handleEditNote(note)}>
        <i className="bi bi-pencil-square"></i>
        </button>
      </div>
    </div>
  );
};

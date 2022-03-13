import React from "react";
import { useDispatch } from "react-redux";
import { editNote, deleteNote } from "../actions";
import deleteLogo from "../assets/delete-img.png";
import editLogo from "../assets/edit-img.png";

export const Note = ({ note }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  const handleEdit = () => {
    dispatch(editNote(note));
  };
  <a href="https://www.flaticon.com/free-icons/trash" title="trash icons">
    Trash icons created by Freepik - Flaticon
  </a>;
  return (
    <div className="note-div">
      <textarea value={note.text} />
      <div className="btn-div">
        <button className="delete-btn" onClick={handleDelete}>
          <img src={deleteLogo} width="20px" height="20px" alt="" />
        </button>
        <button className="edit-btn" onClick={handleEdit}>
          <img src={editLogo} width="20px" height="20px" alt="" />
        </button>
      </div>
    </div>
  );
};

import NoteActionTypes from "./types";

export const insertNote = (note) => ({
    type: NoteActionTypes.ADD_NOTE,
    payload: note,
})

export const deleteNote = (id) => ({
    type: NoteActionTypes.DELETE_NOTE,
    payload: id,
})

export const editNote = (note) => ({
    type: NoteActionTypes.EDIT_NOTE,
    payload: note,
})

export const saveEditNote = (note) => ({
    type: NoteActionTypes.SAVE_EDIT_NOTE,
    payload: note,
})
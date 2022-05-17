import React, {useState, createContext} from 'react';
import uuid from 'react-uuid';

export const NoteContext = createContext( {
    noteToEdit: {},
    handleAddNote: (value) => {},
    notesArray: [],
    handleDeleteNote: (note) => {},
    handleEditNote: (note) => {},
    handleUpdateNote: (note) => {},
})


const NoteProvider = ({children}) => {
    const [noteToEdit, setNoteToEdit] = useState({});
    const [notesArray, setNotesArray] = useState([]);
    
    const handleAddNote = (value) => {
            setNotesArray(notesArray => [...notesArray,{id: uuid(), text: value,}]); 
    }

    const handleDeleteNote = (noteToDelete) => {
        setNotesArray( notesArray => [...notesArray].filter( note => note.id !== noteToDelete.id));
        // If Delete action is called on Edit, the following object needs to be reset.
        setNoteToEdit({});
    }
    
    const handleUpdateNote = (noteToUpdate) => {
        setNotesArray ( notesArray => [...notesArray].map( note => note.id === noteToUpdate.id ? noteToUpdate : note ));
        setNoteToEdit({});
    }
    const handleEditNote = (note) => {
        setNoteToEdit(note);
        //Once a note is modified, and the note is updated
    }
    return (
        <NoteContext.Provider value={{noteToEdit,handleAddNote,notesArray,handleDeleteNote, handleEditNote,handleUpdateNote}}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteProvider;

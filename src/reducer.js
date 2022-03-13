import NoteActionTypes from "./types";
import uuid from "react-uuid";


const INITIAL_STATE = {
    notesArray : [

    ],
    noteToEdit: null,
}

const Reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case NoteActionTypes.ADD_NOTE:
            const newNote = { id: uuid(),
                              text: action.payload}

            const newNoteArray = [...state.notesArray, newNote];
             return {
                 ...state,
                 notesArray: newNoteArray,
             }
        case NoteActionTypes.DELETE_NOTE:
           // const notesArray = [...state.notesArray];
            //const newNotesArray =  [...state.notesArray].filter( (note) => note.id !== action.payload);
            return {
                ...state,
                notesArray:[...state.notesArray].filter( (note) => note.id !== action.payload),
                noteToEdit: null,
            }
        
        case NoteActionTypes.EDIT_NOTE:
            return {
                ...state,
                noteToEdit: action.payload,
            }   

        case NoteActionTypes.SAVE_EDIT_NOTE:
           // const notesArray1 = [...state.notesArray];
          // const newNotesArray1 =  [...state.notesArray].map( (note) => note.id === action.payload.id ? action.payload : note);
            return {
                ...state,
                notesArray: [...state.notesArray].map( (note) => note.id === action.payload.id ? action.payload : note),
                noteToEdit: null,
            }    
         default:
            return state     
    }
} 
export default Reducer;
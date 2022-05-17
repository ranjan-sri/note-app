
import React, {useContext} from 'react';
import { Note } from './note.component';
import { NoteContext } from '../note.provider';

const NoteList = () => {
  const {notesArray} = useContext(NoteContext);
  // console.log(notesArray);
  return (
    <div className='note-list-div'>
     {
       notesArray.map( (note) => (
         <Note key={note.id} note={note} />
       ))
     }

    </div>
  )
}



export default NoteList;
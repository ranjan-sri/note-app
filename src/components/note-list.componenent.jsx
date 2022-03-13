
import React from 'react';
import { connect } from 'react-redux';
import { Note } from './note.component';

const NoteList = ({notesArray}) => {
  return (
    <div className='note-list-div'>
      <br/>
     {
       notesArray.map( (note) => (
         <Note key={note.id} note={note} />
       ))
     }

    </div>
  )
}

const mapStateToProps = (state) => {
  return { notesArray: state.notesArray }
}

export default connect(mapStateToProps)(NoteList);
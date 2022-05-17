
import './App.css';
import AddNote from './components/add-note.component.jsx';
import NoteList from './components/note-list.componenent';
import Nav  from './components/nav-component';
import EditNote from './components/edit-note.component'
import React, {useContext} from 'react';
import { NoteContext} from './note.provider';

function App() {
  const {noteToEdit} = useContext(NoteContext);
  return (
    <div className='app-div'>
      {
      Object.keys(noteToEdit).length !==0
      ?
      <>
        <EditNote />
      </>
      :
      <>
        <AddNote />
        <Nav/>
        <NoteList />
      </>
     }
    </div>
  );
}



export default App;

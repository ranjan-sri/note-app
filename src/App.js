import { connect } from 'react-redux';

import './App.css';
import AddNote from './components/add-note.component.jsx';
import NoteList from './components/note-list.componenent';
import Nav  from './components/nav-component';
import EditNote from './components/edit-note.component'
function App( {noteToEdit} ) {
  
  return (
    <div className='app-div'>
      {
      noteToEdit 
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

const mapStateToProps = (state) => {
  return { noteToEdit: state.noteToEdit }
}

export default connect(mapStateToProps)(App);

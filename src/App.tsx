import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NewNoteInput } from './NewNoteInput';
import { useDispatch, useSelector } from 'react-redux';
import { NotesState } from './nodesReducer';




function App() {

  const notes= useSelector<NotesState, NotesState['notes']>((state)=> state.notes)
  const dispatch = useDispatch()

  const addNote = (note:string) =>{
    dispatch({type:"Add_Note", payload:notes})
  }
  return (
   <>
  <div>
    <NewNoteInput addnote={addNote}/>
   <hr />
   <ul>{notes.map((note)=>{
     return <li key={note}>{note}</li>
   })}</ul>
  </div>
   </>
  );
}

export default App;

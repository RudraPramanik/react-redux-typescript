import React, { ChangeEvent } from 'react'

interface NewNoteInputProps{
    addnote(note:string):void
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({addnote}) =>{

    const [note, setNote] = React.useState('')

    const updateNote = (event: ChangeEvent<HTMLInputElement>)=>{
        setNote(event.target.value)
    }

    const addNoteClick= () =>{
        addnote(note)
        setNote('')
    }
    return(
        <>
        <input onChange={updateNote} type="text" name="note" placeholder="Note"/>
        <button onClick={addNoteClick}>add note</button>
        </>
    )
}

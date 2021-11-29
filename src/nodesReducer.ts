export interface NotesState{
    notes: string[]
}

const initialState = {
    notes : []
}

type Action = {
    type: "Add_Note",
    payload: string
}

export const notesReducer = ( state:NotesState= initialState, action:Action)=>{
 switch(action.type){
     case "Add_Note":{
         return{...state, notes:[...state.notes, action.payload]}
     }
     default: return state
    }
 }
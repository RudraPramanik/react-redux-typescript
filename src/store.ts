import {createStore} from 'redux'
import { notesReducer} from './nodesReducer'

export const store= createStore(
notesReducer
) 
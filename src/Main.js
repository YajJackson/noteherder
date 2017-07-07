import React from 'react'

import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = ({ notes, currentNote, setCurrentNote }) => {
    return (
        <div className='Main'>
            <Sidebar />
            <NoteList 
              notes={notes}
              setCurrentNote ={setCurrentNote}
            />
            <NoteForm currentNote={currentNote} />
        </div>
    )
}

export default Main
import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = (props) => {

  const noteIds = Object.keys(props.notes)

  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        {noteIds.map(noteId => 
          <Note note={props.notes[noteId]} key={noteId}/>
        )}
      </ul>
    </div>
  )
}

export default NoteList
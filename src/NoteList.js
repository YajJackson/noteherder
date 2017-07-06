import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = () => {
  const note = {
    id: 'note-3',
    title: 'Note Title',
    body: 'Soem exmaple text here.',
  }
  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        <Note note={note}/>
      </ul>
    </div>
  )
}

export default NoteList
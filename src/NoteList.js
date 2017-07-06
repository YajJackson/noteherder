import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = () => {
  const notes = [
    {
      id: 'note-1',
      title: 'Note Title',
      body: 'Some exmaple text here.',
    },
    {
      id: 'note-2',
      title: 'Note Title 2',
      body: 'Exmaple text two.'
    },
  ]

  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        {notes.map(note => <Note note={note} />)}
      </ul>
    </div>
  )
}

export default NoteList
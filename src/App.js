import React, { Component } from 'react'
import base from './base'

import './App.css'
import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {
        'note-1': {
          id: 'note-1',
          title: 'Note Title',
          body: 'Some exmaple text here.',
        },
        'note-2': {
          id: 'note-2',
          title: 'Note Title 2',
          body: 'Exmaple text two.'
        },
      },
      currentNote: this.blankNote(),
    }
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
  }

  render() {
    const actions = {
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
    }

    const noteData = {
      notes: this.state.notes,
      currentNote: this.state.currentNote,
    }
    
    return (
      <div className="App">
        <Main 
          {...actions}
          {...noteData}
        />
      </div>
    )
  }
}

export default App

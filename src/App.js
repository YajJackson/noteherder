import React, { Component } from 'react'
import base from './base'

import './App.css'
import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {},
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

  saveNote = (note) => {
    const notes = {...this.state.notes}
    if(!note.id){
      note.id = Date.now();
    }
    notes[note.id] = note
    this.setState({ 
      notes,
      currentNote: note
    }) // == this.setState({ notes: notes })
  }

  render() {
    const actions = {
      setCurrentNote: this.setCurrentNote,
      resetCurrentNote: this.resetCurrentNote,
      saveNote: this.saveNote,
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

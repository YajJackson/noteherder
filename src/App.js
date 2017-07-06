import React, { Component } from 'react'
import base from './base'

import './App.css'
import Main from './Main'

class App extends Component {
  constructor() {
    super()

    this.setCurrentNote = this.setCurrentNote.bind(this)

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
      currentNote: {
        id: null,
        title: '',
        body: '',
      }
    }
  }

  setCurrentNote(note) {
    this.setState({ currentNote: note })
  }

  render() {
    return (
      <div className="App">
        <Main 
          notes={this.state.notes} 
          currentNote={this.state.currentNote}
          setCurrentNote={this.setCurrentNote}
        />
      </div>
    )
  }
}

export default App

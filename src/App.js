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
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Main notes={this.state.notes} />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'

import './NoteForm.css'

class NoteForm extends Component {
  handleChanges = (ev) => {
    const note = {...this.props.currentNote}
    // ev.target.name === 'title'
    note[ev.target.name] = ev.target.value
    this.props.saveNote(note)
  }

  render() {
    const { currentNote } = this.props
    
    return (
      <div className="NoteForm">
        <div className="form-actions">
          <button type="button">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
        <form>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              value={currentNote.title}
              onChange={this.handleChanges}
            />
          </p>
          <textarea 
            name="body"
            value={currentNote.body}
            onChange={this.handleChanges}
          ></textarea>
        </form>
      </div>
    )
  }
}

export default NoteForm
import React, { Component } from 'react'
import RichTextEditor from 'react-rte'

import './NoteForm.css'

class NoteForm extends Component {
state = {
  editorValue: RichTextEditor.createEmptyValue(),
}

  handleChanges = (ev) => {
    const note = {...this.props.currentNote}
    // ev.target.name === 'title'
    note[ev.target.name] = ev.target.value
    this.props.saveNote(note)
  }

  handleEditorChanges = (editorValue) => {
    this.setState({ editorValue })

    const note = {...this.props.currentNote}
    note.body = editorValue.toString('html')
    this.props.saveNote(note)
  }

  render() {
    const { currentNote } = this.props
    
    return (
      <div className="NoteForm">
        <div className="form-actions">
          <button 
            type="button"
            onClick={this.props.removeCurrentNote}
          >
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

          <RichTextEditor
            name="body"
            value={this.state.editorValue}
            onChange={this.handleEditorChanges}
          ></RichTextEditor>
        </form>
      </div>
    )
  }
}

export default NoteForm
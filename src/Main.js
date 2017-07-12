import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './Main.css'
import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

const Main = (props) => {
    const formProps = {
      notes: props.notes,
      currentNote: props.currentNote,
      saveNote: props.saveNote,
      removeCurrentNote: props.removeCurrentNote,
    }
    return (
        <div className='Main'>
            <Sidebar
              resetCurrentNote={props.resetCurrentNote}
              signOut={props.signOut}
            />
            <NoteList
              notes={props.notes}
            />

            <Switch>
              <Route path='/notes/:id' render={navProps => (
                <NoteForm 
                  {...formProps}
                  {...navProps}
                />
              )} />

              <Route render={navProps => (
                <NoteForm 
                  {...formProps}
                  {...navProps}
                />
              )} />
            </Switch>
        </div>
    )
}

export default Main
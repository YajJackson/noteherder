import React, { Component } from 'react'
import base, {auth} from './base'
import {Route, Switch, Redirect} from 'react-router-dom'

import './App.css'
import Main from './Main'
import SignIn from './SignIn.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {},
      uid: null,
    }
  }

  componentWillMount = () => {
    this.getUserFromLocalStorage()
    auth.onAuthStateChanged(
      (user) => {
        if(user){
          // sign in
          this.handleAuth(user)
        } else {
          // sign out
          this.handleUnauth()
        }
      }
    )
  }

  getUserFromLocalStorage = () => {
    const uid = localStorage.getItem('uid')
    if(!uid) return
    this.setState({ uid })
  }
  
  syncNotes = () => {
    this.bindingRef = base.syncState(
      `notes/${this.state.uid}`,
      {
        context: this, // what object the state is on
        state: 'notes', // which property to sync
      }
    )
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  saveNote = (note) => {
    let shouldRedirect = false
    if(!note.id){
      note.id = Date.now()
      shouldRedirect = true
    }

    const notes = {...this.state.notes}
    notes[note.id] = note

    this.setState({ notes })
    if(shouldRedirect){
      this.props.history.push(`/notes/${note.id}`)
    }
  }

  removeCurrentNote = () => {
    const notes = {...this.state.notes}
    
    this.setState({ notes })
  }

  signedIn = () => {
    return this.state.uid
  }

  handleAuth = (user) => {
    localStorage.setItem('uid', user.uid)
    this.setState(
      {uid: user.uid},
      this.syncNotes
    )
  }

  handleUnauth = () => {
    localStorage.removeItem('uid')
    if(this.bindingRef) {
      base.removeBinding(this.bindingRef)
    }

    this.setState({ 
      uid: null,
      notes: {},
    })
  }

  signOut = () =>{
    auth
      .signOut()
  }

  renderMain() {
    const actions = {
      saveNote: this.saveNote,
      signOut: this.signOut,
    }

    const noteData = {
      notes: this.state.notes,
    }

    return(
      <Main
        {...actions}
        {...noteData}
      />
    )
  }

  render() {    
    return (
      <div className="App">
        <Switch>
          <Route 
            path='/sign-in' 
            render={() => (
              this.signedIn()
                ? <Redirect to='/notes' />
                : <SignIn />
            )} />
          <Route 
            path='/notes' 
            render={() => (
              this.signedIn()
                ? this.renderMain()
                : <Redirect to='/sign-in' />
            )}
          />
          <Route render={() => <Redirect to='/notes' />} />
        </Switch>
      </div>
    )
  }
}

export default App

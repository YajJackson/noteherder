import React from 'react'

import './Sidebar.css'
import quill from './quill.svg'
import newHover from './new-hover.png'
import newIcon from './new.png'

const Sidebar = ({ resetCurrentNote, signOut }) => {
    return (
        <nav className="Sidebar">
            <div className="logo">
                <img src={quill} alt="Noteherder"/>
            </div>
            <a className="new-note" 
                onClick={resetCurrentNote}
            >
                <img 
                    src={newHover} 
                    alt="New note"
                />
                <img 
                    className="outline" 
                    src={newIcon} 
                    alt="New note"
                />
            </a>
            <div className="SignOut">
                <button
                onClick={signOut}
                >
                    <i className="fa fa-sign-out"></i>
                </button>
            </div>
        </nav>
    )
}

export default Sidebar
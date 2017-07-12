import React from 'react'
import {Route, Link} from 'react-router-dom'

import './Sidebar.css'
import quill from './quill.svg'
import newHover from './new-hover.png'
import newIcon from './new.png'

const Sidebar = ({ signOut }) => {
    return (
        <nav className="Sidebar">
            <div className="logo">
                <img src={quill} alt="Noteherder"/>
            </div>
            <Link 
                className="new-note" 
                to='/notes'
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
            </Link>
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
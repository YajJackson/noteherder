import React from 'react'
import {NavLink} from 'react-router-dom'

const Note = ({ note }) => {
    return(
        <NavLink to={`/notes/${note.id}`}>
            <li>
              <div className="note">
                <div className="note-title">
                  {note.title}
                </div>
                <div 
                  className="note-body"
                  dangerouslySetInnerHTML={{ __html: note.body}}
                ></div>
              </div>
            </li>
          </NavLink>
    )
}

export default Note
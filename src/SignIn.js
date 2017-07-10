import React from 'react'

import './SignIn.css'
import { auth, googleProvider } from './base'

const SignIn = ({ handleAuth }) => {

    const authenticate = () => {
      auth
        .signInWithPopup(googleProvider)
        .then(handleAuth)
    }

    return (
      <div className='SignIn'>
        <button
          onClick={authenticate}
        >
          Sign In
        </button>
      </div>
    )
}

export default SignIn
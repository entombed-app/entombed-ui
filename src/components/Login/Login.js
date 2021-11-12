import React, { useState } from 'react';
import './Login.css';

export const Login = ({logIn, isLoggedIn}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [disabled, setDisabled] = useState(true)

  const handleUserChange = e => {
    setEmail(e.target.value)
    if (password && email) {
      setDisabled(false)
    }
  }

  const handlePassChange = e => {
    setPassword(e.target.value)
    if (password && email) {
      setDisabled(false)
    }
  } 

  const clearInputs = () => {
    setEmail("")
    setPassword("")
  }

  const submitCredentials = async e => {
    e.preventDefault()
    const creds =   { 
      email: email.trim(),
      password: password.trim()
    }

    setError("")
    try {
      await logIn(creds)
      clearInputs()
    } catch {
      setError("Mismatch")
    }
  }

  return (
    <>
      {!isLoggedIn ?
        <section className="overlay">
          <section className="modal">
            <div className="modal-header">
              {!!error ? <h2 className="login-message error">Email and password do not match. Please try again!</h2>
                    : <h2 className="login-message">Welcome! Please sign in.</h2>}
            </div>
            <p>To view a demo profile, use the following credentials:</p>
            <p>Email: ex@ample.com</p>
            <p>Password: password</p>
            <div className="modal-body">
              <input 
                required
                className="login-input"
                data-cy="email"
                type="text" 
                name="email" 
                placeholder="email"
                value={email}
                onChange={(e) => handleUserChange(e)}
              />
              <input 
                required
                className="login-input"
                data-cy="password"
                type="text" 
                name="password" 
                placeholder="password"
                value={password}
                onChange={(e) => handlePassChange(e)}
              />
            </div>
            <div className="modal-footer">
              <button 
                className="submit-login"
                disabled={disabled} 
                onClick={e => submitCredentials(e)}>
                  Login
              </button>
            </div>
          </section>
        </section>
      : <> </>}
    </>
  )
}
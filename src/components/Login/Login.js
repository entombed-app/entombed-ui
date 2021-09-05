import React, {useEffect, useState} from 'react';
import './Login.css';

export const Login = ({show, logIn, err, isLoggedIn}) => {
  console.log(err)
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
      email: email,
      password: password
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
      {show || !isLoggedIn ?
        <section className="overlay">
          <section className="modal">
            <div className="modal-header">
              {!!error ? <h2 className="login-message error">Email and password do not match. Please try again!</h2>
                    : <h2 className="login-message">Welcome! Please sign in.</h2>}
              <div className="close">X</div>
            </div>
            <div className="modal-body">
              <input 
                type="text" 
                name="email" 
                placeholder="email"
                value={email}
                onChange={(e) => handleUserChange(e)}
              />
              <input 
                type="text" 
                name="password" 
                placeholder="password"
                value={password}
                onChange={(e) => handlePassChange(e)}
              />
            </div>
            <div className="modal-footer">
              <button disabled={disabled} onClick={e => submitCredentials(e)}>Login</button>
            </div>
          </section>
        </section>
      : <> </>}
    </>
  )
}
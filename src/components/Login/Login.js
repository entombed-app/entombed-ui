import React, {useEffect, useState} from 'react';
import './Login.css';

export const Login = ({show, logIn, err}) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error] = useState(err)

  const handleUserChange = e => {
    setUsername(e.target.value)
  }

  const handlePassChange = e => {
    setPassword(e.target.value)
  } 

  const clearInputs = () => {
    setUsername("")
    setPassword("")
  }

  return (
    <>
    {show ?
    <section className="overlay">
      <section className="modal">
        <div className="modal-header">
          {!error ? <h2 className="login-message">Welcome! Please sign in.</h2>
                  : <h2 className="login-message error">Username and password do not match. Please try again!</h2>}
          <div className="close">X</div>
        </div>
        <div className="modal-body">
          <input 
            type="text" 
            name="username" 
            placeholder="username"
            value={username}
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
          <button>Login</button>
        </div>
      </section>
    </section>
    : <> </>}
    </>
  )
}
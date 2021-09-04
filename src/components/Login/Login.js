import React, {useEffect, useState} from 'react';
import './Login.css';

export const Login = ({show, logIn, err}) => {
  const [username] = useState("")
  const [password] = useState("")
  const [error] = useState(err)
  console.log(show)

  return (
    <>
    {show ?
    <section className="overlay">
      <section className="modal">
        <div className="modal-header">
          <h2 className="login-message">Welcome! Please sign in.</h2>
          <div className="close">X</div>
        </div>
        <div className="modal-body">
          <input 
            type="text" 
            name="username" 
            placeholder="username"
            onChange={username}
          />
          <input 
            type="text" 
            name="password" 
            placeholder="password"
            onChange={password}
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
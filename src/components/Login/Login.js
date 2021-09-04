import React, {useEffect, useState} from 'react';
import './Login.css';

export const Login = () => {
  const [username] = useState("")
  const [password] = useState("")

  return (
    <section className="overlay">
      <section className="modal">
        <div className="modal-header">
          <h2>Welcome! Please sign in.</h2>
          <div className="close">X</div>
        </div>
        <div className="modal-body">
          <input 
            type="text" 
            name="username" 
            placeholder="username"
          />
          <input 
            type="text" 
            name="password" 
            placeholder="password"
          />
        </div>
        <div className="modal-footer">
          <button>Login</button>
        </div>
      </section>
    </section>
  )
}
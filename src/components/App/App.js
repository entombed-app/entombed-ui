import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Switch, NavLink, Link, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <Header />
      <Switch>
        <Route exact from='/'>
          <section className='window'>
            <NavLink exact to='/countdown'>Countdown</NavLink>
            <NavLink exact to='/obituary'>Obituary</NavLink>
            <NavLink exact to='/timeline'>Timeline</NavLink>
            <NavLink exact to='/relations'>Relations</NavLink>
            <NavLink exact to='/gallery'>Gallery</NavLink>
            <div className='pane'>
                Placeholder
            </div>
            <div className='pane'>
                Placeholder
            </div>
            <div className='pane'>
                Placeholder
            </div>
          </section>
        </Route>
      </Switch>
    </main>
  );
}

export default App;

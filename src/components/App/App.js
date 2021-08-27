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
            <NavLink className='preview-pane' exact to='/preview'>Preview</NavLink>
            <NavLink className='countdown-pane' exact to='/countdown'>Countdown</NavLink>
            <NavLink className='obit-pane' exact to='/obituary'>Obituary</NavLink>
            <NavLink className='timeline-pane' exact to='/timeline'>Timeline</NavLink>
            <NavLink className='executor-pane' exact to='/executors'>Executors</NavLink>
            <NavLink className='recipient-pane' exact to='/recipients'>Recipients</NavLink>
            <NavLink className='gallery-pane' exact to='/gallery'>Gallery</NavLink>
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

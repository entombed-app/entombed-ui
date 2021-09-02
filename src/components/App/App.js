import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../Header/Header';

import sundial from "../../assets/sundial_icon.png";
import preview from "../../assets/preview (2).png"
import suit from "../../assets/suit (1).png"
import scrollImg from "../../assets/scroll.png";
import timelineImg from "../../assets/timeline.png";
import familyTree from "../../assets/family-tree.png";
import galleryImg from "../../assets/gallery.png"
import { CountdownPane } from "../CountdownPane/CountdownPane";
import { ExecutorPane } from "../ExecutorPane/ExecutorPane";
import ObitPane from "../ObitPane/ObitPane";
import { Switch, NavLink, Link, Route } from 'react-router-dom';

const App = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState("")

  const getUser = async () => {
    const url = 'https://elegy-backend.herokuapp.com/api/v1/user/1'
    setError('')
    try {
      const response = await fetch(url)
      const userData = await response.json()
      console.log(userData)
      setUser(userData.data)
    } catch (err) {
      setError(err.message)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <main>
      <Header />
      {!user.attributes 
      ? <p className='loading-message'>Loading...</p>
      : <Switch>
          <Route exact from='/'>
            <section className='window'>
              <NavLink className='preview-pane' exact to='/preview'><img src={preview}/></NavLink>
              <NavLink className='countdown-pane' exact to='/countdown'><img src={sundial}/></NavLink>
              <NavLink className='executor-pane' exact to='/executors'><img src={suit}/></NavLink>
              <div className='placeholder-1'></div>
              <NavLink className='obit-pane' exact to='/obituary'><img src={scrollImg}/></NavLink>
              <NavLink className='timeline-pane' exact to='/timeline'><img src={timelineImg}/></NavLink>
              <NavLink className='recipient-pane' exact to='/recipients'><img src={familyTree}/></NavLink>
              <NavLink className='gallery-pane' exact to='/gallery'><img src={galleryImg}/></NavLink>
              <div className='placeholder-2'></div>
            </section>
          </Route>
          <Route exact path="/countdown" render={() => <CountdownPane etd={user.attributes.etd} err={error} dob={user.attributes.date_of_birth}/>}/>
          <Route exact path="/obituary" render={() => <ObitPane obit={user.attributes.obituary}/>}/>
          <Route exact path="/executors" render={() => <ExecutorPane executor={user.attributes.executor}/>}/>
        </Switch>
      }
    </main>
  );
}

export default App;

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
import ObitPane from "../ObitPane/ObitPane";
import { Switch, NavLink, Link, Route } from 'react-router-dom';

const App = () => {
  const [user, setUser] = useState({
    //temporary data below
    // id: 1,
    // type: "user",
    // attributes: {
    //   email: "ex@ample.com",
    //   name: "bill withers",
    //   date_of_birth: "1/02/2003",
    //   etd: "6/06/2107",
    //   profile_picture: "https://cdn.britannica.com/22/206222-131-E921E1FB/Domestic-feline-tabby-cat.jpg",
    //   obituary: "Lorem ipsum dolor amit"
    // },
    //  "relationships": {
    //    "images": [img1, img2],
    //    "recipients": [rec1, rec2, rec3],
    //    "executors": [exc1, exc2, exc3],
    //     "videos": [v1, v2, v3]
    //     } 
  })
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
    // getUser()
    console.log(user)
  }, [])

  return (
    <main>
      <Link to="/" style={{textDecoration: 'none'}}><Header /></Link>
      {!user.attributes 
      ? <p className='loading-message'>Loading</p>
      : <Switch>
          <Route exact from='/'>
            <section className='window'>
              <NavLink className='preview-pane' exact to='/preview'><img src={preview}/></NavLink>
              <NavLink className='countdown-pane' exact to='/countdown'><img src={sundial}/></NavLink>
              <NavLink className='executor-pane' exact to='/executors'><img src={suit}/></NavLink>
              <div className='placeholder-1'>
                Placeholder
              </div>
              <NavLink className='obit-pane' exact to='/obituary'><img src={scrollImg}/></NavLink>
              <NavLink className='timeline-pane' exact to='/timeline'><img src={timelineImg}/></NavLink>
              <NavLink className='recipient-pane' exact to='/recipients'><img src={familyTree}/></NavLink>
              <NavLink className='gallery-pane' exact to='/gallery'><img src={galleryImg}/></NavLink>
              <div className='placeholder-2'>
                Placeholder
              </div>
            </section>
          </Route>
          <Route exact path="/countdown" render={() => <CountdownPane etd={user.attributes.etd} err={error} dob={user.attributes.date_of_birth}/>}/>
          <Route exact path="/obituary" render={() => <ObitPane obit={user.attributes.obituary}/>}/>
        </Switch>
      }
    </main>
  );
}

export default App;

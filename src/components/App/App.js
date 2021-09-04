import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";

import sundial from "../../assets/sundial_icon.png";
import preview from "../../assets/preview (2).png"
import suit from "../../assets/suit (1).png"
import scrollImg from "../../assets/scroll.png";
import timelineImg from "../../assets/timeline.png";
import familyTree from "../../assets/family-tree.png";
import galleryImg from "../../assets/gallery.png"
import { CountdownPane } from "../CountdownPane/CountdownPane";
import { ExecutorPane } from "../ExecutorPane/ExecutorPane";
import { Login } from "../Login/Login";
import PhotoAdd from "../PhotoAdd/PhotoAdd";
import { GalleryPane } from "../GalleryPane/GalleryPane";
import ObitPane from "../ObitPane/ObitPane";
import Message from "../Messsage/Message";
import { fetchUser, updateUser } from "../../utilities/apiCalls"
import { Switch, NavLink, Link, Route, Redirect } from 'react-router-dom';

const App = () => {
  const [showModal, setShowModal] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const [error, setError] = useState("")
  const [galleryPhotos, setGalleryPhotos] = useState([])

  const updateProfilePicture = async ({photoFilePath, photoFile}) => {
    try {
      let updatedUser = {...user}
      updatedUser.attributes.profile_picture_url = photoFilePath
      setUser(updatedUser)
      await updateUser({data: photoFile, type: "profile_picture", id: user.id})
    } catch(err) {
      setError(err.message)
    }
  }

  const addGalleryPhoto = async ({photoFilePath, photoFile}) => {
    try {
      setGalleryPhotos([...galleryPhotos, photoFilePath])
      await updateUser({data: photoFile, type: "images", id: user.id})
    } catch(err) {
      setError(err.message)
    }
  }

  const updateObituary = async(newObit) => {
    try {
      const updatedUser = {...user}
      updatedUser.attributes.obituary = newObit
      setUser(updatedUser)
      const message = await updateUser({data: newObit, type: "obituary", id: user.id})
      return message;
    } catch(err) {
      setError(err.message)
    }
  }

  const getUser = async () => {
    setError('')
    try {
      const userData = await fetchUser(4)
      setUser(userData.data)
      if (userData.data.attributes.images_urls) setGalleryPhotos([...userData.data.attributes.images_urls])
    } catch (err) {
      setError(err.message)
    }
  }

  const logIn = async () => {
// Expose route `POST /api/v1/login` to create sessions.
// To create a session send
// ```
// { email: user_email,
// password: user_password}
// ```
    
    setIsLoggedIn(true)
    setShowModal(false)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <main>
      {!user.attributes || error
      ? <Message error={error} profilePic={""}/>
      : <>
          <Header profilePic={user.attributes.profile_picture_url}/>
          <Login show={showModal} logIn={logIn} err={error}/>
          <Switch>
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
            <Route exact path="/obituary" render={() => <ObitPane obit={user.attributes.obituary} updateObituary={updateObituary}/>}/>
            <Route exact path="/executors" render={() => <ExecutorPane executor={user.attributes.executor}/>}/>
            <Route exact path="/add-photo/profile" render={() => <PhotoAdd updateProfilePicture={updateProfilePicture} currentProfilePic={user.attributes.profile_picture_url} type={"profile"}/>}/>
            <Route exact path="/add-photo/gallery" render={() => <PhotoAdd addGalleryPhoto={addGalleryPhoto} profPhoto={user.attributes.profile_picture_url} type={"gallery"}/>}/> 
            <Route exact path="/gallery" render={() => <GalleryPane profPhoto={user.attributes.profile_picture_url} galPhotos={galleryPhotos}/>}/>
            <Route exact path="/add-photo/:type" render={({ match }) => 
              { const whichType = match.params.type === "profile" ? <PhotoAdd updateProfilePicture={updateProfilePicture} currentProfilePic={user.attributes.profile_picture_url} type={"profile"}/>
                                                                  : <PhotoAdd addGalleryPhoto={addGalleryPhoto} profPhoto={user.attributes.profile_picture_url} type={"gallery"}/>
              }
            }/>
            <Route
              exact
              path='/page-not-found'
              render={() => <Message error={'404 page not found. Click title above.'} />}
            />
            <Route
              exact
              path='/*/page-not-found'
              render={() => <Message error={'404 page not found. Click title above.'} />}
            />
            <Redirect to="/page-not-found" />
          </Switch>
        </>
      }
    </main>
  );
}

export default App;

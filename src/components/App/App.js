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
import { fetchUser, updateUser, postCredentials } from "../../utilities/apiCalls"
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

  const logIn = async credentials => {
    setError("")
    try {
      const userData = await postCredentials(credentials)
      console.log(userData)
      getUser()
      setIsLoggedIn(true)
      setShowModal(false)
    } catch (err) {
      setError(err.message)
    }

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
                <Link className='preview-pane' exact to='/preview'><img src={preview}/></Link>
                <Link className='countdown-pane' exact to='/countdown'><img src={sundial}/></Link>
                <Link className='executor-pane' exact to='/executors'><img src={suit}/></Link>
                <div className='placeholder-1'></div>
                <Link className='obit-pane' exact to='/obituary'><img src={scrollImg}/></Link>
                <Link className='timeline-pane' exact to='/timeline'><img src={timelineImg}/></Link>
                <Link className='recipient-pane' exact to='/recipients'><img src={familyTree}/></Link>
                <Link className='gallery-pane' exact to='/gallery'><img src={galleryImg}/></Link>
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

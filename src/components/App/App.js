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
import PhotoAdd from "../PhotoAdd/PhotoAdd";
import { GalleryPane } from "../GalleryPane/GalleryPane";
import ObitPane from "../ObitPane/ObitPane";
import Message from "../Messsage/Message";
import { fetchUser, updateUser } from "../../utilities/apiCalls"
import { Switch, NavLink, Link, Route } from 'react-router-dom';

const App = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState("")
  const [galleryPhotos, setGalleryPhotos] = useState(["http://c.files.bbci.co.uk/11382/production/_119803507_mediaitem119803506.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmmgkZCiMVGYv9i0A82kdTe-I5JogeRNzog&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3xXj4Q8qHmazIiBUgmeB-qYugUaZrvN7Mw&usqp=CAU"])

  const updateProfilePicture = (photoFilePath) => {
    let updatedUser = {...user}
    updatedUser.attributes.profile_picture_url = photoFilePath
    setUser(updatedUser)
  }

  const addGalleryPhoto = (photoFilePath) => {
    setGalleryPhotos([...galleryPhotos, photoFilePath])
  }
  const updateObituary = (newObit) => {
    const updatedUser = {...user}
    updatedUser.attributes.obituary = newObit
    console.log(updatedUser)
    setUser(updatedUser)
    updateUser(updatedUser)
  }

  const getUser = async () => {
    setError('')
    try {
      const userData = await fetchUser(2)
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
      {!user.attributes || !error
      ? <Message error={error}/>
      : <>
        <Header profilePic={user.attributes.profile_picture_url}/>
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
        </Switch>
        </>
      }
    </main>
  );
}

export default App;

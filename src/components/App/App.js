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
import { MemorialPreview } from "../MemorialPreview/MemorialPreview";
import PhotoAdd from "../PhotoAdd/PhotoAdd";
import { GalleryPane } from "../GalleryPane/GalleryPane";
import ObitPane from "../ObitPane/ObitPane";
import Message from "../Messsage/Message";
import { fetchUser, updateUser, postCredentials, sendFinalEmail } from "../../utilities/apiCalls"
import { Switch, Link, Route, Redirect } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [user, setUser] = useState({})
  const [error, setError] = useState("")
  const [galleryPhotos, setGalleryPhotos] = useState([])
  const [execs, setExecs] = useState([])
  const [recipients, setRecipients] = useState([])

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
      setUser(userData[0].data)
      setExecs(userData[1].data)
      setRecipients(userData[2].data)
      if (userData[0].data.attributes.images_urls) setGalleryPhotos([...userData[0].data.attributes.images_urls])
    } catch (err) {
      setError(err.message)
    }
  }

  const logIn = async credentials => {
    setError("")
    try {
      const response = await postCredentials(credentials)
      if (response.data) {
        await getUser()
        setIsLoggedIn(true)
      } 
    } catch (err) {
      throw Error("Email and password do not match.")
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <Switch>
      <Route exact path="/:id/memorial" render={({ match }) => {
        if (!user.attributes && !error) getUser(match.params.id)
        return (
          <>
            {!user.attributes || !execs[0] || error
            ? <Message error={error} profilePic={""}/>
            : <MemorialPreview 
                isLoggedIn={isLoggedIn} 
                isVisitor={true}
                executors={execs} 
                obit={user.attributes.obituary} 
                galPhotos={galleryPhotos} 
                profPhoto={user.attributes.profile_picture_url} 
                name={user.attributes.name} 
                dob={user.attributes.date_of_birth} 
                etd={user.attributes.etd}
              />
            }
          </>
        )
      }
      }/>
      <Route path="/" render={() => 
        <main>
          {!isLoggedIn && <Login isLoggedIn={isLoggedIn} logIn={logIn}/>}
          {!user.attributes || error 
          ? <Message error={error} profilePic={""}/>
          : <>
              <Header profilePic={user.attributes.profile_picture_url}/>
              <Switch>
                <Route exact from='/'>
                  <section className='window'>
                    <div className="window-pane corner"></div>
                    <Link className='preview-pane' to='/preview'><img src={preview}/></Link>
                    <div className="window-pane center4"></div>
                    <Link className='executor-pane' to='/executors'><img src={suit}/></Link>
                    <div className="window-pane corner"></div>
                    <div className="window-pane border1"></div>
                    <div className="window-pane center3"></div>
                    <div className="window-pane center2"></div>
                    <Link className='countdown-pane' to='/countdown'><img src={sundial}/></Link>
                    <div className="window-pane center6"></div>
                    <div className="window-pane center7"></div>
                    <div className="window-pane lightest"></div>
                    <div className="window-pane border3"></div>
                    <div className="window-pane border3"></div>
                    <div className="window-pane lightest"></div>
                    <div className="window-pane center6"></div>
                    <div className="window-pane center1"></div>
                    <div className="window-pane center2"></div>
                    <div className="window-pane center3"></div>
                    <div className="window-pane border2"></div>
                    <div className="window-pane border1"></div>
                    <div className="window-pane center7"></div>
                    <Link className='gallery-pane' to='/gallery'><img src={galleryImg}/></Link>
                    <div className="window-pane center5"></div>
                    <div className="window-pane center1"></div>
                    <Link className='recipient-pane' to='/recipients'><img src={familyTree}/></Link>
                    <Link className='obit-pane' to='/obituary'><img src={scrollImg}/></Link>
                    <div className="window-pane border2"></div>
                    <div className="window-pane center2"></div>
                    <div className="window-pane lightest"></div>
                    <div className="window-pane border1"></div>
                    <div className="window-pane center1"></div>
                    <div className="window-pane center5"></div>
                    <div className="window-pane border3"></div>
                    <div className="window-pane corner"></div>
                    <div className="window-pane center1"></div>
                    {/* <div className='timeline-pane' to='/timeline'></div> */}
                    <div className='window-pane center4'></div>
                    <div className='window-pane center5'></div>
                    <div className='window-pane center3'></div>
                    <div className='window-pane corner'></div>
                  </section>
                </Route>
                <Route exact path="/countdown" render={() => <CountdownPane etd={user.attributes.etd} err={error} dob={user.attributes.date_of_birth} id={user.id}/>}/>
                <Route exact path="/obituary" render={() => <ObitPane obit={user.attributes.obituary} updateObituary={updateObituary}/>}/>
                <Route exact path="/executors" render={() => <ExecutorPane executors={execs}/>}/>
                <Route exact path="/add-photo/profile" render={() => <PhotoAdd updateProfilePicture={updateProfilePicture} currentProfilePic={user.attributes.profile_picture_url} type={"profile"}/>}/>
                <Route exact path="/add-photo/gallery" render={() => <PhotoAdd addGalleryPhoto={addGalleryPhoto} profPhoto={user.attributes.profile_picture_url} type={"gallery"}/>}/> 
                <Route exact path="/gallery" render={() => <GalleryPane profPhoto={user.attributes.profile_picture_url} galPhotos={galleryPhotos}/>}/>
                <Route exact path="/preview" render={() => <MemorialPreview isLoggedIn={isLoggedIn} executors={execs} obit={user.attributes.obituary} galPhotos={galleryPhotos} profPhoto={user.attributes.profile_picture_url} name={user.attributes.name} dob={user.attributes.date_of_birth} etd={user.attributes.etd}/>}/>
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
      }/>
    </Switch>
  );
}

export default App;

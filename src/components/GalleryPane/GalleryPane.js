import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./GalleryPane.css"

export const GalleryPane = props => {
  const [photos] = useState(["http://c.files.bbci.co.uk/11382/production/_119803507_mediaitem119803506.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmmgkZCiMVGYv9i0A82kdTe-I5JogeRNzog&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3xXj4Q8qHmazIiBUgmeB-qYugUaZrvN7Mw&usqp=CAU"])
  const [profile] = useState("")

  return (
    <section className="gallery">
      <section className="profile-dome">
        <div className="left-dome"></div>
        <div className="center-dome">
          <img className="gal-prof" src="https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782__480.jpg"/>
        </div>
        <div className="right-dome"></div>
      </section>
      <section className="slideshow">
        {/* <h4 className="slideshow-header">Slideshow</h4> */}
        <Link to="/photoadd/gallery"><button className="add-gal-photo">Add a photo</button></Link>
      </section>
      <section className="gal-view">
        <section className="gallery-panes">
          <div className="gal-diamond g-1"></div>
          <div className="gal-diamond g-2"></div>
          <div className="gal-diamond g-3"></div>
          <div className="gal-diamond g-4"></div>
          <div className="gal-diamond g-5"></div>
          <div className="gal-diamond g-6"></div>
          <div className="gal-diamond g-7"></div>
          <div className="gal-diamond g-8"></div>
          <div className="gal-diamond g-9">
            {photos[2] && <img 
                            alt="User photo" 
                            className="gal-img"
                            src={photos[2]}
                          />}
          </div>
          <div className="gal-diamond g-10">
            {photos[1] && <img 
                            alt="User photo" 
                            className="gal-img"
                            src={photos[1]}
                          />}
          </div>
          <div className="gal-diamond g-11"></div>
          <div className="gal-diamond g-12"></div>
          <div className="gal-diamond g-13"></div>
          <div className="gal-diamond g-14">
          {photos[3] && <img 
                          alt="User photo" 
                          className="gal-img"
                          src={photos[3]}
                        />}
          </div>
          <div className="gal-diamond g-15">
            {photos[4] && <img 
                            alt="User photo" 
                            className="gal-img"
                            src={photos[4]}
                          />}
          </div>
          <div className="gal-diamond g-16">
            {photos[5] && <img 
                            alt="User photo" 
                            className="gal-img"
                            src={photos[5]}
                          />}
          </div>
          <div className="gal-diamond g-17">
            {photos[0] && <img 
                            alt="User photo" 
                            className="gal-img"
                            src={photos[0]}
                          />}
          </div>
          <div className="gal-diamond g-18"></div>
          <div className="gal-diamond g-19"></div>
          <div className="gal-diamond g-20">
            {photos[6] && <img 
                            alt="User photo" 
                            className="gal-img"
                            src={photos[6]}
                          />}
          </div>
          <div className="gal-diamond g-21">
            {photos[7] && <img 
                              alt="User photo" 
                              className="gal-img"
                              src={photos[7]}
                            />}
          </div>
          <div className="gal-diamond g-22">
            {photos[8] && <img 
                              alt="User photo" 
                              className="gal-img"
                              src={photos[8]}
                            />}
          </div>
          <div className="gal-diamond g-23">
            {photos[9] && <img 
                                alt="User photo" 
                                className="gal-img"
                                src={photos[9]}
                              />}
          </div>
          <div className="gal-diamond g-24"></div>
          <div className="gal-diamond g-25"></div>
          <div className="gal-diamond g-26">
            {photos[10] && <img 
                                alt="User photo" 
                                className="gal-img"
                                src={photos[10]}
                              />}
          </div>
          <div className="gal-diamond g-27"></div>
          <div className="gal-diamond g-28">
            {photos[11] && <img 
                                alt="User photo" 
                                className="gal-img"
                                src={photos[11]}
                              />}
          </div>
          <div className="gal-diamond g-29"></div>
          <div className="gal-diamond g-30"></div>
          <div className="gal-diamond g-31"></div>
          <div className="gal-diamond g-32"></div>
          <div className="gal-diamond g-33"></div>
          <div className="gal-diamond g-34"></div>
          <div className="gal-diamond g-35"></div>
          <div className="gal-diamond g-36"></div>
        </section>
      </section>
    </section>
  )
}
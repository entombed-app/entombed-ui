import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./GalleryPane.css"

export const GalleryPane = ({ galPhotos, profPhoto }) => {
  console.log(profPhoto)

  return (
    <section className="gallery">
      <section className="gal-border">
        <h2 className="gal-head">Gallery</h2>
      <section className="profile-dome">
        <div className="left-dome"></div>
        <div className="center-dome">
          {profPhoto ? <img className="gal-prof" src={profPhoto}/> : <h3 className="gal-rule">Please add a Profile Photo</h3>}
        </div>
        <div className="right-dome"></div>
      </section>
      <section className="slideshow">
        {/* <h4 className="slideshow-header">Slideshow</h4> */}
        <Link to="/add-photo/gallery"><button className="add-gal-photo">Add a photo</button></Link>
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
            {galPhotos[3] && <img 
                            alt="User photo" 
                            className="gal-img"
                            src={galPhotos[3]}
                          />}
          </div>
          <div className="gal-diamond g-10">
            {galPhotos[6] && <img 
                            alt="User photo" 
                            className="gal-img"
                            src={galPhotos[6]}
                          />}
          </div>
          <div className="gal-diamond g-11"></div>
          <div className="gal-diamond g-12"></div>
          <div className="gal-diamond g-13"></div>
          <div className="gal-diamond g-14">
          </div>
          <div className="gal-diamond g-15">
            {galPhotos[4] && <img 
                            alt="User photo" 
                            className="gal-img"
                            src={galPhotos[4]}
                          />}
          </div>
          <div className="gal-diamond g-16">
            {galPhotos[5] && <img 
                            alt="User photo" 
                            className="gal-img"
                            src={galPhotos[5]}
                          />}
          </div>
          <div className="gal-diamond g-18">
            {galPhotos[10] && <img 
                            alt="User photo" 
                            className="gal-img"
                            src={galPhotos[10]}
                          />}
          </div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond g-3"></div>
          <div className="gal-diamond g-20">
            {galPhotos[2] && <img 
                            alt="User photo" 
                            className="gal-img"
                            src={galPhotos[2]}
                          />}
          </div>
          <div className="gal-diamond g-21">
            {galPhotos[7] && <img 
                              alt="User photo" 
                              className="gal-img"
                              src={galPhotos[7]}
                            />}
          </div>
          <div className="gal-diamond g-22">
            {galPhotos[8] && <img 
                              alt="User photo" 
                              className="gal-img"
                              src={galPhotos[8]}
                            />}
          </div>
          <div className="gal-diamond g-23">
            {galPhotos[9] && <img 
                                alt="User photo" 
                                className="gal-img"
                                src={galPhotos[9]}
                              />}
          </div>
          <div className="gal-diamond g-24"></div>
          <div className="gal-diamond g-25"></div>
          <div className="gal-diamond g-26"></div>
          <div className="gal-diamond g-27">
          {galPhotos[1] && <img 
                                alt="User photo" 
                                className="gal-img"
                                src={galPhotos[1]}
                              />}
          </div>
          <div className="gal-diamond g-28">
            {galPhotos[0] && <img 
                                alt="User photo" 
                                className="gal-img"
                                src={galPhotos[0]}
                              />}
          </div>
          <div className="gal-diamond">
          {galPhotos[11] && <img 
                                alt="User photo" 
                                className="gal-img"
                                src={galPhotos[11]}
                              />}
          </div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond 9-18"></div>
          <div className="gal-diamond 9-18"></div>
          <div className="gal-diamond g-33"></div>
          <div className="gal-diamond g-34"></div>
          <div className="gal-diamond g-35"></div>
          <div className="gal-diamond g-36">
            {galPhotos[3] && <img 
                            alt="User photo" 
                            className="gal-img"
                            src={galPhotos[3]}
                          />}
          </div>
          
          <div className="gal-diamond"></div>
          <div className="gal-diamond g-18"></div>
          <div className="gal-diamond g-11"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond g-13"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond g-4"></div>
          <div className="gal-diamond g-13"></div>
          <div className="gal-diamond 9-18"></div>
          <div className="gal-diamond g-13"></div>

          <div className="gal-diamond 9-18"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond"></div>
        </section>
      </section>
      </section>
    </section>
  )
}
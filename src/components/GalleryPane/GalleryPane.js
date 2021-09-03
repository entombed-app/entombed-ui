import React, { useState } from "react"
import "./GalleryPane.css"

export const GalleryPane = props => {
  const [avail] = useState([9, 10, 14, 15, 16, 17, 20, 21, 22, 23, 26, 28])

  return (
    <section className="gallery">
      <section className="profile-dome">
        <div className="left-dome"></div>
        <div className="center-dome">
          <img src="https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782__480.jpg" className="profile-dome"/>
        </div>
        <div className="right-dome"></div>
      </section>
      <section className="slideshow">
        <h4 className="slideshow-header">Slideshow</h4>
        <button className="add-gal-photo">Add a photo</button>
      </section>
      <section className="gal-view">
        <section className="gallery-panes">
          <div className="gal-diamond 1"></div>
          <div className="gal-diamond 2"></div>
          <div className="gal-diamond 3"></div>
          <div className="gal-diamond 4"></div>
          <div className="gal-diamond 5"></div>
          <div className="gal-diamond 6"></div>
          <div className="gal-diamond 7"></div>
          <div className="gal-diamond 8"></div>
          <div className="gal-diamond 9"></div>
          <div className="gal-diamond 10"></div>
          <div className="gal-diamond 11"></div>
          <div className="gal-diamond 12"></div>
          <div className="gal-diamond 13"></div>
          <div className="gal-diamond 14"></div>
          <div className="gal-diamond 15"></div>
          <div className="gal-diamond 16"></div>
          <div className="gal-diamond 17"></div>
          <div className="gal-diamond 18"></div>
          <div className="gal-diamond 19"></div>
          <div className="gal-diamond 20"></div>
          <div className="gal-diamond 21"></div>
          <div className="gal-diamond 22"></div>
          <div className="gal-diamond 23"></div>
          <div className="gal-diamond 24"></div>
          <div className="gal-diamond 25"></div>
          <div className="gal-diamond 26"></div>
          <div className="gal-diamond 27"></div>
          <div className="gal-diamond 28"></div>
          <div className="gal-diamond 29"></div>
          <div className="gal-diamond 30"></div>
          <div className="gal-diamond 31"></div>
          <div className="gal-diamond 32"></div>
          <div className="gal-diamond 33"></div>
          <div className="gal-diamond 34"></div>
          <div className="gal-diamond 35"></div>
          <div className="gal-diamond 36"></div>
        </section>
      </section>
    </section>
  )
}
import React, { useState } from "react"
import "./GalleryPane.css"

export const GalleryPane = props => {
  const [avail, setAvail] = useState(["9", "10", "14", "15", "16", "17", "20", "21", "22", "23", "26", "28"])
  const [photos] = useState([])
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
        <button className="add-gal-photo">Add a photo</button>
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
          <div className="gal-diamond g-9"></div>
          <div className="gal-diamond g-10"></div>
          <div className="gal-diamond g-11"></div>
          <div className="gal-diamond g-12"></div>
          <div className="gal-diamond g-13"></div>
          <div className="gal-diamond g-14"></div>
          <div className="gal-diamond g-15"></div>
          <div className="gal-diamond g-16"></div>
          <div className="gal-diamond g-17"></div>
          <div className="gal-diamond g-18"></div>
          <div className="gal-diamond g-19"></div>
          <div className="gal-diamond g-20"></div>
          <div className="gal-diamond g-21"></div>
          <div className="gal-diamond g-22"></div>
          <div className="gal-diamond g-23"></div>
          <div className="gal-diamond g-24"></div>
          <div className="gal-diamond g-25"></div>
          <div className="gal-diamond g-26"></div>
          <div className="gal-diamond g-27"></div>
          <div className="gal-diamond g-28"></div>
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
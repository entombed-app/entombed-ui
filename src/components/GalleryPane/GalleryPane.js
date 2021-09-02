import React from "react"
import "./GalleryPane.css"

export const GalleryPane = props => {
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
          <div className="gal-diamond"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond">
            <img className="gal-img" src="http://c.files.bbci.co.uk/11382/production/_119803507_mediaitem119803506.jpg"/>
          </div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond">
            <img className="gal-img" src="https://cdn.mos.cms.futurecdn.net/RY2EpSo74hvYXyAVpTN2Gg.jpg"/>
          </div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond"></div>
          <div className="gal-diamond"></div>
        </section>
      </section>
    </section>
  )
}
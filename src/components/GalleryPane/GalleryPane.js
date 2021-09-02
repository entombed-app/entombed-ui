import React from "react"
import "./GalleryPane.css"

export const GalleryPane = props => {
  return (
    <section class="gallery">
      <section class="profile-dome">
        <div class="left-dome"></div>
        <div class="center-dome">
          <img src="https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782__480.jpg" class="profile-dome"/>
        </div>
        <div class="right-dome"></div>
      </section>
      <section class="slideshow">
        <h4 class="slideshow-header">Slideshow</h4>
      </section>
      <section class="gal-view">
      </section>
  </section>
  )
}
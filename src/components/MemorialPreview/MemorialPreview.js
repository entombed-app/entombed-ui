import React, {useEffect, useState} from 'react';
import './MemorialPreview.css';


export const MemorialPreview = ({name, isLoggedIn, dob, etd, executors, obit, profPhoto, galPhotos, }) => {
  return (
    <section className="preview">
      <section className="prev-head">
        <div className="rays">
          <div className="ray ray2"></div>
          <div className="ray ray3"></div>
          <div className="ray ray4"></div>
          <div className="ray ray5"></div>
          <div className="ray ray6"></div>
          <div className="ray ray7"></div>
          <div className="ray ray8"></div>
        </div>
        <div className="mem-photo">
          <img className="center-sun" src={profPhoto}/>
        </div>
      </section>
      <section className="prev-name">
        <h2 className="name">{name}</h2>
      </section>
      <aside className="facts">
        <p className="dob">Born: {dob}</p>
        <p className="dob">Deceased: {etd}</p>
      </aside>
      <aside className="prev-exec">

      </aside>
      <article className="prev-obit">

      </article>
      <section className="">

      </section>
    </section>
  )
}
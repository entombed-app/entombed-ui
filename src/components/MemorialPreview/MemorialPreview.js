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
        </div>
        <div className="mem-photo">
          {/* <img src={profPhoto}/> */}
        </div>
      </section>
      <aside className="prev-exec">

      </aside>
      <aside className="facts">
      </aside>
      <article className="prev-obit">

      </article>
      <section className="">

      </section>
    </section>
  )
}
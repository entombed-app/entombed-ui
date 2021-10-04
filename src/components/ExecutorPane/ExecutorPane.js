import React from "react"
import "./ExecutorPane.css"

export const ExecutorPane = ({person, type}) => {
  let details;
  if (type) {
    details = 
      <section className="exec-details">
        <h2 className="exec-name">{person[0].attributes.name}</h2>
        <h3 className="exec-phone" data-cy="exec-phone">{person[0].attributes.phone}</h3>
        <h4 className="exec-email">{person[0].attributes.email}</h4>
      </section>
  } else {
    details = 
      <section className="exec-details">
        <h2 className="exec-name">{person.name}</h2>
        <h4 className="exec-email">{person.email}</h4>
      </section>  
  }

  return (
    <section className="exec-pane">
      <section className="exec-border">
        <h2 className="exec-title">{type ? 'Recipient' : 'Executor'}</h2>
        <section className="exec-window">
          <div className="top">
            <div className="top-left box"></div>
            <div className="bottom-left box"></div>
          </div>
          <div className="bottom">
            <div className="top-right box"></div>
            <div className="bottom-right box"></div>
          </div>
          <div className="inner-diamond">
          </div>
          <div className="inner-circle">
          </div>
          {details}
          {/* <section className="exec-details">
            <h2 className="exec-name">{person[0].attributes.name}</h2>
            <h3 className="exec-phone" data-cy="exec-phone">{person[0].attributes.phone}</h3>
            <h4 className="exec-email">{person[0].attributes.email}</h4>
          </section> */}
        </section>
      </section>
    </section>
  )
}
import React from "react"
import "./ExecutorPane.css"

export const ExecutorPane = ({executors}) => {
  return (
    <section className="exec-pane">
      <section className="exec-border">
        {/* <h2 className="exec-title">Executor</h2> */}
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
          <section className="exec-details">
            <h2 className="exec-name">{executors[0].attributes.name}</h2>
            <h3 data-cy="exec-phone">{executors[0].attributes.phone}</h3>
            <h4 className="exec-email">{executors[0].attributes.email}</h4>
        </section>
        </section>
      </section>
    </section>
  )
}
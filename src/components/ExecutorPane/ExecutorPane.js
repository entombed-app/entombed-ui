import React from "react"
import "./ExecutorPane.css"

export const ExecutorPane = () => {
  return (
    <section className="exec-pane">
      <section className="exec-border">
        <h2 className="exec-title">Executor</h2>
        <div className="exec-window">
          <div className="shape one">
          </div>
          <div className="line l-one">
          </div>
          <div className="shape two">
          </div>
          <div className="line l-two">
          </div>
          <div className="shape three">
          </div>
          <div className="line l-three">
          </div>
          <div className="shape four">
          </div>
          <div className="line l-four">
          </div>
          <div className="shape five">
          </div>
          <div className="line l-five">
          </div>
          <div className="shape six">
          </div>
          <div className="shape seven">
          </div>
          <div className="line l-six">
          </div>
        </div>
        <section className="exec-details">
          <h2 className="exec-name">Exectuor Name</h2>
          <h3 data-cy="exec-phone">(413) 555-6666</h3>
          <h4 className="exec-email">email_address@hotmail.com</h4>
        </section>
      </section>
    </section>
  )
}
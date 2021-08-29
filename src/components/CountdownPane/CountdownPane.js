import "./CountdownPane.css"
import sunface from "../../assets/sunface.png"
import React, { useEffect, useState } from "react";

export const CountdownPane = ({est, err}) => {
  const [etd] = useState(est)
  const [timeLeft, setTimeLeft] = useState(0)
  const [error] = useState(err)

  useEffect(() => {
    calculateTimeLeft()
  }, [])

  const calculateTimeLeft = () => {
    const difference = +new Date(`${etd}`) - +new Date()

    let updatedTimeLeft = {}
  
    if (difference > 0) {
      updatedTimeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }
    setTimeLeft(updatedTimeLeft)
  }

  return (
    <section className="sundial-display">
      <section className="release-days">
          {error.length ? <h2>{error}</h2> : <h2> Days until release: {timeLeft.days}</h2>}
      </section>
      <section className="sundial">
        {/* <div className="progress-outer">
          <div className="progress-inner"> */}
          <svg 
            className="progress"
          >
              <circle
                className="progress-ring"
                // stroke={"#FFFFFF"}
                // strokeWidth={4}
                // fill="transparent"
                r="27vh"
                cx="25vh"
                cy="25vh"
              >
              </circle>
          </svg>
            <div className="big-circle">
              <div className="circle">
                <div className="profile">
                  <img className="prof-photo" src={sunface} />
                </div>
                <div className="marks">
                  {/* <div className="wedge"></div> */}
                  <div className="mark">XII</div>
                  <div className="mark">I</div>
                  <div className="mark">II</div>
                  <div className="mark">III</div>
                  <div className="mark">IV</div>
                  <div className="mark">V</div>
                  <div className="mark">VI</div>
                  <div className="mark">VII</div>
                  <div className="mark">VIII</div>
                  <div className="mark">IX</div>
                  <div className="mark">X</div>
                  <div className="mark">XI</div>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* <div className="outer">
              <div className="bar left">
                <div className="progress"></div>
              </div>
              <div className="bar right">
                <div className="progress"></div>
              </div>
            </div> */}
          {/* </div>
        </div> */}
      </section>
    </section>
  )
}
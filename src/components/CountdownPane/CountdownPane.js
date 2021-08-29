import "./CountdownPane.css"
import sunface from "../../assets/sunface.png"
import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const CountdownPane = ({est, err}) => {
  const [etd, setEtd] = useState(est)
  const [timeLeft, setTimeLeft] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const [error] = useState(err)

  useEffect(() => {
    calculateTimeLeft()
  }, [])

  const calculateTimeLeft = () => {
    let newYear, newEtd
    const splitEtd = etd.split("/")
    if (splitEtd[2].length < 4) {
      newYear = Number(`21${splitEtd[2]}`) + 122
      newEtd = `${splitEtd[0]}/${splitEtd[1]}/${newYear}`
      setEtd(newEtd)
      calculateProgress()
    }

    const difference = +new Date(`${newEtd}`) - +new Date()
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

  const calculateProgress = () => {
    const total = +new Date(`${etd}`)
    const perc = total / +new Date
    setPercentage(perc * 100)
  }

  return (
    <section className="sundial-display">
      <section className="release-days">
          {error.length ? <h2>{error}</h2> : <h2> Days until release: {timeLeft.days}</h2>}
      </section>
      <section className="sundial">
          <CircularProgressbar value={percentage} styles={buildStyles({strokeLinecap: 'butt', pathColor: `#4d7880`, trailColor: "#0e1525"})}/>;
            <div className="big-circle">
              <div className="circle">
                <div className="profile">
                  <img className="prof-photo" src={sunface} />
                </div>
                <div className="marks">
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
      </section>
    </section>
  )
}
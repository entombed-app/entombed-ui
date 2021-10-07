import "./CountdownPane.css"
import sunface from "../../assets/sunface.png"
import React, { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { sendFinalEmail } from "../../utilities/apiCalls";
import { restructureDate } from "../../utilities/utils";

export const CountdownPane = ({etd, err, dob, id, user_etd}) => {
  const [timeLeft, setTimeLeft] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const [error, setError] = useState(err)
  const [message, setMessage] = useState("")
  const [timer, setTimer] = useState("");

  useEffect(() => {
    calculateTimeLeft()
  }, [])

  const calculateTimeLeft = async() => {
    let newEtd;
    setError("")
    const splitEtd = etd.split("-")
    newEtd = `${splitEtd[1]}/${splitEtd[2]}/${splitEtd[0]}`
    calculateProgress()

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

    if (!updatedTimeLeft.days) {
      try {
        const response = await sendFinalEmail(id)
        if (response.includes("sent")) {
          setMessage("Email successfully sent. R.I.P")
          setTimer(setTimeout(() => setMessage(""), 7000))
        }
      } catch(err) {
        setError(`Error: ${err.message}`)
      }
    }
    
    setTimeLeft(updatedTimeLeft)
  }

  const calculateProgress = () => {
    const deathDay = +new Date(`${etd}`)
    const birthDay = +new Date(`${dob}`)
    const totalLife = deathDay - birthDay
    const today =  +new Date()
    const livedTime = today - birthDay
    const perc = livedTime / totalLife

    setPercentage((1 - perc) * 100)
  }

  return (
    <section className="sundial-display">
      <div className="date-container">
        <section className="release-days">
            {error.length ? <h2>{error}</h2> : 
              <>
                <h2>Days until release:</h2>
                <h3 className="countdown-num">{timeLeft.days}</h3>
              </>
            }
            {!!message && <div className="email-sent">{message}</div>}
        </section>
        <section className="date-of-release">
          <h2>Date of release:</h2>
          <h3 className="countdown-num">{user_etd ? restructureDate(user_etd) : restructureDate(etd)}</h3>
        </section>
      </div>
      <section className="sundial">
          <CircularProgressbar 
            value={percentage} 
            strokeWidth={2}
            styles={buildStyles({strokeLinecap: 'butt', 
            pathColor: `hsla(174, 86%, 57%, 0.3)`, 
            trailColor: "#0e1525"})}
          />;
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
import "./CountdownPane.css"
import sunface from "../../assets/sunface.png"
import { useEffect } from "react"

export const CountdownPane = () => {
  const [etd, setEtd] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [error, setError] = useState('')

  const getEtd = async () => {
    const url = '/api/v1/user/:id' 
    setError("")
    try {
      const response = await fetch(url)
      const date = await response.json()
      setEtd(date.data.etd)
      calculateTimeLeft()
    } catch(err) {
      setError(err.message)
    }
  }

  useEffect(() => {
    getEtd()
  }, [])

  const calculateTimeLeft = () => {
    const difference = +new Date(etd) - +new Date()

    let updatedTimeLeft = {}
  
    if (difference > 0) {
      updatedTimeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return setTimeLeft(updatedTimeLeft)
  }

  // function to calculate the time remaining between current date and ETD
  // create a new variable called difference 
  // inside difference,  create a new date
  // inside new Date() use etd
  // use + to coerce that date to an integer
  // deduct the current date from current date

  // create an empty object to catch timeLeft
  // use if statement to check if there is time left (if difference is > 0)
  // calculate the amount of time left in that if statement
  // update the value of timeLeft using math.floor and division

  // return timeleft out of function
  
  // Add timeleft to state with useState
  // use set timeleft inside the function to set the value

  // api call here that sets in state the ETD
  // useEffect to getETD

  return (
    <>
    <section className="sundial">
      <div className="big-circle">
        <div className="circle">
        <div className="profile">
          <img className="prof-photo" src={sunface} />
        </div>
          <div className="marks">
            <div className="wedge"></div>
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
    </>
  )
}
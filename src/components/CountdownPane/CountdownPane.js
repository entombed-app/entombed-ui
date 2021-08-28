import "./CountdownPane.css"
import sunface from "../../assets/sunface.png"

export const CountdownPane = () => {
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
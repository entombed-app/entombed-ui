import './MemorialPreview.css';
import { restructureDate } from '../../utilities/utils';


export const MemorialPreview = ({name, isLoggedIn, isVisitor, dob, etd, executors, obit, profPhoto, galPhotos }) => {
  if (isVisitor) isLoggedIn = true;
  const photoPanes = galPhotos.map((photo, index) => {
    return (
      <div className="square-phot" key={index}>
        <img className="prev-img" alt="Memorial Photo" src={photo}/>
      </div>
    )
  })
  
  return (
    <>
    {isLoggedIn 
      ? <>
          {isVisitor && 
            <header className='header visitor-view'>
               <h1 className="title">{`${name}\'s Memorial`}</h1>
            </header>
          }
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
                <img className="center-sun" alt="Memorial Profile Photo" src={profPhoto}/>
              </div>
            </section>
            <section className="prev-name">
              <h2 className="name">{name}</h2>
            </section>
            <div className="text-facts">
              <aside className="facts">
                <h3>Life Span</h3>
                <p>Born: {restructureDate(dob)}</p>
                <p>Deceased: {restructureDate(etd)}</p>
              </aside>
              <aside className="prev-exec">
                <h3>Executor</h3>
                <p>Name: {executors[0].attributes.name}</p>
                <p>Phone: {executors[0].attributes.phone}</p>
                <p>Email: {executors[0].attributes.email}</p>
              </aside>
            </div>
            <article className="prev-obit">
              <h3>Obituary</h3>
              <p>{obit}</p>
            </article>
            <section className="prev-gal">
              {photoPanes}
            </section>
          </section> 
        </>
      : <h2>Please log in to see this feature</h2>} 
    </>
  )
}
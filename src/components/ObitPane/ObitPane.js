import React, {useState} from 'react';
import './ObitPane.css';

const ObitPane = () => {
    const [obituary, setObituary] = useState('');
    const [editMode, setEditMode] = useState(false);

    const handleSubmit = () => {
        setEditMode(false)
    }

    const handleChange = (e) => {
        setObituary(e.target.value)
    }
    
    return (
        <section className='obit'>
            <div className='small-square corner1'></div>
            <div className='rectangle'></div>
            <div className='small-square middle1'></div>
            <div className='rectangle'></div>
            <div className='small-square corner2'></div>
            <div className='rectangle'></div>
            <div className='rectangle'></div>
            <div className='small-square middle2'></div>
            <div className='small-square middle3'></div>
            <div className='rectangle'></div>
            <div className='rectangle'></div>
            <div className='small-square corner3'></div>
            <div className='rectangle'></div>
            <div className='small-square middle4'></div>
            {editMode 
                ? <button className='edit-button rectangle' onClick={() => handleSubmit()}>Submit</button>
                : <button className='edit-button rectangle' onClick={() => setEditMode(true)}>Edit</button>
            }
            <div className='rectangle'></div>
            <div className='small-square corner4'></div>
            {editMode 
                ? <textarea 
                    className='obit-text'
                    placeholder='How do you want to be remembered?'
                    value={obituary}
                    onChange={(e) => {handleChange(e)}}
                    maxLength='500'
                  >
                    </textarea>
                : <article className='obit-text'>Obituary: {obituary}</article>
            }
        </section>
    )
}

export default ObitPane
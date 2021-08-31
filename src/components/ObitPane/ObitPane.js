import React, {useState} from 'react';
import './ObitPane.css';

const ObitPane = ({obit}) => {
    const [obituary, setObituary] = useState(obit);
    const [editMode, setEditMode] = useState(false);
    const [usedChars, setUsedChars] = useState(obit.length);
    const [error, setError] = useState("");

    const handleSubmit = () => {
        if (!usedChars) {
            setError("Please type something for your obituary. Click Edit below")
        } else {
            setError("")
        }
        setEditMode(false)
    }

    const handleClickEdit = () => {
        setError("")
        setEditMode(true)
    }

    const handleChange = (e) => {
        setObituary(e.target.value)
        setUsedChars(e.target.value.length)
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
            {editMode 
                ? <button className='edit-button rectangle' onClick={() => handleSubmit()}>Submit</button>
                : <button className='edit-button rectangle' onClick={() => handleClickEdit()}>Edit</button>
            }
            <div className='small-square middle4'></div>
            {editMode
                ? <div className='rectangle'><p className='remaining'>Limit: {usedChars}/500</p></div> 
                : <div className='rectangle'></div>
            }
            <div className='small-square corner4'></div>
            {error && <div className='obit-error'>{error}!</div>}
            {editMode 
                ?   <textarea 
                        className='obit-text'
                        placeholder='How do you want to be remembered?'
                        value={obituary}
                        onChange={(e) => {handleChange(e)}}
                        maxLength='500'
                    >
                    </textarea>   
                    
                : <article className='obit-text'>{obituary}</article>
            }
        </section>
    )
}

export default ObitPane
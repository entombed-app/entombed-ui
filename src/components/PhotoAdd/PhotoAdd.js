import React from 'react';
import './PhotoAdd.css'

const PhotoAdd = () => {
    const handleSubmit = () => {
        console.log('Submitter')
    }

    return (
    <section className='photo-add'>
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
        <button className='edit-button rectangle' onClick={() => handleSubmit()}>Submit</button>
        <div className='small-square middle4'></div>
        <div className='rectangle'></div>
        <div className='small-square corner4'></div>
        {/* {error && <div className='obit-error'>{error}!</div>} */}
        <article className="file-form"><input type='file'></input></article>
    </section>
    )
}

export default PhotoAdd

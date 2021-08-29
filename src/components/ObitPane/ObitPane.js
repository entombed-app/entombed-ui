import React from 'react';
import './ObitPane.css';

const ObitPane = () => {
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
            <div className='rectangle'></div>
            <div className='small-square corner4'></div>
            <article className='obit-text'>I was a good boy, a nice friend, and good at sharing</article>
            <button className='edit-button'>Edit</button>
        </section>
    )
}

export default ObitPane
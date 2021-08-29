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
            {/* <div className='small-square middle4'></div> */}
            <button className='edit-button small-square middle4'>Edit</button>
            <div className='rectangle'></div>
            <div className='small-square corner4'></div>
            <article className='obit-text'>I was a good boy, a nice friend, and good at sharing</article>
        </section>
    )
}

export default ObitPane
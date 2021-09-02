import React from 'react';
import './PhotoAdd.css'

const PhotoAdd = () => {
    const handleSubmit = () => {
        console.log('Submitter')
    }

    return (
    <section className='photo-add'>
        <div className="photo-small-square photo-corner1"></div>
        <div className="photo-title"><h2>Edit Profile Picture</h2></div>
        <div className="photo-small-square photo-corner2"></div>
        <div className="photo-rectangle side1"></div>
        <div className="photo-rectangle side2"></div>
        <div className="photo-rectangle"></div>
        <div className="photo-rectangle"></div>
        <div className="photo-small-square photo-corner3"></div>
        <button className='edit-button photo-rectangle bottom-rectangle1' onClick={() => handleSubmit()}>Submit</button>
        <div className="photo-rectangle bottom-rectangle2"></div>
        <div className="photo-small-square photo-corner4"></div>
        <article className="file-form"><input type='file'></input></article>
    </section>
    )
}

export default PhotoAdd

import React, {useState} from 'react';
import './PhotoAdd.css'

const PhotoAdd = () => {
    const [photoFilePath, setPhotoFilePath] = useState("")

    const handleSubmit = (e) => {
        console.log(photoFilePath)
    }
    const handleInput = (e) => {
        setPhotoFilePath(URL.createObjectURL(e.target.files[0]))
    }

    return (
    <section className='photo-add'>
        <div className="photo-small-square photo-corner1"></div>
        <div className="photo-title"><h2>Edit Profile Picture</h2></div>
        <div className="photo-small-square photo-corner2"></div>
        <div className="photo-rectangle side1"></div>
        <div className="square1"><img className="user-image" src={photoFilePath}/></div>
        <div className="square2"></div>
        <div className="photo-rectangle side2"></div>
        <div className="photo-rectangle"></div>
        <div className="square3"></div>
        <article className="file-form"><input type='file' accept="image/png, image/jpeg" onInput={(e) => {handleInput(e)}}></input></article>
        <div className="photo-rectangle"></div>
        <div className="photo-small-square photo-corner3"></div>
        <div className="photo-rectangle bottom-rectangle1"></div>
        <button className='edit-button photo-rectangle bottom-rectangle2' onClick={(e) => handleSubmit(e)}>Submit</button>
        <div className="photo-small-square photo-corner4"></div>
    </section>
    )
}

export default PhotoAdd

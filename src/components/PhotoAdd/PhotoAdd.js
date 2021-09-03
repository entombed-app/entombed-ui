import React, {useState} from 'react';
import './PhotoAdd.css'
import userPicture from '../../assets/user.png';

const PhotoAdd = ({updateProfilePicture, currentProfilePic}) => {
    const [photoFilePath, setPhotoFilePath] = useState(currentProfilePic)
    const [previewHeader, setPreviewHeader] = useState("Current Profile Picture")

    const handleSubmit = (e) => {
        setPreviewHeader("Current Profile Picture")
        updateProfilePicture(photoFilePath)
        console.log(photoFilePath)
    }
    const handleInput = (e) => {
        setPreviewHeader("Picture to Upload")
        setPhotoFilePath(URL.createObjectURL(e.target.files[0]))
    }

    return (
    <section className='photo-add'>
        <div className="photo-small-square photo-corner1"></div>
        <div className="photo-title"><h2>Edit Profile Picture</h2></div>
        <div className="photo-small-square photo-corner2"></div>
        <div className="photo-rectangle side1"></div>
        <div className="square1">
            <p>{previewHeader}</p>
            <img className="user-image" src={photoFilePath} alt="User Profile Picture"/></div>
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

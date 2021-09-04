import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './PhotoAdd.css'

const PhotoAdd = ({updateProfilePicture, addGalleryPhoto, currentProfilePic, type}) => {
    const [photoFilePath, setPhotoFilePath] = useState(currentProfilePic)
    const [previewHeader, setPreviewHeader] = useState("Current Profile Picture")
    const [photoFile, setPhotoFile] = useState("")

    const handleSubmit = (e) => {
        type === "profile" ? updateProfilePicture({photoFilePath, photoFile}) && setPreviewHeader("Current Profile Picture") : addGalleryPhoto(photoFilePath)
    }

    const handleChange = (e) => {
        setPreviewHeader("Picture to Upload")
        setPhotoFilePath(URL.createObjectURL(e.target.files[0]))
        setPhotoFile(e.target.files[0])
    }

    return (
    <section className='photo-add'>
        <div className="photo-small-square photo-corner1"></div>
        {type=== "profile" && <div className="photo-title"><h2>Edit Profile Picture</h2></div>}
        {type=== "gallery" && <div className="photo-title"><h2>Add a Photo to Gallery</h2></div>}
        <div className="photo-small-square photo-corner2"></div>
        <div className="photo-rectangle side1"></div>
        <div className="square1">
            {type==="profile" &&
            <>
                <p>{previewHeader}</p>
                <img className="user-image" src={photoFilePath} alt="User Profile Picture"/>
            </>
            }
        </div>
        <div className="square2"></div>
        <div className="photo-rectangle side2"></div>
        <div className="photo-rectangle"></div>
        <div className="square3"></div>
        <article className="photo-form">
            <p>Upload Your Photo Here</p>
            <input className="photo-upload" type='file' accept="image/png, image/jpeg" onChange={(e) => {handleChange(e)}}></input>
            <Link to={`/${type==="gallery" ? "gallery" : ""}`}><button className="photo-edit-button" onClick={(e) => handleSubmit(e)}>Submit</button></Link>
        </article>
        <div className="photo-rectangle"></div>
        <div className="photo-small-square photo-corner3"></div>
        <div className="photo-rectangle bottom-rectangle1"></div>
        <div className="photo-rectangle bottom-rectangle2"></div>
        <div className="photo-small-square photo-corner4"></div>
    </section>
    )
}

export default PhotoAdd

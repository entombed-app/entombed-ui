import React from "react"
import Header from "../Header/Header";

const Message = ({error, profilePic}) => {
    let message;
    !error ? message = "Loading..." : message = error 
    return (
        <>
            {error !== "404 page not found. Click title above." && <Header profilePic={profilePic}/>} 
            <p className='loading-message'>{message}</p>
        </>
    )
}

export default Message
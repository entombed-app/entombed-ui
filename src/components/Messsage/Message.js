import React from "react"
import Header from "../Header/Header";

const Message = ({error, profilePic}) => {
    let message;
    !error ? message = "Loading..." : message = error 
    return (
        <>
            <Header profilePic={profilePic}/> 
            <p className='loading-message'>{message}</p>
        </>
    )
}

export default Message
import React from "react"

const Message = ({error}) => {
    let message;
    !error ? message = "Loading..." : message = error 
    return (
        <p className='loading-message'>{message}</p>
    )
}

export default Message
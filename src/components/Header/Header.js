import React from 'react';
import './Header.css';
import userPicture from '../../assets/user.png';

const Header = () => {
    return (
        <header className='header'>
            <div className='sun'><img src={userPicture}/></div>
            <h1 className='title'>Elegy</h1>
        </header>
    )
}

export default Header
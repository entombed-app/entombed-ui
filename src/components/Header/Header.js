import React from 'react';
import { Link } from "react-router-dom"
import './Header.css';
import userPicture from '../../assets/user.png';

const Header = ({profilePic, logOut}) => {
    let pic;
    profilePic ? pic = profilePic : pic = userPicture;
    return (
        <header className='header'>
            <Link to="/" style={{textDecoration: 'none'}}>
                <section className="title-graphic">
                    <section className="title-diamond">
                        <div className="header-diamond left"></div>
                        <div className="header-diamond center"></div>
                        <div className="header-diamond right"></div>
                        <h1 className="title">Elegy</h1>
                    </section>
                    <div className="stripes">
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                        <div className="stripe"></div>
                    </div>
                </section>
            </Link>
            <Link to ="/add-photo/profile"className="sun"><img src={pic}/></Link>
            <button className="logout" onClick={() => logOut()}>Log Out</button>
        </header>
    )
}

export default Header
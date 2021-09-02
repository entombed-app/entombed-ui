import React from 'react';
import { Link } from "react-router-dom"
import './Header.css';
import userPicture from '../../assets/user.png';

const Header = ({profilePic}) => {
    return (
        <header className='header'>
            <div className='sun'><img src={userPicture}/></div>
            <Link to="/" style={{textDecoration: 'none'}}>
                <section className="title-graphic">
                    <section className="title-diamond">
                        <div className="header-diamond left"></div>
                        <div className="header-diamond center"></div>
                    {/* <div class="header-stone center"></div> */}
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

            <div className='sun'><img src={profilePic}/></div>
            {profilePic.length 
            ? <div className='sun'><img src={profilePic}/></div>
            : <div className='sun'><img src={userPicture}/></div>
            }
            <h1 className='title'>Elegy</h1>
        </header>
    )
}

export default Header
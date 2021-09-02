import React from 'react';
import { Link } from "react-router-dom"
import './Header.css';
import userPicture from '../../assets/user.png';

const Header = ({profilePic}) => {
    return (
        <header className='header'>
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
            {profilePic.length 
            ? <div className='sun'><img src={profilePic}/></div>
            : <div className='sun'><img src={userPicture}/></div>
            }
        </header>
    )
}

export default Header
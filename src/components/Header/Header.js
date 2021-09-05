import React from 'react';
import { Link } from "react-router-dom"
import './Header.css';
import userPicture from '../../assets/user.png';

const Header = ({profilePic}) => {
    let pic;
    profilePic ? pic = profilePic : pic = userPicture;
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
            <Link to ="/add-photo/profile"className="sun"><img src={pic}/></Link>
        </header>
    )
}

export default Header
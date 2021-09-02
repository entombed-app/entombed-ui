import React from 'react';
import './Header.css';
import userPicture from '../../assets/user.png';

const Header = () => {
    return (
        <header className='header'>
            <div className='sun'><img src={userPicture}/></div>
            <section className="title-diamond">
                <div className="header-diamond left"></div>
                <div className="header-diamond center"></div>
            {/* <div class="header-stone center"></div> */}
                <div className="header-diamond right"></div>
                <h1>Elegy</h1>
            </section>
            <div className="stripes">
            <div className="stripe"></div>
            <div className="stripe"></div>
            <div className="stripe"></div>
            </div>
        </header>
    )
}

export default Header
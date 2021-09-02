import React from 'react';
import './Header.css';
import userPicture from '../../assets/user.png';

const Header = () => {
    return (
        <header className='header'>
            <div className='sun'><img src={userPicture}/></div>
            <section class="title-diamond">
                <div class="header-diamond left"></div>
                <div class="header-diamond center"></div>
            {/* <div class="header-stone center"></div> */}
                <div class="header-diamond right"></div>
                <h1>Elegy</h1>
            </section>
            <div class="stripes">
            <div class="stripe"></div>
            <div class="stripe"></div>
            <div class="stripe"></div>
            </div>
        </header>
    )
}

export default Header
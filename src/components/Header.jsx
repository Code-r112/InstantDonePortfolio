import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__logo">
                    <span className="logo-text">
                        <span>Instant<strong>Done</strong></span>
                    </span>
                </div>

                <nav className="header__nav">
                    <ul className="header__menu">
                        <li><a href="#about">About</a></li>
                        <li><a href="#service">Services</a></li>
                        <li><a href="#projects">Projects</a></li>
                    </ul>
                </nav>

                <div className="header__actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <button className="btn-contact">Contacts</button>
                </div>
            </div>
        </header>
    );
};

export default Header;

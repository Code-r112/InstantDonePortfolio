import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
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
                    <button
                        className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                    <nav className="mobile-nav">
                        <ul>
                            <li><a href="#about" onClick={toggleMenu}>About</a></li>
                            <li><a href="#service" onClick={toggleMenu}>Services</a></li>
                            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                        </ul>
                        <button className="btn-contact mobile-btn" onClick={toggleMenu}>Contacts</button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;

import React, { useState } from 'react';
import './ComingSoon.css';

const ComingSoon = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`coming-soon-wrapper ${isDarkMode ? 'dark-mode' : ''}`}>
            <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
            >
                {isDarkMode ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                )}
            </button>

            <div className="coming-soon-content">
                <h1 className="text-serif italic-label">Instant Done</h1>
                <h2 className="coming-soon-title">We are crafting something unique.</h2>
                <p className="coming-soon-subtitle">
                    Our new portfolio is currently under construction. Stay tuned for the launch.
                </p>

                <div className="coming-soon-contact">
                    <a href="mailto:hello@instantdone.com" className="contact-link">
                        Get in touch
                        <span className="arrow-icon">↗</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;

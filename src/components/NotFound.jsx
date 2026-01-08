import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found__content">
                <h1 className="not-found__code">404</h1>
                <p className="not-found__text">Page not found</p>
                <p className="not-found__subtext">The page you are looking for doesn't exist or has been moved.</p>
                <a href="/" className="btn-home">Go Back Home</a>
            </div>
        </div>
    );
};

export default NotFound;

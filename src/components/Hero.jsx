import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">

                {/* Top Tag */}
                <div className="hero__top">
                    <div className="pill-tag">
                        <span>★ Bavdhan, Pune</span>
                    </div>
                </div>

                {/* Main Headline */}
                <div className="hero__headline">
                    <h1 className="display-text">
                        We <span className="text-serif">are a</span> Strategy <br />
                        <span className="text-serif">&</span> Design Studio
                    </h1>
                </div>

                {/* Subtext and Actions */}
                <div className="hero__sub">
                    <div className="hero__description">
                        <p>We are helping companies bring new products and services to market.<br />Smart, collaborative, and fun.</p>

                        <div className="hero__socials">
                            <a href="#" className="social-circle" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" fill="none"></rect>
                                </svg>
                            </a>
                            <a href="#" className="social-circle" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="mailto:instantdone@gmail.com" className="social-circle" aria-label="Email">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="hero__cta">
                        <button className="btn-contact">About us</button>
                    </div>
                </div>

                {/* Infinite Image Carousel */}
                <div className="hero__carousel">
                    <div className="hero__carousel-track">
                        {/* Set 1 */}
                        <div className="carousel-item"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Office" /></div>
                        <div className="carousel-item"><img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Meeting" /></div>
                        <div className="carousel-item"><img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Creative" /></div>
                        <div className="carousel-item"><img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Workspace" /></div>

                        {/* Set 2 (Duplicate for Loop) */}
                        <div className="carousel-item"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Office" /></div>
                        <div className="carousel-item"><img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Meeting" /></div>
                        <div className="carousel-item"><img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Creative" /></div>
                        <div className="carousel-item"><img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Workspace" /></div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Hero;

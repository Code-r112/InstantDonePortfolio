import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contacts">
            <div className="container">
                <div className="footer__header">
                    <span className="text-serif italic-label">Contacts</span>
                    <h2 className="footer__title">Work with us</h2>
                    <p className="footer__desc">We are eager to learn about your organization and to help you achieve a well-defined out-of-the-box visual strategy.</p>
                </div>

                <div className="footer__contact-main">
                    <p>You can contact us at:</p>
                    <a href="mailto:instantdone@gmail.com" className="footer__email">instantdone@gmail.com</a>
                    <button className="btn-get-in-touch">Get in touch</button>
                </div>

                <div className="footer__bottom">
                    <div className="footer__col">
                        <h4>Based in</h4>
                        <div className="footer__address">
                            <p><strong>★ Bavdhan, Pune</strong></p>
                            <p>Near Crystal Honda<br />Showroom, Bavdhan, Pune,<br />411021</p>
                            <p>+91 9309569006</p>
                        </div>
                    </div>

                    <div className="footer__col">
                        <h4>Our socials</h4>
                        <div className="footer__socials">
                            <a href="#">Instagram</a>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>

                    <div className="footer__col brand-col">
                        <span className="brand-text">Instant <strong>Done</strong> <div className="brand-icon-small"></div></span>
                    </div>
                </div>

                <div className="footer__copyright">
                    <p>© 2025 InstantDone</p>
                    <div className="footer__policies">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

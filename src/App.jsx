import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';

// TOGGLE THIS TO TRUE TO SHOW COMING SOON PAGE
const SHOW_COMING_SOON = false;

const RevealSection = ({ children }) => {
  const domRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% visible

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      className={`reveal-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

function App() {
  if (SHOW_COMING_SOON) {
    return <ComingSoon />;
  }

  // Scroll Progress & Go Top Logic
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScrollProgress(Number(scroll));
      setShowScrollTop(totalScroll > 400);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="page-wrapper">
      {/* Scroll Progress Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '4px',
        backgroundColor: 'transparent',
        zIndex: 9999
      }}>
        <div style={{
          height: '100%',
          backgroundColor: 'var(--color-black)',
          width: `${scrollProgress * 100}%`,
          transition: 'width 0.1s ease-out'
        }} />
      </div>

      <Header />
      <main>
        <RevealSection><Hero /></RevealSection>
        <RevealSection><Brands /></RevealSection>
        <RevealSection><Services /></RevealSection>
        <RevealSection><Projects /></RevealSection>
        <RevealSection><Testimonials /></RevealSection>
        <RevealSection><Footer /></RevealSection>
      </main>

      {/* Go To Top Button */}
      <button
        className={`scroll-to-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </div>
  );
}

export default App;

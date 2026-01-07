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
const SHOW_COMING_SOON = true;

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

  return (
    <div className="page-wrapper">
      <Header />
      <main>
        <RevealSection><Hero /></RevealSection>
        <RevealSection><Brands /></RevealSection>
        <RevealSection><Services /></RevealSection>
        <RevealSection><Projects /></RevealSection>
        <RevealSection><Testimonials /></RevealSection>
        <RevealSection><Footer /></RevealSection>
      </main>
    </div>
  );
}

export default App;

import './App.css'
import "./index.css"

// Page section
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer'
import { useEffect, useState} from "react";
import StatsStrip from './Components/StatsStrip/StatsStrip'

function App() {

    // Tracks scroll progress (used for progress bar UI)
    const [scroll, setScroll] = useState(0);


    /*
        Intersection Observer:
        - Adds "active" class when elements enter viewport
        - Used for reveal animations on scroll
    */
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("active");
              }
          });
      });

      const elements = document.querySelectorAll(".reveal");

      elements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }, []);


    /*
        Scroll progress tracker:
        - Calculates how far user has scrolled through page
        - Used for top progress bar animation
    */
    useEffect(() => {
        const handleScroll = () => {
            const totalHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const scrollPosition = window.scrollY;

            const progress = (scrollPosition / totalHeight) * 100;

            setScroll(progress);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    
     /*
        Custom cursor system:
        - Smoothly follows mouse movement using interpolation
        - Adds rotation + stretch based on movement speed
    */
    useEffect(() => {

        const cursor = document.querySelector(".custom-cursor");
        if (!cursor) return;

        let mouseX = 0;
        let mouseY = 0;

        let currentX = 0;
        let currentY = 0;

        const speed = 0.12;

        // Track real mouse position
        const moveCursor = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener("mousemove", moveCursor);

        const animate = () => {

            // Smooth interpolation toward mouse position
            currentX += (mouseX - currentX) * speed;
            currentY += (mouseY - currentY) * speed;

            const deltaX = mouseX - currentX;
            const deltaY = mouseY - currentY;

            // Rotation based on direction of movement
            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

             // Stretch effect based on speed of movement
            const stretch = Math.min(
                Math.sqrt(deltaX * deltaX + deltaY * deltaY) * 0.08, 35);

            cursor.style.transform = `
                translate(${currentX}px, ${currentY}px)
                rotate(${angle}deg)
                scale(${1 + stretch / 100}, ${1 - stretch / 300})
            `;

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };

    }, []);


    /*
        Cursor hover detection:
        - Adds visual effect when hovering interactive elements
    */
    useEffect(() => {

        const cursor = document.querySelector(".custom-cursor");

        const hoverElements = document.querySelectorAll(
            "a, button, .skill, .area-card"
        );

        hoverElements.forEach(el => {

            el.addEventListener("mouseenter", () => {
                cursor.classList.add("cursor-hover");
            });

            el.addEventListener("mouseleave", () => {
                cursor.classList.remove("cursor-hover");
            });

        });

    }, []);

    return (
      <>
        {/* Scroll progress bar */}
        <div className="scroll-progress" style={{ width: scroll + "%" }} />
        
        {/* Floating quick contact shortcuts */}
        <div className="floating-contact">
          <a href="https://wa.me/27794372076" target="_blank" rel="noreferrer">
            WhatsApp
          </a>

          <a href="mailto:annetamakhubela@gmail.com">
            Email
          </a>

          <a href="https://github.com/AnneKay17" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://linkedin.com/in/karabo-makhubela-0bbb5b387" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

        </div>

        {/* Main page layout (single page structure) */}
        <div>
          <Navbar/>
          <Home/>
          <About/>
          <StatsStrip/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>

        {/* Custom animated cursor element */}
        <div className="custom-cursor"></div>
    </>
  )
}

export default App

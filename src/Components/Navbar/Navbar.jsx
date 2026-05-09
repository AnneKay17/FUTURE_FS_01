import './Navbar.css'
import { useState, useEffect } from "react";
const Navbar = () => {

    // Controls dark/light mode toggle
    const [darkMode, setDarkMode] = useState(true);

    // Controls navbar visibility on scroll (hide on scroll down, show on scroll up)
    const [showNavbar, setShowNavbar] = useState(true);

    // Stores last scroll position for scroll direction detection
    const [lastScrollY, setLastScrollY] = useState(0);

     // Tracks currently active section for navbar highlight
    const [activeSection, setActiveSection] = useState("home");

    // Apply or remove dark mode class on body
    useEffect(() => {

        if(darkMode){
            document.body.classList.add("dark-mode");
        }
        else{
            document.body.classList.remove("dark-mode");
        }

    }, [darkMode]);

    
    // Handles navbar hide/show based on scroll direction
    useEffect(() => {

        const handleScroll = () => {

            // Hide navbar when scrolling down past 80px
            if (window.scrollY > lastScrollY && window.scrollY > 80) {
                setShowNavbar(false);
            }
            else {
                setShowNavbar(true);
            }

            // Update last scroll position
            setLastScrollY(window.scrollY);

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, [lastScrollY]);


    // Detects which section is currently in viewport
    useEffect(() => {

        const sections = document.querySelectorAll("section");

        const handleScroll = () => {

            sections.forEach(section => {

                const top = window.scrollY;
                const offset = section.offsetTop - 150;
                const height = section.offsetHeight;
                const id = section.getAttribute("id");

                // Set active section based on scroll position
                if (top >= offset && top < offset + height) {
                    setActiveSection(id);
                }
            });

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    // Smooth scroll to section when navbar link is clicked
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    };

    return ( 
      <header className={`header ${showNavbar ? "show" : "hide"}`}>

         {/* Logo */}
        <a href="/" className="logo">AnneKay</a>

        {/* Navigation Links */}
        <nav className="navbar">

            <a onClick={() => scrollToSection("home")} href="#home" className={activeSection === "home" ? "active" : ""}>Home</a>
            <a onClick={() => scrollToSection("about")} href="#about" className={activeSection === "about" ? "active" : ""}>About</a>
            <a onClick={() => scrollToSection("skills")} href="#skills" className={activeSection === "skills" ? "active" : ""}>Skills</a>
            <a onClick={() => scrollToSection("projects")} href="#projects" className={activeSection === "projects" ? "active" : ""}>Projects</a>
            <a onClick={() => scrollToSection("contact")} href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a>
            
            {/* Theme Toggle Switch */}
            <label className="theme-switch">
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />
                <span className="slider"></span>
            </label>

        </nav>

    </header> 
    );
}
 
export default Navbar;
import Page from "./Page";
import "./Projects.css"
import { useState } from "react";
import { motion } from "framer-motion";
import { scaleFade } from "../../animations/motion";

// project images
import img1 from "../../assets/portfolio.png"
import img2 from "../../assets/mobile.png"
import img3 from "../../assets/blog.png"
import img4 from "../../assets/weather.png"
import img5 from "../../assets/student.png"
import img6 from "../../assets/contact.png"
import img7 from "../../assets/calculator.png"


const Projects = () => {

    // Index of currently displayed project (book page system)
    const [currIdx, setCurrIdx] = useState(0);

    // Controls flip animation state
    const [isAnimating, setIsAnimating] = useState(false);

    // Controls animation direction (next / previous)
    const [direction, setDirection] = useState("next");
    
    // All projects displayed in book format
    const projects = [
        {
            image: img1,
            title: "Portfolio Website",
            description: "An interactive developer portfolio focused on responsive design, smooth animations, and immersive frontend experiences using React.",
            tech: ["React", "CSS", "JavaScript"],
            github: "https://github.com/AnneKay17/FUTURE_FS_01.git",
            live: "future-fs-01-xi-ecru.vercel.app"
        },
        {
            image: img2,
            title: "Mobile Market (ANDROID PROJECT)",
            description: "Currently developing an Android marketplace application as part of a software engineering and mobile development project.",
            tech: ["Java","PHP","SQL"],
            github: "https://github.com/yourname/portfolio",
            live: "https://your-portfolio.com"
        },
        {
            image: img3,
            title: "Blog Website",
            description: "A responsive blog platform built to practice component architecture, layout structuring, and modern frontend UI development.",
            tech: ["JavaScript","CSS","React"],
            github: "https://github.com/yourname/portfolio",
            live: "https://your-portfolio.com"
        },
        {
            image: img4,
            title: "Weather App",
            description: "Built to strengthen API integration, asynchronous data handling, and dynamic UI rendering in React.",
            tech: ["JavaScript", "API", "CSS","HTML"],
            github: "https://github.com/yourname/portfolio",
            live: "https://your-portfolio.com"

        },
        {
            image: img5,
            title: "Student Grade Filter",
            description: "A dynamic filtering application designed to practice data manipulation, conditional rendering, and interactive search functionality.",
            tech: ["JavaScript","CSS","HTML"],
            github: "https://github.com/yourname/portfolio",
            live: "https://your-portfolio.com"
        },
        {
            image: img6,
            title: "Contact List",
            description: "Built to strengthen CRUD operations, component structuring, and dynamic state management in React.",
            tech: ["JavaScript","CSS","HTML"],
            github: "https://github.com/yourname/portfolio",
            live: "https://your-portfolio.com"
        },
        {
            image: img7,
            title: "Calculator",
            description: "A calculator application focused on event-driven logic, state updates, and interactive frontend behavior.",
            tech: ["JavaScript","CSS","HTML"],
            github: "https://github.com/yourname/portfolio",
            live: "https://your-portfolio.com"
        }

   ];

    // Move to next project (page flip forward)
    const nextPage = () => {
        if(currIdx < projects.length - 1){

            setDirection("next")
            setIsAnimating(true);

            // delay allows flip animation to play before switching content
            setTimeout(() => {
                setCurrIdx(currIdx + 1);
                setIsAnimating(false);
            }, 350); 
        }
    };

    // Move to previous project (page flip backward)
    const prevPage = () => {
        if(currIdx > 0){

            setDirection("prev")
            setIsAnimating(true);

            setTimeout(() => {
                setCurrIdx(currIdx - 1);
                setIsAnimating(false);
            }, 350); 
        }
    }

    // Jump directly to a selected project from index menu
    const goToPage = (index) => {

        if (index === currIdx) return;

        setDirection(index > currIdx ? "next" : "prev");
        setIsAnimating(true);

        setTimeout(() => {
            setCurrIdx(index);
            setIsAnimating(false);
        }, 350);
    };

    return (  
        <section className="projects-section reveal" id="projects">
           {/* Section title */}
            <h2 className="projects-title">My Projects</h2>
            
            {/* Quick navigation menu for direct access to projects */}
            <div className="project-index-card">
                <p>Quick Jump</p>

                <div className="index-list">

                    {/* Each button jumps directly to a project page */}
                    <button className={currIdx === 0 ? "active" : ""} onClick={() => goToPage(0)}>Portfolio</button>
                    <button className={currIdx === 1 ? "active" : ""} onClick={() => goToPage(1)}>Mobile Market</button>
                    <button className={currIdx === 2 ? "active" : ""} onClick={() => goToPage(2)}>Blog</button>
                    <button className={currIdx === 3 ? "active" : ""} onClick={() => goToPage(3)}>Weather App</button>
                    <button className={currIdx === 4 ? "active" : ""} onClick={() => goToPage(4)}>Grade Filter</button>
                    <button className={currIdx === 5 ? "active" : ""} onClick={() => goToPage(5)}>Contact List</button>
                    <button className={currIdx === 6 ? "active" : ""} onClick={() => goToPage(6)}>Calculator</button>

                </div>
            </div>
            
            {/* Book-style animated project display */}
            <motion.div 
                className="book-container"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={scaleFade}
            >
                <Page 
                    className={`page ${isAnimating ? "flip" : ""} ${direction}`}
                    project = {projects[currIdx]}
                /> 
            </motion.div>
            
            {/* Navigation buttons for sequential browsing */}
            <div className="nav-buttons">
                <button onClick={prevPage}>Previous</button>
                <button onClick={nextPage}>Next</button>
                </div>

        </section>
    );
}
 
export default Projects;

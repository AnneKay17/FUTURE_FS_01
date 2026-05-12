import "./Home.css"
import Typed from "typed.js"; // For animated text effects
import { motion } from "framer-motion"; // For page entrance animation
import { useEffect, useRef } from "react";
import { scaleFade} from "../../animations/motion";
import CV from "../../../public/Karabo Anneta Makhubela CV.pdf";

// Assets for orbiting tech icons
import reactIcon from "../../assets/atom.png";
import jsIcon from "../../assets/java-script.png";
import pythonIcon from "../../assets/python.png";
import cssIcon from "../../assets/css.png";
import javaIcon from '../../assets/java.png'

const Home = () => {

    const typedName = useRef(null)
    const typedTitle = useRef(null)
    const typedGreeting = useRef(null)


    // Handles animated typing effects for name, title, greeting
    useEffect(() => {
        const typed = new Typed(typedName.current, {
            strings : ["I'm Karabo Makhubela"],
            typeSpeed: 100,
            backSpeed: 60,
            loop : false,
            startDelay: 2000,
            showCursor : false
        });
        const typedT=  new Typed(typedTitle.current, {
            strings : ["Full Stack Web Developer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop : false,
            startDelay:5000,
            showCursor : false
        });
        const typedGreet=  new Typed(typedGreeting.current, {
            strings : ["Hi there"],
            typeSpeed: 100,
            backSpeed: 60,
            loop : false,
            showCursor:false,
            startDelay:800
        });
        return () => {
            // Cleanup
            typed.destroy(); 
            typedT.destroy();
            typedGreet.destroy();
        };
    }, []);

    // Select all floating tech icons
    useEffect(() => {

        const orbs = document.querySelectorAll(".interactive-orb");

        const handleMouseMove = (e) => {

            // Make each orb react to cursor proximity
            orbs.forEach((orb) => {

                const rect = orb.getBoundingClientRect();

                const orbX = rect.left + rect.width / 2;
                const orbY = rect.top + rect.height / 2;

                const deltaX = e.clientX - orbX;
                const deltaY = e.clientY - orbY;

                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                // Only react when cursor is close enough
                if(distance < 120){

                    const force = (120 - distance) / 120;

                    const moveX = -deltaX * force * 0.25;
                    const moveY = -deltaY * force * 0.25;

                    orb.style.transform = `
                        translate(${moveX}px, ${moveY}px)
                        scale(${1 + force * 0.35})
                    `;

                    orb.style.boxShadow = `
                        0 0 25px rgba(255,78,205,0.5),
                        0 0 50px rgba(147,51,234,0.4)
                    `;
                }

                // Reset when cursor moves away
                else{
                    orb.style.transform = `translate(0px,0px) scale(1)`;

                    orb.style.boxShadow = "0 0 20px rgba(255,78,205,0.2)";
                }

            });

        };

        window.addEventListener("mousemove", handleMouseMove);

        return () =>
            window.removeEventListener("mousemove", handleMouseMove);

    }, []);

    return ( 
    <motion.section 
        className="home" 
        id="home"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={scaleFade}
        >
    
        {/**LEFT SIDE*/}
        <div className="home-info fade-right">

            <p className="greeting">
                <span ref={typedGreeting}></span>
            </p>

            <h1 className="name">
               <span ref={typedName}></span> 
            </h1>
            
            <h3 className="title"> 
                <span ref={typedTitle}></span> 
            </h3>

            <p className="home-description">
                I build immersive and responsive web experiences
                with modern technologies and creative UI design.
            </p>

            <div className="home-buttons">
                <a href="#projects" target="_blank" rel="noreferrer">View Projects</a>
                <a href={CV}>View CV</a>
            </div>

        </div>

         {/**RIGHT SIDE*/}
        <div className="home-visual fade-left">
            <div className="orbit-wrapper">
                <div className="glow-orb"></div>

                <div className="orbit-ring ring-1">
                    <div className="orbit-icon interactive-orb">
                        <img src={reactIcon} alt="React" />
                    </div>
                </div>

                <div className="orbit-ring ring-2">
                    <div className="orbit-icon interactive-orb">
                        <img src={jsIcon} alt="JS" />
                    </div>
                </div>

                <div className="orbit-ring ring-3">
                    <div className="orbit-icon interactive-orb">
                        <img src={pythonIcon} alt="Python" />
                    </div>
                </div>

                <div className="orbit-ring ring-4">
                    <div className="orbit-icon interactive-orb">
                        <img src={cssIcon} alt="CSS" />
                    </div>
                </div>

                 <div className="orbit-ring ring-5">
                    <div className="orbit-icon interactive-orb">
                        <img src={javaIcon} alt="JAVA" />
                    </div>
                </div>

            </div>
            
        </div>
    </motion.section>
    );
}
 
export default Home;
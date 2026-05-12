import { motion } from "framer-motion";
import { fadeUp, scaleFade } from "../../animations/motion";

import js from "../../assets/java-script.png"
import html from "../../assets/html.png"
import reactt from "../../assets/atom.png"
import python from "../../assets/python.png"
import java from "../../assets/java.png"
import css from "../../assets/css.png"
import github from "../../assets/github.png"
import "./Skills.css"
const Skills = () => {

    // Tech stack icons
    const skills = [
        {   
            img: js, 
            name: "JavaScript" 
        },
        { 
            img: html, 
            name: "HTML" 
        },
        { 
            img: reactt, 
            name: "React" 
        },
        { 
            img: python, 
            name: "Python" 
        },
        { 
            img: java, 
            name: "Java" 
        },
        { 
            img: css, 
            name: "CSS" 
        },
        { 
            img: github, 
            name: "GitHub" 
        }
    ];

    // Core strengths
    const areas = [
        {
        title: "Responsive Design",
        description: "Creating layouts that adapt across devices."
        },
        {
            title: "Problem Solving",
            description: "Strengthening algorithmic thinking through coding challenges and UI implementation."
        },
        {
            title: "Android App Dev",
            description: "Building practice mobile applications and exploring Android development concepts."
        },
        {
            title: "Frontend Interaction Logic",
            description: "Managing UI behavior using React state, hooks, and event-driven logic."
        },
        {
            title: "React Component Development",
            description: "Building reusable and structured UI components using React."
        },
        {
            title: "API Integration",
            description: "Fetching and displaying dynamic data from external APIs in frontend applications."
        }
    ];

    // Currently learning focus
    const currentlyLearning = [
        {
            title: "UI/UX Design"
        },
        {
            title: "Software Engineering"
        },
        {
            title: "Advanced React"
        }
    ];

    return ( 
        <motion.section 
            className="skills-section reveal" 
            id="skills"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >

            {/* title */}
            <h2 className="skills-title">Skills Dashboard</h2>
            

            <div className="skills-container">

                {/**TECH STACK */}
                <div className="skills-block">

                    <h3>Technologies</h3>

                    <div className="tech-skills-slider">

                        {/* Infinite scroll effect duplicate */}
                        <div className="skills-track">

                            {[...skills, ...skills].map((skill, index) => (
                                <motion.div className="skill" key={index}>
                                    <img src={skill.img} alt={skill.name} />
                                </motion.div>
                            ))}

                        </div>

                    </div>

                </div>

                {/* STRENGTHS */}
                <div className="skills-block">

                    <h3>Focus Areas</h3>

                    <div className="learning-areas">

                        {areas.map((item, index) => (
                            <motion.div 
                                className="area-card" 
                                key={index}
                                variants={scaleFade}
                                initial="hidden"
                                whileInView="show"
                                transition={{ delay: index * 0.9 }}
                            >
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </motion.div>
                        ))}

                    </div>

                </div>

                {/* CURRENTLY LEARNING */}
                <div className="skills-block">

                    <h3>Interests</h3>

                    <div className="learning-tags" variants={fadeUp}>
                        {currentlyLearning.map((item, index) => (
                            <motion.div 
                                className="learning-tags"
                                key={index}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                transition={{ delay: index * 0.1 }}
                            >
                                <span>{item.title}</span>
                            </motion.div>

                        ))}
                    </div>

                </div>

            </div>

        </motion.section>

    );
}
 
export default Skills;
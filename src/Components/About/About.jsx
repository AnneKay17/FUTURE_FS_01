import "./About.css"
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, fadeUp } from "../../animations/motion";

const About = () => {
    
    return (  
        <motion.section 
        className="about-me"
        id="about"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        >

            {/* Section title */}
            <motion.h2 className="about-title" variants={fadeUp}>About Me</motion.h2>

            <div className="about-container">

                 {/* LEFT SIDE: bio */}
                <motion.div className="about-text" variants={fadeLeft} viewport={{ once: true }}>
                    <p className="description">
                        Aspiring software engineer and Computer Science student.
                        <br/><br/> 
                        I am focused on growth,consistency, and building impactful technology.
                        <br/><br/>
                        Currently developing Android projects, strengthening algorithmic thinking,
                        and expanding technical skills one project at a time.
                    </p>
                </motion.div>

                {/* CENTER: identity visual */}
                <motion.div className="about-visual" variants={fadeUp} viewport={{ once: true }}>

                    <div className="glow-avatar">
                        KM
                    </div>

                    <p className="role-highlight">
                        Full Stack Developer
                    </p>

                </motion.div>

                {/* RIGHT SIDE: quick info */}
                <motion.div className="about-card" variants={fadeRight} viewport={{ once: true }}>
                    <h3>Quick Info</h3>

                    <ul>
                        <li>📍 South Africa</li>
                        <li>🎓 Computer Science Student</li>
                        <li>💻 Full Stack Developer</li>
                        <li>🚀 Passion: UI & Systems</li>
                    </ul>
                </motion.div>

            </div>
    
        </motion.section>
    
    );
}
 
export default About;
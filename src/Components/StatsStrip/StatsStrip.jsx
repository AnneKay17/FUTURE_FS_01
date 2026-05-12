import './StatsStrip.css'
import { motion } from 'framer-motion';
import { fadeUp } from '../../animations/motion';
const StatsStrip = () => {
    return (  
        <motion.section 
            className="stats-strip"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
        >

            <span>Wits University</span>

            <div className="dot"></div>

            <span>5+ Projects Built</span>

            <div className="dot"></div>

            <span>React Developer</span>

        </motion.section>
    );
}
 
export default StatsStrip;
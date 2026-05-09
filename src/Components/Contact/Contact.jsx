import './Contact.css'
import emailjs from "@emailjs/browser";
import { useRef, useState} from "react";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight} from "../../animations/motion";

//icons used in contact details
import link from '../../assets/link.png'
import call from '../../assets/phone.png'
import pin from '../../assets/pin.png'
import github from '../../assets/github.png'
import email from '../../assets/mail.png'
const Contact = () => {

    // Reference to form DOM element (used by EmailJS)
    const form = useRef();

    // Loading state for send button
    const [isSending, setIsSending] = useState(false);

    // Success popup state
    const [isSuccess, setIsSuccess] = useState(false);

    // handles email submission via EmailJS
    const sendEmail = (e) => {
        e.preventDefault();

        setIsSending(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        // Success case
        .then(() => {
            setIsSending(false);
            setIsSuccess(true);

            // Reset form fields after successful send
            form.current.reset();

            // Hide success message after 3 seconds
            setTimeout(() => {
                setIsSuccess(false);
            }, 3000);
        })

        // error handling
        .catch((error) => {
            setIsSending(false);
            console.log(error.text);
            alert("Failed to send message");
        });
    };

    return (  
        <motion.section 
            className="contact-section reveal" 
            id="contact"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            {/* Section title */}
            <h2 className="contact-title">Contact Me</h2>

            <div className="contact-block">

                {/* LEFT: contact details */}
                <motion.div className="contact-details" variants={fadeLeft}>

                    {/* location */}
                    <div className="details">
                        <img src={pin} alt='address'/>
                        <a 
                            className="address" 
                            href='https://www.google.com/maps/place/551+Mosisi,+Soshanguve+-+WW,+Soshanguve,+0164/@-25.5580215,28.0765639,1362m/data=!3m1!1e3!4m15!1m8!3m7!1s0x1ebfcfb9a17d8e6b:0xdcef78c38d693579!2s551+Mosisi,+Soshanguve+-+WW,+Soshanguve,+0164!3b1!8m2!3d-25.5583716!4d28.0797191!16s%2Fg%2F11w7q9fvjb!3m5!1s0x1ebfcfb9a17d8e6b:0xdcef78c38d693579!8m2!3d-25.5583716!4d28.0797191!16s%2Fg%2F11w7q9fvjb!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D'
                            target="_blank"
                            rel="noreferrer">

                            Mosisi street, 
                            <br/> Soshanguve, Pretoria,
                            <br/> 0152
                        </a>
                    </div>

                    {/* phone */}
                    <div className="details">
                        <img src = {call} alt='phone-no'/>
                        <a className="phone-no" href="tel:+2779 437 2076">
                            079 437 2076
                        </a>
                
                    </div>

                    {/* email */}
                    <div className="details">
                        <img src= {email} alt='email'/>
                        <a  className="email-address" href="mailto:annetamakhubela@gmail.com">
                            annetamakhubela@gmail.com
                        </a>
                    </div>

                    {/* LinkedIn */}
                    <div className="details">
                        <img src={link} alt='linkedIn'/>
                        <a 
                            className="linkedin" 
                            href="https://linkedin.com/in/karabo-makhubela-0bbb5b387"
                            target="_blank"
                            rel="noreferrer">
                            LinkedIn
                        </a>
                    </div>

                     {/* GitHub */}
                    <div className="details">
                        <img src={github} alt='github'/>
                        <a 
                            className="linkedin" 
                            href="https://github.com/AnneKay17"
                            target="_blank"
                            rel="noreferrer">
                            GitHub
                        </a>
                    </div>

                </motion.div>

                  {/* RIGHT: contact form */}
                <motion.form ref={form} className="message-section" onSubmit={sendEmail} variants={fadeRight}>
                    
                    <h6 className='message-title'>
                        If you got any questions, <br/>
                        please do not hesitate to send us a message
                    </h6>

                    {/* User inputs */}
                    <input type="text" placeholder="Name" name="user-name" className="user-name"/>
                    <input type="email" placeholder= "Email" name="user-email" className="user-email"/>
                    <textarea placeholder="Message" name="message" className="user-message"></textarea>
                    
                    {/* Submit button with loading state */}
                    <button type="submit" disabled={isSending}>
                        {isSending ? "Sending..." : "SEND"}
                    </button>
                </motion.form>
            </div>

            {/* Success popup after email sent */}
            {isSuccess && (
                <div className="success-popup">
                    Message sent successfully ✨
                </div>
            )}

        </motion.section>
    );
}
 
export default Contact;

import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_f5mf4zl', 'template_sr0lfbg', form.current, 'DqjC7LHG-VSbLCmOy')
        e.target.reset()  
    };
    return (    
        <section id="contact" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contactContainer">
                <div className="contactOptions">
                    <article className="contactOption">
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5>olamademuyiwa@gmail.com</h5>
                        <a href="mailto:olamademuyiwa@gmail.com">send a message</a>
                    </article>
                    <article className="contactOption">
                        <RiMessengerLine />
                        <h4>Messanger</h4>
                        <h5>Olamade Nissi</h5>
                        <a href="https://web.facebook.com">send a message</a>
                    </article>
                    <article className="contactOption">
                        <BsWhatsapp />
                        <h4>WhatsApp</h4>
                        <h5>Olamade Nissi</h5>
                        <a href="https://api.whatsapp.com/send?+=23409039931933">send a message</a>
                    </article>
                </div>
                    {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder=" Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
}
 
export default Contact;
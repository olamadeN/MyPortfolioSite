import './experience.css';
import { BsPatchCheckFill} from "react-icons/bs";
const Experience = () => {
    return ( 
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2> My Experience</h2>
            <div className="container experienceContainer">
                <div className="experienceFrontend">
                    <h3>Frontend Development</h3>
                    <div className="experienceContent">
                        <article data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" className="experirnceDetails">
                            <BsPatchCheckFill className="experirnceDetails-icon" />
                            <div>
                                <h4>HTML 5</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                            
                        </article>
                        <article data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" className="experirnceDetails">
                            <BsPatchCheckFill className="experirnceDetails-icon" />
                            <div>
                                <h4>CSS 3</h4>
                                <small className="text-light">intermediate</small>
                            </div>
                            
                        </article>
                        <article data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" className="experirnceDetails">
                            <BsPatchCheckFill className="experirnceDetails-icon" />
                            <div>
                                <h4>Java Script</h4>
                                <small className="text-light">intermediate</small>
                            </div>
                            
                        </article>
                        <article data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" className="experirnceDetails">
                            <BsPatchCheckFill className="experirnceDetails-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                            
                        </article>
                        <article data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" className="experirnceDetails">
                            <BsPatchCheckFill className="experirnceDetails-icon" />
                            <div>
                                <h4>React JS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>                            
                        </article>                        
                        <article data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" className="experirnceDetails">
                            <BsPatchCheckFill className="experirnceDetails-icon" />
                            <div>
                                <h4>Tailwind</h4>
                                <small className="text-light">Intermediate</small>
                            </div>                            
                        </article>
                        <article data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" className="experirnceDetails">
                            <BsPatchCheckFill className="experirnceDetails-icon" />
                            <div>
                                <h4>Redux Toolkit</h4>
                                <small className="text-light">Intermediate</small>
                            </div>                            
                        </article>
                        <article data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" className="experirnceDetails">
                            <BsPatchCheckFill className="experirnceDetails-icon" />
                            <div>
                                <h4>Git Hub</h4>
                                <small className="text-light">Intermediate</small>
                            </div>                            
                        </article>
                    </div>
                </div>
                <div className="experienceBackend">
                <h3>Backend Development</h3>
                    <div className="experienceContent">
                        <article data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" className="experirnceDetails">
                            <BsPatchCheckFill className="experirnceDetails-icon" />
                            <div>
                                <h4>Node JS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                            
                        </article>
                        <article data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" className="experirnceDetails">
                            <BsPatchCheckFill className="experirnceDetails-icon" />
                            <div>
                                <h4>Express JS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                            
                        </article>
                        <article data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600" className="experirnceDetails">
                            <BsPatchCheckFill className="experirnceDetails-icon" />
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                            
                        </article>
                        
                    </div>
            
                </div>
            </div>
        </section>
     );
}
 
export default Experience;
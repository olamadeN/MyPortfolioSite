import "./header.css"
import CTA from "./CTA"
import HMS from "../../assets/HMS.jpg";
import HeaderSocials from "./HeaderSocials"
const Header = () => {
    return (    
        <header>
            <div className="container headerContainer" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-delay="200" data-aos-duration="600">
                <h5>Hello I'm</h5>
                <h1>Olamade Nissi</h1>
                <h5 className="text-light">Front-End Web Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="header-img">
                    <img className="me" src={HMS} alt="me" />
                </div>
                <a href="#contact" className="scrollDown">Scroll Down</a>
                
            </div>
        </header>
    );
}
 
export default Header;
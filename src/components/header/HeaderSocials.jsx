import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble} from "react-icons/fi";
const HeaderSocials = () => {
    return ( 
      <div className="headerSocials">
          <a href="https://www.linkedIn.com/in/olamadenissiwebdev" rel="noreferrer" target="_blank"><BsLinkedin /></a>
          <a href="https://www.github.com/olamadeN" rel="noreferrer" target="_blank"><FaGithub /></a>
          <a href="https://dribbble.com" rel="noreferrer" target="_blank"><FiDribbble /></a>
      </div>  
     );
}
 
export default HeaderSocials;
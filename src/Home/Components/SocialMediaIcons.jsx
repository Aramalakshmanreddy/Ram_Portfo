import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import "../Styles/Home.css";
function SocialMediaIcons() {
  return (
    <div className="social-icons flex flex-row justify-around  top-0 pb-10 gap-[30px] md:gap-[100px]  lg:gap-[180px]">
      <a
        href="https://github.com/Aramalakshmanreddy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={50} />
      </a>

      <a href="mailto:ramalakshmanreddy2001@gmail.com">
        <MdOutlineMail size={50}/>
      </a>
      
      <a
        href="https://linkedin.com/in/rama-lakshman-9123791b3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={50}/>
      </a>
      <a
        href="https://www.twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitterSquare size={40}/>
      </a>
      <a href="https://www.facebook.com">
        <FaFacebookSquare size={40}/>
      </a>
    </div>
  );
}

export default SocialMediaIcons;

import { useNavigate } from 'react-router-dom';
import "../Styles/Home.css";
//import SocialMediaIcons from '../Components/SocialMediaIcons';
function HeroSection() {
    const navigate = useNavigate();
  return (
    <>
    
      <div className=" flex flex-col lg:flex-row grid-rows-2 lg:grid-cols-2 justify-around min-h-[90vh]  p-[100px] items-center  space-y-10 md:space-y-10" >
        <div className="text-yellow-400 ml-5 text-6xl md:text-6xl  lg:text-8xl space-y-7 ">
          <h1>
            I&apos;m <span className="text-yellow-400 ">Rama Lakshman</span>
          </h1>
          <p className="text-gray-400 text-4xl lg:text-4xl">
            Full Stack Developer
          </p>
          <button className="cssbuttons-io-button"  onClick={() => navigate('/contact')}>
            Contact Me
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </div>

        <div className="image-content order-1 lg:order-2">
          <img
            src="/Lakshman.jpeg"
            alt="Profile"
            className="rounded-full md:w-[350px] md:h-[350px] lg:w-[350px] lg:h-[350px] w-[250px] h-[200px] object-cover shadow-[0_0_10px_#ffcc00] transition-transform duration-500 ease-in-out"
          />
        </div>

        
      </div>
      
        
    </>
  );
}
export default HeroSection;

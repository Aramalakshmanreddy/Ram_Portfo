import HeroSection from "../Components/HeroSection";
import SocialMediaIcons from "../Components/SocialMediaIcons";
import "../Styles/Home.css"

function HomePage(){
    return(
        <div
        style={{
            backgroundImage: `url('/the.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '90vh', 
          }}>
            <HeroSection  />
            <SocialMediaIcons />
        </div>
    )
}
export default HomePage;


import AboutUs from "../Components/AboutUs";

function AboutPage(){
    return(
        <div style={{
            backgroundImage: `url('/avs.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '90vh', 
          }}>
            <AboutUs />
        </div>
    )
}

export default AboutPage;
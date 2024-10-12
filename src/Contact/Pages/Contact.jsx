import MyContact from "../Components/MyContact";


function Contact(){
    return(
        <div style={{
            backgroundImage: `url('/1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '90vh', 
          }}>
        <MyContact />
        </div>
    )
}

export default Contact;
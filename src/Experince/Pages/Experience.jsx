import MyExperience from "../Components/MyExperience";

function Experience(){
    return(
        <div   style={{
            backgroundImage: `url('/exp.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '90vh', 
          }}>
           <MyExperience />
        </div>
    )
}

export default Experience;
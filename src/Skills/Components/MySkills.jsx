import { GiSkills } from "react-icons/gi";
//import Wave from "./wave";
import CorePracticesV1 from "./CorePracticesV1";
function MySkills(){
    return(
        <div className="  min-h-screen space-y-10">
        <header className="flex justify-center mt-0 p-5 text-4xl md:text-6xl lg:text-6xl text-yellow-500">
        <GiSkills /> My Skills
        </header>

        {/* <Wave /> */}
        <CorePracticesV1 />
        </div>
    )
}

export default MySkills;
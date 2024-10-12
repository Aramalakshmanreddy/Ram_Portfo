import { useState, useEffect } from "react";
import { HiUser } from "react-icons/hi";
import { about } from "../Utils/about";
function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
//bg-neutral-800
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);
  return (
    <div
      className={`transition-opacity space-y-7 min-h-screen duration-300 ease-in ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <header className="flex justify-center mt-0 p-5 text-4xl md:text-6xl lg:text-6xl text-yellow-500">
        <HiUser /> About me
      </header>

      <div className="flex justify-center mt-9 p-6">
        <img
          src="./ram.jpeg"
          className="rounded-full md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] w-[250px] h-[200px] p-5 object-cover shadow-[0_0_10px_#c5ec36] "
          alt="rama"
        />
      </div>
      <p className="flex justify-center p-3 text-3xl md:text-4xl lg:text-4xl text-yellow-400 font-semibold">
        Full Stack Developer
      </p>

      <div>
        <p className="flex justify-self-center p-6 text-2xl text-justify  bg-white bg-opacity-40  lg:bg-slate-400  lg:bg-opacity-20  sm:lg:text-yellow-200 lg:text-yellow-200">
          {about.summary}
        </p>
      </div>
    </div>
  );
}

export default AboutUs;

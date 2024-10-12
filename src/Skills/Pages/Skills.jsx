import MySkills from "../Components/MySkills";

function Skills() {
  return (
    <div
      style={{
        backgroundImage: `url('/download.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
      }}
    >
      <MySkills />
    </div>
  );
}
export default Skills;

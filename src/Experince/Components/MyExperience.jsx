import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { GiLaptop } from "react-icons/gi";
import { experience , education } from "../Utils/Experince";
function MyExperience() {
  const [expanded, setExpanded] = React.useState(false);
  const [expand, setExpand] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleOpen = (panel) => (event, isExpand) => {
    setExpand(isExpand ? panel : false);
  };
  return (
    <>
      <div className=" min-h-screen space-y-10">
        <header className="flex justify-center mt-0 p-5 text-4xl md:text-6xl lg:text-6xl text-yellow-500">
          <GiLaptop /> Experince
        </header>
        <div className="flex flex-col justify-around w-4/5 md:w-3/5 lg:w-3/5 mx-auto space-y-4">
          {experience.map((exp, index) => (
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              key={index}
              sx={{ backgroundColor: "#f0f0f0" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
                sx={{
                  backgroundColor: "#d1b40e",
                  minHeight: "70px",
                  "&.Mui-expanded": { minHeight: "70px" },
                }}
              >
                <Typography
                  sx={{
                    width: "50%",
                    flexShrink: 0,
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {exp.company} {exp.client && `| ${exp.client}`}
                </Typography>
                <Typography
                  sx={{ width: "50%", textAlign: "right", color: "#666" }}
                >
                  {exp.role} | {exp.duration}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  backgroundColor: "#a5a49f",
                  color: "#555",
                }}
              >
                <Typography component="div">
                  <ul>
                    {exp.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
 </div>
          <header className="flex justify-center mt-0 p-5 text-4xl md:text-6xl lg:text-6xl text-yellow-500">
            <GiLaptop /> Education
          </header>
          
          <div className="flex flex-col justify-around w-4/5 md:w-3/5 lg:w-3/5 mx-auto space-y-4">
          
          {education.map((exp,index)=>(
             <Accordion
             expanded={expand === `panel${index}`}
             onChange={handleOpen(`panel${index}`)}
             key={index}
             sx={{ backgroundColor: "#f0f0f0" }}
           >
             <AccordionSummary
               expandIcon={<ExpandMoreIcon sx={{ color: "#000" }} />}
               aria-controls={`panel${index}bh-content`}
               id={`panel${index}bh-header`}
               sx={{
                 backgroundColor: "#d1b40e",
                 minHeight: "70px",
                 "&.Mui-expanded": { minHeight: "70px" },
               }}
             >
               <Typography
                 sx={{
                   width: "50%",
                   flexShrink: 0,
                   fontWeight: "bold",
                   color: "#333",
                 }}
               >
                 {exp.degree} 
               </Typography>
               <Typography
                 sx={{ width: "50%", textAlign: "right", color: "#666" }}
               >
                 {exp.duration} 
               </Typography>
             </AccordionSummary>

             <AccordionDetails
               sx={{
                 backgroundColor: "#a5a49f",
                 color: "#555",
               }}
             >
               <Typography component="div">
                 <ul>
                     <li>{`Instituion : ${exp.institution}`}</li>
                     <li>{exp.percentage ? `Percentage: ${exp.percentage}%` : `CGPA: ${exp.cgpa}`}</li>
                     <li>{`Location :${exp.location}`}</li>
                 </ul>
               </Typography>
             </AccordionDetails>
           </Accordion>
          ))}
          
          
          
          
         

        </div>
      </div>
    </>
  );
}
export default MyExperience;

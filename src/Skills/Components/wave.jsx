/* eslint-disable react/prop-types */
import { useState } from "react";
import useMobileCheck from "../../Hooks/useMobileCheck";
import styled from "styled-components";
//import { ourPractices } from "../Utils/content";


const PracticeVisual = styled.div`
  div:first-child {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
function Wave({
//   color,
  
  
  image,
  reverse,
  refr,
//   style,
  visible,
}) {
  const isMedium = useMobileCheck();

  const [isImgHover, setIsImgHover] = useState(false);

  return (
    
      <article
        className={`flex   ${
          !isMedium ? (visible ? "opacity-0" : "opacity-100") : "opacity-100"
        } ${
          isMedium
            ? "mt-0 w-[100%] items-center gap-y-7 text-center"
            : "mt-3 gap-y-7 lg:w-[180px] lg:flex-col"
        } ${
          reverse
            ? isMedium
              ? "flex-row justify-center"
              : "lg:flex-col-reverse lg:justify-end"
            : isMedium
            ? "flex-row-reverse justify-center"
            : "lg:flex-col lg:pt-[92px]"
        } `}
        
      >
        <PracticeVisual
          className={`relative ${
            isMedium ? ":visible flex w-[40%]" : "lg:visible lg:flex"
          } ${reverse ? "flex-col-reverse" : "flex-col"} ${
            reverse ? (isMedium ? "ml-32" : "") : isMedium ? "mr-32" : ""
          } ${
            isMedium
              ? "items-center justify-center"
              : "items-center justify-center lg:h-40 xl:h-48 2xl:h-56"
          }`}
        >
          {!isMedium && (
            <div className={`${isImgHover ? "lg:scale-105" : ""} relative`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="178"
                height="198"
                viewBox="0 0 201 179"
                fill="none"
                className={` ${
                  reverse ? "-rotate-90 lg:rotate-180" : "rotate-90 lg:rotate-0"
                } w-34 md:w-32 lg:h-40 xl:h-48 xl:w-36 2xl:w-44`}
              >
                <path
                  d="M142.804.4611C148.52.46 153.802 3.5085 156.662 8.4584L198.793 81.3992C201.652 86.3491 201.654 92.4482 198.797 97.3992L156.694 170.357C153.837 175.308 148.555 178.358 142.839 178.36L105 178.376 100 190 95 178.376 60 178.376C52.8882 178.378 47.6055 175.329 44.7464 170.379L2.6146 97.4383C-.2445 92.4884-.2457 86.3892 2.6115 81.4383L44.7142 8.4807C47.5713 3.5297 52.8528.479 58.569.4779L142.804.4611Z"
                  className="fill-custom-color"
                  onMouseEnter={() => setIsImgHover(true)}
                  onMouseLeave={() => setIsImgHover(false)}
                />
              </svg>
              <div
                className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] transform"
                onMouseEnter={() => setIsImgHover(true)}
                onMouseLeave={() => setIsImgHover(false)}
              >
                <img
                  src={`/${image}`}
                  alt=""
                  className={` w-25 h-20 ${
                    reverse
                      ? "-translate-x-16 md:-translate-x-0"
                      : "translate-x-16 md:translate-x-0"
                  } w-12 lg:w-14 xl:w-16 2xl:w-20`}
                />
              </div>
            </div>
          )}
          {!isMedium && (
            <div className={` ${reverse ? "lg:rotate-180" : "g:rotate-0"}`}>
              <svg
                ref={refr}
                className={`absolute bottom-8 left-[50%] z-10  fill-current text-custom-color`}
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
              >
                <circle cx="9.5" cy="9.5" r="8" strokeWidth="3" />
              </svg>
            </div>
          )}
          {isMedium && (
            <>
              <div
                className={`${
                  isImgHover ? "scale-105" : ""
                } relative    transition-transform duration-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  className={`relative transform ${
                    reverse
                      ? "-translate-x-14 -rotate-90 md:-translate-x-0"
                      : "translate-x-14 rotate-90 md:translate-x-0"
                  } w-32 md:w-[70%]`}
                >
                  {/* Hexagonal Path */}
                  <path
                    d="M100 10 L173.2 50 L173.2 150 L100 190 L26.8 150 L26.8 50 Z"
                    className="fill-custom-color"
                    onMouseEnter={() => setIsImgHover(true)}
                    onMouseLeave={() => setIsImgHover(false)}
                  />
                </svg>

                <div
                  className="absolute  left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] transform p-2 rounded-md"
                  onMouseEnter={() => setIsImgHover(true)}
                  onMouseLeave={() => setIsImgHover(false)}
                >
                  <img
                    src={`/${image}`}
                    alt=""
                    className={`z-30 w-25 h-20 lg:w-14 xl:w-16 2xl:w-20 ${
                      reverse
                        ? "-translate-x-16 md:-translate-x-9"
                        : "translate-x-16 md:-translate-x-6"
                    }`}
                  />
                </div>
              </div>

              <svg
                ref={refr}
                className={`absolute -bottom-8 left-[50%] z-10 ${
                  reverse
                    ? "-translate-y-[640%] translate-x-[50%] md:-translate-y-[650%] md:translate-x-[200%]"
                    : "-translate-x-[150%] -translate-y-[640%] md:-translate-x-[650%] md:-translate-y-[640%]"
                } fill-current text-custom-color`}
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
              >
                <circle cx="9.5" cy="9.5" r="8" strokeWidth="3" />
              </svg>
            </>
          )}
        </PracticeVisual>
        
      </article>
    
  );
}
export default Wave;

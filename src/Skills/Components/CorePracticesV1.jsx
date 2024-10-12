/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { ourPractices } from "../Utils/content";
 import { v4 as uuidv4 } from 'uuid';
import Wave from './wave';
import useMobileCheck from '../../Hooks/useMobileCheck';

const colors = [
  '#B5B5B5',
  '#2F586A',
  '#00B5D0',
  '#EE073F',
  '#FEAD26',
  '#5488A0',
  '#8F4A81',
];

function CorePracticesV1() {
  const isMedium = useMobileCheck();
  
  const elementsRef = useRef([]);
  const containerRef = useRef();
  const [coordinates, setCoordinates] = useState([]);
  const [finalCoordinates, setFinalCoordinates] = useState([]);
  const [svgPath, setSvgPath] = useState('');
  const [imagEndPoint, setImagEndPoint] = useState([]);

  const calculateCenters = () => {
    const ContainerRect = containerRef.current.getBoundingClientRect();
    const newCoordinates = elementsRef.current.map((element) => {
      if (element) {
        const rect = element.getBoundingClientRect();

        const centerX = (
          rect.left -
          ContainerRect.left +
          rect.width / 2
        ).toFixed(2);
        const centerY = (
          rect.top -
          ContainerRect.top +
          rect.height / 2
        ).toFixed(2);
        return { centerX, centerY };
      }
      return null;
    });
    setCoordinates(newCoordinates);
  };

  useEffect(() => {
    calculateCenters();

    const handleResize = () => {
      calculateCenters();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Existing code for large screens
    const cp = [];
    const ip = [];
    const finalCordinategenerate = () => {
      for (let i = 1; i < coordinates.length; i++) {
        const { centerX: x1, centerY: y1 } = coordinates[i - 1];
        const { centerX: x2, centerY: y2 } = coordinates[i];
        let cx = (Number(x1) + Number(x2)) / 2;
        let cy = (Number(y1) + Number(y2)) / 2;
        cp[i - 1] = { cx, cy };
      }
      for (let i = 1; i < coordinates.length; i++) {
        const { centerX: x1, centerY: y1 } = coordinates[i - 1];
        const { cx, cy } = cp[i - 1];
        const { centerX: x2, centerY: y2 } = coordinates[i];
        ip[ip.length] = { ix: Number(x1), iy: Number(y1) };
        let tempP3 = { ix: Number(cx), iy: Number(y1) };
        let length = ((Number(tempP3.ix) - Number(x1)) / 3).toFixed(2);
        for (let i = 1; i <= 2; i++) {
          ip[ip.length] = { ix: Number(x1) + length * i, iy: Number(y1) };
        }
        ip[ip.length] = { ix: cx, iy: cy };
        let tempP5 = { ix: Number(cx), iy: Number(y2) };
        let length1 = ((Number(tempP5.ix) - Number(x2)) / 3).toFixed(2);
        for (let i = 2; i >= 1; i--) {
          ip[ip.length] = {
            ix: Number(x2) + length1 * i,
            iy: Number(y2),
          };
        }
      }
      if (coordinates.length > 2) {
        let { centerX: ix, centerY: iy } = coordinates[coordinates.length - 1];
        ip[ip.length] = { ix: Number(ix), iy: Number(iy) };
      }

      setFinalCoordinates(ip);
      if (ip.length > 1) {
        generatePathData2();
      }
    };

    const generatePathData2 = () => {
      let path1 = `M${ip[0].ix} ${ip[0].iy} `;
      for (let i = 1; i < ip.length; i += 6) {
        path1 += `L ${ip[i].ix} ${ip[i].iy} `;
        path1 += `C ${ip[i + 1].ix} ${ip[i + 1].iy} ${ip[i + 1].ix} ${ip[i + 1].iy} ${ip[i + 2].ix} ${ip[i + 2].iy} `;
        path1 += `C ${ip[i + 3].ix} ${ip[i + 3].iy} ${ip[i + 3].ix} ${ip[i + 3].iy} ${ip[i + 4].ix} ${ip[i + 4].iy} `;
        path1 += `L ${ip[i + 5].ix} ${ip[i + 5].iy} `;
      }
      // console.log(path1);
      setSvgPath(path1);
    };

    if (coordinates?.length > 1) {
      finalCordinategenerate();
    }
  }, [coordinates]);

  useEffect(() => {
    //  for medium screens
    if (!isMedium) return; 

    const cp = [];
    const ip = [];

    const finalCordinategenerate = () => {
      for (let i = 1; i < coordinates.length; i++) {
        const { centerX: x1, centerY: y1 } = coordinates[i - 1];
        const { centerX: x2, centerY: y2 } = coordinates[i];
        let cx = (Number(x1) + Number(x2)) / 2;
        let cy = (Number(y1) + Number(y2)) / 2;
        cp[i - 1] = { cx, cy };
      }
      for (let i = 1; i < coordinates.length; i++) {
        const { centerX: x1, centerY: y1 } = coordinates[i - 1];
        const { cx, cy } = cp[i - 1];
        const { centerX: x2, centerY: y2 } = coordinates[i];
        ip[ip.length] = { ix: Number(x1), iy: Number(y1) };
        let tempP3 = { ix: Number(x1), iy: Number(cy) };
        let length = ((Number(tempP3.iy) - Number(y1)) / 3).toFixed(2);
        for (let i = 1; i <= 2; i++) {
          ip[ip.length] = { ix: Number(x1), iy: Number(y1) + length * i };
        }
        ip[ip.length] = { ix: cx, iy: cy };
        let tempP5 = { ix: Number(x2), iy: Number(cy) };
        let length1 = ((Number(y2) - Number(tempP5.iy)) / 3).toFixed(2);
        for (let i = 2; i >= 1; i--) {
          ip[ip.length] = {
            ix: Number(x2),
            iy: Number(cy) + length1 * i,
          };
        }
      }
      if (coordinates.length > 2) {
        let { centerX: ix, centerY: iy } = coordinates[coordinates.length - 1];
        ip[ip.length] = { ix: Number(ix), iy: Number(iy) };
      }

      setFinalCoordinates(ip);
      if (ip.length > 1) {
        generatePathData2();
      }
    };

    const generatePathData2 = () => {
      let path1 = `M${ip[0].ix} ${ip[0].iy} `;
      for (let i = 1; i < ip.length; i += 6) {
        path1 += `L ${ip[i].ix} ${ip[i].iy} `;
        path1 += `C ${ip[i + 1].ix} ${ip[i + 1].iy} ${ip[i + 1].ix} ${ip[i + 1].iy} ${ip[i + 2].ix} ${ip[i + 2].iy} `;
        path1 += `C ${ip[i + 3].ix} ${ip[i + 4].iy} ${ip[i + 4].ix} ${ip[i + 4].iy} ${ip[i + 4].ix} ${ip[i + 3].iy} `;
        path1 += `L ${ip[i + 5].ix} ${ip[i + 5].iy} `;
      }
      setSvgPath(path1);
    };

    if (coordinates?.length > 1) {
      finalCordinategenerate();
    }
  }, [coordinates, isMedium]);

  return (
    <section className="mx-auto h-full w-[77.8%] pt-5">
  
    <section ref={containerRef} className="relative h-full">
    <svg className="absolute h-full w-full fill-none stroke-[#B5B5B5]">
        <path strokeWidth="3" d={svgPath} />
      </svg>
      <section
        ref={containerRef}
        className="grid h-full grid-flow-row grid-cols-1 px-5 py-10 lg:grid-cols-7"
        style={{ '--custom-color': '#B5B5B5' }}
      >
        {ourPractices.map((point, i) => (
          <React.Fragment key={i}> 
            <Wave
              refr={(el) => (elementsRef.current[i] = el)}
              {...point}
              color={colors.at(i)}
              reverse={i % 2 !== 0}
            />
            {isMedium && i < ourPractices.length - 1 && (
              <div className="mt-3 flex justify-center">
                
              </div>
            )}
          </React.Fragment>
        ))}
      </section>
    </section>
  </section>
  
  );
}

CorePracticesV1.propTypes = {};

export default CorePracticesV1;

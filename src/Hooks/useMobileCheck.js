import { useEffect, useState } from 'react';
const maxWidth = 1024;
const useMobileCheck = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < maxWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < maxWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

export default useMobileCheck;

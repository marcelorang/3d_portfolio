import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import React, { useEffect, useState } from 'react';


// import React from 'react'

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // Ajuste conforme necessário
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Se for um dispositivo móvel, não renderiza o componente
  if (isMobile) {
    return null;
  }
  return (

    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => {
        if (isMobile) {
          return null; // Se for um dispositivo móvel, retorna nulo para não renderizar
        }

        return (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        );
      })}
    </div>
  );
};



export default SectionWrapper(Tech, "");
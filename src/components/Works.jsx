import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';



const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  const medzipImages = projects.find(project => project.name === 'MedZip').image;
  const olhoNoLanceImages = projects.find(project => project.name === 'Olho no lance').image;
  const ecommerceImages = projects.find(project => project.name === 'E-commerce').image;



  // console.log(medzipImages);

  const carouselSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,

  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <Tilt

        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl'
      >
        <div className=''>
          {['MedZip', 'Olho no lance', 'E-commerce'].includes(name) ? (
            <Slider {...carouselSettings}
              className='justify-center items-center'

            >
              {name === 'MedZip' && medzipImages && medzipImages.length > 0 && (
                medzipImages.map((medzipImage, index) => (

                  <img src={medzipImage} alt={`MedZip Image ${index + 1}`} className='w-full h-full obejct-contain rounded-1xl ' />
                ))
              )}

              {name === 'E-commerce' && ecommerceImages && ecommerceImages.length > 0 && (
                ecommerceImages.map((ecommerceImage, index) => (

                  <img src={ecommerceImage} alt={`E-commerce Image ${index + 1}`} className='w-full h-full object-contain rounded-1xl' />

                ))
              )}

              {name === 'Olho no lance' && olhoNoLanceImages && olhoNoLanceImages.length > 0 && (
                olhoNoLanceImages.map((olhoNoLanceImage, index) => (

                  <img src={olhoNoLanceImage} alt={`Olho no Lance Image ${index + 1}`} className='w-full h-[440px] object-contain rounded-1xl' />

                ))
              )}
            </Slider>
          ) : (
            <img src={image} alt={name} className='w-full h-full object-contain rounded-2xl' />
          )}

          {/* <img
            src={image}
            alt={name}
            className='w-full h-full object-contain rounded-2xl'
          /> */}
          {/* <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div> */}
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}



const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionHeadText}>Meus projetos</p>
        {/* <h2 className={styles.sectionHeadText}>Projetos</h2> */}
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3
           text-secondary 
           text-[17px]
           max-w-3xl 
           leading-[30px]'
        >
          Aqui você pode ver alguns dos trabalhos nos quais colaborei como desenvolvedor Frontend e Fullstack.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, ""); 
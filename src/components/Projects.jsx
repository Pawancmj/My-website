import React, { useRef } from 'react';
import { assets, projectsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.card')?.offsetWidth || 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth - 16 : cardWidth + 16, // 16px gap
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.div
      id="Projects"
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-12 px-4 lg:px-32 overflow-hidden"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Our <span className="underline underline-offset-4 decoration-1 font-light">Expertise</span>
      </h1>
      <p className="text-center text-gray-500 mb-10 max-w-80 mx-auto">Explore what we do best</p>

      {/* Scroll Buttons */}
      <div className="flex justify-between items-center mb-4 px-2 sm:px-0">
        <button onClick={() => scroll('left')} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <img src={assets.left_arrow} alt="left" className="w-4 h-4" />
        </button>
        <button onClick={() => scroll('right')} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <img src={assets.right_arrow} alt="right" className="w-4 h-4" />
        </button>
      </div>

      {/* Scrollable Project Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
      >
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="card min-w-[280px] sm:min-w-[300px] md:min-w-[320px] bg-white shadow-lg border rounded-lg p-5 snap-start flex-shrink-0"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-700">{project.title}</h2>
            <p className="text-sm text-gray-500">{project.price}</p>
            <p className="text-sm text-gray-400">{project.location}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
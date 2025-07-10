import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `At CyberForenX, we are a dynamic startup driving innovation across technology and business solutions. From crafting responsive, secure web applications to providing expert digital forensic services and robust cybersecurity strategies, we bring precision to every digital challenge. Our capabilities also extend into BPO and BPS operations, ensuring seamless customer support, efficient data moderation, and scalable backend solutions. We merge technology with trust, helping businesses stay secure, connected, and ahead in a competitive world. With a team fueled by passion and driven by purpose, CyberForenX is committed to delivering excellence, empowering clients with end-to-end tech services that truly make an impact.`;

  const shortText = fullText.slice(0, 300) + '...'; // Show ~300 characters initially

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
      id='About'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
        About <span className='underline underline-offset-4 decoration-1 font-light'>CyberForenX</span>
      </h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Innovation, Dedicated to Your Solution</p>

      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />

        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
              <p className='text-4xl font-medium text-gray-800'>10+</p>
              <p>Project of Excellence</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>20+</p>
              <p>Digital Experiences Expertly Crafted</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>

          {/* ✅ Expandable paragraph */}
          <p className='my-10 max-w-lg'>
            {isExpanded ? fullText : shortText}
          </p>

          {/* ✅ Toggle button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className='bg-blue-600 text-white px-8 py-2 rounded'
          >
            {isExpanded ? 'Show less' : 'Learn more'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
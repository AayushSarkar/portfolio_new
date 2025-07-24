'use client';

import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import devAnimation from '@/assets/Programming.json';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const AboutMe = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      id="about"
      className="bg-[#0f172a] text-[#e2e8f0] min-h-screen flex items-center px-6 py-12"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-[#22d3ee]">About Me</h2>

          <motion.div
            className="flex flex-col gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Card 1 */}
            <motion.div
              variants={cardVariants}
              className="bg-[#1e293b] border border-[#22d3ee] p-5 rounded-2xl shadow-xl"
            >
              <p className="text-lg leading-relaxed text-gray-300">
                I&apos;m a <span className="font-semibold text-white">Full-Stack Web Developer</span> proficient in the{' '}
                <span className="font-semibold text-white">MERN stack</span>, focused on building scalable and user-friendly applications.
                My recent projects include <span className="text-white">Binkeyit</span> and a secure <span className="text-white">BookStore App</span>.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={cardVariants}
              className="bg-[#1e293b] border border-[#22d3ee] p-5 rounded-2xl shadow-xl"
            >
              <p className="text-lg leading-relaxed text-gray-300">
                I&apos;m the <span className="font-semibold text-white">Founder &amp; President</span> of <span className="text-white">ADTC</span> at Acharya Narendra Dev College,
                where I&apos;ve organized coding events and mentored over <span className="text-white">2000+ students</span>.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={cardVariants}
              className="bg-[#1e293b] border border-[#22d3ee] p-5 rounded-2xl shadow-xl"
            >
              <p className="text-lg leading-relaxed text-gray-300">
                I&apos;ve also worked in the <span className="font-semibold text-white">esports industry</span>—as a team manager, CEO, and beta tester for platforms like{' '}
                <span className="text-white">Glip GG</span>. These experiences built my skills in{' '}
                <span className="text-white">leadership</span>, <span className="text-white">team-building</span>, and <span className="text-white">product strategy</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Lottie Animation */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          {isClient && (
            <div className="w-full max-w-md">
              <Lottie animationData={devAnimation} loop={true} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

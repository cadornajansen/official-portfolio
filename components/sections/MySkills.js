"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const skillsData = [
    "Python",
    "Javascript",
    "Typescript",
    "C++",
    "React",
    "Node.js",
    "Tensorflow",
    "Playwright",
    "React Query",
    "ExpressJS",
    "MongoDB",
    "PHP",
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <h2 className="text-4xl mb-10">My Skills</h2>
      <ul className="flex flex-wrap justify-center gap-2 text-sm">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="cursor-pointer bg-white border border-black/20 rounded-md px-3 py-2"
            variants={fadeInVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            whileHover={{ y: 10, rotate: 5 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

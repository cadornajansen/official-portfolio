"use client";

import React from "react";
import { motion } from "framer-motion";

export default function StaggerReveal({ children }) {
  return (
    <div className="w-fit relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        visible="visible"
      >
        {children}
      </motion.div>
    </div>
  );
}
